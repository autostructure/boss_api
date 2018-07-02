<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="img/favicons/favicon.ico" type="image/x-icon">
    <title>FIA-BOSS</title>
    <link rel="stylesheet" href="css/ead.min.css">
    <link rel="stylesheet" href="css/pagesCSS/all.css">
    <link rel="stylesheet" href="css/pagesCSS/payrollDetails.css">
</head>

<body class="layout-demo">
    <header class="usa-header usa-header-extended" role="banner" id="mainHeader">
    </header>
        <div class="usa-overlay"></div>
        <main id="main-content">
                <div class="wrapper">
                
                        <nav id="sidebar">
                         </nav>



                         <section class="usa-section1">
                                <header class="main-header" role="banner">
                                    <img src="img/horseBanner.jpg" alt="Banner Image"/>
                                </header>
                                <div class="usa-grid">
                                        <div class="usa-width-one-whole">
                                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                                <a class="breadcrumbLink"href="../home/home.html">Dashboard |</a>
                                                <a class="breadcrumbLink"href="../budget/budgetDash.html">Budget |</a>
                                                <a class="breadcrumbLinkMain"href="../payrollDetails.html">Payroll Details</a>
                                            </p>
                                        </div>
                                    </div>
                                <section class="usa-section">
                                    <div class="usa-grid usa-buffer-top">
                                        <div class="use-width-one-whole title-div">
                                            <h1 id="title">Payroll</h1>
                                        </div>
                                    </div>

                                    <div class="usa-grid usa-buffer-top">
                                        <div class="use-width-one-whole content-div">
                                            <h2 class="title2">Payroll Details</h2>
                                        <table id="payroll" class="usa-table-borderless display" style="width:100%">
                                            
                                            <thead>
                                                <tr>
                                                    <th scope="col">Sec</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">PP Left</th>
                                                    <th scope="col">Reg Pay Per PP</th>
                                                    <th scope="col">RegPayToDate</th>
                                                    <th scope="col">Overtime To Date</th>
                                                    <th scope="col">RegPayForeCast</th>
                                                    <th scope="col" id="stop">Total FY Forecast</th>
                                                    <th scope="col">Select</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th colspan="4" style="text-align: left; font-size: 2.0em">Grand Totals</th>
                                                    <th>Regular Pay To Date</th>
                                                    <th>Overtime To Date</th>
                                                    <th>Regular Pay Forecast</th>
                                                    <th>Total Forecast</th>
                                                    <th></th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>  
                                </section>
                         </section>
                        
                        
                </div>
                <!-- end of sidenav wrapper div -->

                
        </main>

        <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
         </footer>


        <script src="js/ead.min.js"></script>
        <script src="js/pagesJS/mainPages.js"></script>
        <script src="js/pagesJS/payrollDetails.js"></script>

</body>

</html>