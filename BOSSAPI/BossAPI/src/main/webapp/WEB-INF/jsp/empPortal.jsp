<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="img/favicons/favicon.ico" type="image/x-icon">
    <title>FIA-BOSS</title>
    <link rel="stylesheet" href="css/ead.min.css">
    <link rel="stylesheet" href="css/pagesCSS/all.css">
    <link rel="stylesheet" href="css/pagesCSS/empPortal.css">

</head>

<body class="layout-demo">
    <header class="usa-header usa-header-extended" role="banner" id="mainHeader">
    </header>
        <div class="usa-overlay"></div>
        <main id="main-content">
                <div class="wrapper">
                        
                <nav id="sidebar"></nav>    
                    

                    <section class="usa-section bgImg">
                        <img src="./img/empPortal.jpg" class="bg" alt="">

                        
                        <div class="usa-grid usa-buffer-top">
                            <div class="usa-width-one-whole faded">
                                <div class="border">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist"> <!-- start of tabs list -->
                                    <li class="nav-item">
                                        <a class="nav-link active" id="general-tab" data-toggle="tab" href="#general" role="tab" aria-controls="generalInfo" >General Info</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="emergency-tab" data-toggle="tab" href="#emergency" role="tab" aria-controls="emergencyInfo" >Emergency Info</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="checkIn-tab" data-toggle="tab" href="#checkIn" role="tab" aria-controls="checkIn" >Check In - Check Out</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="vehicle-tab" data-toggle="tab" href="#vehicle" role="tab" aria-controls="vehicle" >Vehicle</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="training-tab" data-toggle="tab" href="#training" role="tab" aria-controls="trainingCerts" >Training/Certs</a>
                                    </li>
                                                                   
                                    </ul> <!-- end of tabs list -->

                                    <div class="tab-content" id="myTabContent"><!-- start of tab content -->


                                    <!--                                                   START OF GENERAL TAB                                                     -->
                                    <div class="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="generalInfo">
                                        
                                            <form role="form" data-toggle="validator" class="generalInfo">
                                                <h4 class="title3">Employee Information</h4>
                                                <div class="row">
                                                <div class="col col-md-8">
                                                        <div class="row">
                                                            <div class="col col-md-6">
                                                                <div class="form-group">
                                                                    <label for="fname">First Name<span class="reqClass"> *</span></label>
                                                                    <input type="text" required id="fname" class="form-control"  aria-label="First Name" required placeholder="Enter First Name">
                                                                    <div class="help-block with-errors"></div>
                                                                </div>
                                                            </div>
                                                            
                                                            <div class="col col-md-2">
                                                                <div class="form-group">
                                                                    <label for="minitial">Middle Initial<span class="reqClass"> *</span></label>
                                                                    <input type="text" required id="minitial" class="form-control"  aria-label="middle initial" placeholder="MI">
                                                                    <div class="help-block with-errors"></div>
                                                                </div>
                                                            </div>  
                                                            <div class="col col-md-4"></div>                                                           
                                                        </div>
                                                        <div class="row">
                                                            <div class="col col-md-6">
                                                                <div class="form-group">
                                                                    <label for="lname">Last Name<span class="reqClass"> *</span></label>
                                                                    <input type="text" required id="lname" class="form-control"  aria-label="last name" placeholder="Enter Last Name">
                                                                    <div class="help-block with-errors"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-md-6">
                                                                <div class="form-group">
                                                                    <label for="pname">Preferred Name</label>
                                                                    <input type="text" id="pname" class="form-control"  aria-label="preferred name" placeholder="Type Name">
                                                                    <div class="help-block with-errors"></div>
                                                                </div>
                                                            </div>                                                             
                                                        </div>  


                                                </div><!-- end of col-md-8-->
                                                
                                                <div class="col col-md-3">
                                                        <img src="./img/person.jpg" alt="..." class=" img-thumbnail empPhoto">
                                                        <p class="photoText">My Photo, Click to Edit</p>
                                                </div>
                                                <div class="col col-md-1"></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="row">
                                                        <div class="col">
                                                            <div class="form-group">
                                                                <label for="address1">Address Line 1<span class="reqClass"> *</span></label>
                                                                <input type="text" class="form-control" id="address1" required placeholder="Enter Street Address" aria-label="Address">
                                                                <div class="help-block with-errors"></div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="row">
                                                        <div class="col">
                                                            <div class="form-group">
                                                                <label for="address1">Address Line 2</label>
                                                                <input type="text" class="form-control" id="address1"  placeholder="Enter Street Address" aria-label="Address">
                                                                
                                                            </div>
                                                        </div>
                                                    </div>                                                    
                                                </div>
                                                
                                                <div class="col col-md-4">

                                                    <div class="row move">
                                                            <!-- <p class="bdayLabel">Birthday</p> -->
                                                        <div class="col">
                                                            <div class="form-group">
                                                                <label for="bmonth">Birthday<span class="reqClass"> *</span></label>
                                                                <input type="text" class="form-control" id="bmonth" required placeholder="Month" aria-label="month"> 
                                                                <div class="help-block with-errors"></div>
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="form-group">
                                                                <label for="bdate"></label>
                                                                <input type="text" class="form-control" id="bdate" required placeholder="Date" aria-label="date"> 
                                                                <div class="help-block with-errors"></div>
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="form-group">
                                                                <label for="byear"></label>
                                                                <input type="text" class="form-control" id="byear" required placeholder="Year" aria-label="year">
                                                                <div class="help-block with-errors"></div>
                                                            </div>
                                                        </div>                                                        
                                                    </div>
                                                    <div class="row">
                                                        <div class="col">
                                                            <div class="form-group">
                                                                <label for="email">Email<span class="reqClass"> *</span></label>
                                                                <input type="email" class="form-control" id="email" required placeholder="Enter Email Address" aria-label="Email">
                                                                <div class="help-block with-errors"></div>
                                                            </div>                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col col-md-2"></div>
                                            </div>
                                            <div class="row">
                                                <div class="col col-md-4">
                                                    <div class="form-group">
                                                        <label for="city">City<span class="reqClass"> *</span></label>
                                                        <input type="text" class="form-control" id="city" required placeholder="Enter City" aria-label="city"> 
                                                        <div class="help-block with-errors"></div>
                                                    </div>                                                     
                                                </div>
                                                <div class="col col-md-2">
                                                    <div class="form-group">
                                                        <label for="state">State<span class="reqClass"> *</span></label>
                                                        <input type="text" class="form-control" id="state" required placeholder="ST" aria-label="State">
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div class="col col-md-3">
                                                    <div class="form-group">
                                                        <label for="zip"><span class="reqClass"> *</span></label>
                                                        <input type="text" class="form-control" id="zip" required placeholder="Zip Code" aria-label="Zip">
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div class="col col-md-3">
                                                    <div class="form-group">
                                                        <input type="submit" id="submitGen" class="btn btn-lg btn-success">
                                                    </div>    
                                                </div>                                                
                                            </div>

                                            </form>
                                        
                                    </div>
                                    <!--                                                   END OF GENERAL TAB                                                     -->


                                    <!--                                                   START OF EMERGENCY TAB                                                     -->
                                    <div class="tab-pane fade" id="emergency" role="tabpanel" aria-labelledby="emergencyInfo">
                                            <form role="form" data-toggle="validator" class="emergencyInfo">
                                                <h4 class="title3">Employee Contact Information</h4>
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label for="hPhone">Home Phone<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="hPhone" required placeholder="Employee Home Phone" aria-label="Home Phone">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                        
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label for="cPhone">Cell Phone<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="cPhone" required placeholder="Employee Cell Phone" aria-label="Cell Phone">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                        
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label for="pEmail">Personal Email Address<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="pEmail" required placeholder="Personal Email" aria-label="Personal Email">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                        
                                                    </div>                                                                                                        
                                                </div>
                                                <h4 class="title3">Emergency Contact Information</h4>

                                                <h4 class="title4">Second Contact</h4>
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="shortLabel" for="ecFirstFirstName">First Name<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="ecFirstFirstName" required placeholder="Enter First Name" aria-label="First Name">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                                                                             
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="shortLabel" for="ecFirstLastName">Last Name<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="ecFirstLastName" required placeholder="Enter Last Name" aria-label="Last Name">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                                                                             
                                                    </div>                                                    
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="shortLabel" for="ecFirstAddress">Street Address<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="ecFirstAddress" required placeholder="Enter Street Address" aria-label="Address">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                                                                             
                                                    </div>                                                    
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="shortLabel" for="ecFirstCity">City<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="ecFirstCity" required placeholder="Enter City" aria-label="city">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                                                                             
                                                    </div>  
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="shortLabel" for="ecFirstState">State<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="ecFirstState" required placeholder="Enter State" aria-label="State">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                                                                             
                                                    </div>  
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="shortLabel" for="ecFirstZip">Zip<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="ecFirstZip" required placeholder="Enter Zip" aria-label="Zip">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                                                                             
                                                    </div>                                                                                                                                                              
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="shortLabel" for="ecFirstHome">Home Phone<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="ecFirstHome" required placeholder="Enter Home Phone" aria-label="Home Phone">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                          
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="shortLabel" for="ecFirstCell">Cell Phone<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="ecFirstCell" required placeholder="Enter Cell Phone" aria-label="Cell Phone">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                          
                                                    </div>                                                    
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="shortLabel" for="ecFirstWork">Work Phone<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="ecFirstWork" required placeholder="Enter Work Phone" aria-label="Work Phone">
                                                            <div class="help-block with-errors"></div>
                                                        </div>  
                                                    </div>     
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="shortLabel" for="ecFirstRel">Relationship<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="ecFirstRel" required placeholder="Relationship" aria-label="Relationship">
                                                            <div class="help-block with-errors"></div>
                                                        </div>  
                                                    </div>                                                                                                      
                                                </div>
                                                <h4 class="title4">First Contact</h4>
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="shortLabel" for="ecSecondFirstName">First Name<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="ecSecondFirstName" required placeholder="Enter First Name" aria-label="First Name">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                                                                             
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="shortLabel" for="ecSecondLastName">Last Name<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="ecSecondLastName" required placeholder="Enter Last Name" aria-label="Last Name">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                                                                             
                                                    </div>                                                    
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="shortLabel" for="ecSecondAddress">Street Address<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="ecSecondAddress" required placeholder="Enter Street Address" aria-label="Address">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                                                                             
                                                    </div>                                                    
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="shortLabel" for="ecSecondCity">City<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="ecSecondCity" required placeholder="Enter City" aria-label="city">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                                                                             
                                                    </div>  
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="shortLabel" for="ecSecondState">State<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="ecSecondState" required placeholder="Enter State" aria-label="State">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                                                                             
                                                    </div>  
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="shortLabel" for="ecSecondZip">Zip<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="ecSecondZip" required placeholder="Enter Zip" aria-label="Zip">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                                                                             
                                                    </div>                                                                                                                                                              
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="shortLabel" for="ecSecondHome">Home Phone<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="ecSecondHome" required placeholder="Enter Home Phone" aria-label="Home Phone">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                          
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="shortLabel" for="ecSecondCell">Cell Phone<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="ecSecondCell" required placeholder="Enter Cell Phone" aria-label="Cell Phone">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                          
                                                    </div>                                                    
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="shortLabel" for="ecSecondWork">Work Phone<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="ecSecondWork" required placeholder="Enter Work Phone" aria-label="Work Phone">
                                                            <div class="help-block with-errors"></div>
                                                        </div>  
                                                    </div>     
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="shortLabel" for="ecSecondRel">Relationship<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="ecSecondRel" required placeholder="Relationship" aria-label="Relationship">
                                                            <div class="help-block with-errors"></div>
                                                        </div>  
                                                    </div>                                                                                                      
                                                </div>
                                                <div class="row">
                                                    <div class="col col-md-4 offset-md-4">
                                                        <input type="submit" id="submitEC" class="btn btn-success">    
                                                    </div>    
                                                </div>                                                

                                            </form>

                                    </div>
                                    <!--                                                   END OF EMERGENCY TAB                                                     -->
                                    <!--                                                   START OF CHECK IN TAB                                                     -->
                                    <div class="tab-pane fade" id="checkIn" role="tabpanel" aria-labelledby="checkIn">
                                        <h1>Check In</h1>
                                    </div>
                                    <!--                                                   END OF CHECK IN TAB                                                     -->                                    



                                    <!--                                                   START OF VEHICLE TAB                                                     -->
                                    <div class="tab-pane fade" id="vehicle" role="tabpanel" aria-labelledby="vehicle">
                                        <form role="form" data-toggle="validator" class="vehicleInfo">
                                            <h4 class="title3">Monthly Vehicle Usage</h4>
                                            <div class="row">
                                                <div class="col">
                                                        <div class="form-group">
                                                            <label class="" for="vMonth">Current Month<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="vMonth" required placeholder="Enter Current Month" aria-label="Current Month">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                     
                                                </div>
                                                <div class="col">
                                                        <div class="form-group">
                                                            <label class="" for="vYear">Current Year<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="vYear" required placeholder="Enter Current Year" aria-label="Current Year">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                     
                                                </div>
                                                <div class="col">
                                                        <div class="form-group">
                                                            <label class="" for="vLicense">Vehicle License<span class="reqClass"> *</span></label>
                                                            <input type="text" class="form-control" id="vLicense" required placeholder="Enter Vehicle License" aria-label="Vehicle License">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                     
                                                </div>
                                                <div class="col">
                                                        <div class="form-group">
                                                            <label class="" for="vOpCrew">Operator Crew Number</label>
                                                            <input type="text" class="form-control" id="vOpCrew" required placeholder="Operator Crew Number" aria-label="Operator Crew Number">
                                                            <div class="help-block with-errors"></div>
                                                        </div>                                                     
                                                </div>                                                                                                
                                            </div>
                                            <h4 class="title4">Last Month</h4>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="form-group">
                                                        <label class="" for="vEndMileage">Ending Mileage<span class="reqClass"> *</span></label>
                                                        <input type="text" class="form-control" id="vEndMileage" required placeholder="Enter Ending Mileage" aria-label="Ending Mileage">
                                                        <div class="help-block with-errors"></div>
                                                    </div>                                                     
                                                </div>
                                                <div class="col">
                                                    <div class="form-group">
                                                        <label class="" for="vTotalGas">Total Gallons of Gas Used<span class="reqClass"> *</span></label>
                                                        <input type="text" class="form-control" id="vTotalGas" required placeholder="Enter Total Gallons of Gas Used" aria-label="Total Gallons of Gas Used">
                                                        <div class="help-block with-errors"></div>
                                                    </div>                                                     
                                                </div>
                                                <div class="col">
                                                    <div class="form-group">
                                                        <label class="" for="vTotalOil">Total Gallons of Gas Used<span class="reqClass"> *</span></label>
                                                        <input type="text" class="form-control" id="vTotalOil" required placeholder="Enter Total Gallons of Gas Used" aria-label="Total Gallons of Gas Used">
                                                        <div class="help-block with-errors"></div>
                                                    </div>                                                     
                                                </div>
                                                <div class="col">
                                                    <div class="form-group">
                                                        <label class="" for="vDaysUsed">Total of Days Used<span class="reqClass"> *</span></label>
                                                        <input type="text" class="form-control" id="vDaysUsed" required placeholder="Enter Number of Days Used" aria-label="Total of Days Used">
                                                        <div class="help-block with-errors"></div>
                                                    </div>                                                     
                                                </div>                                                                                                                                                
                                            </div>
                                            <div class="row">

                                                    <div class="col col-md-6">
                                                        <input type="submit" id="submitV" class="btn btn-success">    
                                                    </div>   
                                                    <div class="col col-md-6">
                                                        <button id="viewReports" class="btn btn-info">View My Vehicle Reports</button> 
                                                    </div>                                                                                                          

                                            </div>
                                        </form>
                                    </div>
                                    <!--                                                   END OF VEHICLE TAB                                                     -->


                                    <!--                                                   START OF TRAINING TAB                                                    -->
                                    <div class="tab-pane fade" id="training" role="tabpanel" aria-labelledby="trainingCerts">
                                           <h1>Training</h1>
                                    </div>
                                    <!--                                                   END OF TRAINING TAB                                                     -->                              


                                    </div><!-- end of all tab content -->
                                </div><!-- end of border div -->
                            </div>
                        </div>
                    </section>
                                
                </div>
                        <!-- end of sidenav wrapper div -->
        </main>

        <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
         </footer>
        <script src="js/ead.min.js"></script>
        <script src="js/pagesJS/empPortal.js"></script>
        <!-- <script src="js/pagesJS/jobCode.js"></script> -->
</body>

</html>