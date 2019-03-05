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
    <header class="usa-header usa-header-extended" role="banner" id="mainHeader">
    </header>
    <div class="usa-overlay"></div>
    <main id="main-content">
        <div class="wrapper">

            <!--<nav id="sidebar">
            </nav>-->
            <!-- end of sidenav -->


            <section class="">
                <header class="main-header" role="banner">
                    <img data-toggle="tooltip" data-html="true" title="Bucks in velvet on the edge of an aspen stand. Photo captured during data collection efforts for the 
                    Interior West Forest Inventory and Analysis (IWFIA) Program in Utah. (Forest Service photo by Scott Dickson)"
                    class="bannerImg" src="/boss/img/birch.jpg" alt="Banner Image" />
                </header>
                <div class="usa-grid">
                    <div class="usa-width-one-whole">
                        <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                            <a class="breadcrumbLink" href="/boss/home">Dashboard |</a>
                            <a class="breadcrumbLink" href="/boss/personnelDash">Personnel Dashboard |</a>
                            <a class="breadcrumbLinkMain" href="/boss/addDraEmployee">Record Employee DRA</a>
                        </p>
                    </div>
                </div>
                <section class="">

                    <div class="usa-grid usa-buffer-top">
                        <div class="usa-width-one-whole title-div">
                            <h1 id="title">Add Cell Phone</h1>
                        </div>
                    </div>
                    <div class="trainBG">
                        <form role="form" data-toggle="validator" class="generalInfo">
							<div class="row">
								<div class="col">
									<div class="form-group">
										<label class="text">Select Employee</label><br/>
										<select id="employees" class="form-control"></select>
									</div>
								</div>
							</div>
							<table border="0">
							<tr><td>
							<table id="operatorLicTableOne" border="2">
								<tr>
									<td colspan="3" style="background-color:#CCCCCC" border="2">
										<label ID="tableOneTitle" class=""> U.S. Governement Motor Vehicle Operator's Identification Card</label></br>
									</td>

								</tr>
								<tr>
									<td class="text text-center">
										Name of Operator / not transferable<br/>
										<label id="operator_
								</tr>
								<tr>
									<td border="2">
										<label class="text" style="font-weight:bold">Agency & Duty Station</label><br/>
										<label class="text address_one_location" id="address_one_location"></label><br/>
										<label class="text address_two_street" id="address_two_street"><label<br/>
										<label class="text address_three_state" id="text address_three_state"></label><br/>
									</td>
									<td border="2">
										<label class="text">Defensive Driving</label><br/>
										<table>
											<tr>
												<td>
													<label class="text">Date of Class:</label>
												</td>
												<td>
													<label class="text date_of_class" id="date_of_class"></label>
												</td>
											</tr>
											<tr>
												<td>
													<label class="text">Expires:</label>
												<td>
												<td>
													<label id="class_expires" class="text text-center class_expires"></label>
												</td>
											</tr>
										</table>
									</td>
								</tr>
								<tr>
									<td>
										<label class="text">Issued by (signature)</label>
									</td>
									<td>
										<label class="text">ATV Rider Course</label><br/>
										<table border="2">
											<tr>
												<td class="text-center">
													<label class="text">Date of Class:</label>
												</td>
												<td class="text-center">
													<label class="text date_of_ATV_class" id="date_of_ATV_class"></label>
												</td>
											</tr>
											<tr>
												<td class="text-center">
													<label class="text">Expires:</label>
												</td>
												<td class="text-center">
													<label class="text expire_ATV_class" id="expire_ATV_class"></label>
												</td>
											</tr>
										</table>
									</td>
								</tr>
								<tr>
									<td>
										<label class="text">Operator's signature:</label>
									</td>
									<td>
										<label class="text">Restrictions:</label>
									</td>
								</tr>
							</table>
							</td><td>
							<table id="OperatorsLicTableTwo" border="2">
								<tr>
									<td class="text-center" style="background-color:#CCCCCC">
										<label class="text">VOID UNLESS ACCOMPANIED BY A VAILD STATE LICENSE</label>
									</td>
								</tr>
								<tr>
									<td class="text-center">
										<label class="text" style="font-weight:bold">QUALIFIED TO OPERATE</label>
									</td>
								</tr>
								<tr>
									<td>
										<table border="2">
											<tr>
												<td class="text-center">
													<label class="text">Type Of Vehicle and/or Equipment</label>
												</td>
												<td class="text-center">
													<label class="text">Capacity</td>
												</td>
												<td class="text-center">
													<label class="text">Issued by:</label>
												</td>
											</tr>
											<tr>
												<td colspan="3">
													<div class="qualified_to_operate text text-center">
														placeholder for table
													</div>
												</td>
											</tr>
											<tr>
												<td colspan="3">
													<span class="text-center text" >
													The holder of this card is qualified to operate a U.S. Government
													vehicle(s) and/or equipment specified, subject to the restrictions set
													forth on this card. Card must be carried at all times when operating
													Government vehicles.
													</span>
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
							</td></tr>
							</table>
							<br/><br/>
							<button id="print_lic" class="btn btn-info" style="text-align:center" value="Print">Print</button>
							<button id="test" value="test">test</button>
						</form>
					 </div>         
                </section>
            </section>
        </div>
        <!-- end of sidenav wrapper div -->

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="successModal" aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="successModal">Success</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                <h3 class="modal_body">Awesome! Cell Phones Are Added.</h3>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn_pers_copy" id="viewList">View Phones List</button><br/>
                <button type="button" class="btn btn_pers_copy" id="addAnother">Record Another Phone</button>
                </div>
            </div>
            </div>
        </div>



        <div id="myModal_success" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <!--	<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
								<h4 class="modal-title text-center">success</h4> -->
                    </div>
                    <div class="modal-body">
                        <h3 class="text-center"> Successful Submit for Employee DRA's</h3>

                    </div>
                    <div class="modal-footer">
                        <button type="button" id="deleteModal_delete" data-dismiss="modal" class="btn">Continue</button>
                    </div>
                </div>
            </div>
        </div>

        <div id="myModal_error" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>-->
                        <h4 class="modal-title text-center">Unable to submit DRA</h4>
                    </div>
                    <div class="modal-body">
                        <p class="text-center">Unable to submit employee's:</p><br />
                        <div class="employees_error">
                        </div>


                    </div>
                    <div class="modal-footer">
                        <button type="button" id="deleteModal_delete" data-dismiss="modal" class="btn">Continue</button>
                    </div>
                </div>
            </div>
        </div>

    </main>

    <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
    </footer>
    <script src="/boss/js/ead.min.js"></script>
    <script src="/boss/js/bootstrap-datepicker.js"></script>
    <script src="/boss/js/pagesJS/customFormFunctions.js"></script>
	<!--<script src="/boss/js/pagesJS/HTMLtableCreator.js"></scipt>-->
    <script src="/boss/js/pagesJS/operatorLic.js"></script>
    <script src="/boss/js/pagesJS/personnelPages.js"></script>

</body>

</html>