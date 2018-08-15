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
                                    <img src="../../img/wildflower.jpg" alt="Banner Image"/>
                                </header>
                                <div class="usa-grid">
                                        <div class="usa-width-one-whole">
                                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                                <a class="breadcrumbLink"href="../home/home.html">Dashboard |</a>
                                                <a class="breadcrumbLink"href="../budget/budgetDash.html">Budget |</a>
                                                <a class="breadcrumbLinkMain"href="../budgetSummary.html">Budget Summary</a>
                                            </p>
                                        </div>
                                    </div>
                                <section class="usa-section">
                                    <div class="usa-grid usa-buffer-top">
                                        <div class="use-width-one-whole title-div">
                                            <h1 id="title">Budget</h1>
                                            <form role="form" data-toggle="validator" id="selectForm">
                                                <div class="row">                                            
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="serLabel" for="year">Fiscal Year<span class="reqClass"> *</span></label>
                                                            <select required class="form-control" name="year" id="year">
                                                                <option value="">Choose Year</option>
                                                                <option value="2016">2016</option>
                                                                <option value="2017">2017</option>
                                                                <option value="2018">2018</option>
                                                            </select>                                                                        
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                </div>                                                                
                                                <div class="row">
                                                    <div class="col-md-4 offset-md-4">
                                                        <input type="submit" id="refresh" class="btn btn-lg submitbtn btn-success">
                                                    </div>
                                                </div>
                                                
                                            </form>

                                        </div>
                                    </div>

                                    <!-- modal for error -->
                                    <div id="myModal" class="modal fade" role="dialog">
                                        <div class="modal-dialog text-center">
                                            <!-- Modal content-->
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                <h4 class="modal-title text-center">Error</h4>
                                            </div>
                                            <div class="modal-body">
                                                    <div class="row">
                                                        <h4 class="text-center">No Data for Search Provided</h4>
                                                    </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-lg btn-default" data-dismiss="modal">Close</button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
 
                                    <div class="usa-grid usa-buffer-top" id="showHide">
                                        <div class="use-width-one-whole content-div">
                                            <h2 class="title2">Budget Summary</h2>
                                        <table id="budget" class="usa-table-borderless display" style="width:100%">
                                            
                                            <thead class="header">
                                                <tr>
                                                    <th>Job Code</th>
                                                    <th>Description</th>
                                                    <th>Operating</th>
                                                    <th>Obligated</th>
                                                    <th>Balance</th>
                                                    <th></th>
                                                </tr>                                               
                                            </thead>
                                            <tbody>
                                               
                                            </tbody>
                                            <tfoot>
                                                    <tr>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
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
        <script src="js/pagesJS/budgetSummary.js"></script>
</body>

</html>