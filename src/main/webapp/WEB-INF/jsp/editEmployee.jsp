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
    <link rel="stylesheet" href="/css/pagesCSS/hrPages.css">
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
                    <img data-toggle="tooltip" data-html="true" title="Photo Credit: JDShaw" class="bannerImg" src="../../img/foggyMountain.jpg" alt="Banner Image" />
                </header>
                <div class="usa-grid">
                    <div class="usa-width-one-whole">
                        <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                            <a class="breadcrumbLink" href="/home">Dashboard |</a>
                            <a class="breadcrumbLink" href="/personnelDash">Personnel Dashboard |</a>
                            <a class="breadcrumbLinkMain" href="/editEmployee">Edit Employee</a>
                        </p>
                    </div>
                </div>
                <section class="usa-section">
                    <div class="usa-grid usa-buffer-top">
                        <div class="usa-width-one-whole title-div">
                            <div id="title" class="row">
                                <span style="font-family:lightfont;">Edit Employee</span>
                                <div class="col-md-4 offset-md-4">
                                    <select class="form-control input-small" style="font-size:.5em!important;" id="chooseEmployee">
                                        <option>Choose Employee</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="success" class="alert alert-success" role="alert">
                        Update Successfull!
                    </div>
                    <div id="error" class="alert alert-danger" role="alert">
                        Error: <span id='errorText'></span>
                    </div>
                    <div class="usa-grid usa-buffer-top">
                        <div class="usa-width-one-whole faded">
                            <div class="border">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <!-- start of tabs list -->
                                    <li class="nav-item">
                                        <a class="nav-link active" id="general-tab" data-toggle="tab" href="#general" role="tab" aria-controls="generalInfo">General Info</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="work-tab" data-toggle="tab" href="#work" role="tab" aria-controls="workInfo">Work Info</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="emergency-tab" data-toggle="tab" href="#emergency" role="tab" aria-controls="emergencyInfo">Emergency Info</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="medical-tab" data-toggle="tab" href="#medical" role="tab" aria-controls="medicalInfo">Medical Info</a>
                                    </li>


                                </ul>
                                <!-- end of tabs list -->

                                <!--Templates Holder-->
                                <div hidden>
                                    <div class="col col-md-4" id="colEmployeePhoto2">
                                        <form method="POST" enctype="multipart/form-data" action="/profilePicture?employeeId=">
                                            <label for="formIdentificationInfo_employeePhoto" style="max-width:100%;">
                                                <input type="file" name="file" id="formIdentificationInfo_employeePhoto">
                                                <img src="/img/person.jpg" alt="..." class=" img-thumbnail empPhoto">
                                            </label>
                                        </form>
                                    </div>
                                </div>

                                <div class="tab-content" id="myTabContent">
                                    <!-- start of tab content -->


                                    <!--    START OF GENERAL TAB    -->
                                    <div class="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="generalInfo">

                                        <form role="form" data-toggle="validator" class="generalInfo" id="formGeneralInfo" action="javascript:0" method="POST">
                                            <input hidden id="employeeId" name="id" value="0">
                                            <div class="row">
                                                <div class="col col-md-4 offset-md-4">
                                                    <input type="button" id="submitEmployeeInfo" class="btn btn-success" value="Next">
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <!--    END OF GENERAL TAB  -->

                                    <!--    START OF WORK TAB   -->
                                    <div class="tab-pane fade" id="work" role="tabpanel" aria-labelledby="workInfo">
                                        <form role="form" data-toggle="validator" class="workInfo" id="formWorkInfo">
                                            <h4 class="title3">Employee Work Information</h4>
                                            <div class="row">
                                                <div class="col col-md-4 offset-md-4">
                                                    <input type="button" id="submitWorkInfo" class="btn btn-success" value="Next">
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <!--    END OF WORK TAB -->

                                    <!--    START OF EMERGENCY TAB  -->
                                    <div class="tab-pane fade" id="emergency" role="tabpanel" aria-labelledby="emergencyInfo">
                                        <form role="form" data-toggle="validator" class="emergencyInfo" id="formEmergencyInfo">
                                            <div class="row">
                                                <div class="col col-md-4 offset-md-4">
                                                    <input type="button" id="submitEmergencyInfo" class="btn btn-success" value="Next">
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                    <!--    END OF EMERGENCY TAB    -->

                                    <!--    START OF MEDICAL TAB  -->
                                    <div class="tab-pane fade" id="medical" role="tabpanel" aria-labelledby="medicalInfo">
                                        <form role="form" data-toggle="validator" class="medicalInfo" id="formMedicalInfo">
                                            <h4 class="title3">Medical Information</h4>
                                            <div class="row">
                                                <div class="col col-md-4 offset-md-4">
                                                    <input type="button" id="submitMedicalInfo" class="btn btn-success" value="Next">
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                    <!--    END OF MEDICAL TAB    -->


                                    <!--    START OF TRAINING TAB   -->
                                    <div class="tab-pane fade" id="training" role="tabpanel" aria-labelledby="trainingInfo">
                                    </div>
                                </div>
                                <!-- end of all tab content -->
                            </div>
                            <!-- end of border div -->
                        </div>
                    </div>
                </section>
            </section>

        </div>
        <!-- end of sidenav wrapper div -->
    </main>

    <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
    </footer>
    <script src="/js/ead.min.js"></script>
    <script src="/js/bootstrap-datepicker.js"></script>
    <script src="/js/pagesJS/customFormFunctions.js"></script>
    <script src="/js/pagesJS/editEmployee.js"></script>
    <script src="/js/pagesJS/personnelPages.js"></script>
    <script src="/js/pagesJS/ApiCalls.js"></script>

</body>

</html>