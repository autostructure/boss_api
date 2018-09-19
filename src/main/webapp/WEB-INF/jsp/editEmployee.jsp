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
    <link rel="stylesheet" href="/css/pagesCSS/editEmployee.css">
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
                            <a class="breadcrumbLink"href="/hrDash">HR Dashboard |</a>
                            <a class="breadcrumbLinkMain"href="/editEmployee">Edit Employee</a>
                        </p>
                    </div>
                </div>
                <section class="usa-section">
                    <div class="usa-grid usa-buffer-top">
                        <div class="usa-width-one-whole title-div">
                            <h1 id="title">Edit Employee</h1>
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
                                <ul class="nav nav-tabs" id="myTab" role="tablist"> <!-- start of tabs list -->
                                <li class="nav-item">
                                    <a class="nav-link active" id="general-tab" data-toggle="tab" href="#general" role="tab" aria-controls="generalInfo" >General Info</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="work-tab" data-toggle="tab" href="#work" role="tab" aria-controls="workInfo" >Work Info</a>
                                </li>                                                
                                <li class="nav-item">
                                    <a class="nav-link" id="emergency-tab" data-toggle="tab" href="#emergency" role="tab" aria-controls="emergencyInfo" >Emergency Info</a>
                                </li>                                                
                                <li class="nav-item">
                                    <a disabled class="disabled nav-link" id="training-tab" data-toggle="tab" href="#training" role="tab" aria-controls="trainingInfo" >Training Info</a>
                                </li>
                                                                
                                </ul> <!-- end of tabs list -->

                                <div class="tab-content" id="myTabContent"><!-- start of tab content -->


                                <!--    START OF GENERAL TAB    -->
                                <div class="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="generalInfo">
                                    
                                    <form role="form" data-toggle="validator" class="generalInfo" id="formGeneralInfo" action="javascript:0" method="POST">
                                        <input hidden id="employeeId" name="id" value="0">
                                        <div class="row">
                                            <div class="col col-md-4 offset-md-4">
                                                <input type="submit" id="submitEmployeeInfo" class="btn btn-success" value="Next">
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <!--    END OF GENERAL TAB  -->

                                <!--    START OF WORK TAB   -->
                                <div class="tab-pane fade" id="work" role="tabpanel" aria-labelledby="workInfo">
                                    <form role="form" data-toggle="validator" class="workInfo" id="formWorkInfo">
                                        <h4 class="title3">Employee Work Information</h4>
                                        <div class="col"><div class="form-group">
                                            <label for="dutyStation">Duty Station<span class="reqClass"> *</span></label>
                                            <select id="dutyStation" name="dutyStation" required name='dutyStation' class="form-control">
                                                <option value="">Choose Duty Station</option>
                                                <option value="ogden">Ogden, UT</option>
                                                <option value="mccall">McCall, MT</option>
                                                <option value="pontiac">Pontiac, MI</option>
                                            </select>
                                            <div class="help-block with-errors"></div>
                                        </div></div>
                                        <div class="col"><div class="form-group">
                                            <label for="activityCode">Activity Code<span class="reqClass"> *</span></label>
                                            <select id="activityCode" required name="activityCode.code" aria-label="Activity Code" class="form-control">
                                                <option value="">Choose Activity Code</option>
                                            </select>
                                            <div class="help-block with-errors"></div>
                                        </div></div>
                                        <div class="row">
                                            <div class="col col-md-4 offset-md-4">
                                                <input type="submit" id="submitWorkInfo" class="btn btn-success" value="Next">
                                            </div>    
                                        </div>
                                    </form>
                                </div>
                                <!--    END OF WORK TAB -->

                                <!--    START OF EMERGENCY TAB  -->
                                <div class="tab-pane fade" id="emergency" role="tabpanel" aria-labelledby="emergencyInfo">
                                    <form role="form" data-toggle="validator" class="emergencyInfo" id="formEmergencyInfo">
                                        <h4 class="title3">Emergency Contact Information</h4>
                                        <div class="row">
                                            <div class="col col-md-4 offset-md-4">
                                                <input type="submit" id="submitEmergencyInfo" class="btn btn-success">    
                                            </div>    
                                        </div>                                                

                                    </form>
                                </div>
                                <!--    END OF EMERGENCY TAB    -->

                                <!--    START OF TRAINING TAB   -->      
                                <div class="tab-pane fade" id="training" role="tabpanel" aria-labelledby="trainingInfo">
                                </div>
                                </div><!-- end of all tab content -->
                            </div><!-- end of border div -->
                        </div>
                    </div>                             
                </section>
            </section>                         
                
        </div><!-- end of sidenav wrapper div -->
    </main>

    <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
    </footer>
    <script src="/js/ead.min.js"></script>
    <script src="/js/bootstrap-datepicker.js"></script>
    <script src="/js/pagesJS/bootstrapFieldWriter.js"></script>
    <script src="/js/pagesJS/editEmployee.js"></script>
    <script src="/js/pagesJS/mainHRPages.js"></script>
    <script src="/js/pagesJS/ApiCalls.js"></script>

</body>

</html>