<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="img/favicons/favicon.ico" type="image/x-icon">
    <title>FIA-BOSS</title>
    <link rel="stylesheet" href="css/ead.min.css">
    <link rel="stylesheet" href="css/pagesCSS/all.css">
    <link rel="stylesheet" href="css/bootstrap-datepicker3.css">
    <link rel="stylesheet" href="css/pagesCSS/addNewEmployee.css">
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
                                    <img data-toggle="tooltip" data-html="true" title="Photo Credit: JDShaw" class="bannerImg" src="../../img/foggyMountain.jpg" alt="Banner Image"/>                                 
                                </header>
                                <div class="usa-grid">
                                        <div class="usa-width-one-whole">
                                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                                <a class="breadcrumbLink"href="/home">Dashboard |</a>
                                                <a class="breadcrumbLink"href="/hrDash">HR Dashboard |</a>
                                                <a class="breadcrumbLinkMain"href="/addNewEmployee">Add New Employee</a>
                                            </p>
                                        </div>
                                </div>
                                <section class="usa-section">
                                    <div class="usa-grid usa-buffer-top">
                                        <div class="usa-width-one-whole title-div">
                                            <h1 id="title">Add New Employee</h1>
                                        </div>

                                    </div>                                    

                                    <div class="usa-grid usa-buffer-top">
                                        <div class="usa-width-one-whole faded">
                                            <div class="border">
                                                <ul class="nav nav-tabs" id="myTab" role="tablist"> <!-- start of tabs list -->
                                                <li class="nav-item">
                                                    <a class="nav-link active" id="general-tab" data-toggle="tab" href="#general" role="tab" aria-controls="generalInfo" >General Info</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="work-tab" data-toggle="tab" href="#work" role="tab" aria-controls="workInfo" >Work Info</a>
                                                </li>                                                
                                                <li class="nav-item">
                                                    <a class="nav-link" id="emergency-tab" data-toggle="tab" href="#emergency" role="tab" aria-controls="emergencyInfo" >Emergency Info</a>
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
                                                                        
                                                                        <div class="col col-md-3">
                                                                            <div class="form-group">
                                                                                <label for="minitial">Middle Initial<span class="reqClass"> *</span></label>
                                                                                <input type="text" required id="minitial" class="form-control"  aria-label="middle initial" placeholder="MI">
                                                                                <div class="help-block with-errors"></div>
                                                                            </div>
                                                                        </div>  
                                                                        <div class="col col-md-3"></div>                                                           
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
                                                                    <p class="photoText">Employee Photo, Click to Edit</p>
                                                            </div>
                                                            <div class="col col-md-1"></div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label for="address1">Address Line 1<span class="reqClass"> *</span></label>
                                                                    <input type="text" class="form-control" id="address1" required placeholder="Enter Street Address" aria-label="Address">
                                                                    <div class="help-block with-errors"></div>
                                                                </div>
                                                            </div>

                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label for="birthDay">Birthday<span class="reqClass"> *</span></label>
                                                                    <div class="input-group date" data-provide="datepicker">
                                                                        <input type="text" required id="birthDay" class="form-control">
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
                                                                    <label for="address1">Address Line 2</label>
                                                                    <input type="text" class="form-control" id="address1"  placeholder="Enter Street Address" aria-label="Address">                                                                    
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label for="city">City<span class="reqClass"> *</span></label>
                                                                    <input type="text" class="form-control" id="city" required placeholder="Enter City" aria-label="city"> 
                                                                    <div class="help-block with-errors"></div>
                                                                </div>                                                     
                                                            </div>                                                                                                                                
                                                        </div>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label for="state">State<span class="reqClass"> *</span></label>
                                                                    <input type="text" class="form-control" id="state" required placeholder="ST" aria-label="State">
                                                                    <div class="help-block with-errors"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label for="zip">Zip Code<span class="reqClass"> *</span></label>
                                                                    <input type="text" class="form-control" id="zip" required placeholder="Zip Code" aria-label="Zip">
                                                                    <div class="help-block with-errors"></div>
                                                                </div>
                                                            </div>
                                             
                                                        </div>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label for="dLicenseNumber">Drivers License Number<span class="reqClass"> *</span></label>
                                                                    <input type="text" class="form-control" id="dLicenseNumber" required placeholder="Drivers License Number" aria-label="License Number">
                                                                    <div class="help-block with-errors"></div>
                                                                </div> 
                                                            </div>
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label for="dLicenseState">Drivers License State<span class="reqClass"> *</span></label>
                                                                    <input type="text" class="form-control" id="dLicenseState" required placeholder="Drivers License State" aria-label="License State">
                                                                    <div class="help-block with-errors"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label for="dLicenseExp">Expiration Date<span class="reqClass"> *</span></label>
                                                                    <div class="input-group date" data-provide="datepicker">
                                                                        <input type="text" required id="dLicenseExp" class="form-control">
                                                                        <div class="input-group-addon">
                                                                            <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                        </div>                                                                    
                                                                    </div>
                                                                    <div class="help-block with-errors"></div>
                                                                </div>  
                                                            </div>  
                                                                                                                                                                                           
                                                        </div>

            
                                                </form>
                                                    
                                                </div>
                                                <!--                                                   END OF GENERAL TAB                                                     -->

                                                <!--                                                   START OF WORK TAB                                                     -->
                                                <div class="tab-pane fade" id="work" role="tabpanel" aria-labelledby="workInfo">
                                                        <form role="form" data-toggle="validator" class="emergencyInfo">
                                                                <h4 class="title3">Employee Work Information</h4>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <div class="form-group">
                                                                            <label for="eTitle">Title<span class="reqClass"> *</span></label>
                                                                            <input type="text" class="form-control" id="eTitle" required placeholder="Employee Title" aria-label="Cell Phone">
                                                                            <div class="help-block with-errors"></div>
                                                                        </div>                                                        
                                                                    </div>                                                                    
                                                                    <div class="col">
                                                                        <div class="form-group">
                                                                            <label for="dStation">Duty Station<span class="reqClass"> *</span></label>
                                                                            <select name="dstation" required id="dStation" class="form-control">
                                                                                    <option value="">Choose Duty Station</option>
                                                                                    <option value="ogden">Ogden, UT</option>
                                                                                    <option value="mccall">McCall, MT</option>
                                                                                    <option value="pontiac">Pontiac, MI</option>
                                                                                </select>
                                                                            <div class="help-block with-errors"></div>
                                                                        </div>                                                        
                                                                    </div>
                                                                    <div class="col">
                                                                        <div class="form-group">
                                                                            <label for="supervisor">Employee Supervisor<span class="reqClass"> *</span></label>
                                                                            <select name="sup" required id="supervisor" class="form-control">
                                                                                <option value="">Choose Supervisor</option>
                                                                                <option value="sheena">Sheena Jordan</option>
                                                                                <option value="brooke">Brooke Rice</option>
                                                                                <option value="cindy">Cindy Coates</option>
                                                                            </select>
                                                                            <div class="help-block with-errors"></div>
                                                                        </div>                                                        
                                                                    </div>                                                                                                        
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <div class="form-group">
                                                                            <label for="eConf">Confidentiality Agreement Date<span class="reqClass"> *</span></label>
                                                                            <div class="input-group date" data-provide="datepicker">
                                                                                <input type="text" required id="eConf" class="form-control">
                                                                                <div class="input-group-addon">
                                                                                    <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                                </div>                                                                    
                                                                            </div>
                                                                            <div class="help-block with-errors"></div>
                                                                        </div>  
                                                                    </div>
                                                                    <div class="col">
                                                                        <div class="form-group">
                                                                            <label for="ePayPlan">Pay plan<span class="reqClass"> *</span></label>
                                                                            <input type="text" class="form-control" id="ePayPlan" required placeholder="Pay Plan" aria-label="Pay Plan">
                                                                            <div class="help-block with-errors"></div>
                                                                        </div>                                                        
                                                                    </div>   
                                                                    <div class="col">
                                                                        <div class="form-group">
                                                                            <label for="eSeries">Series<span class="reqClass"> *</span></label>
                                                                            <input type="text" class="form-control" id="eSeries" required placeholder="Series" aria-label="Series">
                                                                            <div class="help-block with-errors"></div>
                                                                        </div>                                                        
                                                                    </div> 
                                                                    <div class="col">
                                                                        <div class="form-group">
                                                                            <label for="eGrade">Grade<span class="reqClass"> *</span></label>
                                                                            <select name="sup" required id="eGrade" class="form-control">
                                                                                <option value="">Choose Grade</option>
                                                                                <option value="1">1</option>
                                                                                <option value="2">2</option>
                                                                                <option value="3">3</option>
                                                                                <option value="4">4</option>
                                                                                <option value="5">5</option>
                                                                                <option value="6">6</option>
                                                                                <option value="7">7</option>
                                                                                <option value="8">8</option>
                                                                                <option value="9">9</option>
                                                                                <option value="10">10</option>
                                                                                <option value="11">11</option>
                                                                                <option value="12">12</option>
                                                                                <option value="13">13</option>
                                                                                <option value="14">14</option>
                                                                                <option value="15">15</option>
                                                                                <option value="16">16</option>
                                                                            </select>
                                                                            <div class="help-block with-errors"></div>
                                                                        </div>                                                        
                                                                    </div>                                                                                                                                                                                                                                                                             
                                                                </div>

                                                            </form>
                                                </div>
                                                <!--                                                   END OF WORK TAB                                                     -->


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
            
                                                            <h4 class="title4">First Contact</h4>
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
                                                            <h4 class="title4">Second Contact</h4>
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
            
            
                                                </div><!-- end of all tab content -->
                                            </div><!-- end of border div -->
                                        </div>
                                    </div>                             

                         </section>                         
                        
                </div><!-- end of sidenav wrapper div -->
                






        </main>

        <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
         </footer>
         <script src="js/ead.min.js"></script>
         <script src="js/bootstrap-datepicker.js"></script>
         <script src="js/pagesJS/addNewEmployee.js"></script>
        <script src="js/pagesJS/mainHRPages.js"></script>

</body>

</html>