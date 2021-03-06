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
    <link rel="stylesheet" href="css/pagesCSS/addTrainingEmployee.css">
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
                                    <img data-toggle="tooltip" data-html="true" title="Insect and Disease Training at start of field season. Photo captured during data collection efforts for the Interior West Forest Inventory and Analysis (IWFIA) Program in Wyoming. (Forest Service photo by IWFIA staff)" class="bannerImg" src="/boss/img/employees.jpg" alt="Banner Image">
                                </header>
                                <div class="usa-grid">
                                        <div class="usa-width-one-whole">
                                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                                <a class="breadcrumbLink" href="/boss/home">Dashboard |</a>
                                                <a class="breadcrumbLink" href="/boss/hrDash">HR Dashboard |</a>
                                                <a class="breadcrumbLinkMain" href="/boss/addTrainingEmployee">Add Training by Employee</a>
                                            </p>
                                        </div>
                                    </div>
                                <section class="usa-section">

                                   <div class="usa-grid usa-buffer-top">
                                        <div class="usa-width-one-whole title-div">
                                            <h1 id="title">Add Training by Employee</h1>
                                        </div>
                                    </div>
                                    <div class="container trainBG">
                                        <!--<form role="form" data-toggle="validator" class="generalInfo" id="SubmitForm">-->
                                        
										<div class="items">
										</div>
                                        
										<div class="row">
											<div class="col">
												<div class="form-group">
													<label>Employee Name<span class="reqClass">*</span></label><br/>
													<select class="form-control" id="tName" placeholder="Select Employee Name" aria-label="Employee">	
													</select>
												</div>
											</div>
											<div class="col">
												<div class="form-group">
													<label for="tTitle">Title<span class="reqClass"> *</span></label>
                                                    <select class="form-control" id="tTitle" placeholder="Training Title" aria-label="Training Title">
													</select>
                                                    <div class="help-block with-errors"></div>
												</div>
											</div>

											<div class="col">
												<div class="form-group">
													<label for="tYearsValid">Years Valid<span class="reqClass"> *</span></label>
                                                    <select class="form-control" id="tYearsValid" placeholder="Years Valid" aria-label="Years Valid">
													</select>
                                                    <div class="help-block with-errors"></div>
												</div>
											</div>
											<div class="col">
												<div class="form-group">
													<label for="tDate">Date of Training<span class="reqClass"> *</span></label>
														<div class="input-group date" data-provide="datepicker">
                                                            <input type="text" id="tDate" class="form-control">
                                                            <div class="input-group-addon">
                                                                <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                            </div>                                                                    
                                                        </div>
                                                        <div class="help-block with-errors"></div>
                                                    </div>  
                                                </div>
											</div>

										</div>
	

										
										<hr/>

                                        <div class="row">
                                            <div class="col col-md-6 text-center">
                                                <button id="viewReports" id="add" class="btn btn-info add_field_button">Add Additional Training</button> 
                                            </div> 
											<div class="col col-md-6">
												<button type="submit" id="submitV" class="btn btn-success submit_button">Submit</button>    
                                            </div> 
                                        </div>                                                                                                                       
                                    </div>
                                </div>
								</div>
								<div id="myModal_result" class="modal fade" role="dialog">
									<div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-header">
												<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
												<h4 class="modal-title"></h4>
											</div>
											<div class="modal-body">
												<p>Adding the training to the employees was successful</p>
											</div>
											<div class="modal-footer">
												<button type="button" class="btn" data-dismiss="modal">close</button>
											</div>
										</div>
									</div>
								</div>

									<!-- <div class="itemss">
                                    
                                   <div class="form-group"><label>Author Email:</label>
                                   <input id="author_email" class="form-control" name="author" required="required" type="EMAIL" /></div>
                                    
                                   </div>
                                    
                                   <button type="button" class="add_fiedld_button">Add Field</button> -->


                                </section>
                         </section> 
						 
                        
                </div><!-- end of sidenav wrapper div -->
                






        </main>

        <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
         </footer>
         <script src="/boss/js/ead.min.js"></script>
		 <!--<script src="/boss/js/pageJS/ApiCalls.js"></script>-->
         <script src="/boss/js/bootstrap-datepicker.js"></script>
         <script src="/boss/js/pagesJS/addTrainingEmployee.js"></script>
        <script src="/boss/js/pagesJS/mainHRPages.js"></script>

</body>

</html>