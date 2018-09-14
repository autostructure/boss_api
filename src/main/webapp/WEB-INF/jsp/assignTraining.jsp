<!doctype html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="img/favicons/favicon.ico" type="image/x-icon">
        <title>FIA-BOSS</title>
        <link rel="stylesheet" href="css/ead.min.css">
        <link rel="stylesheet" href="css/bootstrap-datepicker3.css">
        <link rel="stylesheet" href="css/pagesCSS/all.css">
        <link rel="stylesheet" href="css/pagesCSS/addTrainingClass.css">
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
                        <img data-toggle="tooltip" data-html="true" title="Insect and Disease Training at start of field season. Photo captured during data collection efforts for the Interior West Forest Inventory and Analysis (IWFIA) Program in Wyoming. (Forest Service photo by IWFIA staff)" class="bannerImg" src="../../img/employees.jpg" alt="Banner Image"/>
                    </header>
                    <div class="usa-grid">
                        <div class="usa-width-one-whole">
                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                <a class="breadcrumbLink"href="/home">Dashboard |</a>
                                <a class="breadcrumbLink"href="/hrDash">HR Dashboard |</a>
                                <a class="breadcrumbLinkMain"href="/addTrainingClass">Add Training Interval</a>
                            </p>
                        </div>
                    </div>
                    <section class="usa-section">

                        <div class="usa-grid usa-buffer-top">
                            <div class="usa-width-one-whole title-div">
                                <h1 id="title">Add Training Intervals</h1>
                            </div>
                        </div>
                        <div class="container trainBG">
                            <form role="form" data-toggle="validator" class="generalInfo">

                                <div class="items">
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="tTitle">Title<span class="reqClass"> *</span></label>
                                                <input type="text" class="form-control" id="tTitle" required placeholder="Training Title" aria-label="Training Title">
                                                <div class="help-block with-errors"></div>
                                            </div>                                                        
                                        </div> 
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="groups">Groups to Assign<span class="reqClass"> *</span></label>
                                                <select name="groups" required id="groups" class="form-control">
                                                    <option value="">Select Groups</option>
                                                    <option value="all">All Employees</option>
                                                    <option value="field">Field</option>
                                                    <option value="office">Office</option>
                                                </select>
                                                <div class="help-block with-errors"></div>
                                            </div>                                                        
                                        </div> 

                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="tYears">Number of Years Valid For Employees<span class="reqClass"> *</span></label>
                                                <select name="tYears" required id="tYears" class="form-control">
                                                    <option value="">Select Years</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="once">Training only required once</option>
                                                </select>
                                                <div class="help-block with-errors"></div>
                                            </div>                                                        
                                        </div> 
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="tYearsSup">Number of Years Valid For Supervisors<span class="reqClass"> *</span></label>
                                                <select name="tYearsSup" required id="tYearsSup" class="form-control">
                                                    <option value="">Select Years</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="once">Training only required once</option>
                                                </select>
                                                <div class="help-block with-errors"></div>
                                            </div>                                                        
                                        </div> 
                                    </div>

                                    <div class="row">
                                        <div class="col">
                                            <input type="submit" id="submitV" class="btn btn-success">    
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
        <script src="js/bootstrap-datepicker.js"></script>
        <script src="js/pagesJS/assignTraining.js"></script>
        <script src="js/pagesJS/mainHRPages.js"></script>

    </body>

</html>