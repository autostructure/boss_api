<!doctype html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="img/favicons/favicon.ico" type="image/x-icon">
        <title>FIA-BOSS</title>
        <link rel="stylesheet" href="css/ead.min.css">
        <link rel="stylesheet" href="css/pagesCSS/all.css">
        <link rel="stylesheet" href="css/modal.css">
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
                        <img data-toggle="tooltip" data-html="true" title="Photo Credit: JDShaw" class="bannerImg" src="/boss/img/foggyMountain.jpg" alt="Banner Image">
                    </header>
                    <div class="usa-grid">
                        <div class="usa-width-one-whole">
                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                <a class="breadcrumbLink" href="/boss/home">Dashboard |</a>
                                <a class="breadcrumbLink" href="/boss/personnelDash">Personnel Dashboard |</a>
                                <a class="breadcrumbLinkMain" href="/boss/viewAllEmployees">Field Equipment</a>

                            </p>
                        </div>
                    </div>
                    <section class="usa-section">

                        <div class="usa-grid usa-buffer-top">
                            <div class="usa-width-one-whole title-div">
                                <h1 id="title">IT Equipment</h1>
                            </div>
							
                        </div>
                        <div class="usa-grid usa-buffer-top">
                            <div class="use-width-one-whole content-div">
                                <h2 class="title2">IT Equipment List</h2>
                                <div id="showHide">

									<form id="addEquip"></form><br/>
									<button id="addEquip" value="Add Equipment" class="btn addEquip">Add Equipment</button><br/>
                                    <div class="form-check" id="viewOldCheckbox">
                                        <input type="checkbox" id="viewOld" class="form-check-input">
                                        <!--label class="form-check-label" for="viewOld">View Old Training Entries</label-->
                                    </div>       
									


                                    <table id="ITEquip" class="usa-table-borderless display" style="width:100%">

                                        <thead>
                                            <tr>

                                                <th>Equipment Name</th>
                                                <th>Category</th>                                                
                                                <th>Make</th>
                                                <th>model Number</th>                                        
                                                <th>Serial Number</th>
                                                <th>Type</th>
												<th>acquisition Date</th>
												<th></th>


                                            </tr>
                                        </thead>
                                        <tbody>
											<td col="equipmentName"></td>
											<td col="category"></td>
											<td col="make"></td>
											<td col="modelNumber"></td>
											<td col="serialNumber"></td>
											<td col="type"></td>
											<td col="acquistionDate"></td>
											<td scope="col"></td>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div> 




                    </section>
                </section>                         

            </div><!-- end of sidenav wrapper div -->





            <div id="myModal_delete" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Confirmation</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>

                        </div>
                        <div class="modal-body">
							<input type="text" hidden=true class="hidden_id" id="hidden_id"></input>
                            <p>Are you sure you want to delete this IT equipment?</p>
                            <p id="IT_equip_name" class="IT_equip_name"></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn_pers_copy" data-dismiss="modal">No</button>
                            <button type="button" id="deleteModal_delete" data-dismiss="modal" class="btn btn_pers_remove">Yes</button>
                        </div>
                    </div>
                </div>
            </div>

			<div id="myModal_edit" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Confirmation</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>

                        </div>
                        <div class="modal-body">
							<form id="editForm"></form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn" data-dismiss="modal">cancel</button>
                            <button type="button" id="deleteModal_edit" data-dismiss="modal" class="btn btn_edit">Yes</button>
                        </div>
                    </div>
                </div>
            </div>

        </main>

        <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
        </footer>
        <script src="/boss/js/ead.min.js"></script>
		<script src="/boss/js/bootstrap-datepicker.js"></script>
		<script src="/boss/js/pagesJS/customFormFunctions.js"></script>
        <script src="/boss/js/pagesJS/ApiCalls.js"></script>
        <script src="/boss/js/pagesJS/ITEquipment.js"></script>
        <script src="/boss/js/pagesJS/personnelPages.js"></script>

    </body>

</html>