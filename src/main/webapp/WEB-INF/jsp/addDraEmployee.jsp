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
    <link rel="stylesheet" href="css/pagesCSS/hrPages.css">
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
                            <a class="breadcrumbLinkMain" href="/addDraEmployee">Add DRA by Employee</a>
                        </p>
                    </div>
                </div>
                <section class="usa-section">

                    <div class="usa-grid usa-buffer-top">
                        <div class="usa-width-one-whole title-div">
                            <h1 id="title">Add DRA by Employee</h1>
                        </div>
                    </div>
                    <div class="container trainBG padTop">
                        <form role="form" data-toggle="validator" class="generalInfo">
                            <div class="mainAdd dra-entry template" hidden>
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="dStation_OG">Select Employee Namecode<span class="reqClass"> *</span></label>
                                            <select name="employee.id" required id="dStation_OG" class="form-control">
                                                <option value="">Select an Employee</option>
                                            </select>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="draTitle_OG">DRA Title<span class="reqClass"> *</span></label>
                                            <select name="deliberativeRiskAssessmentCourseId" required id="draTitle_OG" class="form-control">
                                                <option value="">Select A DRA</option>
                                            </select>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="dra_date_OG">Assessment Date<span class="reqClass"> *</span></label>
                                            <div class="input-group date" data-provide="datepicker">
                                                <input type="text" required id="dra_date_OG" name="dateOfAssessment" class="form-control">
                                                <div class="input-group-addon">
                                                    <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                </div>
                                            </div>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="form-group">
                                            <label for="dra_dateDue_OG">Date Due<span class="reqClass"> *</span></label>
                                            <div class="input-group date" data-provide="datepicker">
                                                <input type="text" required id="dra_dateDue_OG" name="dateDue" class="form-control">
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
                                                <div class="form-group text-left" >            
                                                    <button class="btn btn-lg btn_pers_copy copy_field">Copy This Row</button>
                                                    <button class="btn btn-lg btn_pers_remove remove_field"><i class="fa fa-trash-o" aria-hidden="true"></i></button>                                                                    
                                                </div>
                                            </div>
                                    </div>

                              

                            </div>
                            <div class="items" id="draRows"></div>
                    </div>
                            
                            <div class="row">
                                <div class="col col-md-6 text-center">
                                    <button id="viewReports" id="add" class="btn btn-info add_field_button">Add
                                        Additional DRA</button>
                                </div>
                                <div class="col col-md-6">
                                    <input type="button" id="submitV" value="Submit" class="btn btn-success" />
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </section>
        </div>
        <!-- end of sidenav wrapper div -->





        <div id="myModal_success" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <!--	<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
								<h4 class="modal-title text-center">success</h4> -->
                    </div>
                    <div class="modal-body">
                        <h3 class="text-center"> Successful Submit for Employee DRA's</h3>

                    </div>
                    <div class="modal-footer">
                        <button type="button" id="deleteModal_delete" data-dismiss="modal" class="btn">Continue</button>
                    </div>
                </div>
            </div>
        </div>

        <div id="myModal_error" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>-->
                        <h4 class="modal-title text-center">Unable to submit DRA</h4>
                    </div>
                    <div class="modal-body">
                        <p class="text-center">Unable to submit employee's:</p><br />
                        <div class="employees_error">
                        </div>


                    </div>
                    <div class="modal-footer">
                        <button type="button" id="deleteModal_delete" data-dismiss="modal" class="btn">Continue</button>
                    </div>
                </div>
            </div>
        </div>

    </main>

    <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
    </footer>
    <script src="js/ead.min.js"></script>
    <script src="js/bootstrap-datepicker.js"></script>
    <script src="js/pagesJS/customFormFunctions.js"></script>
    <script src="js/pagesJS/addDraEmployee.js"></script>
    <script src="js/pagesJS/personnelPages.js"></script>

</body>

</html>