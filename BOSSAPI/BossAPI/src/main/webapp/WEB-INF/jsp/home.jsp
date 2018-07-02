<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="img/favicons/favicon.ico" type="image/x-icon">
    <title>FIA-BOSS</title>
    <link rel="stylesheet" href="css/ead.min.css">
    <link rel="stylesheet" href="css/pagesCSS/all.css">
    <link rel="stylesheet" href="css/pagesCSS/budgetSummary.css">
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
                                    <img src="img/fire.jpg" alt="Banner Image"/>
                                </header>
                                <div class="usa-grid">
                                        <div class="usa-width-one-whole">
                                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                                <a class="breadcrumbLink"href="/home">Dashboard |</a>
                                                <a class="breadcrumbLink"href="/budgetDash">Budget |</a>
                                                <a class="breadcrumbLinkMain"href="/budgetSummary">Budget Summary</a>
                                            </p>
                                        </div>
                                    </div>
                                <section class="usa-section">
                                    <div class="usa-grid usa-buffer-top">
                                        <div class="use-width-one-whole title-div">
                                            <h1 id="title">Budget</h1>
                                        </div>
                                    </div>

                                    <div class="usa-grid usa-buffer-top">
                                        <div class="use-width-one-whole content-div">
                                            <h2 class="title2">Budget Summary</h2>
                                        <table id="budget" class="usa-table-borderless display" style="width:100%">
                                            
                                            <thead>
                                                <tr>
                                                    <th style="width:11%">Job Code</th>
                                                    <th style="width:20%">Description</th>
                                                    <th style="width:13%">Operating</th>
                                                    <th style="width:13%">Obligated</th>
                                                    <th style="width:13%">Balance</th>
                                                    <th style="width:13%">FMMI Operating</th>
                                                    <th style="width:13%">FMMI Balance</th>
                                                    <th style="width:6%">Select</th>
                                                </tr>
                                            </thead>
                                            <tbody  id="investmentTable">
                                                
                                            </tbody>
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
        <script src="js/pagesJS/budgetSummary.js"></script>
</body>

</html>