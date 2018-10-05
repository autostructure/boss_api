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
                                    <a class="nav-link" id="training-tab" data-toggle="tab" href="#trainingCerts" role="tab" aria-controls="trainingCerts" >Training/Certs</a>
                                </li>

                                                            
                            </ul> <!-- end of tabs list -->

                            <div class="tab-content" id="myTabContent"><!-- start of tab content -->

                            <div hidden><!-- templates -->
                                <div class="row submitChangesTemplate" hidden>
                                    <div class="col col-md-6 offset-md-3">
                                        <div class="form-group">
                                            <input type="submit" class="btn btn-lg btn-success submitChanges" value="Save Changes">
                                        </div>
                                    </div>
                                </div>
                                <div class="col col-md-3" id="colEmployeePhoto">
                                    <img src="/img/person.jpg" alt="..." class=" img-thumbnail empPhoto">
                                    <p class="photoText">My Photo, Click to Edit</p>
                                </div>
                                <div class="col col-md-4" id="colEmployeePhoto2">
                                    <form method="POST" enctype="multipart/form-data" action="/profilePicture?employeeId=">
                                    <label for="formIdentificationInfo_employeePhoto">
                                        <input type="file" name="file" id="formIdentificationInfo_employeePhoto">
                                        <img src="/img/person.jpg" alt="..." class=" img-thumbnail empPhoto">
                                    </label>
                                    </form>
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
                                    <h4>The information on this form would be used to identify you in the event of an unforeseen, fatal event.</h4>
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
                                <h4 class="title3">Training Due Next 6 Months</h4>
                                <table id="tblTrainingDue" class="usa-table-borderless display dataTable no-footer">
                                    <thead>
                                        <tr>
                                            <th>Category</th>
                                            <th>Title</th>
                                            <th>Valid Until (Due Date)</th>
                                            <th>Select</th>
                                        </tr>
                                    </thead>
                                </table>
                                <h4 class="title3">Training Completed</h4>
                                <table id="tblTrainingComplete" class="usa-table-borderless display dataTable no-footer">
                                    <thead>
                                        <tr>
                                            <th>Category</th>
                                            <th>Title</th>
                                            <th>Location</th>
                                            <th>Presenter</th>
                                            <th>Valid Until</th>
                                            <th>Approved By</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <!-- END OF TRAINING TAB    -->    

                            <!--  START OF PROPERTY TAB  -->
                            <div class="tab-pane fade" id="property" role="tabpanel" aria-labelledby="property">
                                <form role="form" data-toggle="validator" class="vehicleInfo">
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
                            <!-- END OF PROPERTY TAB -->
                          


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