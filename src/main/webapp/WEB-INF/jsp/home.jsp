<!doctype html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="img/favicons/favicon.ico" type="image/x-icon">
        <title>FIA-BOSS</title>
        <link rel="stylesheet" href="css/ead.min.css">
        <link rel="stylesheet" href="css/pagesCSS/all.css">
        <link rel="stylesheet" href="css/pagesCSS/home.css">
    </head>

    <body class="layout-demo">
        <header class="usa-header usa-header-extended" role="banner" id="mainHeader">
        </header>

        <main id="background">
            <div class="container mainTitleDiv">
                <div class="row justify-content-center">
                    <img src="img/fslogoBig.png" id="bigFSLOGO" alt="">
                    <h1 class="title">BOSS Dashboard</h1>
                </div>
            </div>
            <div class="container-fluid cardsDiv">
                <div class="row align-items-center">
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-block">
                                <img src="img/budgetBG.jpg" alt="budget mountain picture" class="img-fluid">
                                <div class="card-title">
                                    <!-- <h4 class="hTitle">Budget</h4> -->
                                    <a class="btn btn-link" href=/boss/budgetDash">
                                        <h5 class="card-title">Budget</h5>
                                    </a>
                                </div>
                                <div class="card-tbody show" id="collapseOne">
                                    <p class="card-text"><a href=/boss/newExpense">Create New Expense</a></p>
                                    <p class="card-text"><a href=/boss/viewExpense">View Expenses</a></p>
                                    <p class="card-text"><a href=/boss/jobCodes">Job Codes</a></p>
                                    <p class="card-text"><a href=/boss/budgetSummary">Budget Summary</a></p>
                                    <p class="card-text"><a href=/boss/payrollDetails">Payroll</a></p>
                                    <p class="card-text"><a href=/boss/unverifiedReport">Verification Report</a></p>
                                </div>
                                <div class="card-footer text-right">
                                    <p class="card-text dashboard"><a href=/boss/budgetDash">Visit Dashboard</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-block">
                                <img src="img/propBG.jpg" alt="budget mountain picture" class="img-fluid">
                                <div class="card-title">
                                    <!-- <h4 class="hTitle">Budget</h4> -->
                                    <a class="btn btn-link" href=/boss/fleetDash">
                                        <h5 class="card-title">Property<br>Mgmt</h5>
                                    </a>
                                </div>
                                <div class="card-tbody show" id="collapseTwo">
                                    <p class="card-text"><a href=/boss/addNewFleet">Add New Fleet Vehicle</a></p>
                                    <p class="card-text"><a href=/boss/viewFleet">View / Edit Fleet</a></p>
                                    <p class="card-text"><a href="#">Field Equip Electronic</a></p>
                                    <p class="card-text"><a href="#">ID Cards/Keys</a></p>
                                    <p class="card-text"><a href="#">Reports</a></p>
                                </div>
                                <div class="card-footer text-right">
                                    <p class="card-text dashboard"><a href=/boss/fleetDash">Visit Dashboard</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-block">
                                <img src="img/hrBG.jpg" alt="budget mountain picture" class="img-fluid">
                                <div class="card-title">
                                    <!-- <h4 class="hTitle">Budget</h4> -->
                                    <a class="btn btn-link" href=/boss/personnelDash">
                                        <h5 class="card-title">Personnel<br></h5>
                                    </a>
                                </div>
                                <div class="card-tbody show" id="collapseThree">
                                    <p class="card-text"><a href=/boss/viewAllEmployees">View All Employees</a></p>
                                    <p class="card-text"><a href=/boss/addNewEmployee">Add New Employee</a></p>
                                    <p class="card-text"><a href=/boss/addTrainingEmployee">Record Employee Training</a></p>
                                    <p class="card-text"><a href=/boss/viewTraining">View All Training</a></p>
                                    <p class="card-text"><a href=/boss/addTrainingClass">Training Courses</a></p>
                                    <p class="card-text"><a href=/boss/addDraEmployee">Record Employee DRA</a></p>
                                    <p class="card-text"><a href=/boss/auxContact">Auxiliary Contact List</a></p>
                                </div>
                                <div class="card-footer text-right">
                                    <p class="card-text dashboard"><a href=/boss/personnelDash">Visit Dashboard</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-lg-2 col-md-6">
                        <div class="card">
                            <div class="card-block">
                                <img src="img/crewBG.jpg" alt="budget mountain picture" class="img-fluid">
                                <div class="card-title">
                                    <h4 class="hTitle">Budget</h4>
                                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <h5 class="card-title">Crew</h5>
                                    </button>
                                </div>
                                <div class="card-tbody show" id="collapseFour">
                                    <p class="card-text"><a href="#">Checkin-Out</a></p>
                                    <p class="card-text"><a href="#">Skills</a></p>
                                    <p class="card-text"><a href="#">DRA's</a></p>
                                    <p class="card-text"><a href="#">Payroll</a></p>
                                    <p class="card-text"><a href="#">Reports</a></p>
                                </div>
                                <div class="card-footer text-right">
                                    <p class="card-text dashboard"><a href=/boss/budgetDash">Visit Dashboard</a></p>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-block">
                                <img src="img/empBG.jpg" alt="budget mountain picture" class="img-fluid">
                                <div class="card-title">
                                    <!-- <h4 class="hTitle">Budget</h4> -->
                                    <a class="btn btn-link" href=/boss/empDash">
                                        <h5 class="card-title">Employee<br>Portal</h5>
                                    </a>
                                </div>
                                <div class="card-tbody show" id="collapseFive">
                                    <p class="card-text"><a href=/boss/empPortal">My Profile</a></p>
                                    <p class="card-text"><a href=/boss/empPortal">Emergency Contact</a></p>
                                    <p class="card-text"><a href=/boss/empPortal">Check In / Check Out</a></p>
                                    <p class="card-text"><a href=/boss/empPortal">Vehicle</a></p>
                                    <p class="card-text"><a href=/boss/empPortal">Training / Certs</a></p>
                                </div>
                                <div class="card-footer text-right">
                                    <p class="card-text dashboard"><a href=/boss/empDash">Visit Dashboard</a></p>
                                </div>
                            </div>
                        </div>
                    </div>                                                            
                </div>
            </div>
        </main>


        <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
        </footer>

        <script src="js/ead.min.js"></script>
        <script src="js/pagesJS/home.js"></script>

    </body>

</html>