<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="img/favicons/favicon.ico" type="image/x-icon">
    <title>FIA-BOSS</title>
    <link rel="stylesheet" href="css/ead.min.css">
    <link rel="stylesheet" href="css/pagesCSS/all.css">
    <link rel="stylesheet" href="css/pagesCSS/budgetDash.css">
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
                                    <img src="../../img/snow.jpg" alt="Banner Image"/>
                                </header>
                                <div class="usa-grid">
                                        <div class="usa-width-one-whole">
                                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                                <a class="breadcrumbLink"href="../home/home.html">Dashboard |</a>
                                                <a class="breadcrumbLinkMain"href="../budget/budgetDash.html">Budget Dashboard</a>
                                            </p>
                                        </div>
                                    </div>
                                <section class="usa-section">

                                    <div class="usa-grid usa-buffer-top">
                                        <div class="use-width-one-whole title-div">
                                            <h1 id="title">Budget Dashboard</h1>
                                                                            <!-- Trigger the modal with a button -->
                                        </div>
                                        <div class="row chartHolder">
                                            <!-- rendering pie charts -->

                                            <div class="col col-md-5">
                                                    <canvas id="pie-chart2" width="300" height="300"></canvas>
                                            </div>
                                            <div class="col col-md-5">
                                                    <canvas id="pie-chart" width="300" height="300"></canvas>
                                            </div>                                            

                                            <!-- quick links col -->
                                            <div class="col col-md-2 qlinks">
                                                <div class="row">
                                                    <div class="col">
                                                        <h4 class="titleq">Quick Links</h4>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col quickLinks">
                                                        <a href="./newExpense">New Expense</a>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col quickLinks">
                                                        <a href="./viewExpense">View Expenses</a>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col quickLinks">
                                                        <a href="./newSalary">New Salary</a>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col quickLinks">
                                                        <a href="./jobCodes">Job Code Management</a>
                                                    </div>
                                                </div>   
                                                <div class="row">
                                                    <div class="col quickLinks">
                                                        <a href="./budgetSummary">Budget Summary</a>
                                                    </div>
                                                </div> 
                                                <div class="row">
                                                    <div class="col quickLinks">
                                                        <a href="./payrollDetails">Employee Payroll Forecast</a>
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
         <script src="js/pagesJS/budgetDash.js"></script>
        <script src="js/pagesJS/mainPages.js"></script>

</body>

</html>