#!/usr/bin/env groovy

node {
  checkout scm

  def server = Artifactory.server('artifactory')

  def artifactoryMaven = Artifactory.newMavenBuild()

  artifactoryMaven.tool = 'M3' // Tool name from Jenkins configuration
  artifactoryMaven.deployer releaseRepo:'libs-release-local', snapshotRepo:'libs-snapshot-local', server: server
  artifactoryMaven.resolver releaseRepo:'libs-release', snapshotRepo:'libs-snapshot', server: server

  def buildInfo = Artifactory.newBuildInfo()

  pom = readMavenPom file: 'pom.xml'

  env.POM_VERSION = "${pom.version}"

  sh "sed -i \"s|snapshot_version|${pom.version}|g\" data/common.yaml"

  stage('Package') {
    // Run Maven:
    def buildInfoInstall

    withSonarQubeEnv('Sonatype Server') {
      // requires SonarQube Scanner for Maven 3.2+
      buildInfoInstall = artifactoryMaven.run pom: 'pom.xml', goals: 'clean install spring-boot:repackage'
    }

    buildInfo.append(buildInfoInstall)

    // Publish the build-info to Artifactory:
    server.publishBuildInfo buildInfo
  }

  stage("Sonatype Check") {
    nexusPolicyEvaluation failBuildOnNetworkError: false, iqApplication: selectedApplication('sandbox-application'), iqStage: 'build', jobCredentialsId: ''
  }
//
  //   timeout(time: 10, unit: 'MINUTES') { // Just in case something goes wrong, pipeline will be killed after a timeout
  //     def qg = waitForQualityGate() // Reuse taskId previously collected by withSonarQubeEnv
//
  //     if (qg.status != 'OK') {
  //       error "Pipeline aborted due to quality gate failure: ${qg.status}"
  //     }
  //   }
  // }

  stage('Build Container') {
    docker.withRegistry('https://docker.fs.usda.gov', 'docker_registry') {

      def image = docker.build("docker.fs.usda.gov/ead/boss_api_development:${env.BUILD_NUMBER}", '--no-cache --pull .')

      image.push()
    }
  }

  stage('Push to cluster') {
     //sh "/usr/local/bin/kubectl set image deployment/boss boss=docker.fs.usda.gov/fia/boss:${env.BUILD_NUMBER}"
     kubernetesDeploy configs: 'deploy/application-deployment.yaml', kubeConfig: [path: ''], kubeconfigId: 'kube_config_ead', secretName: '', ssh: [sshCredentialsId: '*', sshServer: ''], textCredentials: [certificateAuthorityData: '', clientCertificateData: '', clientKeyData: '', serverUrl: 'https://']
  }

  stage('Cleanup Docker') {
    sh 'docker system prune -f'
  }

  // stage('Push to PaaS') {
  //   azureWebAppPublish appName: '76cbeba76cc8eb95', azureCredentialsId: 'azure_service_principal', filePath: 'webapps/*.war', publishType: 'file', resourceGroup: 'CIO-AUT001-DEV-RSG'
  // }
}
