<!doctype html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/img/favicons/favicon.ico" type="image/x-icon">
        <title>FIA-BOSS</title>
        <link rel="stylesheet" href="/boss/css/ead.min.css">
        <link rel="stylesheet" href="/boss/css/bootstrap-datepicker3.css">
        <link rel="stylesheet" href="/boss/css/pagesCSS/all.css">
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
                        <!-- <img data-toggle="tooltip" data-html="true" title="Insect and Disease Training at start of field season. Photo captured during data collection efforts for the Interior West Forest Inventory and Analysis (IWFIA) Program in Wyoming. (Forest Service photo by IWFIA staff)" class="bannerImg" src="/boss/img/employees.jpg" alt="Banner Image"/> -->
                    </header>
                    <div class="usa-grid">
                        <div class="usa-width-one-whole">
                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                <a class="breadcrumbLink"href="/boss/home">Dashboard |</a>
                                <a class="breadcrumbLink"href="/boss/fleetDash">Property Management Dashboard |</a>
                                <a class="breadcrumbLinkMainFleet"href="/boss/viewFleet">View Fleet</a>
                            </p>
                        </div>
					</div>
					<section class="usa-section">
						<div class="usa-grid usa-buffer-top">
						  <div class="usa-width-one-whole title-div">
							<h1 id="title">Vehicle Maintenance</h1>
						  </div>
						</div>
						<div id="success" class="alert alert-success" role="alert">
						  Update Successfull!
						</div>
						<div id="error" class="alert alert-danger" role="alert">
						  Error: <span id="errorText"></span>
						</div>
						<!-- <form id="formGeneralInfo"></form> -->
						<div class="row">
						  <div class="col inputCol">
							<label for="pLicense">Vehicle License</label>
							<p class="input" id="pLicense"></p>
						  </div>
						  <div class="col inputCol">
							<label for="pVin">VIN</label>
							<p class="input" id="pVin"></p>
						  </div>
						  <div class="col inputCol">
							<label for="pYear">Year</label>
							<p class="input" id="pYear"></p>
						  </div>
						  <div class="col inputCol">
							<label for="pMake">Make</label>
							<p class="input" id="pMake"></p>
						  </div>
						  <div class="col inputCol">
							<label for="pModel">Model</label>
							<p class="input" id="pModel"></p>
						  </div>
						</div>
						<div class="col-md-12 text-center">	
							<button id="addVehMainRec" class="btn-success btn-lg text-center">Add Maintenance Record</button>
						</div>
						<div class="container trainBG ">
							<!-- add table here -->
							<table id="tblFleetMaitenace" class="usa-table-borderless display" style="width:100%">
								<thead><tr>
									<th scope="col">Service Date</th>
									<th scope="col">Milage</th>
									<th scope="col">Vendor Maker</th>
									<th scope="col">Description</th>
									<th scope="col">Cost</th>
									<th scope="col">Bill Back</th>
									<th id="stop"></th>

								</tr></thead>
								<tbody></tbody>
							</table>
						</div>
					  </section>

                        <div id="myModal_fullRecord" class="modal fade" role="dialog">
                            <div class="modal-dialog modal-lg" style="width:100%">
                                <div class="modal-content">
                                    <div class="modal-header">
                                            <h4 class="modal-title">Maitenace Full Record</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>

                                    </div>
                                    <div class="modal-body">
                                        <form id="form_fullRecord" role="form">
											<input type="text" runat="server" ID="id_hidden" hidden />
                                            <div class="row">
												<div class="col">
													<div class="form-group">
														<label>License: </label><input type="text" class="form-control fleet_license" readonly/>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>Equipment Number: </label><input type="text" class="form-control fleet_EquipNum" readonly/>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>VIN: </label><input type="text" class="form-control fleet_VIN" readonly/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col">
													<div class="form-group">
														<label>Model Year: </label><input type="text" class="form-control fleet_ModelYear" readonly/>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>Make: </label><input type="text" class="form-control fleet_Make" readonly/>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>Model: </label><input type="text" class="form-control fleet_Model" readonly/>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>color</label><input type="text" class="form-control fleet_color" readonly/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col">
													<div class="form-group">
														<label>Description: </label><input type="text" class="form-control fleet_Desc" readonly/>
													</div>
												</div>
											</div>
											<hr/>
											<div class="row">
												<div class="col">
													<div class="form-group">
														<label for="dra_date_OG">Service Date</label>
														<div class="input-group date" data-provide="datepicker">
															<input type="text" required class="form-control fleet_serviceDate">
															<div class="input-group-addon">
																<span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
															</div>
														</div>
														<div class="help-block with-errors"></div>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>Milage: </label><input type="text" class="form-control fleet_Milage"/>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>Vendor Name: </label><input type="text" class="form-control fleet_VendorName"/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col">
													<div class="form-group">
														<label>Description: </label><input type="text" class="form-control fleet_DescRec"/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col">
													<div class="form-group">
														<label>Cost: </label><input type="text" class="form-control fleet_cost"/>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>Bill Back: </label><input type="text" class="form-control fleet_BillBack"/>
													</div>
												</div>
											</div>
											
											<div class="row">
												<div class="col">
													<div class="form-group">
														<label>Warranty: </label>
														<select class="form-control fleet_warranty">
															<option value="true">True</option>
															<option value="false">False</option>
														</select>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>Saftey Inspection: </label>
														<select class="form-control fleet_Saftey">
															<option value="true">True</option>
															<option value="false">False</option>
														</select>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col">
													<div class="form-group">
														<label>Project Funded: </label>
														<select class="form-control fleet_ProjectFund">
															<option value="true">True</option>
															<option value="false">False</option>
														</select>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>VM (Emission): </label>
														<select class="form-control fleet_VM">
															<option value="true">True</option>
															<option value="false">False</optiion>
														</select>
													</div>
												</div>
											</div>
												
											<div class="row">
												<div class="col">
													<div class="form-group">
														<label>Receipt on File: </label>
														<select class="form-control fleet_ReceiptOnFile">
															<option value="true">True</option>
															<option value="false">False</option>
														</select>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>Oil Change: </label>
														<select class="form-control fleet_oilChange">
															<option value="true">True</option>
															<option value="false">False</option>
														</select>
													</div>
												</div>
											</div>





										</form>
									</div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn_pers_remove " data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn_edit_maintenace" data-dismiss="modal" id="btn_edit_maintenace">Submit Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div id="myModal_addRecord" class="modal fade" role="dialog">
                            <div class="modal-dialog modal-lg" style="width:100%">
                                <div class="modal-content">
                                    <div class="modal-header">
                                            <h4 class="modal-title">Maintenance Full Record</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>

                                    </div>
                                    <div class="modal-body">
                                        <form id="form_training_renew">
											<div class="row">
												<div class="col">
													<div class="form-group">
														<label for="dra_date_OG">Service Date</label>
														<div class="input-group date" data-provide="datepicker">
															<input type="text" required class="form-control fleet_serviceDate">
															<div class="input-group-addon">
																<span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
															</div>
														</div>
														<div class="help-block with-errors"></div>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>Mileage: </label><input required type="text" class="form-control fleet_Milage"/>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>Vendor Name: </label><input required type="text" class="form-control fleet_VendorName"/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col">
													<div class="form-group">
														<label>Description: </label><input required type="text" class="form-control fleet_DescRec"/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col">
													<div class="form-group">
														<label>Cost: </label><input type="text" required class="form-control fleet_cost"/>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>Bill Back: </label><input type="text" required class="form-control fleet_BillBack"/>
													</div>
												</div>
											</div>
											
											<div class="row">
												<div class="col">
													<div class="form-group">
														<label>Warranty: </label>
														<select class="form-control fleet_warranty">
															<option value=""></option>
															<option value="true">Yes</option>
															<option value="false">No</option>
														</select>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>Safety Inspection: </label>
														<select class="form-control fleet_Saftey">
															<option value=""></option>
															<option value="true">Yes</option>
															<option value="false">No</option>
														</select>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col">
													<div class="form-group">
														<label>Project Funded: </label>
														<select class="form-control fleet_ProjectFund">
															<option value=""></option>
															<option value="true">Yes</option>
															<option value="false">No</option>
														</select>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>VM (Emission): </label>
														<select class="form-control fleet_VM">
															<option value=""></option>
															<option value="true">Yes</option>
															<option value="false">No</optiion>
														</select>
													</div>
												</div>
											</div>
												
											<div class="row">
												<div class="col">
													<div class="form-group">
														<label>Receipt on File: </label>
														<select class="form-control fleet_ReceiptOnFile">
															<option value=""></option>
															<option value="true">Yes</option>
															<option value="false">No</option>
														</select>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>Oil Change: </label>
														<select class="form-control fleet_oilChange">
															<option value=""></option>
															<option value="true">Yes</option>
															<option value="false">No</option>
														</select>
													</div>
												</div>
											</div>



										
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-close " data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-success btn_addRecord" data-dismiss="modal" id="btn_edit_maintenace">Add Record</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

            </div><!-- end of sidenav wrapper div -->
        </main>

        <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
        </footer>
        <script src="/boss/js/ead.min.js"></script>
        <script src="/boss/js/pagesJS/customFormFunctions.js"></script>
        <script src="/boss/js/bootstrap-datepicker.js"></script>
        <script src="/boss/js/pagesJS/ApiCalls.js"></script>
        <script src="/boss/js/pagesJS/fleetMaintenaceList.js"></script>
        <script src="/boss/js/pagesJS/mainFleetPages.js"></script>

    </body>

</html>