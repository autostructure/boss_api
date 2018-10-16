<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/img/favicons/favicon.ico" type="image/x-icon">
    <title>FIA-BOSS</title>
    <link rel="stylesheet" href="/css/ead.min.css">
    <link rel="stylesheet" href="/css/pagesCSS/all.css">
    <link rel="stylesheet" href="/css/bootstrap-datepicker3.css">
    <link rel="stylesheet" href="/css/pagesCSS/addNewEmployee.css">
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
                    <img data-toggle="tooltip" data-html="true" title="Photo Credit: JDShaw" class="bannerImg" src="../../img/foggyMountain.jpg" alt="Banner Image"/>                                 
                </header>
                <div class="usa-grid">
                    <div class="usa-width-one-whole">
                        <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                            <a class="breadcrumbLink"href="/home">Dashboard |</a>
                            <a class="breadcrumbLink"href="/personnelDash">Personnel Dashboard |</a>
                            <a class="breadcrumbLinkMain"href="/addNewEmployee">Add New Employee</a>
                        </p>
                    </div>
                </div>
                <section class="usa-section">
					<div class="usa-grid usa-buffer-top">
                            <div class="use-width-one-whole content-div">
                                <h2 class="title2">Employee List</h2>
                                <div id="showHide">
                                    <table id="allDrasCourses" class="usa-table-borderless display" style="width:100%">
                                        <thead>
                                            <tr>
												<th scope="col">Dra Title</th>
                                                <th scope="col">Dra assessment Year</th>
                                                <th scope="col">Dra years Valid</th>
                                               
                                                <th id="stop"></th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    </div>

                </section>
            </section>                         
                
        </div><!-- end of sidenav wrapper div -->
    </main>

    <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
    </footer>
    <script src="/js/ead.min.js"></script>
    <script src="/js/bootstrap-datepicker.js"></script>
    <script src="/js/pagesJS/bootstrapFieldWriter.js"></script>
    <script src="/js/pagesJS/addDra.js"></script>
    <script src="/js/pagesJS/personnelPages.js"></script>
    <script src="/js/pagesJS/ApiCalls.js"></script>

</body>

</html>