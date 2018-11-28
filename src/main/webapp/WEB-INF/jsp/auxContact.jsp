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
    <link rel="stylesheet" href="css/pagesCSS/hrPages.css">
</head>

<body class="layout-demo">
<header class="usa-header usa-header-extended" role="banner" id="mainHeader"></header>
<div class="usa-overlay"></div>
<main id="main-content">
        <div class="wrapper">

        <nav id="sidebar"></nav>                

        <section class="usa-section1">
            <header class="main-header" role="banner">
                <img data-toggle="tooltip" data-html="true" title="An aspen stand in Utah. Photo captured during data collection efforts for the Interior West Forest Inventory and Analysis (IWFIA) Program. (Forest Service photo by IWFIA staff)" class="bannerImg" src="../../img/birch.jpg" alt="Banner Image/boss/>
            </header>
            <div class="usa-grid">
                <div class="usa-width-one-whole">
                    <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                        <a class="breadcrumbLink"href=/boss/home">Dashboard |</a>
                        <a class="breadcrumbLink"href=/boss/hrDash">HR Dashboard |</a>
                        <a class="breadcrumbLinkMain"href=/boss/auxContact">Supplemental Phone Numbers</a>
                    </p>
                </div>
            </div>
            <section class="usa-section">

                <div class="usa-grid usa-buffer-top">
                    <div class="usa-width-one-whole title-div">
                        <h1 id="title">Supplemental Phone Numbers</h1>
                    </div>
                </div>
                <div id="success" class="alert alert-success" role="alert">
                    Update Successfull!                                         
                </div>
                <div id="error" class="alert alert-danger" role="alert">
                    Error: <span id='errorText'></span>
                </div>

                <div class="container trainBG padTop">
                    <table id="auxTable">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Phone</th>
                                <th>Alternate Phone</th>
                            </tr>
                        </thead>
                    </table>

                        <h1 class="title5">Add New Supplemental Phone Number</h1>

                    <form role="form" id="auxForm" data-toggle="validator">
                    </form>
                                                                                                                                                
                </div>                    

            </section> <!-- end of usa section -->

        </section> <!-- end of usa-section1 -->                    
                
        </div><!-- end of sidenav wrapper div -->

</main>

<footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter"></footer>
<script src="js/ead.min.js"></script>
<script src="js/pagesJS/bootstrapFieldWriter.js"></script>
<script src="js/bootstrap-datepicker.js"></script>
<script src="js/pagesJS/auxContact.js"></script>
<script src="js/pagesJS/personnelPages.js"></script>

</body>

</html>