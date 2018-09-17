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
        <link rel="stylesheet" href="css/pagesCSS/addTrainingEmployee.css">
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
                                <a class="breadcrumbLinkMain"href="/addTrainingEmployee">Log Training by Employee</a>
                            </p>
                        </div>
                    </div>
                    <section class="usa-section">

                        <div class="usa-grid usa-buffer-top">
                            <div class="usa-width-one-whole title-div">
                                <h1 id="title">Log Training by Employee</h1>
                            </div>
                        </div>
                        <div class="container trainBG">
                            <form role="form" data-toggle="validator" class="generalInfo">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="eNameCode">Select Employee Namecode<span class="reqClass"> *</span></label>
                                            <select name="dstation" required id="dStation" class="form-control">
                                                <option value="">Choose Employee</option>
                                                <option value="JACOBS">Jacobs, Doug</option>
                                                <option value="LANEY">Laney, Mike</option>
                                                <option value="BHOWDEN">Howden, BEN</option>
                                                <option value="TEST1">Marth, Beth</option>
                                                <option value="test2">Walter, Bill</option>
                                                <option value="test3">Gaimon, Neil</option>
                                                <option value="test4">Smith, Jeffrey</option>
                                                <option value="test5">Baublitz, Garret</option>
                                            </select>
                                            <div class="help-block with-errors"></div>
                                        </div>                                                        
                                    </div>                                            
                                </div>
                                <div class="items">
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="ttitle">Title<span class="reqClass"> *</span></label>
                                                <select name="ttitle" required id="ttitle" class="form-control">
                                                    <option value="">Choose Training</option>
                                                    <option value="atv">All Terrain Vehicle Use</option>
                                                    <option value="bear">Bear Safety and Spray Training</option>
                                                    <option value="check">Check Drive</option>
                                                    <option value="dd">Defensive Driving</option>
                                                    <option value="dli">Driver License Issues</option>
                                                    <option value="ecf">Emergency Contact Form</option>
                                                    <option value="fet">Fire Extinguisher Training</option>
                                                    <option value="faaed">First Aid - AED</option>
                                                    <option value="facpr">First Aid - CPR</option>
                                                    <option value="farc">First Aid - Red Cross</option>
                                                    <option value="fawfr">First Aid - Wilderness / First Responder</option>
                                                    <option value="h">Horsemanship</option>
                                                    <option value="osha">OSHA 1960</option>
                                                    <option value="swr">Swift Water Rescue</option>
                                                    <option value="ttl">Trailer Towing - Large</option>
                                                    <option value="wpv">Workplace Violence</option>
                                                </select>
                                                <div class="help-block with-errors"></div>
                                            </div>                                                        
                                        </div> 
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="tDate">Date of Training<span class="reqClass"> *</span></label>
                                                <div class="input-group date" data-provide="datepicker">
                                                    <input type="text" required id="tDate" class="form-control">
                                                    <div class="input-group-addon">
                                                        <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                    </div>                                                                    
                                                </div>
                                                <div class="help-block with-errors"></div>
                                            </div>  
                                        </div> 
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="tPresenter">Presenter</label>
                                                <input type="text" class="form-control" id="tPresenter"  placeholder="Presenters Name" aria-label="Presenters Name">

                                            </div>                                                        
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="tHours">Hours<span class="reqClass"> *</span></label>
                                                <input type="text" class="form-control" id="tPresenter" required placeholder="Enter Hours" aria-label="Training Hours">
                                                <div class="help-block with-errors"></div>
                                            </div>                                                        
                                        </div> 
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="tLocation">Location<span class="reqClass"> *</span></label>
                                                <input type="text" class="form-control" id="tLocation" required placeholder="Location" aria-label="Location">
                                                <div class="help-block with-errors"></div>
                                            </div>                                                        
                                        </div> 
                                                                                                                                                    
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-md-6 text-center">
                                        <button type="button" id="viewReports" id="add" class="btn btn-info add_field_button">Add Additional Training</button> 
                                    </div> 
                                    <div class="col col-md-6">
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
        <script src="js/pagesJS/addTrainingEmployee.js"></script>
        <script src="js/pagesJS/mainHRPages.js"></script>

    </body>

</html>