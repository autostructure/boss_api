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
                                <a class="breadcrumbLinkMain" href="/boss/beaconInreach"> Beacon And Inreach</a>
                            </p>
                        </div>
                    </div>
                    <section class="usa-section">

                        <div class="usa-grid usa-buffer-top">
                            <div class="usa-width-one-whole title-div">
                                <h1 id="title">Beacon And Inreach</h1>
                            </div>
							
                        </div>
                        <div class="usa-grid usa-buffer-top">
                            <div class="use-width-one-whole content-div">
                                <h2 class="title2">Beacon And Inreach List</h2>
                                <div id="">
									<div class="trainBG container"> 
										<form id="addBeaconForm">
										</form><br/><br/>
										<button id="submitAdd" class="btn btn-submit" value="submit">Submit</button>
									</div>
									<br/><br/>
									
									
                                    <table id="fieldEquip" class="usa-table-borderless display" style="width:100%">

                                        <thead>
                                            <tr>
                                                <th>Unit Number</th>
                                                <th>Unique ID</th>
                                                <th>Serial Number</th>
												<th>Battery Exp Date</th>
                                                <th>Purchase Date</th>
												<th>Beacon Password</th>
												<th>Register Date</th>
												<th>Assigned Employee</th>
												<th>Recorded By</th>
												<th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
											<td col="unitNumber"></td>
											<td col="id"></td>
											<td col="serialNumber"></td>
											<td col="batteryExpDate"></td>
											<td col="purchaseDate"></td>
											<td col="beaconPassword"></td>
											<td col="registerDate"></td>
											<td col="assignedEmployee"></td>
											<td scope="col"></td>
											<td scope="col"></td>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div> 




                    </section>
                </section>                         

            </div><!-- end of sidenav wrapper div -->





            <div id="myModal_delete" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Confirmation</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body">
                            <p>Are you sure you want to delete this beacon?</p>
                            <p id="beacon_id"></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn_pers_copy" data-dismiss="modal">No</button>
                            <button type="button" id="deleteModal_delete" data-dismiss="modal" class="btn btn_beacon_remove">Yes</button>
                        </div>
                    </div>
                </div>
            </div>

			<div id="myModal_edit" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Beacon/Inreach Edit Form</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>

                        </div>
                        <div class="modal-body">
							<form id="editForm"></form>
                        </div>
                        <div class="modal-footer">
						<button type="button" class="btn btn_pers_copy" data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn edit_submit" data-dismiss="modal">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

			<div id="myModal_checkout" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Beacon/Inreach Checkout</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body">
							<form id="checkoutForm"></form>
                        </div>
                        <div class="modal-footer">
							<button type="button" class="btn btn_pers_copy" data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btnSubmit" data-dismiss="modal">Submit</button>
                        </div>
                    </div>
                </div>
            </div>









        </main>

        <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
        </footer>
        <script src="/boss/js/ead.min.js"></script>

        <script src="/boss/js/pagesJS/ApiCalls.js"></script>
		    <script src="/boss/js/bootstrap-datepicker.js"></script>

		<script src="/boss/js/pagesJS/customFormFunctions.js"></script>
		<script src="/boss/js/pagesJS/beaconInreachCheckout.js"></script>

        <script src="/boss/js/pagesJS/personnelPages.js"></script>

    </body>

</html>