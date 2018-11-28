<!doctype html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/boss/img/favicons/favicon.ico" type="image/x-icon">
        <title>FIA-BOSS</title>
        <link rel="stylesheet" href="/boss/css/ead.min.css">
        <link rel="stylesheet" href="/boss/css/pagesCSS/all.css">
        <!-- <link rel="stylesheet" href="css/pagesCSS/hrDash.css"> -->
        <link rel="stylesheet" href="/boss/css/bootstrap-datepicker3.css">
        <link rel="stylesheet" href="/boss/css/pagesCSS/fleetPages.css">
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
                        <!-- <img data-toggle="tooltip" data-html="true" title="An aspen stand in Utah. Photo captured during data collection efforts for the Interior West Forest Inventory and Analysis (IWFIA) Program. (Forest Service photo by IWFIA staff)" class="bannerImg" src="/boss/img/birch.jpg" alt="Banner Image"> -->
                        <img class="bannerImg" src="/boss/img/fleetBG.jpg" alt="Banner Image">
                    </header>
                    <div class="usa-grid">
                        <div class="usa-width-one-whole">
                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                <a class="breadcrumbLink" href="/boss/home">Dashboard |</a>
                                <a class="breadcrumbLink" href="/boss/fleetDash">Fleet Dashboard |</a>
                                <a class="breadcrumbLinkMainFleet" href="/boss/monthsNotUsed">Out of Service</a>
                            </p>
                        </div>
                    </div>
                    <section class="usa-section">
        
                        <div class="usa-grid usa-buffer-top">
                            <div class="usa-width-one-whole title-div">
                                <h1 id="title">Months Out of Service</h1>
                            </div>
                        </div>
                        <div id="success" class="alert alert-success" role="alert">
                            Update Successfull!                                         
                        </div>
                        <div id="error" class="alert alert-danger" role="alert">
                            Error: <span id='errorText'></span>
                        </div>
                        <!-- <form id="formGeneralInfo"></form> -->
                        <div class="row">
                            <div class="col inputCol">
                                <label for="pLicense">Vehicle License</label>
                                <p class="input" id="pLicense">
                                    
                                </p>
                            </div>
                            <div class="col inputCol">
                                <label for="pVin">VIN</label>
                                <p class="input" id="pVin">
                                        
                                </p>
                            </div>     
                            <div class="col inputCol">
                                <label for="pYear">Year</label>
                                <p class="input" id="pYear">
                                    
                                </p>
                            </div>                                                                                                                       
                            <div class="col inputCol">
                                <label for="pMake">Model</label>
                                <p class="input" id="pMake">
                                    
                                </p>
                            </div>  
                            <div class="col inputCol">
                                <label for="pModel">Model</label>
                                <p class="input" id="pModel">
                                    
                                </p>
                            </div>                             
                                                                               
                        </div>
                        <div class="container trainBG ">
                                <h1 class="title5">Add Months Out of Service</h1>
                                <form role="form" id="monthlyCostsForm" data-toggle="validator">
                                    </form>
                            <table id="monthlyCosts">
                                <thead>
                                    <tr>
                                        <th>Year</th>
                                        <th>Month</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2018</td> 
                                        <td>July</td>
                                    </tr>                                     
                                    <tr>
                                        <td>2018</td> 
                                        <td>June</td>
                                    </tr>   
                                    <tr>
                                        <td>2018</td> 
                                        <td>May</td>
                                    </tr>                                                                          
                                </tbody>
                            </table>
        

        

                                                                                                                                                        
                        </div>                    
        
                    </section> <!-- end of usa section -->
        
                </section> <!-- end of usa-section1 -->       
                

            </div><!-- end of sidenav wrapper div -->







        </main>

        <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
        </footer>
        <script src="/boss/js/ead.min.js"></script>
        <script src="/boss/js/bootstrap-datepicker.js"></script>
        <script src="/boss/js/pagesJS/bootstrapFieldWriter.js"></script>
        <script src="/boss/js/pagesJS/customFormFunctions.js"></script>
        <script src="/boss/js/pagesJS/monthsNotUsed.js"></script>
        <script src="/boss/js/pagesJS/mainFleetPages.js"></script>



    </body>

</html>