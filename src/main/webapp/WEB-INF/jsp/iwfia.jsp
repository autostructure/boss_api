<!doctype html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/img/favicons/favicon.ico" type="image/x-icon">
        <title>FIA-BOSS</title>
        <link rel="stylesheet" href="/css/ead.min.css">
        <link rel="stylesheet" href="/css/pagesCSS/all.css">
        <!-- <link rel="stylesheet" href="css/pagesCSS/hrDash.css"> -->
        <link rel="stylesheet" href="/css/bootstrap-datepicker3.css">
        <link rel="stylesheet" href="/css/pagesCSS/fleetPages.css">
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
                        <img data-toggle="tooltip" data-html="true" title="An aspen stand in Utah. Photo captured during data collection efforts for the Interior West Forest Inventory and Analysis (IWFIA) Program. (Forest Service photo by IWFIA staff)" class="bannerImg" src="../../img/birch.jpg" alt="Banner Image"/>
                    </header>
                    <div class="usa-grid">
                        <div class="usa-width-one-whole">
                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                <a class="breadcrumbLink"href="/home">Dashboard |</a>
                                <a class="breadcrumbLink"href="/fleetDash">Fleet Dashboard |</a>
                                <a class="breadcrumbLinkMainFleet"href="/iwfia">Monthly IWFIA</a>
                            </p>
                        </div>
                    </div>
                    <section class="usa-section">
        
                        <div class="usa-grid usa-buffer-top">
                            <div class="usa-width-one-whole title-div">
                                <h1 id="title">IWFIA Usage</h1>
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
                                    A32903292
                                </p>
                            </div>
                            <div class="col inputCol">
                                <label for="pVin">VIN</label>
                                <p class="input" id="pVin">
                                        WBAWL135X7PX13209
                                </p>
                            </div>     
                            <div class="col inputCol">
                                <label for="pYear">Year</label>
                                <p class="input" id="pYear">
                                    2016
                                </p>
                            </div>                                                                                                                       
                            <div class="col inputCol">
                                <label for="pMake">Model</label>
                                <p class="input" id="pMake">
                                    Dodge
                                </p>
                            </div>  
                            <div class="col inputCol">
                                <label for="pModel">Model</label>
                                <p class="input" id="pModel">
                                    2500
                                </p>
                            </div>                             
                                                                               
                        </div>
                        <div class="container trainBG padTop">
                            <table id="auxTable">
                                <thead>
                                    <tr>
                                        <th>Vehicle License</th>
                                        <th>Month</th>
                                        <th>Year</th>
                                        <th>Operator</th>
                                        <th>Mileage</th>
                                        <th>Gas</th>
                                        <th>Oil</th>
                                        <th>Days Used</th>
                                        <th>Cost</th>
                                        <th>Job Code</th>
                                    </tr>
                                </thead>
                            </table>
        
                                <h1 class="padTop title5">Add New Months Usage</h1>
        
                            <form role="form" id="auxForm" data-toggle="validator">
                            </form>
                                                                                                                                                        
                        </div>                    
        
                    </section> <!-- end of usa section -->
        
                </section> <!-- end of usa-section1 -->       
                

            </div><!-- end of sidenav wrapper div -->







        </main>

        <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
        </footer>
        <script src="/js/ead.min.js"></script>
        <script src="/js/bootstrap-datepicker.js"></script>
        <script src="/js/pagesJS/bootstrapFieldWriter.js"></script>
        <script src="/js/pagesJS/iwfia.js"></script>
        <script src="/js/pagesJS/mainFleetPages.js"></script>



    </body>

</html>