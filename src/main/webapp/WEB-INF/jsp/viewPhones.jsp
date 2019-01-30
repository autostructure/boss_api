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
    <!--<link rel="stylesheet" href="css/pagesCSS/hrPages.css">-->
	<link rel="stylesheet" href="css/pagesCSS/fleetPages.css">
	<!-- the fleet pages css fixes the data table issue -->
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
                    class="bannerImg" src="/boss/img/birch.jpg" alt="Banner Image" />
                </header>
                <div class="usa-grid">
                    <div class="usa-width-one-whole">
                        <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                            <a class="breadcrumbLink" href="/boss/home">Dashboard |</a>
                            <a class="breadcrumbLink" href="/boss/personnelDash">Personnel Dashboard |</a>
                            <a class="breadcrumbLinkMain" href="/boss/addDraEmployee">Recorded Employee Cell Phones</a>
                        </p>
                    </div>
                </div>
                <section class="usa-section">
					<div hidden><!--Templates-->
						<div class="dropdown1 template">
							<button id="test_click" class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                            <div id="dropList" class="dropdown-content1">
								<a data-toggle="modal" data-target="#myModal_delete" href="#" data-value=0 class="DeletePhone" id="DeletePhone_id">Delete Phone</a>
								<a data-toggle="modal" data-target="#myModal_edit" href="#" data-value=0 class="editPhone" id="editPhone_id">Edit Phone</a>
                            </div>
						</div>
                    </div>
                    <div class="usa-grid usa-buffer-top">
                        <div class="usa-width-one-whole title-div">
                            <h1 id="title">Recorded Cell Phones</h1>
                        </div>
                    </div>
                    <div class="container trainBG padTop">
                        <form role="form" data-toggle="validator" class="generalInfo">
							<table id="tblCellPhone">
								<thead>
									<tr>
										<th scope="col">Assigned Employee</th>
										<th scope="col">Make</th>
										<th scope="col">Model</th>
										<th scope="col">Serial Number</th>
										<th scope="col">Number</th>
										<th scope="col">Carrier</th>
										<th scope="col">Notes</th>
										<th scope="col"></th>
									</tr>
								</thead>

								<tbody>
									
								</tbody>
										
							</table>
                        </form>
                    </div>
                </section>
            </section>
        </div>
        <!-- end of sidenav wrapper div -->

        <!-- Modal -->
        <div class="modal fade" id="editCellPhone" tabindex="-1" role="dialog" aria-labelledby="successModal" aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="successModal">Success</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
					<form id="formEditModel">
					</form>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn_pers_copy" id="viewList">View DRA List</button>
                <button type="button" class="btn btn_pers_copy" id="addAnother">Record Another DRA's</button>
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
						<p>Are you sure you want to delete this CellPhone?</p>
                        <p id="cellPhone_deleteModal"></p>
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
						<form id="edit_form">
						</form>
                    </div>
                    <div class="modal-footer">
						<button type="button" class="btn cancel_btn" data-dismiss="modal">Cancel</button>
                        <button type="button" id="edit_btn" data-dismiss="modal" class="btn edit_btn">Edit Phone</button>
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
    <script src="/boss/js/pagesJS/viewPhones.js"></script>
    <script src="/boss/js/pagesJS/personnelPages.js"></script>

</body>

</html>