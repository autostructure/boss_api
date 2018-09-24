<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/img/favicons/favicon.ico" type="image/x-icon">
    <title>FIA-BOSS</title>
    <link rel="stylesheet" href="/css/ead.min.css">
    <link rel="stylesheet" href="/css/pagesCSS/all.css">
    <link rel="stylesheet" href="/css/bootstrap-datepicker3.css">
    <link rel="stylesheet" href="/css/pagesCSS/addNewEmployee.css">
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
                            <a class="breadcrumbLink"href="/personnelDash">Personnel Dashboard |</a>
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
                    <div id="success" class="alert alert-success" role="alert">
                        Update Successfull!                                         
                    </div>
                    <div id="error" class="alert alert-danger" role="alert">
                        Error: <span id='errorText'></span>
                    </div>
                    <select hidden disabled id="templateSelectState">
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                    <div class="usa-grid usa-buffer-top">
                        <div class="usa-width-one-whole faded">
                            <div class="border">
                                <div class="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="generalInfo">
                                   <form role="form" data-toggle="validator" class="generalInfo" id="formGeneralInfo" action="javascript:0" method="POST">
                                        <input hidden id="employeeId" name="id" value="0">
                                        <div class="row">
                                            <div class="col col-md-6">
                                                <input type="submit" id="submitAndAddAnother" class="btn btn-success" value="Submit and Add Another">
                                            </div>
                                            <div class="col col-md-6">
                                                <input type="submit" id="submitAndEdit" class="btn btn-success" value="Submit and Edit Info">
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div><!-- end of border div -->
                        </div>
                    </div>                             
                </section>
            </section>                         
                
        </div><!-- end of sidenav wrapper div -->
    </main>

    <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
    </footer>
    <script src="/js/ead.min.js"></script>
    <script src="/js/bootstrap-datepicker.js"></script>
    <script src="/js/pagesJS/bootstrapFieldWriter.js"></script>
    <script src="/js/pagesJS/addNewEmployee.js"></script>
    <script src="/js/pagesJS/personnelPages.js"></script>
    <script src="/js/pagesJS/ApiCalls.js"></script>

</body>

</html>