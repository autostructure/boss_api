<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="img/favicons/favicon.ico" type="image/x-icon">
    <title>FIA-BOSS</title>
    <link rel="stylesheet" href="css/ead.min.css">
    <link rel="stylesheet" href="css/pagesCSS/all.css">
    <link rel="stylesheet" href="css/pagesCSS/jobCode.css">

</head>

<body class="layout-demo">
    <header class="usa-header usa-header-extended" role="banner" id="mainHeader">
    </header>
        <div class="usa-overlay"></div>
        <main id="main-content">
                <div class="wrapper">
                
                        <nav id="sidebar">
                         </nav>



                         <section class="usa-section1">
                                <header class="main-header" role="banner">
                                    <img src="../../img/fire.jpg" alt="Banner Image"/>
                                </header>
                                <div class="usa-grid">
                                        <div class="usa-width-one-whole">
                                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                                <a class="breadcrumbLink"href="../home/home.html">Dashboard |</a>
                                                <a class="breadcrumbLink"href="../budget/budgetDash.html">Budget |</a>
                                                <a class="breadcrumbLinkMain"href="../jobCode.html">Job Code Management</a>
                                            </p>
                                        </div>
                                    </div>
                                <section class="usa-section">

                                    <div class="usa-grid usa-buffer-top">
                                        <div class="use-width-one-whole title-div">
                                            <h1 id="title">Budget</h1>
                                                                            <!-- Trigger the modal with a button -->
                                        </div>
                                        <div id="success" class="alert alert-success" role="alert">
                                            Update Successfull!                                         
                                        </div>
                                        <div id="error" class="alert alert-danger" role="alert">
                                            Error Adding Changes
                                        </div>
                                    </div>

                                    <div class="usa-grid usa-buffer-top">
                                        <div class="use-width-one-whole content-div">
                                            <h2 class="title2">Job Code Mgmt</h2>
                                            <div class="row topRow">
                                                <div class="col-3 fiscalyearDiv">
                                                    <label for="fySelect" class="fyLabel">Choose Financial Year</label>
                                                    <div class="fyDiv" id="fySearch"></div>
                                                </div>                                                  
                                            </div>
                                            <!-- <div id="yearFilter">
                                                <div class="form-group">
                                                    
                                                    <select class="form-control" id="year-filter">
                                                        <option value="">All</option>
                                                    </select>
                                                </div>
                                            </div> -->
                                        <table id="jobCodes" class="usa-table-borderless display" style="width:100%">
                                            
                                            <thead>
                                                <tr>
                                                    <th scope="col">Fiscal Year</th>
                                                    <th scope="col">Unit Code</th>
                                                    <th scope="col">Job Code</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col" id="stop">Amount</th>
                                                    <th></th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div> 


                                <!-- Modal -->
                                <div id="myModal" class="modal fade" role="dialog">
                                <div class="modal-dialog">

                                    <!-- Modal content-->
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        <h4 class="modal-title">Edit Job Code</h4>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col">
                                                <label for="emfyear" class="modall">Financial Year</label>
                                                <input type="text" class="form-control modall" id="emfyear" name="emfyear" placeholder="Enter Financial Year">
                                            </div>
                                            <div class="col">
                                                <label for="emjcode" class="modall">Job Code</label>
                                                <input type="text" class="form-control modall" id="emjcode" name="emjcode" placeholder="Enter Financial Year">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <label for="emunit" class="modall">Unit Code</label>
                                                <input type="text" class="form-control modall" id="emunitcode" name="emunitcode" placeholder="Enter Unit / Override Code">
                                            </div>
                                            <div class="col">
                                                <label for="emamount" class="modall">Amount</label>
                                                <input type="number" step="1" class="form-control modall" id="emamount" name="emamount" placeholder="Enter Financial Year">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <label for="emdesc" class="modall">Description</label>
                                                <input type="text" class="form-control modall" id="emdesc" name="emdesc" placeholder="Enter Financial Year">
                                            </div>
                                            <div class="col" style="display:none">
                                                <input type="text" id="emid" name="emid">
                                            </div>                                            
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-lg btn-default" data-dismiss="modal">Close</button>
                                        <button id="editJC" type="button" class="btn btn-lg btn-success">Save Changes</button>
                                    </div>
                                    </div>

                                </div>
                                </div>

                                <!-- add modal -->
                                <div id="addModal" class="modal fade" role="dialog">
                                        <div class="modal-dialog">
                                            <form id="addForm" action="/jobCode" method="post">
                                            <!-- Modal content-->
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                <h4 class="modal-title">Job Codes</h4>
                                            </div>
                                            <div class="modal-body">
                                                <div class="row">
                                                    <div class="col">
                                                        <label for="mfyear" class="modall">Financial Year</label>
                                                        <input type="text" class="form-control modall" id="mfyear" name="mfyear" placeholder="Enter Financial Year">
                                                    </div>
                                                    <div class="col">
                                                        <label for="mjcode" class="modall">Job Code</label>
                                                        <input type="text" class="form-control modall" id="mjcode" name="mjcode" placeholder="Enter Financial Year">
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <label for="mdesc" class="modall">Description</label>
                                                        <input type="text" class="form-control modall" id="mdesc" name="mdesc" placeholder="Enter Financial Year">
                                                    </div>
                                                    <div class="col">
                                                        <label for="mamount" class="modall">Amount</label>
                                                        <input type="text" class="form-control modall" id="mamount" name="mamount" placeholder="Enter Financial Year">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                                <button id="saveJC" type="button" class="btn btn-success">Confirm</button>
                                            </div>
                                            </div>
                                        </form>        
                                        </div>
                                </div>


                                <!-- delete modal -->
                                <div id="deleteModal" class="modal fade" role="dialog">
                                    <div class="modal-dialog">
    
                                        <!-- Modal content-->
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title">Delete Record</h4>
                                        </div>
                                        <div class="modal-body">                                            
                                            <div class="row">
                                                <p class="deleteCon">Are you sure you want to delete this record?</p>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <label for="dmfyear" class="modall">Financial Year</label>
                                                    <input type="text" class="form-control modall" id="dmfyear" name="dmfyear" placeholder="Enter Financial Year">
                                                </div>
                                                <div class="col">
                                                    <label for="dmjcode" class="modall">Job Code</label>
                                                    <input type="text" class="form-control modall" id="dmjcode" name="dmjcode" placeholder="Enter Financial Year">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <label for="dmdesc" class="modall">Description</label>
                                                    <input type="text" class="form-control modall" id="dmdesc" name="dmdesc" placeholder="Enter Financial Year">
                                                </div>
                                                <div class="col">
                                                    <label for="dmamount" class="modall">Amount</label>
                                                    <input type="text" class="form-control modall" id="dmamount" name="dmamount" placeholder="Enter Financial Year">
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col">
                                                    <label for="dmdesc" class="modall">Description</label>
                                                    <input type="text" class="form-control modall" id="dmdesc" name="dmdesc" placeholder="Enter Financial Year">
                                                </div>
                                                <div class="col" style="display:none">
                                                    <input type="text" id="dmid" name="dmid">
                                                </div>                                            
                                            </div>                                            
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-lg btn-default" data-dismiss="modal">Close</button>
                                            <button id="deleteJC" type="button" id="delete" class="btn btn-outline-danger delete btn-lg">Confirm Deletion</button>
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
        <script src="js/ead.min.js"></script>
        <script src="js/pagesJS/mainPages.js"></script>
        <script src="js/pagesJS/jobCode.js"></script>
</body>

</html>