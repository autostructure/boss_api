<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/boss/img/favicons/favicon.ico" type="image/x-icon">
    <title>FIA-BOSS</title>
    <link rel="stylesheet" href="/boss/css/ead.min.css">
    <link rel="stylesheet" href="/boss/css/pagesCSS/all.css">
    <link rel="stylesheet" href="/boss/css/bootstrap-datepicker3.css">
    <link rel="stylesheet" href="/boss/css/pagesCSS/empPortal.css">
    <link rel="stylesheet" href="/boss/css/pagesCSS/empDash.css">

</head>

<body class="layout-demo">
    <header class="usa-header usa-header-extended" role="banner" id="mainHeader">
    </header>
    <main id="main-content">
        <section class="usa-section bgImg">
            <h1 class="title3 text-center">
                <span class="bubble">
                    Welcome, <span id="employeePreferredNameWelcome">Jane Q. Smith</span>
                </span>
            </h1>
            <div class="row tile-row">
                <div class="col col-12 col-sm-6 col-lg-3">
                    <a class="tile empCheckOut" href="/boss/empPortal#CheckIn">
                        <div class="dummy"></div>
                        <h3 class="tile-title">Check In / Check Out</h3>
                    </a>
                </div>
                <div class="col col-12 col-sm-6 col-lg-3">
                    <a class="tile empVehicle" href="/boss/empPortal#Vehicle">
                        <div class="dummy"></div>
                        <h3 class="tile-title">Vehicle Usage</h3>
                    </a>
                </div>
                <div class="col col-12 col-sm-6 col-lg-3">
                    <a class="tile empTraining" href="/boss/empPortal#Training">
                        <div class="dummy"></div>
                        <h3 class="tile-title">Training / Certs</h3>
                    </a>
                </div>
                <div class="col col-12 col-sm-6 col-lg-3">
                    <a class="tile empInfo" href="/boss/empPortal#Profile">
                        <div class="dummy"></div>
                        <h3 class="tile-title">Update My Profile</h3>
                    </a>
                </div>
            </div>
        </section> 
    </main>
        <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
        </footer>
        <script src="/boss/js/ead.min.js"></script>
        <script src="/boss/js/bootstrap-datepicker.js"></script>
        <script src="/boss/js/pagesJS/bootstrapFieldWriter.js"></script>
        <script src="/boss/js/pagesJS/empPortal.js"></script>
        <script src="/boss/js/pagesJS/personnelPages.js"></script>
        <script src="/boss/js/pagesJS/ApiCalls.js"></script>
</body>

</html>