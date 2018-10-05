<!doctype html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="img/favicons/favicon.ico" type="image/x-icon">
        <title>FIA-BOSS</title>
        <link rel="stylesheet" href="css/ead.min.css">
        <link rel="stylesheet" href="css/pagesCSS/all.css">
        <link rel="stylesheet" href="css/pagesCSS/fleetPages.css">
        <link rel="stylesheet" href="css/Modal.css">
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
                        <img class="bannerImg" src="../../img/fleetBG.jpg" alt="Banner Image"/>
                    </header>
                    <div class="usa-grid">
                        <div class="usa-width-one-whole">
                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                <a class="breadcrumbLink"href="/home">Dashboard |</a>
                                <a class="breadcrumbLink"href="/fleetDash">Property Management Dashboard |</a>
                                <a class="breadcrumbLinkMainFleet"href="/addNewFleet">Add Fleet Vehicle</a>
                            </p>
                        </div>
                    </div>
                    <section class="usa-section">

                        <div class="usa-grid usa-buffer-top">
                            <div class="usa-width-one-whole title-div">
                                <h1 id="title">Add Fleet Vehicle</h1>
                            </div>
                        </div>
                     
                        <div class="container trainBG">
                            <form role="form" data-toggle="validator" class="generalInfo">

                            <div class="items">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                        <div class="form-group">
                                            <label for="fLicense">License<span class="reqClass"> *</span></label>
                                            <input type="text" maxLength="10" minLength="5" class="form-control" id="fLicense" required placeholder="License Number" aria-label="License Number">
                                            <div class="help-block with-errors"></div>
                                        </div>                                                        
                                    </div> 

                                    <div class="col-lg-4 col-md-6">
                                        <div class="form-group">
                                            <label for="fOwner">Owner<span class="reqClass"> *</span></label>
                                            <input type="text" minLength="2" maxLength="5" class="form-control" id="fOwner" required placeholder="Owner" aria-label="Owner">
                                            <div class="help-block with-errors"></div>
                                        </div>                                                        
                                    </div> 
 
                                    <div class="col-lg-4 col-md-6">
                                        <div class="form-group">
                                            <label for="fMake">Make<span class="reqClass"> *</span></label>
                                            <input type="text" class="form-control" id="fMake" required placeholder="Vehicle Make" aria-label="Vehicle Make">
                                            <div class="help-block with-errors"></div>
                                        </div>                                                        
                                    </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label for="fModel">Model<span class="reqClass"> *</span></label>
                                            <input type="text" class="form-control" id="fModel" required placeholder="Vehicle Model" aria-label="Vehicle Model">
                                            <div class="help-block with-errors"></div>
                                        </div>                                                        
                                    </div> 
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label for="fVin">VIN<span class="reqClass"> *</span></label>
                                            <input type="text" class="form-control" minLength="17" maxLength="17" id="fVin" required placeholder="Vehicle VIN #" aria-label="Vehicle Vin Number">
                                            <div class="help-block with-errors"></div>
                                        </div>                                                        
                                    </div> 
                                                                                                                                                     
                            </div>


                        </div>
                            <div class="row">
                                    <div class="col">
                                        <input type="submit" id="submitV" class="btn btn-success">    
                                    </div> 
                            </div>                                                                                                                       
                        </div>
                    </div>

                    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Launch demo modal
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="successModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="successModal">Success</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h3 class="modal_body">Awesome! Vehicle has been saved</h3>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" id="viewList">View Vehicles List</button>
          <button type="button" class="btn" id="addAnother">Add Another Vehicle</button>
        </div>
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
        <script src = "js/pagesJS/addNewFleet.js"></script>
        <script src="js/pagesJS/mainFleetPages.js"></script>

    </body>

</html>