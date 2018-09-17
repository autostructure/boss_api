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
                                <a class="breadcrumbLinkMain"href="/addTrainingClass">Add Training by Class</a>
                            </p>
                        </div>
                    </div>
                    <section class="usa-section">

                        <div class="usa-grid usa-buffer-top">
                            <div class="usa-width-one-whole title-div">
                                <h1 id="title">Add Training by Class</h1>
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
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="eNameCode">Select Employee Namecode<span class="reqClass"> *</span></label>
                                                <select name="eNameCode" required id="eNameCode1" class="form-control">
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
                                                <label for="eNameCode">Select Employee Namecode</label>
                                                <select name="eNameCode" id="eNameCode2" class="form-control">
                                                    <option value="">Choose Employee</option>
                                                    <option value="JACOBS">Jacobs, Doug</option>
                                                    <option value="LANEY">Laney, Mike</option>
                                                    <option value="BHOWDEN">Howden, BEN</option>
                                                </select>
                                            </div>                                                        
                                        </div>                                            
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="eNameCode3">Select Employee Namecode</label>
                                                <select name="eNameCode3" id="eNameCode3" class="form-control">
                                                    <option value="">Choose Employee</option>
                                                    <option value="JACOBS">Jacobs, Doug</option>
                                                    <option value="LANEY">Laney, Mike</option>
                                                    <option value="BHOWDEN">Howden, BEN</option>
                                                </select>
                                            </div>                                                        
                                        </div>                                            
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="eNameCode4">Select Employee Namecode</label>
                                                <select name="eNameCode4" id="eNameCode4" class="form-control">
                                                    <option value="">Choose Employee</option>
                                                    <option value="JACOBS">Jacobs, Doug</option>
                                                    <option value="LANEY">Laney, Mike</option>
                                                    <option value="BHOWDEN">Howden, BEN</option>
                                                </select>
                                            </div>                                                        
                                        </div>                                            
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="eNameCode5">Select Employee Namecode</label>
                                                <select name="eNameCode5" id="eNameCode5" class="form-control">
                                                    <option value="">Choose Employee</option>
                                                    <option value="JACOBS">Jacobs, Doug</option>
                                                    <option value="LANEY">Laney, Mike</option>
                                                    <option value="BHOWDEN">Howden, BEN</option>
                                                </select>
                                            </div>                                                        
                                        </div>                                            
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="eNameCode6">Select Employee Namecode</label>
                                                <select name="eNameCode6" id="eNameCode6" class="form-control">
                                                    <option value="">Choose Employee</option>
                                                    <option value="JACOBS">Jacobs, Doug</option>
                                                    <option value="LANEY">Laney, Mike</option>
                                                    <option value="BHOWDEN">Howden, BEN</option>
                                                </select>
                                            </div>                                                        
                                        </div>                                            
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="eNameCode7">Select Employee Namecode</label>
                                                <select name="eNameCode7" id="eNameCode7" class="form-control">
                                                    <option value="">Choose Employee</option>
                                                    <option value="JACOBS">Jacobs, Doug</option>
                                                    <option value="LANEY">Laney, Mike</option>
                                                    <option value="BHOWDEN">Howden, BEN</option>
                                                </select>
                                            </div>                                                        
                                        </div>                                            
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="eNameCode8">Select Employee Namecode</label>
                                                <select name="eNameCode8" id="eNameCode8" class="form-control">
                                                    <option value="">Choose Employee</option>
                                                    <option value="JACOBS">Jacobs, Doug</option>
                                                    <option value="LANEY">Laney, Mike</option>
                                                    <option value="BHOWDEN">Howden, BEN</option>
                                                </select>
                                            </div>                                                        
                                        </div>                                            
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="eNameCode9">Select Employee Namecode</label>
                                                <select name="eNameCode9" id="eNameCode9" class="form-control">
                                                    <option value="">Choose Employee</option>
                                                    <option value="JACOBS">Jacobs, Doug</option>
                                                    <option value="LANEY">Laney, Mike</option>
                                                    <option value="BHOWDEN">Howden, BEN</option>
                                                </select>
                                            </div>                                                        
                                        </div>                                            
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="eNameCode10">Select Employee Namecode</label>
                                                <select name="eNameCode10" id="eNameCode10" class="form-control">
                                                    <option value="">Choose Employee</option>
                                                    <option value="JACOBS">Jacobs, Doug</option>
                                                    <option value="LANEY">Laney, Mike</option>
                                                    <option value="BHOWDEN">Howden, BEN</option>
                                                </select>
                                            </div>                                                        
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
        <script src="js/pagesJS/addTrainingClass.js"></script>
        <script src="js/pagesJS/mainHRPages.js"></script>

    </body>

</html>