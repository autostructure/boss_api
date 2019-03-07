<!doctype html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="img/favicons/favicon.ico" type="image/x-icon">
        <title>FIA-BOSS</title>
        <link rel="stylesheet" href="css/ead.min.css">
        <link rel="stylesheet" href="css/pagesCSS/all.css">
        <link rel="stylesheet" href="css/modal.css">
        <link rel="stylesheet" href="css/pagesCSS/hrPages.css">
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
                        <img data-toggle="tooltip" data-html="true" title="Photo Credit: JDShaw" class="bannerImg" src="/boss/img/foggyMountain.jpg" alt="Banner Image">
                    </header>
                    <div class="usa-grid">
                        <div class="usa-width-one-whole">
                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                <a class="breadcrumbLink" href="/boss/home">Dashboard |</a>
                                <a class="breadcrumbLink" href="/boss/personnelDash">Personnel Dashboard |</a>
                                <a class="breadcrumbLinkMain" href="/boss/viewAllEmployees">View All Employees</a>

                            </p>
                        </div>
                    </div>
                    <section class="usa-section">

                        <div class="usa-grid usa-buffer-top">
                            <div class="usa-width-one-whole title-div">
                                <h1 id="title">Card Keys Checked Out</h1>
                            </div>
							
                        </div>
                        <div class="usa-grid usa-buffer-top">
                            <div class="use-width-one-whole content-div">
                                <h2 class="title2">Card & Key List</h2>
                                <div>
									<div id="addDiv" class="container trainBG">
										<form id="form_cards">
										</form><br/>
										<button id="btn_submit" class="btn btn-submit" value="Submit"></button>
										<br/>
										<br/>
										<table id="cardTable" class="usa-table-borderless display" style="width:100%">

                                        <thead>
                                            <tr>

                                                <th>Employee Name</th>
                                                <th>Linc Pass Expiration</th>
                                                <th>Gov ID</th>
                                                <th>10A1</th>
                                                <th>10A6</th>                                        
                                                <th>10A7</th>
                                                <th>10A8</th>
												<th>10D1</th>
												<th>X3</th>
                                                <th>keyFS</th>
												<th></th>


                                            </tr>
                                        </thead>
                                        <tbody>
											<td col="assignedTo"></td>
											<td col="lincPassExpiration"></td>
											<td col="govtId"></td>
											<td col="key10A1"></td>
											<td col="key10A6"></td>
											<td col="key10A7"></td>
											<td col="key10A8"></td>
											<td col="key10D1"></td>
											<td col="keyX3"></td>
											<td col="keyFS"></td>
											<td scope="col"></td>
											
                                        </tbody>
                                    </table>
									</div>
									
                                    
                                </div>
                            </div>
                        </div> 




                    </section>
                </section>                         

            </div><!-- end of sidenav wrapper div -->





            <div id="myModal_edit" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Confirmation</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>

                        </div>
                        <div class="modal-body">
                            <form id="edit_form">
							</form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn_pers_copy" data-dismiss="modal">Cancel</button>
                            <button type="button" id="edit_submit" data-dismiss="modal" class="btn btn_sub">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

			<div id="myModal_error" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Error</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>

                        </div>
                        <div class="modal-body">
							<p>An Error Happened Submitting Card Key Information</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn error_ok">Ok</button>
                        </div>
                    </div>
                </div>
            </div>

			<div id="myModal_success" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Success!</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>

                        </div>
                        <div class="modal-body">
							<p>Success Submiting Card Key Information</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn success_ok">Ok</button>
                        </div>
                    </div>
                </div>
            </div>

        </main>

        <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
        </footer>
        <script src="/boss/js/ead.min.js"></script>

        <script src="/boss/js/pagesJS/ApiCalls.js"></script>
		<script src="/boss/js/pagesJS/CustomFormFunctions.js"></script>
        <script src="/boss/js/pagesJS/CardsAndKeysPropMgt.js"></script>
        <script src="/boss/js/pagesJS/personnelPages.js"></script>

    </body>

</html>