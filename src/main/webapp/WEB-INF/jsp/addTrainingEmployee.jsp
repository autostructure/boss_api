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
                </nav><!-- end of sidenav -->


                <section class="usa-section1">
                    <header class="main-header" role="banner">
                        <img data-toggle="tooltip" data-html="true" title="Insect and Disease Training at start of field season. Photo captured during data collection efforts for the Interior West Forest Inventory and Analysis (IWFIA) Program in Wyoming. (Forest Service photo by IWFIA staff)" class="bannerImg" src="../../img/employees.jpg" alt="Banner Image"/>
                    </header>
                    <div class="usa-grid">
                        <div class="usa-width-one-whole">
                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                <a class="breadcrumbLink"href="/home">Dashboard |</a>
                                <a class="breadcrumbLink"href="/hrDash">HR Dashboard |</a>
                                <a class="breadcrumbLinkMain"href="/addTrainingEmployee">Add Training by Employee</a>
                            </p>
                        </div>
                    </div>
                    <section class="usa-section">

                        <div class="usa-grid usa-buffer-top">
                            <div class="usa-width-one-whole title-div">
                                <h1 id="title">Add Training by Employee</h1>
                            </div>
                        </div>
                        <!-- data-toggle="validator"-->
                        <div class="container trainBG" style="margin-top: 50px">
                            <form role="form" class="generalInfo" id="SubmitForm">

                                <div class="items">
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Employee Name<span class="reqClass">*</span></label><br/>
                                            <select class="form-control" name="tName" required id="tName" placeholder="Select Employee Name" aria-label="Employee">	
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="tTitle">Title<span class="reqClass"> *</span></label>
                                            <select class="form-control" name="tTitle" required id="tTitle" placeholder="Training Title" aria-label="Training Title">
                                            </select>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="tDate">Date of Training<span class="reqClass"> *</span></label>
                                            <div class="input-group date" data-provide="datepicker">
                                                <input type="text" required id="tDate" name="tDate" class="form-control">
                                                <div class="input-group-addon">
                                                    <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                </div>                                                                    
                                            </div>
                                            <div class="help-block with-errors"></div>
                                        </div>  
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="tValidUntil">Valid Until<span class="reqClass"> *</span></label>
                                            <div class="input-group date" data-provide="datepicker">
                                                <input type="text" required id="tValidUntil" name="tValidUntil" class="form-control">
                                                <div class="input-group-addon">
                                                    <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                </div>                                                                    
                                            </div>
                                            <div class="help-block with-errors"></div>
                                        </div>  
                                    </div>


                                </div>
                                <!--<button class="btn copy_main" id="mainCopy">Copy Row</button>-->
                        </div>



                        <hr/>


                        <div class="row">
                            <div class="col col-md-6 text-center">
                                <button id="viewReports" id="add" class="btn btn-info add_field_button">Add Additional Training</button> 
                            </div> 
                            <div class="col col-md-6 text-center form-group">
                                <input type="submit" value="Submit" id="submitV" class="btn btn-success submit_button"></input>    
                            </div> 
                        </div>
                        </form>
                        </div>

                        </div>

                        <div id="myModal_result" class="modal fade" role="dialog">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        <h4 class="modal-title"></h4>
                                    </div>
                                    <div class="modal-body">
                                        <p>Adding the training to the employees was successful</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn" data-dismiss="modal">close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="itemss">

<div class="form-group"><label>Author Email:</label>
<input id="author_email" class="form-control" name="author" required="required" type="EMAIL" /></div>

</div>

<button type="button" class="add_fiedld_button">Add Field</button> -->


                    </section>
                </section> 


            </div><!-- end of sidenav wrapper div -->

            <div id="myModal_success" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            Success
                            <!--	<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 class="modal-title text-center">success</h4> -->
                        </div>
                        <div class="modal-body">
                            <h3 class="text-center"> Adding the training to the employee was successful</h3>

                        </div>
                        <div class="modal-footer">
                            <button type="button" id="deleteModal_delete" data-dismiss="modal" class="btn btn_pers_copy">Continue</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="myModal_error" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>-->
                            <h4 class="modal-title text-center">Unable to submit training</h4>
                        </div>
                        <div class="modal-body">
                            <p class="text-center">Unable to submit employee's:</p><br/>
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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min.js"></script>
        <!--<script src="js/pageJS/ApiCalls.js"></script>-->
        <script src="js/bootstrap-datepicker.js"></script>
        <script src="js/pagesJS/addTrainingEmployee.js"></script>
        <script src="js/pagesJS/personnelPages.js"></script>

    </body>

</html>