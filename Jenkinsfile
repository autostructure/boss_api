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
    def buildInfoInstall = artifactoryMaven.run pom: 'pom.xml', goals: 'clean package checkstyle:checkstyle findbugs:findbugs pmd:pmd install'

    buildInfo.append(buildInfoInstall)

    step([$class: 'hudson.plugins.checkstyle.CheckStylePublisher', pattern: '**/target/checkstyle-result.xml', unstableTotalAll:'0',unhealthy:'100', healthy:'100'])
    step([$class: 'PmdPublisher', pattern: '**/target/pmd.xml'])
    step([$class: 'FindBugsPublisher', pattern: '**/findbugsXml.xml'])

    // Publish the build-info to Artifactory:
    server.publishBuildInfo buildInfo
  }

  stage('Build Container') {
    docker.withRegistry('https://docker.fs.usda.gov', 'docker_registry') {

      def image = docker.build("docker.fs.usda.gov/ead/boss_dev:${env.POM_VERSION}", '--no-cache --pull .')

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
