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
                        <img data-toggle="tooltip" data-html="true" title="Photo Credit: JDShaw" class="bannerImg" src="../../img/foggyMountain.jpg" alt="Banner Image"/>
                    </header>
                    <div class="usa-grid">
                        <div class="usa-width-one-whole">
                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                <a class="breadcrumbLink"href="/home">Dashboard |</a>
                                <a class="breadcrumbLink"href="/personnelDash">Personnel Dashboard |</a>
                                <a class="breadcrumbLinkMain"href="/viewAllEmployees">View All Employees</a>

                            </p>
                        </div>
                    </div>
                    <section class="usa-section">

                        <div class="usa-grid usa-buffer-top">
                            <div class="usa-width-one-whole title-div">
                                <h1 id="title">View All Employees</h1>
                            </div>

                        </div>
                        <div class="usa-grid usa-buffer-top">
                            <div class="use-width-one-whole content-div">
                                <h2 class="title2">Employee List</h2>
                                <div id="showHide">
                                    <div class="form-check" id="viewOldCheckbox">
                                        <input type="checkbox" id="viewOld" class="form-check-input">
                                        <!--label class="form-check-label" for="viewOld">View Old Training Entries</label-->
                                    </div>                                    
                                    <table id="allEmployees" class="usa-table-borderless display" style="width:100%">

                                        <thead>
                                            <tr>

                                                <th scope="col">Last Name</th>
                                                <th scope="col">First Name</th>
                                                <th scope="col">Supervisor</th>
                                                <th scope="col">Duty Station</th>
                                                <th scope="col">Satellite Phone</th>
                                                <th scope="col">Office Phone </th>                                        
                                                <th scope="col">FS Email</th>
                                                <th scope="col">Cell Phone</th>
                                                <th id="stop"></th>


                                            </tr>
                                        </thead>
                                        <tbody>

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
                            <p>Are you sure you want to delete this employee?</p>
                            <p id="employeeName_deleteModal"></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn_pers_copy" data-dismiss="modal">No</button>
                            <button type="button" id="deleteModal_delete" data-dismiss="modal" class="btn btn_pers_remove">Yes</button>
                        </div>
                    </div>
                </div>
            </div>


            <div id="myModal_contact" class="modal fade">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Contact Info</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body">
                                <p class="contactClass">Employee Contact</p>
                            <div class="row">
                                    
                                <div class="col">
                                    
                                    <div class="form-group">
                                        <label class="control-label">Primay Phone: </label> <input class="form-control" type="text" id="PrimryPhone" readonly></input>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label class="control-label">Secondary Phone: </label> <input class="form-control" type="text" id="SecondaryPhone" readonly></input>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label class="control-label">Personal Email: </label> <input class="form-control" type="text" id="PersonalEmail" readonly></input>
                                    </div>
                                </div>
                            </div>
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

							<div class="row">
								<div class="col">
									<div class="form-group">
										
									</div>
								</div>
								

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default btn_pers_copy" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>






        </main>

        <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
        </footer>
        <script src="js/ead.min.js"></script>

        <script src="js/pagesJS/ApiCalls.js"></script>
        <script src="js/pagesJS/viewAllEmployees.js"></script>
        <script src="js/pagesJS/personnelPages.js"></script>

    </body>

</html>