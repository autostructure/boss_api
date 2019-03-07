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
	<link rel="stylesheet" href="css/pageCSS/operatorLic.css">
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
							</div><br/>
						</form>
					</div>
							<!--<table id="mainTable">
							<tr><td>
							<table id="operatorLicTableOne" style="border-style:solid;border-width:2px">
								<tr>
									<td style="border-style:solid;border-width:2px" colspan="3" style="background-color:#CCCCCC" border="2">
										<label ID="tableOneTitle" class=""> U.S. Governement Motor Vehicle Operator's Identification Card</label></br>
									</td>

								</tr>
								<tr>
									<td style="border-style:solid;border-width:2px" class="text text-center">
										Name of Operator / not transferable<br/>
										<label id="operator_name"></label>
									</td>
								</tr>
								<tr>
									<td>
										<label class="text" style="font-weight:bold">Agency & Duty Station</label><br/>
										<label class="text address_one_location" id="address_one_location"></label><br/>
										<label class="text address_two_street" id="address_two_street"><label<br/>
										<label class="text address_three_state" id="text address_three_state"></label><br/>
									</td>
									<td>
										<label class="text">Defensive Driving</label><br/>
										<table id="DefenseDrivingTable">
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
										<table id="ATVcourseTable">
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
							<table id="operatorLicTableTwo">
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
										<table id="voidUnlessAcc">
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
							</table>-->
							<br/>
							<br/>

						<div id="print">
							<div style="width:800px;margin:auto;padding:10px;border-bottom:none; border-right:none" class="row">
								<div class="col">
									<div class="row" style="border-width:1px; border-style:solid;border-bottom: none">
										<div class="col">
											<p class="text text-center" style="font-weight:bold;">U.S. Government Motor Vehicle Operator's Identification Card</p>
										</div>
									</div>
									<div class="row" style="border-width:1px; border-style:solid;border-bottom:none;border-right:none">
										<div class="col" style="border-width:1px; border-style:solid">
											<p class="text text-center">Name of Operator / not transferable</p><br/>
											<label class="text text-center" id="operator_name">
										</div>
										<div class="col" style="border-width:1px; border-style:solid">
											<p style="font-size:5px">Date Issued:</p>
											<label id="date_issued" class="text"></label>
										</div>
									</div>
									<div class="row" style="border-width:1px; border-style:solid;border-right:none;border-bottom:none">
										<div class="col" style="border-width:1px; border-style:solid">
											<p class="text">Agency & Duty Station</p><br/>
											<label id="address_one_location"></label><br/>
											<label id="address_two_street"></label><br/>
											<label id="address_three_state"></label>
										</div>
										<div class="col" style="border-width:1px;height:20px;border-style:solid;border-right:none;border-bottom:none">
											<p class="text">Defensive Driving</p>
											<table>
												<tr style="height:30px">
													<td>
														<p class="text" style="font-size:10px">Date of Class:</p>
													</td>
													<td>
														<label id="defensive_date_class" class="text"></label>
													</td>
												</tr>
												<tr>
													<td>
														<p class="text">Expires:</p>
													</td>
													<td>
														<label id="defensive_expire_class" class="text"></label>
													</td>
												</tr>
											</table>

										</div>
									</div>
									<div class="row" style="border-width:1px;border-style:solid;border-right:none;border-bottom:none">
										<div class="col">
											<p class="text" class="text">Issued by (signature):</p>
										</div>
										<div class="col">
											
											<div class="row">
												<div class="col">
													<p class="text">ATV Rider Course</p>
												</div>
												<div class="col">
													<p class="text">Date of Class:</p>
												</div>
												<div class="col">
													<label id="ATV_date_class"></label>
												</div>
											</div>
											<div class="row">
												<div class="col">
													<p class="text">Expires:</p><br/>
												</div>
												<div class="col">
													<label id="ATV_expire" class="text"></label>
												</div>
											</div>
										</div>				
									</div>
									<div class="row" style="height:40px;border-width:1px; border-style:solid;border-right:none;">
										<div class="col">
											<p class="text">Operator's signature:</p><br/>
										</div>
										<div class="col">
											<p class="text">Restrictions:</p><br/>
										</div>
									</div>
								</div>
								<div class="col">
									<div class="row" style="border-width:1px; border-style:solid;border-bottom: none">
										<div class="col">
											<p class="text text-center">VOID UNLESS ACCOMPANIED BY A VALID STATE LICENSE</p>
										</div>
									</div>
									<div class="row" style="border-width:1px; border-style:solid;border-bottom: none">
										<div class="col" style="border-width:1px; border-style:solid">
											<p class="text-center">QUALIFIED TO OPERATE</p>
										</div>
									</div>
									<div class="row" style="height:200px;border-width:1px; border-style:solid;border-bottom: none">
										<div class="col">
											
											<div class="row">
												<div class="col">
													<p class="text">Type Of Vehicle and/or Equipment</P>
												</div>
												<div class="col">
													<p class="text">Capacity</P>
												</div>
												<div class="col">
													<p class="text">Issued by:</p>
												</div>
											</div>
											<div id="addItems">
											</div>


										</div>
									</div>
									<div class="row" style="border-width:1px; border-style:solid">
										<div class="col" style="border-width:1px; border-style:solid">
											<p class="text">
											The holder of this card is qualified to operate a U.S. Government<br/>
											vehicle(s) and/or equipment specified, subject to the restrictions set<br/>
											forth on this card. Card must be carried at all times when operating<br/>
											Government vehicles.
											</p>
										</div>
									</div>
								</div>
							</div>
							<br/><br/>
							<button id="print_lic" class="btn btn-info" style="text-align:center" value="Print">Print</button>
							<button id="test" value="test">test</button>
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