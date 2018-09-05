<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="img/favicons/favicon.ico" type="image/x-icon">
    <title>FIA-BOSS</title>
    <link rel="stylesheet" href="css/ead.min.css">
    <link rel="stylesheet" href="css/pagesCSS/all.css">
    <link rel="stylesheet" href="css/pagesCSS/hrDash.css">
</head>

<body class="layout-demo">
    <header class="usa-header usa-header-extended" role="banner" id="mainHeader">
    </header>
        <div class="usa-overlay"></div>
        <main id="main-content">
                <div class="wrapper">
                
                        <nav id="sidebar">
                         </nav><!-- end of sidenav -->
                        

                         <section class="usa-section1">
                                <header class="main-header" role="banner">
                                    <img class="bannerImg" src="../../img/employees.jpg" alt="Banner Image"/>
                                </header>
                                <div class="usa-grid">
                                        <div class="usa-width-one-whole">
                                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                                <a class="breadcrumbLink"href="/home">Dashboard |</a>
                                                <a class="breadcrumbLinkMain"href="/hrDash">HR Dashboard</a>
                                            </p>
                                        </div>
                                    </div>
                                <section class="usa-section">

                                    <div class="usa-grid usa-buffer-top">
                                        <div class="usa-width-one-whole title-div">
                                            <h1 id="title">HR Dashboard</h1>
                                        </div>
                                    </div>
                                    <div class="container">
                                        <div class="row padTop">
                                            <div class="col">
                                                <div class="card">
                                                    <img class="card-img-top" src="../../img/blueMountains.jpg" alt="Card image cap">
                                                    <div class="card-header">
                                                        <h5 class="card-header-title">Employees</h5>
                                                    </div>
                                                    <div class="card-body">
                                                      <ul class="list-group">
                                                          <li class="list-group-item">
                                                              <a href="/viewAllEmployees">View All Employees</a>                                
                                                          </li>
                                                          <li class="list-group-item">
                                                              <a href="/addNewEmployee">Add New Employee</a>
                                                          </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                            </div>
                                            <div class="col">
                                                <div class="card">
                                                    <img class="card-img-top" src="../../img/greenTrees.jpg" alt="Card image cap">
                                                    <div class="card-header">
                                                        <h5 class="card-header-title">Training</h5>
                                                    </div>                                                    
                                                    <div class="card-body">
                                                      <ul class="list-group">
                                                          <li class="list-group-item">
                                                              <a href="/addTrainingEmployee">Add Training by Employee</a>                                
                                                          </li>
                                                          <li class="list-group-item">
                                                              <a href="/addTrainingClass">Add Training by Class</a>
                                                          </li>
                                                          <li class="list-group-item">
                                                            <a href="/assignTraining">Add Training Intervals</a>
                                                          </li>
                                                          <li class="list-group-item">
                                                            <a href="#">Training Due Next 6 Months</a>
                                                          </li>                                                          
                                                      </ul>
                                                    </div>
                                                  </div>
                                            </div>
                                            <div class="col">
                                                <div class="card">
                                                    <img class="card-img-top" src="../../img/fireExt.jpg" alt="Card image cap">
                                                    <div class="card-header">
                                                        <h5 class="card-header-title">DRA's</h5>
                                                    </div>                                                    
                                                    <div class="card-body">
                                                      <ul class="list-group">
                                                          <li class="list-group-item">
                                                              <a href="/addDraEmployee">Add DRA by Employee</a>                                
                                                          </li>
                                                          <li class="list-group-item">
                                                              <a href="#">Assign DRA's</a>
                                                          </li>
                                                          <li class="list-group-item">
                                                            <a href="#">DRA Tasks</a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                            </div>
                                        </div>

                                    </div>




                                </section>
                         </section>                         
                        
                </div><!-- end of sidenav wrapper div -->
                






        </main>

        <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
         </footer>
         <script src="js/ead.min.js"></script>
         <script src="js/pagesJS/hrDash.js"></script>
        <script src="js/pagesJS/mainHRPages.js"></script>

</body>

</html>