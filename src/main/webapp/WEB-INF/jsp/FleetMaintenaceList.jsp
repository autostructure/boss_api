<!doctype html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href=/boss/img/favicons/favicon.ico" type="image/x-icon">
        <title>FIA-BOSS</title>
        <link rel="stylesheet" href=/boss/css/ead.min.css">
        <link rel="stylesheet" href=/boss/css/bootstrap-datepicker3.css">
        <link rel="stylesheet" href=/boss/css/pagesCSS/all.css">
        <link rel="stylesheet" href=/boss/css/pagesCSS/fleetPages.css">
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
                        <img data-toggle="tooltip" data-html="true" title="Insect and Disease Training at start of field season. Photo captured during data collection efforts for the Interior West Forest Inventory and Analysis (IWFIA) Program in Wyoming. (Forest Service photo by IWFIA staff)" class="bannerImg" src="../../img/employees.jpg" alt="Banner Image/boss/>
                    </header>
                    <div class="usa-grid">
                        <div class="usa-width-one-whole">
                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                <a class="breadcrumbLink"href=/boss/home">Dashboard |</a>
                                <a class="breadcrumbLink"href=/boss/personnelDash">Personnel Dashboard |</a>
                                <a class="breadcrumbLinkMain"href=/boss/viewTraining">View Training</a>
                            </p>
                        </div>
                    </div>
                    <section class="usa-section">
                        <div class="usa-grid usa-buffer-top">
                            <div class="usa-width-one-whole title-div">
                                <h1 id="title">Maintenace List</h1>
                            </div>
                        </div>
                        <div class="usa-grid usa-buffer-top">
                            <div class="use-width-one-whole content-div">
                                <h2 class="title2">Maitenace List</h2>
                                <div id="showHide">
                                   <!-- <div class="form-check" id="viewOldCheckbox"> -->
                                        <!--<input type="checkbox" id="viewOld" class="form-check-input">-->
                                        <!--label class="form-check-label" for="viewOld">View Old Training Entries</label-->
                                   <!-- </div> -->
                                          <div class="row">
												<div class="col">
													<div class="form-group">
														<label>License: </label><input id="fleet_license_top" type="text" class="form-control fleet_license_top" readonly/>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>Equipment Number: </label><input type="text" class="form-control fleet_EquipNum_top" readonly/>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>VIN: </label><input type="text" class="form-control fleet_VIN_top" readonly/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col">
													<div class="form-group">
														<label>Model Year: </label><input type="text" class="form-control fleet_ModelYear_top" readonly/>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>Make: </label><input type="text" class="form-control fleet_Make_top" readonly/>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>Model: </label><input type="text" class="form-control fleet_Model_top" readonly/>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>color</label><input type="text" class="form-control fleet_color_top" readonly/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col">
													<div class="form-group">
														<label>Description: </label><input type="text" class="form-control fleet_Desc_top" readonly/>
													</div>
												</div>
											</div>
										

                                    <table id="tblFleetMaitenace" class="usa-table-borderless display" style="width:100%">
                                        <thead><tr>
                                            <th scope="col">Service Date</th>
                                            <th scope="col">Milage</th>
                                            <th scope="col">Vendor Maker</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Cost</th>
                                            <th scope="col">Bill Back</th>
                                            <th id="stop"></th>
											<th id="stop"></th>
                                        </tr></thead>
                                        <tbody></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div id="myModal_fullRecord" class="modal fade" role="dialog">
                            <div class="modal-dialog modal-lg" style="width:100%">
                                <div class="modal-content">
                                    <div class="modal-header">
                                            <h4 class="modal-title">Maitenace Full Record</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>

                                    </div>
                                    <div class="modal-body">
                                        <form id="form_training_renew">
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
														<label>Service Date: </label><input type="text" class="form-control fleet_serviceDate/boss/>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>Milage: </label><input type="text" class="form-control fleet_Milage/boss/>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>Vendor Name: </label><input type="text" class="form-control fleet_VendorName/boss/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col">
													<div class="form-group">
														<label>Description: </label><input type="text" class="form-control fleet_Desc/boss/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col">
													<div class="form-group">
														<label>Cost: </label><input type="text" class="form-control fleet_cost/boss/>
													</div>
												</div>
												<div class="col">
													<div class="form-group">
														<label>Bill Back: </label><input type="text" class="form-control fleet_BillBack/boss/>
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
                                        <button type="button" class="btn btn_pers_copy" data-dismiss="modal" id="btn_edit_maintenace">Submit Edit</button>
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
        <script src="js/ead.min.js"></script>
        <script src=/boss/js/pagesJS/customFormFunctions.js"></script>
        <script src=/boss/js/bootstrap-datepicker.js"></script>
        <script src=/boss/js/pagesJS/ApiCalls.js"></script>
        <script src=/boss/js/pagesJS/fleetMaintenaceList.js"></script>
        <script src=/boss/js/pagesJS/personnelPages.js"></script>

    </body>

</html>