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
                                                <a class="breadcrumbLinkMain"href="/addTrainingEmployee">Add Training by Employee</a>
                                            </p>
                                        </div>
                                    </div>
                                <section class="usa-section">

                                    <div class="usa-grid usa-buffer-top">
                                        <div class="usa-width-one-whole title-div">
                                            <h1 id="title">Add Training by Employee</h1>
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
                                                        </select>
                                                    <div class="help-block with-errors"></div>
                                                </div>                                                        
                                            </div>                                            
                                        </div>
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
                                                        <label for="tPresenter">Presenter<span class="reqClass"> *</span></label>
                                                        <input type="text" class="form-control" id="tPresenter" required placeholder="Presenters Name" aria-label="Presenters Name">
                                                        <div class="help-block with-errors"></div>
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
                                                <div class="col">
                                                    <div class="form-group">
                                                        <label for="tYears">Number of Years Valid<span class="reqClass"> *</span></label>
                                                        <select name="tYears" required id="tYears" class="form-control">
                                                                <option value="">Select Years</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </select>
                                                        <div class="help-block with-errors"></div>
                                                    </div>                                                        
                                                </div>                                                                                                                                                      
                                        </div>
                                        <div class="row">
                                                <div class="col col-md-6 text-center">
                                                    <button id="viewReports" class="btn btn-info">Add Additional Training</button> 
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