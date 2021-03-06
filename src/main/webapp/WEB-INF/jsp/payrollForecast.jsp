<!doctype html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="img/favicons/favicon.ico" type="image/x-icon">
        <title>FIA-BOSS</title>
        <link rel="stylesheet" href="css/ead.min.css">
        <link rel="stylesheet" href="css/pagesCSS/all.css">
        <link rel="stylesheet" href="css/pagesCSS/hrPages.css">
    </head>

    <body class="layout-demo">
        <header class="usa-header usa-header-extended" role="banner" id="mainHeader">
        </header>
        <div class="usa-overlay"></div>
        <main id="main-content">
            <div class="wrapper">
                <nav id="sidebar"></nav>
                <section class="usa-section1">
                    <header class="main-header" role="banner">
                        <img class="bannerImg" src="/boss/img/mountain.jpg" alt="Banner Image">
                    </header>
                    <div class="usa-grid">
                        <div class="usa-width-one-whole">
                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                <a class="breadcrumbLink" href="/boss/home">Home |</a>
                                <a class="breadcrumbLink" href="/boss/budgetDash">Report and Analysis Dash |</a>
                                <a class="breadcrumbLinkMain" href="/boss/payrollForecast">Payroll Forecast</a>
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
                                <h2 class="title2">Payroll Forecast</h2>
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="jobcode" class="label">
                                                Choose job code:
                                            </label>
                                            <select id="jobcode" class="form-control">
                                                <option val="">Choose Job Code</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col"></div>
                                    <div class="col"></div>
                                </div>
                                <table id="payroll" class="usa-table-borderless display compact" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th scope="col">Section/Activity Code</th>
                                            <th scope="col">Section/Activity Description</th>
                                            <th scope="col">Regular Pay to Date</th>
                                            <th scope="col">Regular Pay Forecast</th>
                                            <th scope="col" id="stop">Total FY Forecast</th>
                                            <!--th scope="col">Select</th-->
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th colspan="2" style="text-align: left; font-size: 2.0em"></th>
                                            <th>Regular Pay To Date</th>
                                            <th>Regular Pay Forecast</th>
                                            <th>Total Forecast</th>
                                            <!--th></th-->
                                        </tr>
                                        <tr class="top-footer">
                                            <th></th>
                                            <th style="text-align: left; font-size: 2.0em">GRAND TOTAL</th>
                                            <th id="grandTotalPayToDate">Regular Pay To Date</th>
                                            <th id="grandTotalPayForecast">Regular Pay Forecast</th>
                                            <th id="grandTotalFYForecast">Total Forecast</th>
                                            <!--th></th-->
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>

                        <!-- Modal -->
                        <div id="myModal" class="modal fade" role="dialog">
                            <div class="modal-dialog">
                                <form id="editForm" role="form" data-toggle="validator">
                                    <!-- Modal content-->
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title">Edit Activity Pay</h4>
                                        </div>
                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="form-group">
                                                        <label for="empName" class="modall control-label">Employee Name</label>
                                                        <input required type="text" class="form-control modall" id="empName" name="empName" placeholder="Employee Name" disabled>
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <label for="empPPLeft" class="modall control-label">Pay Periods Left<span class="reqClass"> *</span></label>
                                                    <input type="text" class="form-control modall" id="empPPLeft" name="empPPLeft" placeholder="Enter Number of Pay Periods Left">
                                                </div>                                                    
                                                <div class="col">
                                                    <div class="form-group">
                                                        <label for="empRegPay" class="modall control-label">Amount<span class="reqClass"> *</span></label>
                                                        <input required type="text" class="form-control modall" id="empRegPay" name="empRegPay" placeholder="Enter Regular Pay per Pay Period">
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-lg btn-default" data-dismiss="modal">Close</button>
                                            <input id="editEmpPD" type="submit" class="btn btn-lg btn-success">
                                        </div>
                                        <div class="col" style="display: none">
                                            <input type="text" id="empID">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </section>
                </section>


            </div>
            <!-- end of sidenav wrapper div -->
        </main>
        <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
        </footer>


        <script src="/boss/js/ead.min.js"></script>
        <script src="/boss/js/pagesJS/mainPages.js"></script>
        <script src="/boss/js/pagesJS/payrollForecast.js?v=<%= (int) (Math.random() * 100) %>"></script>

    </body>

</html>