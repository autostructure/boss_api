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
                    class="bannerImg" src="/boss/img/birch.jpg" alt="Banner Image" />
                </header>
                <div class="usa-grid">
                    <div class="usa-width-one-whole">
                        <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                            <a class="breadcrumbLink" href="/boss/home">Dashboard |</a>
                            <a class="breadcrumbLink" href="/boss/personnelDash">Personnel Dashboard |</a>
                            <a class="breadcrumbLinkMain" href="/boss/addDraEmployee">Record Non IWFIA</a>
                        </p>
                    </div>
                </div>
                <section class="usa-section">

                    <div class="usa-grid usa-buffer-top">
                        <div class="usa-width-one-whole title-div">
                            <h1 id="title">Add Non IWFIA Record</h1>
                        </div>
                    </div>
                    <div class="container trainBG padTop">
						<div id="addDiv">
							<form role="form" data-toggle="validator" id="nonIwfia" class="noniwfia">
                           
							</form>
							<br/>
							<button id="submit_noniwfia" class="btn btn-lg submit" value="Submit">Submit</button>
						</div>
						<br/>
						<br/>
						<table id="nonIwfiaTable" class="usa-table-borderless display" style="width:100%">
							<thead>
								<tr>
									<th>Last Name</th>
									<th>First Name</th>
									<th>Duty Station</th>
									<th>Crew Number</th>
									<th>Supervisor</th>
									<th>Comments</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<td col="lastName"></td>
								<td col="firstName"></td>
								<td col="dutyStation"></td>
								<td col="crewNumber"></td>
								<td col="supervisor"></td>
								<td col="comment"></td>
								<td scope="col"></td>
							</tbody>
						</table>
                    </div>


                </section>
            </section>
        </div>
        <!-- end of sidenav wrapper div -->

        <!-- Modal -->




        <div id="myModal_edit" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <!--	<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
								<h4 class="modal-title text-center">success</h4> -->
                    </div>
                    <div class="modal-body">
                        <form id="edit_form">
						</form>
                    </div>
                    <div class="modal-footer">
						<button type="button" class="btn btn_pers_copy" data-dismiss="modal">Cancel</button>
                        <button type="button" id="edit_btn" data-dismiss="modal" class="btn">Continue</button>
                    </div>
                </div>
            </div>
        </div>

        <div id="myModal_delete" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>-->
                        <h4 class="modal-title text-center">Unable to submit DRA</h4>
                    </div>
                    <div class="modal-body">
                        <p class="text-center">Do you want to delete nonIWFIA?</p><br/>
						<label class="text-center person" ></label>
                    </div>
                    <div class="modal-footer">
					    <button type="button" class="btn btn_pers_copy" data-dismiss="modal">Cancel</button>
                        <button type="button" id="deleteModal_delete" class="btn">Delete</button>
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
    <script src="/boss/js/pagesJS/noniwfia.js"></script>
    <script src="/boss/js/pagesJS/personnelPages.js"></script>

</body>

</html>