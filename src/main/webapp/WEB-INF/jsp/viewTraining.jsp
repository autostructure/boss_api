<!doctype html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/img/favicons/favicon.ico" type="image/x-icon">
        <title>FIA-BOSS</title>
        <link rel="stylesheet" href="/css/ead.min.css">
        <link rel="stylesheet" href="/css/bootstrap-datepicker3.css">
        <link rel="stylesheet" href="/css/pagesCSS/all.css">
        <link rel="stylesheet" href="/css/pagesCSS/hrPages.css">
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
                        <img data-toggle="tooltip" data-html="true" title="Insect and Disease Training at start of field season. Photo captured during data collection efforts for the Interior West Forest Inventory and Analysis (IWFIA) Program in Wyoming. (Forest Service photo by IWFIA staff)" class="bannerImg" src="../../img/employees.jpg" alt="Banner Image"/>
                    </header>
                    <div class="usa-grid">
                        <div class="usa-width-one-whole">
                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                <a class="breadcrumbLink"href="/home">Dashboard |</a>
                                <a class="breadcrumbLink"href="/personnelDash">Personnel Dashboard |</a>
                                <a class="breadcrumbLinkMain"href="/viewTraining">View Training</a>
                            </p>
                        </div>
                    </div>
                    <section class="usa-section">
                        <div class="usa-grid usa-buffer-top">
                            <div class="usa-width-one-whole title-div">
                                <h1 id="title">View Training</h1>
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
                            <div id="templateButtonList" class="dropdown1">
                                <button class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                                <div id="dropList" class="dropdown-content1">
                                    <a class="btn-modal btn-modal-upload1" data-toggle="modal" data-target="#myModal_upload" href="#">Upload Documents</a>
                                    <a class="btn-modal btn-modal-approve" data-toggle="modal" data-target="#myModal_approve" href="#">Approve Training</a>
                                    <a class="btn-modal btn-modal-remove" data-toggle="modal" data-target="#myModal_remove" href="#">Remove Training</a>
                                    <!-- <a class="btn-modal btn-modal-edit" data-toggle="modal" href="#">Edit Training</a> -->
                                    <a class="btn-modal btn-modal-renew" data-toggle="modal" data-target="#myModal_renew" href="#">Renew Training</a>
                                    <a class="btn-modal btn-modal-renew" data-toggle="modal" data-target="#myModal_unrequire" href="#">Mark Training as Unrequired</a>
                                </div>
                            </div>
                        </div>
                        <div class="usa-grid usa-buffer-top">
                            <div class="use-width-one-whole content-div">
                                <h2 class="title2">Training List</h2>
                                <div id="showHide">
                                    <div class="form-check" id="viewOldCheckbox">
                                        <input type="checkbox" id="viewOld" class="form-check-input">
                                        <!--label class="form-check-label" for="viewOld">View Old Training Entries</label-->
                                    </div>
                                    <table id="tblTraining" class="usa-table-borderless display" style="width:100%">
                                        <thead><tr>
                                            <th scope="col">Employee Name</th>
                                            <th scope="col">Training Title</th>
                                            <th scope="col">Date Completed</th>
                                            <th scope="col">Supervisor</th>
                                            <th scope="col">Valid Until</th>
											
                                            <th id="col"></th>
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
                                            <h4 class="modal-title">Renew Training</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>

                                    </div>
                                    <div class="modal-body">
                                        <form id="form_training_renew">
                                            <p>Renew this class for <span class='employeeName'></span>?</p>
                                            <p><span class='trainingCourse'></span></p>
                                            <p><span class='description'></span></p>
                                            <input hidden name='employee.id'>
                                            <input hidden name='trainingCourseId'>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn_pers_remove " data-dismiss="modal">Cancel</button>
                                        <button type="button" class="btn btn_pers_copy" data-dismiss="modal" id="btn_renew_training">Renew</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="myModal_upload" class="modal fade" role="dialog">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                            <h4 class="modal-title">Add Documents and Certifications</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>

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
                                            
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                            <button type="button" class="btn btn_pers_remove" data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn_pers_copy" id="btn_add_training_docs">Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="myModal_approve" class="modal fade" role="dialog">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <form id="form_training_approve">
                                        <input name='id' class='trainingId' hidden>
                                        <div class="modal-header">
                                                <h4 class="modal-title">Approve Training</h4>
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>

                                        </div>
                                        <div class="modal-body">
                                            <p>Approve the training "<span class='trainingCourse'></span>" for the employee <span class='employeeName'></span>?</p>
                                            
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn_pers_copy" data-dismiss="modal">Cancel</button>
                                            <button type="button" class="btn btn_pers_remove" data-dismiss="modal" id="btn_approve_training">Approve</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div id="myModal_remove" class="modal fade" role="dialog">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <form id="form_training_remove">
                                        <input name='id' class='trainingId' hidden>
                                        <div class="modal-header">
                                            <h4 class="modal-title">Remove Training</h4>
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Remove the class "<span class='trainingCourse'></span>" for the employee <span class='employeeName'></span>?</p>
                                            <p>If you Confirm this, you will have to re-add it.</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn_pers_copy" data-dismiss="modal">Cancel</button>
                                            <button type="button" class="btn btn_pers_remove" data-dismiss="modal" id="btn_remove_training">Yes, Remove</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div id="myModal_unrequire" class="modal fade" role="dialog">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <form id="form_training_unrequire">
                                        <input name='id' class='trainingId' hidden>
                                        <div class="modal-header">
                                            <h4 class="modal-title">Mark as Unrequired</h4>
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>

                                        </div>
                                        <div class="modal-body">
                                            <p>Mark the class "<span class='trainingCourse'></span>" as unnecessary for the employee <span class='employeeName'></span>?</p>
                                            <p>If you confirm this, this course will never be marked as overdue or up for renewal for this employee until they take the class again and get a new valid-until date.</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn_pers_copy" data-dismiss="modal">Cancel</button>
                                            <button type="button" class="btn btn_pers_remove" data-dismiss="modal" id="btn_unrequire_training">Yes, Unrequire Training</button>
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
        <script src="js/ead.min.js"></script>
        <script src="/js/pagesJS/customFormFunctions.js"></script>
        <script src="/js/bootstrap-datepicker.js"></script>
        <script src="/js/pagesJS/ApiCalls.js"></script>
        <script src="/js/pagesJS/viewTraining.js"></script>
        <script src="/js/pagesJS/personnelPages.js"></script>

    </body>

</html>