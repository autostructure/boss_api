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
    <link rel="stylesheet" href="css/pagesCSS/addDraEmployee.css">
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
                                    <img data-toggle="tooltip" data-html="true" title="Bucks in velvet on the edge of an aspen stand. Photo captured during data collection efforts for the Interior West Forest Inventory and Analysis (IWFIA) Program in Utah. (Forest Service photo by Scott Dickson)" class="bannerImg" src="../../img/birch.jpg" alt="Banner Image"/>
                                </header>
                                <div class="usa-grid">
                                        <div class="usa-width-one-whole">
                                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                                <a class="breadcrumbLink"href="/home">Dashboard |</a>
                                                <a class="breadcrumbLink"href="/hrDash">HR Dashboard |</a>
                                                <a class="breadcrumbLinkMain"href="/addDraEmployee">Add DRA by Employee</a>
                                            </p>
                                        </div>
                                    </div>
                                <section class="usa-section">

                                    <div class="usa-grid usa-buffer-top">
                                        <div class="usa-width-one-whole title-div">
                                            <h1 id="title">Add DRA by Employee</h1>
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
                                                            <option value="SKAUTH">Kauth, Shelby</option>
                                                            <option value="CHARIZON">Charizo, Dario</option>
                                                        </select>
                                                    <div class="help-block with-errors"></div>
                                                </div>                                                        
                                            </div>                                            
                                        </div>
                                        <div class="items">
                                        <div class="row">
                                            <div class="col">
                                                <div class="form-group">
                                                    <label for="draTitle">DRA Title<span class="reqClass"> *</span></label>
                                                    <select name="draTitle" required id="draTitle" class="form-control">
                                                            <option value="">Choose DRA</option>
                                                            <option value="air">Aircraft</option>
                                                            <option value="atv">ATV</option>
                                                            <option value="camping">Camping</option>
                                                            <option value="chainsaw">Chain Saw</option>
                                                            <option value="driving">Driving and Towing</option>
                                                            <option value="field">Field Work</option>
                                                            <option value="motorbike">Motor Bike</option>
                                                            <option value="office">Office Work</option>
                                                            <option value="paddlecraft">Paddlecraft</option>
                                                            <option value="workingalone">Working Alone</option>
                                                            <option value="stock">Stock Use</option>
                                                            <option value="trailerliving">Trailer Living</option>
                                                            <option value="winterdriving">Winter Driving</option>
                                                        </select>
                                                    <div class="help-block with-errors"></div>
                                                </div>                                                        
                                            </div> 
                                            <div class="col">
                                                <div class="form-group">
                                                    <label for="draYear">Year Valid For<span class="reqClass"> *</span></label>
                                                    <select name="draYear" required id="draYear" class="form-control">
                                                            <option value="">Choose Year</option>
                                                            <option value="2016">2016</option>
                                                            <option value="2017">2017</option>
                                                            <option value="2018">2018</option>
                                                            <option value="2019">2019</option>
                                                            <option value="2020">2020</option>
                                                            <option value="2021">2021</option>
                                                        </select>
                                                    <div class="help-block with-errors"></div>
                                                </div>                                                        
                                            </div> 

                                        </div>
                                    </div>
                                        <div class="row">
                                                <div class="col col-md-6 text-center">
                                                    <button id="viewReports" id="add" class="btn btn-info add_field_button">Add Additional DRA</button> 
                                                </div> 
                                                <div class="col col-md-6">
                                                    <input type="submit" id="submitV" class="btn btn-success">    
                                                </div> 
                                        </div>                                                                                                                       
                                    </div>
                                </div>

                                <div class="itemss">
                                    
                                   <div class="form-group"><label>Author Email:</label>
                                   <input id="author_email" class="form-control" name="author" required="required" type="EMAIL" /></div>
                                    
                                   </div>
                                    
                                   <button type="button" class="add_fiedld_button">Add Field</button>

                                </section>
                         </section>                         
                        
                </div><!-- end of sidenav wrapper div -->
                






        </main>

        <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
         </footer>
         <script src="js/ead.min.js"></script>
         <script src="js/bootstrap-datepicker.js"></script>
         <script src="js/pagesJS/addDraEmployee.js"></script>
        <script src="js/pagesJS/mainHRPages.js"></script>

</body>

</html>