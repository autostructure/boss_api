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
                        <img src="img/mountain.jpg" alt="Banner Image"/>
                    </header>
                    <div class="usa-grid">
                            <div class="usa-width-one-whole">
                                <p class="breadcrumb" style="float: right; margin-right: 10px; font-size:1.3em;">
                                    <a class="breadcrumbLink" href="/home">Dashboard |</a>
                                    <a class="breadcrumbLink" href="/budgetDash">Budget |</a>
                                    <a class="breadcrumbLinkMain" href="/newExpense">New Expense</a>
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
                                            <form>
                                                <div class="row">
                                                    <div class="col">
                                                            <div class="form-group">
                                                                <label for="namecode">Namecode</label>
                                                                <select class="form-control" id="namecode">
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                </select>
                                                            </div>
                                                    </div>
                                                    <div class="col">
                                                        <label for="desc">Description</label>
                                                        <input type="text" disabled id="decs" class="form-control"  aria-label="description" value="Salary" aria-describedby="basic-addon1">
                                                    </div>
                                                    <div class="col">
                                                        <label for="boc">Budget Object Code (BOC)</label>
                                                        <input type="text" disabled id="boc" class="form-control"  aria-label="budget object code" value="11" aria-describedby="basic-addon1">
                                                    </div>
                                                    <div class="col">
                                                        <label for="pc">Payment Code</label>
                                                        <input type="text" disabled id="pc" class="form-control" aria-label="payment code" value="SAL" aria-describedby="basic-addon1">
                                                    </div>
                                                </div>
                                                <div class="row">
                                                        <div class="col">
                                                            <label for="fy">Fiscal Year</label>
                                                            <select class="form-control" name="select" id="dropdownYear"></select>
                                                        </div>
                                                        <div class="col">
                                                            <div class="form-group">
                                                                <label for="dateentered">Date Entered</label>
                                                                <div class="input-group date" data-provide="datepicker">
                                                                    <input type="text" id="dateentered" class="form-control">
                                                                    <div class="input-group-addon">
                                                                        <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="form-group">
                                                                <label for="datemod">Date Modified</label>
                                                                <div class="input-group date" data-provide="datepicker">
                                                                    <input type="text" id="datemod" class="form-control">
                                                                    <div class="input-group-addon">
                                                                        <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="form-group">
                                                                <label for="dateob">Date Obligated</label>
                                                                <div class="input-group date" data-provide="datepicker">
                                                                    <input type="text" id="dateob" class="form-control">
                                                                    <div class="input-group-addon">
                                                                        <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label for="payperiod">Pay Period</label>
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
                                                        </div>
                                                    </div>

                                                    <div class="col">
                                                        <label for="unitcode">Unit Code</label>
                                                        <input type="text" disabled id="unitcode" class="form-control"  aria-label="Unit Code" value="Default" aria-describedby="basic-addon1">
                                                    </div>     
                                                                                                                                                     
                                                </div>

                                                <div id="detailsTable">
                                                <div class="row">
                                                    <h2 class="title3">Details Table</h2>
                                                </div>

                                                    <div class="row bottomRow">
                                                        <div class="col-4 bottomBL">
                                                            <div class="row">
                                                                <div class="col-7">
                                                                    <div class="form-group">
                                                                        <label for="expcode">Expense Code</label>
                                                                        <select class="form-control" id="expcode">
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-5">
                                                                    <label for="hours">Enter Hours</label>
                                                                    <input type="text" id="hours" class="form-control"  aria-label="Hours" placeholder="Enter Hours" aria-describedby="basic-addon1">
                                                                </div>
                                                            </div>
                                                            <div class="row bottomRow">
                                                                <div class="col-7">
                                                                    <div class="form-group">
                                                                        <label for="jobcode">Job Code</label>
                                                                        <select class="form-control" id="jobcode">
                                                                        </select>
                                                                    </div>
                                                                </div> 
                                                                <div class="col-5">
                                                                    <div class="form-group">
                                                                        <label for="actcode">Activity Code</label>
                                                                        <select class="form-control" id="actcode">
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                        <div class="row">
                                                            <div class="col-4 offset-7">
                                                                <button type="button" class="btn btn-lg btn-success">
                                                                    <!-- <i class="fa fa-2x fa-arrow-circle-o-right" style="color: #006633"></i> -->
                                                                    <span class="addbtn">Add</span> <i class="fa fa-2x fa-angle-double-right" aria-hidden="true"></i>
                                                                </button>                                                                     
                                                            </div>
                                                        </div>
                                                            
                                                        </div>
                                                        <div class="col-8 bottomBR">
                                                                <table class="table">
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
                                                                          <tr>
                                                                            <td>
                                                                                <input type="text" id="tableExp" class="form-control" aria-label="description" value="01" aria-describedby="basic-addon1">
                                                                            </td>
                                                                            <td>
                                                                                <input type="text" id="tableJobCode" class="form-control" aria-label="description" value="FRF13818" aria-describedby="basic-addon1">
                                                                            </td>
                                                                            <td>
                                                                                <input type="text" id="tableHours" class="form-control" aria-label="description" value="20" aria-describedby="basic-addon1">
                                                                            </td>
                                                                            <td>
                                                                                <span class="tableType">Base Hours</span>
                                                                            </td>
                                                                            <td>
                                                                                <input type="text" id="tableAmount" class="form-control"  aria-label="description" value="$11,234" aria-describedby="basic-addon1">
                                                                            </td>
                                                                            <td>
                                                                                <div class="input-group date" data-provide="datepicker">
                                                                                    <input type="text" placeholder="Pick a date" id="dateob" class="form-control">
                                                                                    <div class="input-group-addon">
                                                                                        <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                                    </div>
                                                                                </div>                                                                                
                                                                            </td>
                                                                          </tr>
                                                                        </tbody>
                                                                      </table>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <h2 class="title3 remarks">Remarks</h2>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <textarea class="form-control" id="remarks" rows="1"></textarea>
                                                    </div>
                                                </div>

                                                <div class="row submitrow">
                                                    <div class="col-4 offset-4">
                                                        <button type="button" class="btn btn-lg submitbtn btn-success">
                                                            <!-- <i class="fa fa-2x fa-arrow-circle-o-right" style="color: #006633"></i> -->
                                                            Submit Expense 
                                                        </button> 
                                                    </div>
                                                </div>
                                                
                                            </form>
                                    </div>
                                    <!--                                                   END OF TIMESHEETS TAB                                                     -->


                                    <!--                                                   START OF TRAVEL TAB                                                     -->
                                    <div class="tab-pane fade" id="travel" role="tabpanel" aria-labelledby="travelvouchers">
                                        <form>
                                            <div class="row">
                                                <div class="col">
                                                        <div class="form-group">
                                                            <label for="namecode">Namecode</label>
                                                            <select class="form-control" id="namecode">
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                            </select>
                                                        </div>
                                                </div>
                                                <div class="col">
                                                    <label for="desc">Description</label>
                                                    <input type="text" disabled id="decs" class="form-control"  aria-label="description" value="Travel" aria-describedby="basic-addon1">
                                                </div>
                                                <div class="col">
                                                    <label for="boc">Budget Object Code (BOC)</label>
                                                    <input type="text" disabled id="boc" class="form-control"  aria-label="budget object code" value="21" aria-describedby="basic-addon1">
                                                </div>
                                                <div class="col">
                                                    <label for="pc">Payment Code</label>
                                                    <input type="text" disabled id="pc" class="form-control" aria-label="payment code" value="TV" aria-describedby="basic-addon1">
                                                </div>
                                            </div>
                                            <div class="row">
                                                    <div class="col">
                                                        <label for="fy">Fiscal Year</label>
                                                        <select class="form-control" name="select" id="tvdropdownYear"></select>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label for="tvdateentered">Date Entered</label>
                                                            <div class="input-group date" data-provide="datepicker">
                                                                <input type="text" id="tvdateentered" class="form-control">
                                                                <div class="input-group-addon">
                                                                    <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label for="tvdatemod">Date Modified</label>
                                                            <div class="input-group date" data-provide="datepicker">
                                                                <input type="text" id="tvdatemod" class="form-control">
                                                                <div class="input-group-addon">
                                                                    <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label for="tvdateob">Date Obligated</label>
                                                            <div class="input-group date" data-provide="datepicker">
                                                                <input type="text" id="tvdateob" class="form-control">
                                                                <div class="input-group-addon">
                                                                    <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="form-group">
                                                        <label for="payperiod">Pay Period</label>
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
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <label for="unitcode">Unit Code</label>
                                                    <input type="text" disabled id="unitcode" class="form-control"  aria-label="Unit Code" value="Default" aria-describedby="basic-addon1">
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
                                                        <div class="form-group">
                                                            <label for="dateob">From</label>
                                                            <div class="input-group date" data-provide="datepicker">
                                                                <input type="text" id="fromdate" class="form-control">
                                                                <div class="input-group-addon">
                                                                    <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                        </div>
                                                        <div class="col">
                                                        <div class="form-group">
                                                            <label for="dateob">To</label>
                                                            <div class="input-group date" data-provide="datepicker">
                                                                <input type="text" id="todate" class="form-control">
                                                                <div class="input-group-addon">
                                                                    <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col">
                                                            <label for="boc">Voucher Number</label>
                                                            <input type="text" id="vocnumber" class="form-control"  aria-label="voucher number"  aria-describedby="basic-addon1">
                                                        </div>
                                                        <div class="col">
                                                            <div class="form-group">
                                                                <label for="state">State</label>
                                                                <select class="form-control" id="state">
                                                                    <option>MI</option>
                                                                    <option>WA</option>
                                                                    <option>CA</option>
                                                                </select>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="col">
                                                        <h3 class="remarks">Remarks</h3>
                                                        <textarea class="form-control" id="remarks" rows="1"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                            <div id="detailsTable">
                                            <div class="row">
                                                <h2 class="title3">Details Table</h2>
                                            </div>

                                                <div class="row bottomRow">
                                                    <div class="col-4 bottomBL">
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label for="jobcode1">Job Code</label>
                                                                    <select class="form-control" id="jobcode1">
                                                                    </select>
                                                                </div>
                                                            </div> 
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label for="actcode1">Activity Code</label>
                                                                    <select class="form-control" id="actcode1">
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label for="expcode1">Choose Code</label>
                                                                    <select class="form-control" id="expcode1">
                                                                    </select>
                                                                </div>
                                                            </div>


                                                        </div>
                                                        <div class="row">
                                                            <div class="col-4 offset-7">
                                                                <button type="button" class="btn btn-lg btn-success">
                                                                    <!-- <i class="fa fa-2x fa-arrow-circle-o-right" style="color: #006633"></i> -->
                                                                    <span class="addbtn">Add</span> <i class="fa fa-2x fa-angle-double-right" aria-hidden="true"></i>
                                                                </button>                                                                     
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-8 bottomBR">
                                                            <table class="table">
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
                                                                      <tr>
                                                                        <td>
                                                                            <input type="text" id="tableExp" class="form-control" aria-label="description" value="02" aria-describedby="basic-addon1">
                                                                        </td>
                                                                        <td>
                                                                            <input type="text" id="tableJobCode" class="form-control" aria-label="description" value="FRF13818" aria-describedby="basic-addon1">
                                                                        </td>
                                                                        <td>
                                                                            <span class="tableType">Mileage & Parking</span>
                                                                        </td>
                                                                        <td>
                                                                            <input type="text" id="tableAmount" class="form-control"  aria-label="description" value="$234" aria-describedby="basic-addon1">
                                                                        </td>
                                                                        <td>
                                                                            <div class="input-group date" data-provide="datepicker">
                                                                                <input type="text" placeholder="Pick a date" id="dateob" class="form-control">
                                                                                <div class="input-group-addon">
                                                                                    <span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>
                                                                                </div>
                                                                            </div>                                                                                
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="row submitrow">
                                                <div class="col-4 offset-4">
                                                    <button type="button" class="btn btn-lg submitbtn btn-success">
                                                        <!-- <i class="fa fa-2x fa-arrow-circle-o-right" style="color: #006633"></i> -->
                                                        Submit Expense 
                                                    </button> 
                                                </div>
                                            </div>
                                            
                                        </form>
                                    </div>
                                    <!--                                                   END OF TRAVEL TAB                                                     -->


                                    <!--                                                   START OF VISA TAB                                                     -->
                                    <div class="tab-pane fade" id="visa" role="tabpanel" aria-labelledby="visapurchases">
                                        Testing stuff for Visa Purchases
                                    </div>
                                    <!--                                                   END OF VISA TAB                                                     -->


                                    <!--                                                   START OF OTHER/MISC TAB                                                    -->
                                    <div class="tab-pane fade" id="other" role="tabpanel" aria-labelledby="othermisc">
                                        Testing stuff for Other / Misc
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
        <script src="js/pagesJS/mainPages.js"></script>
        <script src="js/pagesJS/newExpense.js"></script>
        <script src="js/bootstrap-datepicker.js"></script>
</body>

</html>