<!doctype html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/boss/img/favicons/favicon.ico" type="image/x-icon">
        <title>FIA-BOSS</title>
        <link rel="stylesheet" href="/boss/css/ead.min.css">
        <link rel="stylesheet" href="/boss/css/bootstrap-datepicker3.css">
        <link rel="stylesheet" href="/boss/css/pagesCSS/all.css">
        <link rel="stylesheet" href="/boss/css/pagesCSS/hrPages.css">
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
                            <img data-toggle="tooltip" data-html="true" title="Bucks in velvet on the edge of an aspen stand. Photo captured during data collection efforts for the 
                            Interior West Forest Inventory and Analysis (IWFIA) Program in Utah. (Forest Service photo by Scott Dickson)"
                            class="bannerImg" src="/boss/img/birch.jpg" alt="Banner Image" />
                    </header>
                    <div class="usa-grid">
                        <div class="usa-width-one-whole">
                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                <a class="breadcrumbLink" href="/boss/home">Dashboard |</a>
                                <a class="breadcrumbLink" href="/boss/personnelDash">Personnel Dashboard |</a>
                                <a class="breadcrumbLinkMain" href="/boss/viewRecordedDras">View All DRAs</a>
                            </p>
                        </div>
                    </div>
                    <section class="usa-section">
                        <div class="usa-grid usa-buffer-top">
                            <div class="usa-width-one-whole title-div">
                                <h1 id="title">View Recorded DRAs</h1>
                            </div>
                        </div>
                        <select hidden id="firstDropDown" class="form-control col-md-6">
                            <option value="A">Alpha</option>
                            <option value="B">Beta</option>
                            <option value="C">Gamma</option>
                        </select>
                        <select hidden id="secondDropDown" class="form-control col-md-6">
                            <option value="A1" data-filter="A">A1</option>
                            <option value="B1" data-filter="B">B1</option>
                            <option value="C1" data-filter="C">C1</option>
                            <option value="A2" data-filter="A">A2</option>
                            <option value="B2" data-filter="B">B2</option>
                            <option value="C2" data-filter="C">C2</option>
                            <option value="A3" data-filter="A">A3</option>
                            <option value="B3" data-filter="B">B3</option>
                            <option value="C3" data-filter="C">C3</option>
                        </select>
                        <div hidden><!--Templates-->
                            <div class="dropdown1 template">
                                <button id="test_click" class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                                <div id="dropList" class="dropdown-content1">
                                    <a data-toggle="modal" data-target="#myModal_delete" href="#" data-value=0 class="deleteBtn" id="deleteBtn">Delete DRA</a>
                                    <a data-toggle="modal" data-target="#myModal_renew" href="#" data-value=0 class="renewBtn" id="renewBtn">Renew DRA</a>
                                </div>
                            </div>
                        </div>
                        <div class="usa-grid usa-buffer-top">
                            <div class="use-width-one-whole content-div">
                                <h2 class="title2">DRA List</h2>
                                <div id="showHide">
                                    <div class="form-check" id="viewOldCheckbox">
                                        <input type="checkbox" id="viewOld" class="form-check-input">
                                        <!--label class="form-check-label" for="viewOld">View Old Training Entries</label-->
                                    </div>
                                    <table id="tblDras" class="usa-table-borderless display" style="width:100%">
                                        <thead><tr>
                                            <th scope="col">Employee Name</th>
                                            <th scope="col">DRA Title</th>
                                            <th scope="col">Date Assessment</th>
                                            <th scope="col">Valid Until</th>
                                            <th id="stop"></th>
                                        </tr></thead>
                                        <tbody></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div id="myModal_renew" class="modal fade" role="dialog">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                            <h4 class="modal-title">Renew Dra</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>

                                    </div>
                                    <div class="modal-body">
                                        <form id="form_Dra_renew">
                                            <p>Renew the DRA "<span class='courseTitle'></span>" for <span class='employeeName'></span>?</p>
                                            <input hidden name='employee.id'>
                                            <input hidden name='deliberativeRiskAssessmentCourseId'>
                                            <input hidden name='wiggleRoom'>
                                            <input hidden name='completeBy'>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn_pers_remove" data-dismiss="modal">Cancel</button>
                                        <button type="button" class="btn btn_pers_copy" data-dismiss="modal" id="btn_renew_DRA">Renew</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="myModal_delete" class="modal fade" role="dialog">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <form id="form_training_remove">
                                        <input name='id' class='trainingId' hidden>
                                        <div class="modal-header">
                                                <h4 class="modal-title">Remove Training</h4>
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>

                                        </div>
                                        <div class="modal-body">
                                            <p>Remove the DRA "<span class='courseTitle'></span>" for <span class='employeeName'></span>?</p>
                                            <p>If you Confirm this, you will have to re-add it.</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn_pers_copy" data-dismiss="modal">Cancel</button>
                                            <button type="button" class="btn btn_pers_remove" data-dismiss="modal" id="btn_remove_DRA">Yes, Remove</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>                         

            </div><!-- end of sidenav wrapper div -->
        </main>

        <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
        </footer>
        <script src="/boss/js/ead.min.js"></script>

        <script src="/boss/js/bootstrap-datepicker.js"></script>
        <script src="/boss/js/pagesJS/customFormFunctions.js"></script>
        <script src="/boss/js/pagesJS/ApiCalls.js"></script>
        <script src="/boss/js/pagesJS/viewRecordedDras.js"></script>
        <script src="/boss/js/pagesJS/personnelPages.js"></script>

    </body>

</html>