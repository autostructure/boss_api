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
                        <img class="bannerImg" src="img/mountain.jpg" alt="Banner Image">
                    </header>
                    <div class="usa-grid">
                        <div class="usa-width-one-whole">
                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                <a class="breadcrumbLink" href="/boss/home">Home |</a>
                                <a class="breadcrumbLink" href="/boss/budgetDash">Report and Analysis Dash |</a>
                                <a class="breadcrumbLinkMain" href="/boss/newSalary">New Salary</a>
                            </p>
                        </div>
                    </div><!-- end of breadcrumbs _-->

                    <section class="usa-section">
                        <div class="usa-grid usa-buffer-top">
                            <div class="use-width-one-whole title-div">
                                <h1 id="title">Payroll</h1>
                            </div>
                        </div>

                        <div class="usa-grid usa-buffer-top">
                            <div class="usa-width-one-whole">
                                <h2 class="title2">New Salary</h2>




                                <div class="tab-content" id="myTabContent"><!-- start of tab content -->


                                    <!--                                                   START OF TIMESHEETS TAB                                                     -->
                                    <div class="tab-pane fade show active" id="time" role="tabpanel" aria-labelledby="timesheets">
                                        <form>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="form-group">
                                                        <label for="namecode">Namecode</label>
                                                        <select id="nameCode" class="form-control">
                                                            <option value="" selected disabled hidden>[Select Namecode]</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <label for="lname">Last Name</label>
                                                    <input type="text"  id="lname" class="form-control"  aria-label="description" placeholder="Last Name" aria-describedby="basic-addon1">
                                                </div>
                                                <div class="col">
                                                    <label for="fname">First Name</label>
                                                    <input type="text"  id="fname" class="form-control"  aria-label="description" placeholder="First Name" aria-describedby="basic-addon1">
                                                </div>                                                    
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="form-group">
                                                        <label for="state">State</label>
                                                        <select class="form-control" id="state">
                                                            <option selected="selected">Choose State</option>
                                                            <option>IW</option>
                                                            <option>AZ</option>
                                                            <option>CO</option>
                                                            <option>ID</option>
                                                            <option>MT</option>
                                                            <option>NV</option>
                                                            <option>NM</option>
                                                            <option>SD</option>
                                                            <option>UT</option>
                                                            <option>WY</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <label for="rwage">Regular Wage per Pay Period</label>
                                                    <input type="text"  id="rwage" class="form-control"  aria-label="description" placeholder="Regular Wage per Pay Period" aria-describedby="basic-addon1">
                                                </div>
                                                <div class="col">
                                                    <label for="otime">Overtime Hourly Wage</label>
                                                    <input type="text"  id="otime" class="form-control"  aria-label="description" placeholder="Overtime Wage" aria-describedby="basic-addon1">
                                                </div>                                                    
                                            </div>                                                
                                            <div class="row">
                                                <div class="col">
                                                    <label for="ppl">Number of Pay Periods Left in FY</label>
                                                    <input type="text"  id="ppl" class="form-control"  aria-label="description" placeholder="Enter Pay Periods Left" aria-describedby="basic-addon1">
                                                </div> 
                                                <div class="col">
                                                    <label for="pwp">PWP Salary (YTD)</label>
                                                    <input type="text"  id="pwp" class="form-control"  aria-label="description" placeholder="YTD Salary" aria-describedby="basic-addon1">
                                                </div>                                                     

                                            </div>

                                            <div class="row submitrow">
                                                <div class="col-4 offset-4">
                                                    <button id="submitNewSalary" type="button" class="btn btn-lg submitbtn btn-success">
                                                        <!-- <i class="fa fa-2x fa-arrow-circle-o-right" style="color: #006633"></i> -->
                                                        Submit New Salary 
                                                    </button> 
                                                </div>
                                            </div>

                                        </form>
                                    </div>



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
        <script src="/boss/js/pagesJS/newSalary.js"></script>
    </body>

</html>