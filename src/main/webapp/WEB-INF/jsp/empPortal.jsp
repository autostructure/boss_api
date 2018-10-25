<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/img/favicons/favicon.ico" type="image/x-icon">
    <title>FIA-BOSS</title>
    <link rel="stylesheet" href="/css/ead.min.css">
    <link rel="stylesheet" href="/css/pagesCSS/all.css">
    <link rel="stylesheet" href="/css/bootstrap-datepicker3.css">
    <link rel="stylesheet" href="/css/pagesCSS/empPortal.css">
    <link rel="stylesheet" href="/css/modal.css">
    <link rel="stylesheet" href="/css/pagesCSS/hrPages.css">

</head>

<body class="layout-demo">
    <header class="usa-header usa-header-extended" role="banner" id="mainHeader">
    </header>
        <div class="usa-overlay"></div>
        <main id="main-content">
            <section class="usa-section bgImg">
                <div class="usa-grid usa-buffer-top">
                    <nav id="sidebar" hidden></nav>
                    <div class="usa-width-one-whole faded">
                        <div class="border">
                            <ul class="nav nav-tabs" id="myTab" role="tablist"> <!-- start of tabs list -->
                                <li class="nav-item">
                                    <a class="nav-link" id="general-tab" data-toggle="tab" href="#general" role="tab" aria-controls="generalInfo" >General Info</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="emergency-tab" data-toggle="tab" href="#emergency" role="tab" aria-controls="emergencyInfo" >Emergency Info</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="identification-tab" data-toggle="tab" href="#identification" role="tab" aria-controls="identificationInfo" >Identifying Features</a>
                                </li>
                                <!-- <li class="nav-item">
                                    <a class="nav-link" id="checkIn-tab" data-toggle="tab" href="#checkIn" role="tab" aria-controls="checkIn" >Check In - Check Out</a>
                                </li> -->
                                <li class="nav-item">
                                    <a class="nav-link" id="property-tab" data-toggle="tab" href="#property" role="tab" aria-controls="property" >Fleet Usage</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="training-tab" data-toggle="tab" href="#trainingCerts" role="tab" aria-controls="trainingCerts" >Training/DRA</a>
                                </li>

                                                            
                            </ul> <!-- end of tabs list -->

                            <div class="tab-content" id="myTabContent"><!-- start of tab content -->

                            <div hidden><!-- templates -->
                                <div class="row submitChangesTemplate" hidden>
                                    <div class="col col-md-6 offset-md-3">
                                        <div class="form-group">
                                            <!--input type="submit" class="btn btn-lg btn-success submitChanges" value="Save Changes"-->
                                        </div>
                                    </div>
                                </div>
                                <div class="col col-md-3" id="colEmployeePhoto">
                                    <a href="#Identification">
                                        <img src="/img/person.jpg" alt="..." class=" img-thumbnail empPhoto">
                                        <p class="photoText">My Photo, Click to Edit</p>
                                    </a>
                                </div>
                                <div class="col col-md-4" id="colEmployeePhoto2">
                                    <form method="POST" enctype="multipart/form-data" action="/profilePicture?employeeId=">
                                    <label for="formIdentificationInfo_employeePhoto">
                                        <input type="file" name="file" id="formIdentificationInfo_employeePhoto">
                                        <img src="/img/person.jpg" alt="..." class=" img-thumbnail empPhoto">
                                    </label>
                                    </form>
                                </div>
                                <div id="templateButtonList" class="dropdown1">
                                    <button class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                                    <div id="dropList" class="dropdown-content1">
                                        <a class="btn-modal btn-modal-upload" data-toggle="modal" data-target="#myModal_upload" href="#">Upload Documents</a>
                                        <a class="btn-modal btn-modal-remove" data-toggle="modal" data-target="#myModal_remove" href="#">Remove Training</a>
                                        <a class="btn-modal btn-modal-edit" data-toggle="modal" href="#">Edit Training</a>
                                        <a class="btn-modal btn-modal-renew" data-toggle="modal" data-target="#myModal_renew" href="#">Renew Training</a>
                                    </div>
                                </div>
                            </div>
                            <!--  START OF GENERAL TAB      -->
                            <div class="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="generalInfo">
                                <form role="form" data-toggle="validator" id="formEmployeeInfo"></form>
                            </div>
                            <!--  END OF GENERAL TAB         -->

                            <!--  START OF EMERGENCY TAB     -->
                            <div class="tab-pane fade" id="emergency" role="tabpanel" aria-labelledby="emergencyInfo">
                                <form role="form" data-toggle="validator" id="formEmergencyInfo"></form>
                            </div>
                            <!--  END OF EMERGENCY TAB  -->
                            
                            <!--  START OF IDENTIFICATION TAB     -->
                            <div class="tab-pane fade" id="identification" role="tabpanel" aria-labelledby="identificationInfo">
                                <form role="form" data-toggle="validator" class="identificationInfo" id="formIdentificationInfo">
                                    <h4 class="title3">Identifying Features</h4>
                                    <h4>This information is used for emergency purposes only.</h4>
                                </form>
                            </div>
                            <!--  END OF IDENTIFICATION TAB  -->

                            <!--  START OF CHECK IN TAB -->
                            <!-- <div class="tab-pane fade" id="checkIn" role="tabpanel" aria-labelledby="checkIn">
                                <form role="form" data-toggle="validator" id="formCheckIn">
                                    <h4 class=title3>Check In / Check Out - <span class='info'>You are currently Checked Out.</span></h4>
                                    <br><br>
                                    <div class="row">
                                        <h1 class="col-md-6" disabled>Check Out</h1>
                                        <h1 class="col-md-6">Check Back In</h1>
                                    </div>
                                </form>
                            </div> -->
                            <!--  END OF CHECK IN TAB   -->                                    

                            <!-- START OF TRAINING TAB  -->
                            <div class="tab-pane fade" id="trainingCerts" role="tabpanel" aria-labelledby="trainingCerts">
                                <h2 class="title2">Training List</h2>
                                <div id="showHide">
                                    <div class="form-check" id="viewOldCheckbox">
                                        <input type="checkbox" id="viewOld" class="form-check-input">
                                        <!--label class="form-check-label" for="viewOld">View Old Training Entries</label-->
                                    </div>
                                    <table id="tblTraining" class="usa-table-borderless display" style="width:100%">
                                        <thead><tr>
                                            <th scope="col">Employee Namecode</th>
                                            <th scope="col">Training Title</th>
                                            <th scope="col">Date Completed</th>
                                            <th scope="col">Valid Until</th>
                                            <th scope="col">Approved By</th>
                                            <th id="stop"></th>
                                        </tr></thead>
                                        <tbody></tbody>
                                    </table>
                                </div>
                                <h2 class="title2">DRA List</h2>
                                <div id="showHide">
                                    <div class="form-check" id="viewOldCheckbox">
                                        <input type="checkbox" id="viewOld_dra" class="form-check-input">
                                        <!--label class="form-check-label" for="viewOld">View Old Training Entries</label-->
                                    </div>
                                    <table id="tblDRA" class="usa-table-borderless display" style="width:100%">
                                        <thead><tr>
                                            <th scope="col">Employee Namecode</th>
                                            <th scope="col">Training Title</th>
                                            <th scope="col">Date Completed</th>
                                            <th scope="col">Valid Until</th>
                                            <th id="stop"></th>
                                        </tr></thead>
                                        <tbody></tbody>
                                    </table>
                                </div>
                            </div>
                            <div id="myModal_renew" class="modal fade" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                            <h4 class="modal-title">Renew Training</h4>
                                        </div>
                                        <div class="modal-body">
                                            <form id="form_training_renew">
                                                <p>Renew this class for <span class='employeeName'></span>?</p>
                                                <p><span class='category'></span> - <span class='trainingCourse'></span></p>
                                                <p><span class='description'></span></p>
                                                <input hidden name='employee.id'>
                                                <input hidden name='trainingCourseId'>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn" data-dismiss="modal">Cancel</button>
                                            <button type="button" class="btn" data-dismiss="modal" id="btn_renew_training">Renew</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="myModal_upload" class="modal fade" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                            <h4 class="modal-title">Add Documents and Certifications</h4>
                                        </div>
                                        <div class="modal-body">
                                            <span id="certificate_list"></span>
                                            <hr>
                                            <p>Add a document for the class "<span class='trainingCourse'></span>" for the employee <span class='employeeName'></span>?</p>
                                            <form id="form_training_upload" method="POST" enctype="multipart/form-data" action="/certificate?trainingId=">
                                                <input name='id' class='trainingId' hidden>
                                                <label for="form_training_upload_file">
                                                    <input type="file" name="file" id="form_training_upload_file">
                                                </label>
                                                <label for="form_training_upload_description">
                                                    Description
                                                    <input type="text" name="description" id="form_training_upload_description">
                                                </label>
                                                <br>
                                                <button type="button" class="btn" id="btn_add_training_docs">Add</button>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                                <button type="button" class="btn" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="myModal_remove" class="modal fade" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <form id="form_training_remove">
                                            <input name='id' class='trainingId' hidden>
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                <h4 class="modal-title">Remove Training</h4>
                                            </div>
                                            <div class="modal-body">
                                                <p>Remove the class "<span class='trainingCourse'></span>" for the employee <span class='employeeName'></span>?</p>
                                                <p>If you Confirm this, you will have to re-add it.</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn" data-dismiss="modal">Cancel</button>
                                                <button type="button" class="btn text-danger" data-dismiss="modal" id="btn_remove_training">Yes, Remove</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- END OF TRAINING TAB    -->    

                            <!--  START OF INVENTORY TAB  -->
                            <div class="tab-pane fade" id="property" role="tabpanel" aria-labelledby="inventory">
                                <form role="form" data-toggle="validator" class="inventoryInfo">
                                    <h4 class="title3">Monthly Vehicle Usage</h4>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group">
                                                <label class="" for="vMonth">Current Month<span class="reqClass"> *</span></label>
                                                <input type="text" class="form-control" id="vMonth" required placeholder="Enter Current Month" aria-label="Current Month">
                                                <div class="help-block with-errors"></div>
                                            </div>                                                     
                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label class="" for="vYear">Current Year<span class="reqClass"> *</span></label>
                                                <input type="text" class="form-control" id="vYear" required placeholder="Enter Current Year" aria-label="Current Year">
                                                <div class="help-block with-errors"></div>
                                            </div>                                                     
                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label class="" for="vLicense">Vehicle License<span class="reqClass"> *</span></label>
                                                <input type="text" class="form-control" id="vLicense" required placeholder="Enter Vehicle License" aria-label="Vehicle License">
                                                <div class="help-block with-errors"></div>
                                            </div>                                                     
                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label class="" for="vOpCrew">Operator Crew Number</label>
                                                <input type="text" class="form-control" id="vOpCrew" required placeholder="Operator Crew Number" aria-label="Operator Crew Number">
                                                <div class="help-block with-errors"></div>
                                            </div>                                                     
                                        </div>                                                                                                
                                    </div>
                                    <h4 class="title4">Last Month</h4>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group">
                                                <label class="" for="vEndMileage">Ending Mileage<span class="reqClass"> *</span></label>
                                                <input type="text" class="form-control" id="vEndMileage" required placeholder="Enter Ending Mileage" aria-label="Ending Mileage">
                                                <div class="help-block with-errors"></div>
                                            </div>                                                     
                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label class="" for="vTotalGas">Total Gallons of Gas Used<span class="reqClass"> *</span></label>
                                                <input type="text" class="form-control" id="vTotalGas" required placeholder="Enter Total Gallons of Gas Used" aria-label="Total Gallons of Gas Used">
                                                <div class="help-block with-errors"></div>
                                            </div>                                                     
                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label class="" for="vTotalOil">Total Quarts of Oil Used<span class="reqClass"> *</span></label>
                                                <input type="text" class="form-control" id="vTotalOil" required placeholder="Enter Quarts of Oil Used" aria-label="Total Quarts of Oil Used">
                                                <div class="help-block with-errors"></div>
                                            </div>                                                     
                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label class="" for="vDaysUsed">Total of Days Used<span class="reqClass"> *</span></label>
                                                <input type="text" class="form-control" id="vDaysUsed" required placeholder="Enter Number of Days Used" aria-label="Total of Days Used">
                                                <div class="help-block with-errors"></div>
                                            </div>                                                     
                                        </div>                                                                                                                                                
                                    </div>
                                    <div class="row">

                                            <div class="col col-md-6">
                                                <input type="submit" id="submitV" class="btn btn-success">    
                                            </div>   
                                            <div class="col col-md-6 text-center">
                                                <button id="viewReports" class="btn btn-info">View My Vehicle Reports</button> 
                                            </div>                                                                                                          

                                    </div>
                                </form>
                            </div>
                            <!-- END OF INVENTORY TAB -->
                          


                            </div><!-- end of all tab content -->
                        </div><!-- end of border div -->
                    </div>
                </div>
            </section>
        </main>

        <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
        </footer>
        <script src="/js/ead.min.js"></script>
        <script src="/js/bootstrap-datepicker.js"></script>
        <script src="/js/pagesJS/customFormFunctions.js"></script>
        <script src="/js/pagesJS/empPortal.js"></script>
        <script src="/js/pagesJS/personnelPages.js"></script>
        <script src="/js/pagesJS/ApiCalls.js"></script>
</body>

</html>