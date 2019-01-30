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

            <nav id="sidebar">
            </nav>
            <!-- end of sidenav -->


            <section class="usa-section1">
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
                <section class="usa-section">

                    <div class="usa-grid usa-buffer-top">
                        <div class="usa-width-one-whole title-div">
                            <h1 id="title">Add Cell Phone</h1>
                        </div>
                    </div>
                    <div class="container trainBG padTop">
                        <form role="form" data-toggle="validator" class="generalInfo">
                            <div class="mainAdd dra-entry template" hidden>
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="dStation_OG">Select Employee Assigned To <span class="reqClass"> *</span></label>
                                            <select name="employee.id" required id="dStation_OG" class="form-control">
                                                <option value="">Select Employee</option>
                                            </select>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="PhoneMaker_OG">Phone Maker<span class="reqClass"> *</span></label>
                                            <input type="text" name="make_name" required id="PhoneMaker_OG" class="form-control"/>

                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="PhoneCarrier_OG">Phone Carrier<span class="reqClass"> *</span></label>
                                            <input type="text" name="Carrier_name" required id="PhoneCarrier_OG" class="form-control"/>

                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
								</div>
								<div class="row">
									<div class="col">
										<div class="form-group">
											<label for="Model_OG">Phone Model<span class="reqClass"> *</span></label>
											<input type="text" name="Model_name" required id="Model_OG" class="form-control"/>
											<div class="help-block with-errors"></div>
										</div>
									</div>
									<div class="col">
										<div class="form-group">
											<label for="SerialNum_OG">Phone Serial Number<span class="reqClass"> *</span></label>
											<input type="text" name="SerialNum_name" required id="SerialNum_OG" class="form-control"/>
											<div class="help-block with-errors"></div>
										</div>
									</div>
									<div class="col">
										<div class="form-group">
											<label for="Number_OG">Phone Number<span class="reqClass"> *</span></label>
											<input type="text" name="Number_name" required id="Number_OG" class="form-control"/>
											<div class="help-block with-errors"></div>
										</div>
									</div>
								</div>
								
								<div class="class">
									<div class="col">
                                        <div class="form-group">
                                            <label for="draTitle_OG">Notes<span class="reqClass"> *</span></label>
                                            <input type="text" name="Notes" required id="Notes_OG" class="form-control"/>

                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    </div>
                                    <div class="row">
                                            <div class="col">
                                                <div class="form-group text-left" >            
                                                    <button class="btn btn-lg btn_pers_copy copy_field">Copy This Row</button>
                                                    <button class="btn btn-lg btn_pers_remove remove_field"><i class="fa fa-trash-o" aria-hidden="true"></i></button>                                                                    
                                                </div>
                                            </div>
                                    </div>

                              

                            </div>
                            <div class="items" id="draRows"></div>
                    </div>
                            
                            <div class="row">
                                <div class="col col-md-6 text-center">
                                    <button id="viewReports" id="add" class="btn btn-info add_field_button">Add
                                        Additional Phones</button>
                                </div>
                                <div class="col col-md-6">
                                    <input type="button" id="submitV" value="Submit" class="btn btn-success" />
                                </div>
                            </div>
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
    <script src="/boss/js/pagesJS/addCellPhone.js"></script>
    <script src="/boss/js/pagesJS/personnelPages.js"></script>

</body>

</html>