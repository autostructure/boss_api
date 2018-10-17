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
                        <img data-toggle="tooltip" data-html="true" title="Bucks in velvet on the edge of an aspen stand. Photo captured during data collection efforts for the 
                        Interior West Forest Inventory and Analysis (IWFIA) Program in Utah. (Forest Service photo by Scott Dickson)"
                        class="bannerImg" src="../../img/birch.jpg" alt="Banner Image" />
                </header>
                <div class="usa-grid">
                    <div class="usa-width-one-whole">
                        <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                            <a class="breadcrumbLink" href="/home">Dashboard |</a>
                            <a class="breadcrumbLink" href="/personnelDash">Personnel Dashboard |</a>
                            <a class="breadcrumbLinkMain" href="/viewAllDras">View All DRAs</a>
                        </p>
                    </div>
                </div>
                <section class="usa-section">
                        <div class="usa-grid usa-buffer-top">
                            <div class="usa-width-one-whole title-div">
                                <h1 id="title">Edit DRA Courses Available</h1>
                            </div>
                        </div>                    
                    <div class="usa-grid usa-buffer-top">
                        <div class="use-width-one-whole content-div">
                            <h2 class="title2">DRA Courses</h2>
                            <div id="showHide">
                                <div class="form-check" id="viewOldCheckbox">
                                    <input type="checkbox" id="viewOld" class="form-check-input">
                                    <!--label class="form-check-label" for="viewOld">View Old Training Entries</label-->
                                </div>
                                <table id="allDrasCourses" class="usa-table-borderless display" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Complete By Date</th>
                                            <th scope="col">Extra Days</th>

                                            <th id="stop"></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div id="myModal_edit" class="modal fade myModal_edit" role="dialog">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Edit Dra Course</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="dra_title">Dra Title:<span class="reqClass">*</span></label><br/>
                                                <input type="text" required ID="dra_title" class="form-control dra_title" />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="dra_category">Dra Category:<span class="reqClass">*</span></label><br/>
                                                <input type="text" required ID="dra_category" class="form-control dra_category" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="dra_wiggleRoom">Extra Days:<span class="reqClass">*</span></label><br>
                                                <input type="text" required ID="dra_wiggleRoom" class="form-control dra_wiggleRoom" />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="dra_CompleteBy">Complete By date:<span class="reqClass"> *</span></label>
                                                <div class="input-group date" data-provide="datepicker">
                                                    <input type="text" required id="dra_CompleteBy" name="dra_CompleteBy" class="form-control dra_CompleteBy">
                                                    <div class="input-group-addon">
                                                        <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                    </div>
                                                </div>
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="dra_Description">Description:<span class="reqClass">*</span></label><br>
                                                <input type="text" required ID="dra_Description" class="form-control dra_Description" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn_pers_copy" data-dismiss="modal">Cancel</button>
                                    <button type="button" id="myModal_editConfirm" data-dismiss="modal" class="btn">Confirm Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="myModal_add" class="modal fade" role="dialog">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Add Dra Course</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>

                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="dra_title">Dra Title:<span class="reqClass">*</span></label><br/>
                                                <input type="text" required ID="dra_title" class="form-control dra_title" />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="dra_category">Dra Category:<span class="reqClass">*</span></label><br/>
                                                <input type="text" required ID="dra_category" class="form-control dra_category" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="dra_wiggleRoom">Extra Days:<span class="reqClass">*</span></label><br>
                                                <input type="text" required ID="dra_wiggleRoom" class="form-control dra_wiggleRoom" />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="dra_CompleteBy">Complete By date:<span class="reqClass"> *</span></label>
                                                <div class="input-group date" data-provide="datepicker">
                                                    <input type="text" required id="dra_CompleteBy" name="dra_CompleteBy" class="form-control dra_CompleteBy">
                                                    <div class="input-group-addon">
                                                        <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                    </div>
                                                </div>
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="dra_Description">Description:<span class="reqClass">*</span></label><br>
                                                <input type="text" required ID="dra_Description" class="form-control dra_Description" />
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn_pers_copy" data-dismiss="modal">Cancel</button>
                                    <button type="button" id="myModal_addYes" data-dismiss="modal" class="btn">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="myModal_delete" class="modal fade" role="dialog">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Add Dra Course</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div class="modal-body">
                                    <p>Are you sure you want to delete this Dra Course?</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" id="cancel" class="btn" data-dismiss="modal">No</button>
                                    <button type="button" id="myModal_del" data-dismiss="modal" class="btn">Yes</button>
                                </div>
                            </div>
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
    <script src="/js/pagesJS/bootstrapFieldWriter.js"></script>
    <script src="/js/pagesJS/viewAllDras.js"></script>
    <script src="/js/pagesJS/personnelPages.js"></script>
    <script src="/js/pagesJS/ApiCalls.js"></script>


</body>

</html>