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
    <link rel="stylesheet" href="css/pagesCSS/addTrainingClass.css">
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
                                            <a class="breadcrumbLinkMain"href="/addTrainingClass">Add Training Class</a>
                                        </p>
                                    </div>
                                </div>
                                <section class="usa-section">
                                    <div hidden><!--Templates-->
                                        <div id="templateButtonList" class="dropdown1">
                                            <button class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                                            <div id="dropList" class="dropdown-content1">
                                                <a class="btn-modal btn-modal-edit" data-toggle="modal" data-target="#myModal_edit" href="#">Edit Course</a>
                                                <a class="btn-modal btn-modal-remove" data-toggle="modal" data-target="#myModal_remove" href="#">Remove Course</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="usa-grid usa-buffer-top">
                                        <div class="usa-width-one-whole title-div">
                                            <h1 id="title">Edit Training Courses Available</h1>
                                        </div>
                                    </div>
                                    <div class="usa-grid usa-buffer-top">
                                        <div class="use-width-one-whole content-div">
                                            <h2 class="title2">Training Course List</h2>
                                            <div id="showHide">
                                                <div class="form-check" id="viewOldCheckbox">
                                                    <input type="checkbox" id="viewOld" class="form-check-input">
                                                    <!--label class="form-check-label" for="viewOld">View Old Training Entries</label-->
                                                </div>
                                                <table id="tblCourse" class="usa-table-borderless display" style="width:100%">
                                                    <thead><tr>
                                                        <th scope="col">Category</th>
                                                        <th scope="col">Title</th>
                                                        <th scope="col">Description</th>
                                                        <th scope="col">Default Years Valid</th>
                                                        <th scope="col">Default Years Valid<br>For Crew Leads</th>
                                                        <th id="stop"></th>
                                                    </tr></thead>
                                                    <tbody></tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="myModal_add" class="modal fade" role="dialog">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                    <h4 class="modal-title">Add Training Course</h4>
                                                </div>
                                                <div class="modal-body">
                                                    <p>Add a new course</p>
                                                    <form id="form_add">
                                                        
                                                    </form>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn" data-dismiss="modal" id="btn_add">Add Course</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="myModal_edit" class="modal fade" role="dialog">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                    <h4 class="modal-title">Edit Training</h4>
                                                </div>
                                                <div class="modal-body">
                                                    <p>Edit the course "<span class='category'></span> - <span class='courseTitle'></span>"</p>
                                                    <form id="form_edit">
                                                        <input name='id' class='trainingId' hidden>
                                                            
                                                    </form>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn" data-dismiss="modal">Cancel</button>
                                                    <button type="button" class="btn" data-dismiss="modal" id="btn_edit">Save Changes</button>
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
                                                        <p>Remove the course "<span class='category'></span> - <span class='courseTitle'></span>"?</p>
                                                        <p>If you Confirm this, you will have to re-add it.</p>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn" data-dismiss="modal">Cancel</button>
                                                        <button type="button" class="btn bg-danger" data-dismiss="modal" id="btn_remove">Yes, Remove</button>
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
        <script src="js/bootstrap-datepicker.js"></script>
        <script src="js/pagesJS/ApiCalls.js"></script>
        <script src="js/pagesJS/customFormFunctions.js"></script>
        <script src="js/pagesJS/addTrainingClass.js"></script>
        <script src="js/pagesJS/personnelPages.js"></script>

</body>

</html>