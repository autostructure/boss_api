<!doctype html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/boss/img/favicons/favicon.ico" type="image/x-icon">
        <title>FIA-BOSS</title>
        <link rel="stylesheet" href="/boss/css/ead.min.css">
        <link rel="stylesheet" href="/boss/css/pagesCSS/all.css">
        <!-- <link rel="stylesheet" href="css/pagesCSS/hrDash.css"> -->
        <link rel="stylesheet" href="/boss/css/bootstrap-datepicker3.css">
        <link rel="stylesheet" href="/boss/css/pagesCSS/fleetPages.css">
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
                        <img class="bannerImg" src="/boss/img/fleetBG.jpg" alt="Banner Image">
                    </header>
                    <div class="usa-grid">
                        <div class="usa-width-one-whole">
                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                <a class="breadcrumbLink" href="/boss/home">Dashboard |</a>
                                <a class="breadcrumbLink" href="/boss/fleetDash">Fleet Dashboard |</a>
                                <a class="breadcrumbLinkMainFleet" href="/boss/iwfia">Monthly IWFIA</a>
                            </p>
                        </div>
                    </div>
                    <section class="usa-section">
        
                        <div class="usa-grid usa-buffer-top">
                            <div class="usa-width-one-whole title-div">
                                <h1 id="title">IWFIA Usage</h1>
                            </div>
                        </div>
                        <div id="success" class="alert alert-success" role="alert">
                            Update Successfull!                                         
                        </div>
                        <div id="error" class="alert alert-danger" role="alert">
                            Error: <span id='errorText'></span>
                        </div>
                        <!-- <form id="formGeneralInfo"></form> -->
                        <div class="row">
                            <div class="col inputCol">
                                <label for="pLicense">Vehicle License</label>
                                <p class="input" id="pLicense">
                                    
                                </p>
                            </div>
                            <div class="col inputCol">
                                <label for="pVin">VIN</label>
                                <p class="input" id="pVin">
                                        
                                </p>
                            </div>     
                            <div class="col inputCol">
                                <label for="pYear">Year</label>
                                <p class="input" id="pYear">
                                    
                                </p>
                            </div>                                                                                                                       
                            <div class="col inputCol">
                                <label for="pMake">Make</label>
                                <p class="input" id="pMake">
                                    
                                </p>
                            </div>  
                            <div class="col inputCol">
                                <label for="pModel">Model</label>
                                <p class="input" id="pModel">
                                    
                                </p>
                            </div>                             
                                                                               
                        </div>
                        <div class="container trainBG ">
                                <h1 class="title5">Add New Months Usage</h1>
                                <!-- <form role="form" id="iwfiaForm" data-toggle="validator">
                                    </form> -->
                            <table id="iwfia">
                                <thead>
                                    <tr>
                                        <th>Month/Year</th>
                                        <th>Operator</th>
                                        <th>Mileage</th>
                                        <th>Gas</th>
                                        <th>Oil</th>
                                        <th>Job Code</th>
                                        <th id="stop"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
        

        

                                                                                                                                                        
                        </div>                    
        
                    </section> <!-- end of usa section -->
        
                </section> <!-- end of usa-section1 -->       
                

            </div><!-- end of sidenav wrapper div -->

            <div id="templates" style="display:none;">
                <div class="dropdown1">
                    <button id="test_click" class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                    <div id="dropList" class="dropdown-content1">
                        <a data-toggle="modal" data-target="#myModal_edit" href="#" class="editBtn">Edit Usage</a>
                        <a data-toggle="modal" data-target="#myModal_delete" href="#" class="deleteBtn">Delete Usage</a>
                    </div>
                </div>
            </div>
            <input hidden id="modal_usage_id" />
            <div id="myModal_add" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Add IWFIA Usage</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body">
                            <form id="modalForm_add" class="container"></form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn_pers_copy" data-dismiss="modal">Cancel</button>
                            <button type="button" id="addModal_add" data-dismiss="modal" class="btn btn_add">Add IWFIA Usage</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="myModal_edit" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Edit Usage</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body">
                            <form id="modalForm_edit" class="container"></form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn_pers_copy" data-dismiss="modal">Cancel</button>
                            <button type="button" id="editModal_undo" class="btn editModal_undo">Undo Changes</button>
                            <button type="button" id="editModal_save" data-dismiss="modal" class="btn editModal_save">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="myModal_delete" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Confirmation</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body">
                            <p>Are you sure you want to delete this usage data?</p>
                            <form id="modalForm_delete" class="container"></form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn_pers_copy" data-dismiss="modal">No</button>
                            <button type="button" id="deleteModal_delete" data-dismiss="modal" class="btn btn_delete">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
        </footer>
        <script src="/boss/js/ead.min.js"></script>
        <script src="/boss/js/bootstrap-datepicker.js"></script>
        <script src="/boss/js/pagesJS/bootstrapFieldWriter.js"></script>
        <script src="/boss/js/pagesJS/customFormFunctions.js"></script>
        <script src="/boss/js/pagesJS/iwfia.js"></script>
        <script src="/boss/js/pagesJS/ApiCalls.js"></script>
        <script src="/boss/js/pagesJS/mainFleetPages.js"></script>



    </body>

</html>