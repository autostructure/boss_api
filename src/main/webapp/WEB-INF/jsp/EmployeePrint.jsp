<!DOCTYPE html>
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
    <header class="usa-header usa-header-extended screen unprintable" role="banner" id="mainHeader">
    </header>
    <div class="usa-overlay screen unprintable"></div>
    <main id="main-content screen unprintable">
        <div class="wrapper ">

            <nav id="sidebar">
            </nav>
            <!-- end of sidenav -->


            <section class="usa-section1">
                <header class="main-header" role="banner">
                    <img data-toggle="tooltip" data-html="true" title="Bucks in velvet on the edge of an aspen stand. Photo captured during data collection efforts for the 
                    Interior West Forest Inventory and Analysis (IWFIA) Program in Utah. (Forest Service photo by Scott Dickson)"
                    class="bannerImg" src="../../img/birch.jpg" alt="Banner Image" />
                </header>
                <div class="usa-grid">
                    <div class="usa-width-one-whole">
                        <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                            <a class="breadcrumbLink" href=/boss/home">Dashboard |</a>
                            <a class="breadcrumbLink" href=/boss/personnelDash">Personnel Dashboard |</a>
                            <a class="breadcrumbLinkMain" href=/boss/addDraEmployee">Add DRA by Employee</a>
                        </p>
                    </div>
                </div>
                <section class="usa-section">

                    <div class="usa-grid usa-buffer-top">
                        <div class="usa-width-one-whole title-div">
                            <h1 id="title">Print Employee Emergency And Identification Info</h1>
                        </div>
                    </div>
                    <div class="container trainBG padTop">
						<table id="EmployeePrintTable" class="usa-table-borderless display" style="width:100%">
							<thead>
								<tr>
                                    <th scope="col">Employee Name</th>
                                    <th scope="col">Employee Title</th>
									<th scope="col">Employee Position
                                    <th scope="col">Crew Position</th>
									<th scope="col">Field Status</th>
									<th scope="col">Duty Station</th>
									<th scope="col"></th>
									
									<th id="stop"></th>
								</tr>
                            </thead>
                            <tbody>

							</tbody>
						</table>


						<div id="myModal_print" class="modal fade">
                <div class="modal-dialog modal-full" role="document" style="min-width:100%;margin:0;">
                    <div class="modal-content" style="min-height:0">
                        <div class="modal-header">
                            <h4 class="modal-title text-center" >Emergency Information</h4>
                            
                        </div>
                        <div class="modal-body">

                            <p class="contactClass">Primary Emergency Contact</p>                            
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label class="control-label">First Name: </label> <input class="form-control" type="text" id="FirstNameOne" readonly></input>
                                    </div>
                                </div> 
                                <div class="col">
                                    <div class="form-group">
                                        <label class="control-label">Last Name: </label> <input class="form-control" type="text" id="LastNameOne" readonly></input>
                                    </div>
                                </div> 
                                <div class="col">
                                    <div class="form-group">
                                        <label class="control-label">Relationship: </label> <input class="form-control" type="text" id="FirstRelationship" readonly></input>
                                    </div>
                                </div>
                            </div>
                            <div class="row">                                
                                <div class="col">
                                    <div class="form-group">
                                        <label class="control-label">Primary Phone: </label> <input class="form-control" type="text" id="HomePhoneOne" readonly></input>
                                    </div>
                                </div>      
                                <div class="col">
                                    <div class="form-group">
                                        <label class="control-label">Secondary Phone: </label> <input class="form-control" type="text" id="CellPhoneOne" readonly></input>
                                    </div>
                                </div>                                                          
                                <div class="col">
                                    <div class="form-group">
                                        <label class="control-label">Work Phone: </label> <input class="form-control" type="text" id="WorkPhoneOne" readonly></input>
                                    </div>
                                </div>                                


                            </div>

                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label class="control-label">Address: </label> <input class="form-control" type="text" id="AddressOne" readonly></input>
                                    </div>
                                </div>                                                                                              
                                <div class="col">
                                    <div class="form-group">
                                        <label class="control-label">City: </label> <input class="form-control" type="text" id="CityOne" readonly></input>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label class="control-label">State: </label> <input class="form-control" type="text" id="StateOne" readonly></input>
                                    </div>
                                </div>                                
                                <div class="col">
                                    <div class="form-group">
                                        <label class="control-label">Zip: </label> <input class="form-control" type="text" id="ZipOne" readonly></input>
                                    </div>
                                </div>


                            </div>
                            <p class="contactClass">Secondary Emergency Contact</p> 
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label class="control-label">First Name: </label> <input class="form-control" type="text" id="FirstNameTwo" readonly></input>
                                    </div>
                                </div>                                 
                                <div class="col">
                                    <div class="form-group">
                                        <label class="control-label">Last Name: </label> <input class="form-control" type="text" id="LastNameTwo" readonly></input>
                                    </div>
                                </div>     
                                <div class="col">
                                    <div class="form-group">
                                        <label class="control-label">Relationship: </label> <input class="form-control" type="text" id="SecondRelationship" readonly></input>
                                    </div>
                                </div>  
                            </div>
                            <div class="row">                                                          
                                <div class="col">
                                    <div class="form-group">
                                        <label class="control-label">Primary Phone: </label> <input class="form-control" type="text" id="HomePhoneTwo" readonly></input>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label class="control-label">Secondary Phone: </label> <input class="form-control" type="text" id="CellPhoneTwo" readonly></input>
                                    </div>
                                </div> 
                                <div class="col">
                                    <div class="form-group">
                                        <label class="control-label">Work Phone: </label> <input class="form-control" type="text" id="WorkPhoneTwo" readonly></input>
                                    </div>
                                </div>   
                            </div>
                            <div class="row">                                                            
                                <div class="col">
                                    <div class="form-group">
                                        <label class="control-label">Address: </label> <input class="form-control" type="text" id="AddressTwo" readonly></input>
                                    </div>
                                </div> 
                                <div class="col">
                                    <div class="form-group">
                                        <label class="control-label">City: </label> <input class="form-control" type="text" id="CityTwo" readonly></input>
                                    </div>
                                </div>                                                                                                                         
                               
                            </div>

                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label class="control-label">State: </label> <input class="form-control" type="text" id="StateTwo" readonly></input>
                                    </div>
                                </div>  
                                <div class="col">
                                    <div class="form-group">
                                        <label class="control-label">Zip: </label> <input class="form-control" type="text" id="ZipTwo" readonly></input>
                                    </div>
                                </div>   
                              
                            </div>
                            <p class="contactClass">Identifying Information</p>   
							<div class="row">
								<div class="col">
									<div class="form-group">
										<label class="control-label">Eye Color:</label><input class="form-control" type="text" id="eyeColor" readonly></input>			
									</div>
								</div>
								<div class="col">
									<div class="form-group">
										<label class="control-label">Hair Color:</label><input class="form-control" type="text" id="hairColor" readonly></input>
									</div>
                                </div>
                                <div class="col">
									<div class="form-group">
										<label class="control-label">Gender:</label><input class="form-control" type="text" id="gender" readonly></input>			
									</div>
								</div>
							</div>



							<div class="row">
								<div class="col">
									<div class="form-group">
										<label class="control-label">Height(Feet):</label><input class="form-control" type="text" id="heightFeet" readonly></input>			
									</div>
								</div>
								<div class="col">
									<div class="form-group">
										<label class="control-label">Height(Inches):</label><input class="form-control" type="text" id="heightInches" readonly></input>
									</div>
								</div>
								<div class="col">
									<div class="form-group">
										<label class="control-label">Weight (Pounds):</label><input class="form-control" type="text" id="weight" readonly></input>
									</div>
								</div>
                            </div>
                            <p class="contactClass">Other Information</p>  
                                <div class="row">
								<div class="col">
									<div class="form-group">
										<textarea id="otherID" class="form-control"></textarea>
									</div>
								</div>
							</div>


							
								

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default btn_pers_copy" data-dismiss="modal">Close</button>
							<button type="button" class="btn btn-default btn_pers_print" data-dismiss="modal">Print</button>
                        </div>
                    </div>
                </div>
				</div>
            

			

					</div>
				</section>
			</section>
		</div>

	</main>

	<div class="printable"></div>

    <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
    </footer>
    <script src="js/ead.min.js"></script>
    <script src="js/bootstrap-datepicker.js"></script>
	<script src="js/pagesJS/ApiCalls.js"></script>
    <script src="js/pagesJS/customFormFunctions.js"></script>
    <script src="js/pagesJS/employeePrint.js"></script>
    <script src="js/pagesJS/personnelPages.js"></script>

</body>

</html>