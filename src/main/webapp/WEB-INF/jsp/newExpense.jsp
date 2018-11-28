<!doctype html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="img/favicons/favicon.ico" type="image/x-icon">
        <title>FIA-BOSS</title>
        <link rel="stylesheet" href="css/ead.min.css">
        <link rel="stylesheet" href="css/pagesCSS/all.css">
        <link rel="stylesheet" href="css/pagesCSS/newExpense.css">
        <link rel="stylesheet" href="css/bootstrap-datepicker3.css">
    </head>

    <body class="layout-demo">
        <header class="usa-header usa-header-extended" role="banner" id="mainHeader">
        </header>
        <div class="usa-overlay"></div>
        <main id="main-content">
            <div class="wrapper">

                <nav id="sidebar"></nav>    


                <section class="usa-section1">
                    <header class="main-header" role="banner">
                        <img src="../../img/mountain.jpg" alt="Banner Image/boss/>
                    </header>
                    <div class="usa-grid">
                        <div class="usa-width-one-whole">
                            <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                <a class="breadcrumbLink"href="../home/home.html">Dashboard |</a>
                                <a class="breadcrumbLink"href="../budget/budgetDash.html">Budget |</a>
                                <a class="breadcrumbLinkMain"href="../budget/newExpense.html">New Expense</a>
                            </p>
                        </div>
                    </div><!-- end of breadcrumbs _-->

                    <section class="usa-section">
                        <div class="usa-grid usa-buffer-top">
                            <div class="use-width-one-whole title-div">
                                <h1 id="title">Expenses</h1>
                            </div>
                        </div>

                        <div class="usa-grid usa-buffer-top">
                            <div class="usa-width-one-whole">
                                <h2 class="title2">New Expenses</h2>
                                <p class="sequence">Sequence Number: #XXXX</p>
                                <div class="border">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist"> <!-- start of tabs list -->
                                        <li class="nav-item">
                                            <a class="nav-link active" id="time-tab" data-toggle="tab" href="#time" role="tab" aria-controls="timesheets" >Time Sheets</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="travel-tab" data-toggle="tab" href="#travel" role="tab" aria-controls="travelvouchers" >Travel Vouchers</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="visa-tab" data-toggle="tab" href="#visa" role="tab" aria-controls="visapurchases" >Visa Purchases</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="other-tab" data-toggle="tab" href="#other" role="tab" aria-controls="othermisc" >Other Misc</a>
                                        </li>
                                    </ul> <!-- end of tabs list -->

                                    <div class="tab-content" id="myTabContent"><!-- start of tab content -->


                                        <!--                                                   START OF TIMESHEETS TAB                                                     -->
                                        <div class="tab-pane fade show active" id="time" role="tabpanel" aria-labelledby="timesheets">
                                            <form role="form" data-toggle="validator" id="timeForm">
                                                <div class="row">
                                                    <p class="reqText"><span class="reqClass">* </span> Indicates a required field</p>
                                                </div>
                                                <div class="row">
                                                    <p class="reqText"><span class="shaded">Shaded</span>  fields are auto populated based on your selections</p>
                                                </div>                                                
                                                <div class="row">
                                                    <div class="col-md-3 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="fy">Fiscal Year<span class="reqClass"> *</span></label>
                                                            <select class="form-control" name="select" required id="fy"></select>
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="dateentered">Date Entered<span class="reqClass"> *</span></label>
                                                            <div class="input-group date" data-provide="datepicker">
                                                                <input type="text" required id="dateentered" class="form-control">
                                                                <div class="input-group-addon">
                                                                    <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                </div>                                                                    
                                                            </div>
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="datemod">Date Modified<span class="reqClass"> *</span></label>
                                                            <div class="input-group date" data-provide="datepicker">
                                                                <input type="text" required id="datemod" class="form-control">
                                                                <div class="input-group-addon">
                                                                    <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                </div>                                                                    
                                                            </div>
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="dateob">Date Obligated<span class="reqClass"> *</span></label>
                                                            <div class="input-group date" data-provide="datepicker">
                                                                <input type="text" required id="dateob" class="form-control">
                                                                <div class="input-group-addon">
                                                                    <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                </div>                                                                    
                                                            </div>
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-3 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="namecode">Namecode<span class="reqClass"> *</span></label>
                                                            <select class="form-control" required id="namecode">
                                                                <option value="">Please Select a Namecode</option>
                                                            </select>
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="desc">Description<span class="reqClass"> *</span></label>
                                                            <input type="text" disabled id="desc" class="form-control"  aria-label="description" value="Salary" aria-describedby="basic-addon1">
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>  
                                                    <div class="col-md-3 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="actcode">Activity Code<span class="reqClass"> *</span></label>
                                                            <select class="form-control" required id="actcode">
                                                                <option value="">Please Select an Activity Code</option>
                                                            </select>
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>                                                    
                                                    <div class="col-md-3 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="boc">Budget Object Code (BOC)<span class="reqClass"> *</span></label>
                                                            <input type="text" disabled id="boc" class="form-control"  aria-label="budget object code" required value="11" aria-describedby="basic-addon1">
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                </div>                                                
                                                <div class="row">
                                                    <div class="col-md-3 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="pc">Payment Code<span class="reqClass"> *</span></label>
                                                            <input type="text" disabled id="pc" class="form-control" aria-label="payment code" required value="SAL" minlength="1" maxlength="3" maxaria-describedby="basic-addon1">
                                                            <div class="help-block with-errors"></div>
                                                        </div>  
                                                    </div>                                                    
                                                    <div class="col-md-3 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="payperiod">Pay Period<span class="reqClass"> *</span></label>
                                                            <select class="form-control" id="payperiod">
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                                <option>6</option>
                                                                <option>7</option>
                                                                <option>8</option>
                                                                <option>9</option>
                                                                <option>10</option>
                                                                <option>11</option>
                                                                <option>12</option>
                                                                <option>13</option>
                                                                <option>14</option>
                                                                <option>15</option>
                                                                <option>16</option>
                                                                <option>17</option>
                                                                <option>18</option>
                                                                <option>19</option>
                                                                <option>20</option>
                                                                <option>21</option>
                                                                <option>22</option>
                                                                <option>23</option>
                                                                <option>24</option>
                                                                <option>25</option>
                                                                <option>26</option>
                                                                <option>27</option>
                                                            </select>
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="comphours" class="control-label">Comp Hours</label>
                                                            <input type="number" id="comphours"  class="form-control" aria-label="Comp Hours"  min="1" max="99" aria-describedby="basic-addon1">

                                                        </div>
                                                    </div> 
                                                    <div class="col-md-3 col-sm-6"> 
                                                        <div class="form-group">
                                                            <label for="state">State<span class="reqClass"> *</span></label>
                                                            <select class="form-control" required id="state">
                                                                <option value="">Please Choose State</option>
                                                                <option value="MI">MI</option>
                                                                <option value="WA">WA</option>
                                                                <option value="CA">CA</option>
                                                            </select>
                                                            <div class="help-block with-errors"></div>
                                                        </div>   
                                                    </div>                                                                                                   

                                                </div>

                                                <div class="row">
                                                    <div class="col">
                                                        <label for="remarks">Remarks</label>
                                                        <textarea class="form-control" id="remarks" rows="1"></textarea>
                                                    </div>
                                                </div>                                                
                                                <!-- START OF DETAILS TABLE -->
                                                <div id="detailsTable">
                                                    <div class="row">
                                                        <h2 class="title3">Job Code Details Table</h2>
                                                    </div>

                                                    <div class="row bottomRow">
                                                        <div class="col-md-4 col-sm-12 bottomBL">
                                                            <div class="row">
                                                                <div class="col">
                                                                    <div class="form-group">
                                                                        <label for="jobcode">Job Code<span class="reqClass"> *</span></label>
                                                                        <select class="form-control" required id="jobcode">        
                                                                            <option value="">Choose Code</option>                                                                
                                                                        </select>
                                                                        <div class="help-block with-errors"></div>
                                                                    </div>
                                                                </div>                                                                
                                                                <div class="col">
                                                                    <div class="form-group">
                                                                        <label for="unitcode">Unit Code<span class="reqClass"> *</span></label>
                                                                        <input type="text" readonly="readonly" id="unitcode" class="form-control"  required aria-label="Unit Code" value="Default" aria-describedby="basic-addon1">
                                                                        <div class="help-block with-errors"></div>
                                                                    </div>
                                                                </div> 
                                                            </div>      
                                                            <div class="row">                                                        
                                                                <div class="col">
                                                                    <div class="form-group">
                                                                        <label for="jobcodedesc" class="control-label">Job Code Desc<span class="reqClass"> *</span></label>
                                                                        <input readonly="readonly" type="text" id="jobcodedesc" required class="form-control" required aria-label="job code description" placeholder="Description">
                                                                        <div class="help-block with-errors"></div>
                                                                    </div>
                                                                </div>
                                                            </div>    
                                                            <div class="row bottomRow">
                                                                <div class="col">
                                                                    <div class="form-group">
                                                                        <label for="expcode">Expense Code<span class="reqClass"> *</span></label>
                                                                        <select class="form-control" required id="expcode">
                                                                            <option value="">Choose Code</option>
                                                                        </select>
                                                                        <div class="help-block with-errors"></div>
                                                                    </div>
                                                                </div>
                                                                <div class="col">
                                                                    <div class="form-group">
                                                                        <label for="hours" class="control-label">Enter Hours<span class="reqClass"> *</span></label>
                                                                        <input type="text" id="hours" class="form-control"  required aria-label="Hours" placeholder="Enter Hours" aria-describedby="basic-addon1">
                                                                        <div class="help-block with-errors"></div>
                                                                    </div>
                                                                </div>                                                                
                                                            </div>

                                                            <div class="row">
                                                                <div class="col-4 col-sm-12 col-sm-offset-7 col-md-offset-7">
                                                                    <button id="addbtn" type="button" class="btn btn-lg btn-success">
                                                                        <!-- <i class="fa fa-2x fa-arrow-circle-o-right" style="color: #006633"></i> -->
                                                                        <span class="addbtn">Add</span> <i class="fa fa-2x fa-angle-double-right" aria-hidden="true"></i>
                                                                    </button>                                                                     
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div class="col-md-8 col-sm-12 bottomBR">
                                                            <table id="timeTable" class="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th style="width: 10%">Exp#</th>
                                                                        <th style="width: 20%">Job Code</th>
                                                                        <th style="width: 10%">Hours</th>
                                                                        <th style="width: 20%">Type</th>
                                                                        <th style="width: 20%">Amount</th>
                                                                        <th style="width: 20%">Date Verified</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row submitrow">
                                                    <div class="col-4 offset-4">
                                                        <input id="timeSubmit" type="submit" class="btn btn-lg submitbtn btn-success">
                                                    </div>
                                                </div>

                                            </form>
                                        </div>
                                        <!--                                                   END OF TIMESHEETS TAB                                                     -->


                                        <!--                                                   START OF TRAVEL TAB                                                     -->
                                        <div class="tab-pane fade" id="travel" role="tabpanel" aria-labelledby="travelvouchers">
                                            <form role="form" data-toggle="validator" id="travelForm">
                                                <div class="row">
                                                    <p class="reqText"><span class="reqClass">* </span> Indicates a required field</p>
                                                </div>
                                                <div class="row">
                                                    <p class="reqText"><span class="shaded">Shaded</span>  fields are auto populated based on your selections</p>
                                                </div>                                            
                                                <div class="row">

                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label for="tfy" class="control-label">Fiscal Year<span class="reqClass"> *</span></label>
                                                            <select class="form-control" required min="2012" max="2018" name="select" id="tfy"></select>                                                    
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="control-label" for="tdateentered">Date Entered<span class="reqClass"> *</span></label>
                                                            <div class="input-group date" data-provide="datepicker">
                                                                <input type="text" required required id="tdateentered" class="form-control">
                                                                <div class="input-group-addon">
                                                                    <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                </div>                                                                
                                                            </div>
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="control-label" for="tdatemod">Date Modified<span class="reqClass"> *</span></label>
                                                            <div class="input-group date" data-provide="datepicker">
                                                                <input type="text" required id="tdatemod" class="form-control">
                                                                <div class="input-group-addon">
                                                                    <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                </div>                                                                
                                                            </div>
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="control-label" for="tdateob">Date Obligated<span class="reqClass"> *</span></label>
                                                            <div class="input-group date" data-provide="datepicker">
                                                                <input type="text" required id="tdateob" class="form-control">
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
                                                            <label class="control-label" for="tnamecode">Namecode<span class="reqClass"> *</span></label>
                                                            <select class="form-control" required id="tnamecode">
                                                                <option value="">Please Choose Name Code</option>
                                                            </select>
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>

                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="control-label" for="tactcode">Activity Code<span class="reqClass"> *</span></label>
                                                            <select class="form-control" required id="tactcode">
                                                                <option value="">Please Choose Activity Code</option>
                                                            </select>
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="control-label" for="tboc">BOC<span class="reqClass"> *</span></label>
                                                            <input type="text" disabled required id="tboc" class="form-control"  aria-label="budget object code" value="21" aria-describedby="basic-addon1">
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="control-label" for="tpc">Payment Code<span class="reqClass"> *</span></label>
                                                            <input type="text" disabled required id="tpc" class="form-control" aria-label="payment code" value="TV" aria-describedby="basic-addon1">
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="control-label" for="tstateassigned">State Assigned<span class="reqClass"> *</span></label>
                                                            <select class="form-control" required disabled id="tstateassigned">
                                                            </select>
                                                            <option value="">Choose State</option>
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>                                                     
                                                </div>                                            


                                                <div id="travelDetails">
                                                    <div class="row">
                                                        <h2 class="title4" style="text-align: center">Travel Details</h2>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-6" id="leftdetailcol">
                                                            <div class="row">
                                                                <div class="col">
                                                                    <label for="tdesc" class="topLabel">Description</label>
                                                                    <input type="text" disabled id="tdesc" class="form-control"  required aria-label="description" value="Travel" aria-describedby="basic-addon1">
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col">
                                                                    <div class="form-group">
                                                                        <label for="tfromdate">From<span class="reqClass"> *</span></label>
                                                                        <div class="input-group date" data-provide="datepicker">
                                                                            <input type="text" id="tfromdate" required class="form-control">
                                                                            <div class="input-group-addon">
                                                                                <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="help-block with-errors"></div>
                                                                    </div> 
                                                                </div>
                                                                <div class="col">
                                                                    <div class="form-group">
                                                                        <label for="ttodate">To<span class="reqClass"> *</span></label>
                                                                        <div class="input-group date" data-provide="datepicker">
                                                                            <input type="text" id="ttodate" required class="form-control">
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
                                                                        <label class="control-label" for="tvocnumber">Voucher Number<span class="reqClass"> *</span></label>
                                                                        <input type="text" id="tvocnumber" required class="form-control"  maxlength="10" minlength="5" aria-label="voucher number"  aria-describedby="basic-addon1">
                                                                        <div class="help-block with-errors"></div>
                                                                    </div>  
                                                                </div>
                                                                <div class="col">
                                                                    <div class="form-group">
                                                                        <label class="control-label" for="tpov">POV Miles</label>
                                                                        <input type="text"  id="tpov" class="form-control"  aria-label="POV Miles" placeholder="POV Miles"  aria-describedby="basic-addon1">
                                                                        <div class="help-block with-errors"></div>    
                                                                    </div>
                                                                </div> 
                                                                <div class="col">
                                                                    <div class="form-group">
                                                                        <label for="tstate">State<span class="reqClass"> *</span></label>
                                                                        <input type="text" id="tstate" required class="form-control"  maxlength="3" minlength="2" aria-label="travel state">
                                                                        <div class="help-block with-errors"></div>
                                                                    </div>
                                                                </div> 
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="col">
                                                                <label for="tremarks">Remarks</label>
                                                                <textarea class="form-control" id="tremarks" rows="1"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="detailsTable">
                                                    <div class="row">
                                                        <h2 class="title3">Job Code Details Table</h2>
                                                    </div>

                                                    <div class="row bottomRow">
                                                        <div class="col-4 bottomBL">
                                                            <div class="row">
                                                                <div class="col">
                                                                    <div class="form-group">
                                                                        <label class="control-label" for="tjobcode">Job Code<span class="reqClass"> *</span></label>
                                                                        <select class="form-control" required id="tjobcode">
                                                                        </select>
                                                                        <div class="help-block with-errors"></div>
                                                                    </div>
                                                                </div>                                                             
                                                                <div class="col">
                                                                    <div class="form-group">
                                                                        <label class="control-label" for="tunitcode">Unit<span class="reqClass"> *</span></label>
                                                                        <input type="text" readonly="readonly" id="tunitcode" class="form-control"  required aria-label="Unit Code" placeholder="Unit Code">
                                                                        <div class="help-block with-errors"></div>
                                                                    </div>
                                                                </div> 
                                                            </div>                                                            
                                                            <div class="row">
                                                                <div class="col">
                                                                    <div class="form-group">
                                                                        <label class="control-label" for="tjobcodedesc">Job Code Desc<span class="reqClass"> *</span></label>
                                                                        <input type="text" readonly="readonly" id="tjobcodedesc" class="form-control"  required aria-label="Job Code Description" placeholder="Description">
                                                                        <div class="help-block with-errors"></div>
                                                                    </div>
                                                                </div> 
                                                            </div>                                                              

                                                            <div class="row">
                                                                <div class="col">
                                                                    <div class="form-group">
                                                                        <label class="control-label" for="texpcode">Expense Code<span class="reqClass"> *</span></label>
                                                                        <select class="form-control" required id="texpcode">
                                                                        </select>
                                                                        <div class="help-block with-errors"></div>
                                                                    </div>
                                                                </div>
                                                                <div class="col">
                                                                    <div class="form-group">
                                                                        <label class="control-label" for="tamount">Amount<span class="reqClass"> *</span></label>
                                                                        <input type="text" id="tamount" required class="form-control" placeholder="Enter Amount" aria-label="job code amount">
                                                                        <div class="help-block with-errors"></div>
                                                                    </div>
                                                                </div>                                                            
                                                            </div>

                                                            <div class="row">
                                                                <div class="col-4 offset-7">
                                                                    <button id="taddbtn" type="button" class="btn btn-lg btn-success">
                                                                        <!-- <i class="fa fa-2x fa-arrow-circle-o-right" style="color: #006633"></i> -->
                                                                        <span class="addbtn">Add</span> <i class="fa fa-2x fa-angle-double-right" aria-hidden="true"></i>
                                                                    </button>                                                                     
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-8 bottomBR">
                                                            <table id="travelTable" class="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th style="width: 10%">Exp#</th>
                                                                        <th style="width: 25%">Job Code</th>
                                                                        <th style="width: 20%">Type</th>
                                                                        <th style="width: 20%">Amount</th>
                                                                        <th style="width: 25%">Date Verified</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="row submitrow">
                                                    <div class="col-4 offset-4">
                                                        <button id="travelSubmit" type="submit" class="btn btn-lg submitbtn btn-success">
                                                            <!-- <i class="fa fa-2x fa-arrow-circle-o-right" style="color: #006633"></i> -->
                                                            Submit Expense 
                                                        </button> 
                                                    </div>
                                                </div>

                                            </form>
                                        </div>
                                        <!--                                                   END OF TRAVEL TAB                                                     -->



                                        <!--                                                   START OF VISA TAB                                                     -->
                                        <div class="tab-pane fade" id="visa" role="tabpanel" aria-labelledby="visa">
                                            <form role="form" data-toggle="validator" id="visaForm">
                                                <div class="row">
                                                    <p class="reqText"><span class="reqClass">* </span> Indicates a required field</p>
                                                </div>
                                                <div class="row">
                                                    <p class="reqText"><span class="shaded">Shaded</span>  fields are auto populated based on your selections</p>
                                                </div>                                                
                                                <div class="row">
                                                    <div class="col">
                                                        <label for="vfy">Fiscal Year<span class="reqClass"> *</span></label>
                                                        <select required class="form-control" name="select" id="vfy"></select>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="control-label" for="vdateentered">Date Entered<span class="reqClass"> *</span></label>
                                                            <div class="input-group date" data-provide="datepicker">
                                                                <input required type="text" id="vdateentered" class="form-control">
                                                                <div class="input-group-addon">
                                                                    <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                </div>
                                                            </div>
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="control-label" for="vdatemod">Date Modified<span class="reqClass"> *</span></label>
                                                            <div class="input-group date" data-provide="datepicker">
                                                                <input required type="text" id="vdatemod" class="form-control">
                                                                <div class="input-group-addon">
                                                                    <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                </div>
                                                            </div>
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="control-label" for="vdateob">Date Obligated<span class="reqClass"> *</span></label>
                                                            <div class="input-group date" data-provide="datepicker">
                                                                <input required type="text" requried id="vdateob" class="form-control">
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
                                                            <label class="control-label" for="vnamecode">Namecode<span class="reqClass"> *</span></label>
                                                            <select class="form-control" required id="vnamecode">
                                                                <!-- <option>1</option>
                                                                 <option>2</option>
                                                                 <option>3</option>
                                                                 <option>4</option>
                                                                 <option>5</option> -->
                                                            </select>
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="control-label" for="vactcode">Activity Code<span class="reqClass"> *</span></label>
                                                            <select class="form-control" required id="vactcode">
                                                            </select>
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div> 
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="control-label" for="vboc">Budget Object (BOC)<span class="reqClass"> *</span></label>
                                                            <input type="text" required disabled id="vboc" class="form-control"  aria-label="budget object code" value="26" aria-describedby="basic-addon1">
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div> 
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="control-label" for="vpc">Payment Code<span class="reqClass"> *</span></label>
                                                            <input type="text" required disabled id="vpc" class="form-control" aria-label="payment code" value="VI" aria-describedby="basic-addon1">
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>                                                                                                                                                                      
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="control-label" for="vstateassigned">State Assigned<span class="reqClass"> *</span></label>
                                                            <input type="text" required disabled id="vstateassigned" class="form-control"  aria-label="description" placeholder="State" aria-describedby="basic-addon1">
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>                                                        


                                                </div>                                                
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label class="control-label" for="vdesc">Description - Vendor Name<span class="reqClass"> *</span></label>
                                                            <input type="text" required id="vdesc" class="form-control"  aria-label="description" placeholder="Enter Description" aria-describedby="basic-addon1">
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>                                                                                                                                                                
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <label for="vremarks">Remarks</label>
                                                        <textarea class="form-control" id="vremarks" rows="1"></textarea>
                                                    </div>
                                                </div>
                                                <div id="detailsTable">
                                                    <div class="row">
                                                        <h2 class="title3">Job Code Details Table</h2>
                                                    </div>

                                                    <div class="row bottomRow">
                                                        <div class="col-4 bottomBL">
                                                            <div class="row">
                                                                <div class="col">
                                                                    <div class="form-group">
                                                                        <label class="control-label" for="vjobcode">Job Code<span class="reqClass"> *</span></label>
                                                                        <select required class="form-control" id="vjobcode">
                                                                        </select>
                                                                        <div class="help-block with-errors"></div>
                                                                    </div>
                                                                </div>                                                             
                                                                <div class="col">
                                                                    <div class="form-group">
                                                                        <label class="control-label" for="vunitcode">Unit<span class="reqClass"> *</span></label>
                                                                        <input type="text" readonly="readonly" id="vunitcode" class="form-control"  required aria-label="Unit Code" value="Default">
                                                                        <div class="help-block with-errors"></div>
                                                                    </div>
                                                                </div>
                                                            </div>  
                                                            <div class="row">                                                        
                                                                <div class="col">
                                                                    <div class="form-group">
                                                                        <label class="control-label" for="vjobcodedesc">Job Code Desc<span class="reqClass"> *</span></label>
                                                                        <input type="text" readonly="readonly" id="vjobcodedesc" class="form-control"  required aria-label="Job Code Desc" value="Default">
                                                                        <div class="help-block with-errors"></div>
                                                                    </div>
                                                                </div>
                                                            </div>                                                                  
                                                            <div class="row">
                                                                <div class="col">
                                                                    <div class="form-group">
                                                                        <label class="control-label" for="vexpcode">Expense Code<span class="reqClass"> *</span></label>
                                                                        <select class="form-control" required id="vexpcode">
                                                                        </select>
                                                                        <div class="help-block with-errors"></div>
                                                                    </div>
                                                                </div>
                                                                <div class="col">
                                                                    <div class="form-group">
                                                                        <label class="control-label{" for="vamount">Amount<span class="reqClass"> *</span></label>
                                                                                                                         <input required min="1" max="999999" type="number" id="vamount" class="form-control" placeholder="Enter Amount" aria-label="job code amount">
                                                                                                                         <div class="help-block with-errors"></div>
                                                                        </div>
                                                                    </div>                                                            


                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-4 offset-7">
                                                                        <button id="vaddbtn" type="button" class="btn btn-lg btn-success">
                                                                            <!-- <i class="fa fa-2x fa-arrow-circle-o-right" style="color: #006633"></i> -->
                                                                            <span class="addbtn">Add</span> <i class="fa fa-2x fa-angle-double-right" aria-hidden="true"></i>
                                                                        </button>                                                                     
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-8 bottomBR">
                                                                <table id="visaTable" class="vtable">
                                                                    <thead>
                                                                        <tr>
                                                                            <th style="width: 10%">Exp#</th>
                                                                                <th style="width: 25%">Job Code</th>
                                                                                <th style="width: 20%">Type</th>
                                                                                <th style="width: 20%">Amount</th>
                                                                                <th style="width: 25%">Date Verified</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <!-- <tr>
                                                                               <td>
                                                                                   <input type="text" id="vtableExp" class="form-control" aria-label="description" value="02" aria-describedby="basic-addon1">
                                                                               </td>
                                                                               <td>
                                                                                   <input type="text" id="vtableJobCode" class="form-control" aria-label="description" value="FRF13818" aria-describedby="basic-addon1">
                                                                               </td>
                                                                               <td>
                                                                                   <span class="vtableJobCodeDesc">Mileage & Parking</span>
                                                                               </td>
                                                                               <td>
                                                                                   <input type="text" id="vtableAmount" class="form-control"  aria-label="description" value="$234" aria-describedby="basic-addon1">
                                                                               </td>
                                                                               <td>
                                                                                   <div class="input-group date" data-provide="datepicker">
                                                                                       <input type="text" placeholder="Pick a date" id="vtableDateVerified" class="form-control">
                                                                                       <div class="input-group-addon">
                                                                                           <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                                       </div>
                                                                                   </div>                                                                                
                                                                               </td>
                                                                             </tr>-->
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>                                                                                                                                                

                                                        <div class="row submitrow">
                                                            <div class="col-4 offset-4">
                                                                <button id="visaSubmit" type="submit" class="btn btn-lg submitbtn btn-success">
                                                                    <!-- <i class="fa fa-2x fa-arrow-circle-o-right" style="color: #006633"></i> -->
                                                                    Submit Expense 
                                                                </button> 
                                                            </div>
                                                        </div> 
                                                    </form>
                                                </div>
                                                <!--                                                   END OF VISA TAB                                                     -->


                                                <!--                                                   START OF OTHER/MISC TAB                                                    -->
                                                <div class="tab-pane fade" id="other" role="tabpanel" aria-labelledby="other">
                                                    <form role="form" data-toggle="validator" id="otherForm">
                                                        <div class="row">
                                                            <p class="reqText"><span class="reqClass">* </span> Indicates a required field</p>
                                                        </div>
                                                        <div class="row">
                                                            <p class="reqText"><span class="shaded">Shaded</span>  fields are auto populated based on your selections</p>
                                                        </div>                                                
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label class="control-label" for="ofy">Fiscal Year<span class="reqClass"> *</span></label>
                                                                    <select required class="form-control" name="select" id="ofy"></select>
                                                                    <div class="help-block with-errors"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label class="control-label" for="odateentered">Date Entered<span class="reqClass"> *</span></label>
                                                                    <div class="input-group date" data-provide="datepicker">
                                                                        <input required type="text" id="odateentered" class="form-control">
                                                                        <div class="input-group-addon">
                                                                            <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="help-block with-errors"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label class="control-label" for="odatemod">Date Modified<span class="reqClass"> *</span></label>
                                                                    <div class="input-group date" data-provide="datepicker">
                                                                        <input required type="text" id="odatemod" class="form-control">
                                                                        <div class="input-group-addon">
                                                                            <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="help-block with-errors"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label class="control-label" for="odateob">Date Obligated<span class="reqClass"> *</span></label>
                                                                    <div class="input-group date" data-provide="datepicker">
                                                                        <input required type="text" id="odateob" class="form-control">
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
                                                                    <label class="control-label" for="onamecode">Namecode<span class="reqClass"> *</span></label>
                                                                    <select required class="form-control" id="onamecode">
                                                                        <!-- <option>1</option>
                                                                         <option>2</option>
                                                                         <option>3</option>
                                                                         <option>4</option>
                                                                         <option>5</option>m -->
                                                                    </select>

                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label for="oactcode">Activity Code<span class="reqClass"> *</span></label>
                                                                    <select class="form-control" id="oactcode">
                                                                    </select>
                                                                    <div class="help-block with-errors"></div>
                                                                </div>
                                                            </div> 
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label class="control-label" for="oboc">Budget Object Code<span class="reqClass"> *</span></label>
                                                                    <select name="oboc" required id="oboc" class="form-control" value=""></select>
                                                                    <div class="help-block with-errors"></div>
                                                                </div>
                                                            </div> 
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label class="control-label" for="opc">Payment Code<span class="reqClass"> *</span></label>
                                                                    <input type="text"  id="opc" class="form-control" aria-label="payment code" required aria-describedby="basic-addon1">
                                                                    <div class="help-block with-errors"></div>
                                                                </div>
                                                            </div>                                                                                                                                                                      
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label class="control-label" for="ostate">State Assigned<span class="reqClass"> *</span></label>
                                                                    <input type="text" disabled id="ostate" class="form-control"  aria-label="description" placeholder="State" aria-describedby="basic-addon1">
                                                                </div>
                                                            </div>                                                  


                                                        </div>                                                
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label class="control-label" for="odesc">Description - Vendor Name<span class="reqClass"> *</span></label>
                                                                    <input type="text" required id="odesc" class="form-control"  aria-label="description" placeholder="Enter Description" aria-describedby="basic-addon1">
                                                                    <div class="help-block with-errors"></div>
                                                                </div>  
                                                            </div>                                                                                                                                                              
                                                        </div>
                                                        <div class="row">
                                                            <div class="col">
                                                                <label for="oremarks">Remarks</label>
                                                                <textarea class="form-control" id="oremarks" rows="1"></textarea>
                                                            </div>
                                                        </div>
                                                        <div id="detailsTable">
                                                            <div class="row">
                                                                <h2 class="title3">Job Code Details Table</h2>
                                                            </div>

                                                            <div class="row bottomRow">
                                                                <div class="col-4 bottomBL">
                                                                    <div class="row">
                                                                        <div class="col">
                                                                            <div class="form-group">
                                                                                <label class="control-label" for="ojobcode">Job Code<span class="reqClass"> *</span></label>
                                                                                <select required class="form-control" id="ojobcode">
                                                                                </select>
                                                                                <div class="help-block with-errors"></div>
                                                                            </div>
                                                                        </div>                                                             
                                                                        <div class="col">
                                                                            <div class="form-group">
                                                                                <label class="control-label" for="ounitcode">Unit<span class="reqClass"> *</span></label>
                                                                                <input type="text" readonly="readonly" id="ounitcode" class="form-control"  required aria-label="Unit Code" value="Default">
                                                                                <div class="help-block with-errors"></div>
                                                                            </div>
                                                                        </div> 
                                                                    </div>      
                                                                    <div class="row">                                                      
                                                                        <div class="col">
                                                                            <div class="form-group">
                                                                                <label class="control-label" for="ojobcodedesc">Job Code Desc<span class="reqClass"> *</span></label>
                                                                                <input type="text" readonly="readonly" id="ojobcodedesc" class="form-control"  required aria-label="Unit Code" value="Default">
                                                                                <div class="help-block with-errors"></div>
                                                                            </div>
                                                                        </div>  
                                                                    </div>                                                             

                                                                    <div class="row">
                                                                        <div class="col">
                                                                            <div class="form-group">
                                                                                <label class="control-label" for="oexpcode">Expense Code<span class="reqClass"> *</span></label>
                                                                                <select required class="form-control" id="oexpcode">
                                                                                </select>
                                                                                <div class="help-block with-errors"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="form-group">
                                                                                <label class="control-label" for="oamount">Amount<span class="reqClass"> *</span></label>
                                                                                <input type="number" max="99999" min="1" required id="oamount" class="form-control" placeholder="Enter Amount" aria-label="job code amount">
                                                                                <div class="help-block with-errors"></div>
                                                                            </div>
                                                                        </div>                                                            


                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-4 offset-7">
                                                                            <button id="oaddbtn" type="button" class="btn btn-lg btn-success">
                                                                                <!-- <i class="fa fa-2x fa-arrow-circle-o-right" style="color: #006633"></i> -->
                                                                                <span  class="oaddbtn">Add</span> <i class="fa fa-2x fa-angle-double-right" aria-hidden="true"></i>
                                                                            </button>                                                                     
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-8 bottomBR">
                                                                    <table id="otherTable" class="otherTable">
                                                                        <thead>
                                                                            <tr>
                                                                                <th style="width: 10%">Exp#</th>
                                                                                <th style="width: 25%">Job Code</th>
                                                                                <th style="width: 20%">Type</th>
                                                                                <th style="width: 20%">Amount</th>
                                                                                <th style="width: 25%">Date Verified</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <!--<tr>
                                                                              <td>
                                                                                  <input type="text" id="otableExp" class="form-control" aria-label="description" value="02" aria-describedby="basic-addon1">
                                                                              </td>
                                                                              <td>
                                                                                  <input type="text" id="otableJobCode" class="form-control" aria-label="description" value="FRF13818" aria-describedby="basic-addon1">
                                                                              </td>
                                                                              <td>
                                                                                  <span class="otableJobCodeDesc">Mileage & Parking</span>
                                                                              </td>
                                                                              <td>
                                                                                  <input type="text" id="otableAmount" class="form-control"  aria-label="description" value="$234" aria-describedby="basic-addon1">
                                                                              </td>
                                                                              <td>
                                                                                  <div class="input-group date" data-provide="datepicker">
                                                                                      <input type="text" placeholder="Pick a date" id="otableDateVerified" class="form-control">
                                                                                      <div class="input-group-addon">
                                                                                          <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                                      </div>
                                                                                  </div>                                                                                
                                                                              </td>
                                                                            </tr>-->
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>                                                                                                                                                

                                                        <div class="row submitrow">
                                                            <div class="col-4 offset-4">
                                                                <button type="submit" id="otherSubmit" class="btn btn-lg submitbtn btn-success">
                                                                    <!-- <i class="fa fa-2x fa-arrow-circle-o-right" style="color: #006633"></i> -->
                                                                    Submit Expense 
                                                                </button> 
                                                            </div>
                                                        </div> 
                                                    </form>
                                                </div>
                                                <!--                                                   END OF OTHER/MISC TAB                                                     -->



                                            </div><!-- end of all tab content -->
                                        </div><!-- end of border div -->
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
                <script src="js/pagesJS/ApiCalls.js"></script>

                <script src="js/pagesJS/mainPages.js"></script>
                <script src="js/pagesJS/newExpense.js"></script>
                <script src="js/bootstrap-datepicker.js"></script>
            </body>

        </html>