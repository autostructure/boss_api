<!doctype html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/boss/img/favicons/favicon.ico" type="image/x-icon">
        <title>FIA-BOSS</title>
        <link rel="stylesheet" href="/boss/css/ead.min.css">
        <link rel="stylesheet" href="/boss/css/pagesCSS/all.css">
        <!-- <link rel="stylesheet" href="css/pagesCSS/hrDash.css"> -->
        <link rel="stylesheet" href="/boss/css/bootstrap-datepicker3.css">
        <link rel="stylesheet" href="/boss/css/pagesCSS/fleetPages.css">
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
                        <img class="bannerImg" src="/boss/img/fleetBG.jpg" alt="Banner Image">
                    </header>
                    <div class="usa-grid">
                        <div class="usa-width-one-whole">
                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                <a class="breadcrumbLink" href="/boss/home">Dashboard |</a>
                                <a class="breadcrumbLinkMainFleet" href="/boss/viewEditFleet">View Edit Fleet Vehicle</a>
                            </p>
                        </div>
                    </div>
                    <section class="usa-section">

                        <div class="usa-grid usa-buffer-top">
                            <div class="usa-width-one-whole title-div">
                                <h1 id="fleetTitle">View / Edit Fleet Vehicle</h1>
                            </div>
                        </div>

                        <div class="container trainBG">
                                <!-- start of form -->

                                <form role="form" data-toggle="validator" class="generalInfo" id="formGeneralInfo" action="javascript:0" method="POST">
                                    <input hidden id="employeeId" name="id" value="0">
                                    <div class="row">
                                        <div class="col col-md-4 offset-md-4">
                                            <input type="submit" id="submitV" class="btn btn-success" value="Update">
                                        </div>
                                    </div>
                                </form>                                                                                                                          
                        </div>

                        <div class="container trainBG">
                            <div class="row">
                                <div class="col col-md-3 text-center">
                                    <button class="btn btn-success bottomButton" id="monthlyUsage">Monthly IWFIA Usage</button>
                                </div>
                                <div class="col col-md-3 text-center">
                                    <button class="btn btn-success bottomButton" id="maintenance">Maintenance</button>
                                </div>
                                <div class="col col-md-3 text-center">
                                    <button class="btn btn-success bottomButton" id="monthlyCostss">Monthly Costs</button>
                                </div>
                                <div class="col col-md-3 text-center">
                                    <button class="btn btn-success bottomButton" id="outOfService">Out of Service</button>
                                </div>                                                                                                
                                                                                               
                            </div>
                        </div>
						<div id="myModal_done" class="modal fade myModal_edit" role="dialog">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
										<h4 class="modal-title">Edit Dra Course</h4>
										<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
									</div>
									<div class="modal-body">
										<span>
											Your Edit has been sumitted!
										</span>
									</div>
									<div class="modal-footer">
										<button type="button" class="btn" data-dismiss="modal">Close</button>
										<button type="button" id="myModal_editConfirm" data-dismiss="modal" class="btn btn_pers_copy">View Fleet List</button>
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
        <script src="/boss/js/ead.min.js"></script>
        <script src="/boss/js/bootstrap-datepicker.js"></script>
        <script src="/boss/js/pagesJS/bootstrapFieldWriter.js"></script>
		<script src="/boss/js/pagesJS/customFormFunctions.js"></script>
        <script src="/boss/js/pagesJS/viewEditFleet.js"></script>
        <script src="/boss/js/pagesJS/mainFleetPages.js"></script>



    </body>

</html>