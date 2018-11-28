<!doctype html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="img/favicons/favicon.ico" type="image/x-icon">
        <title>FIA-BOSS</title>
        <link rel="stylesheet" href="css/ead.min.css">
        <link rel="stylesheet" href="css/pagesCSS/all.css">
        <link rel="stylesheet" href="css/pagesCSS/viewAllEmployees.css">
        <style>
            .text-small td {
                font-size: 1em!important;
                padding:5px;
            }
            #tblPermissions tbody * {
                padding: 0;
                margin: 0;
            }
            .bg-warn {
                background-color:chocolate;
                text-decoration: line-through;
            }
            .alert {
                display:none;
            }
        </style>
    </head>

    <body class="layout-demo">
        <header class="usa-header usa-header-extended" role="banner" id="mainHeader">
        </header>

        <main id="background">
            <div class="wrapper">
                <section class="usa-section1">
                    <section class="usa-section">
                        <div id="success" class="alert alert-success" role="alert">
                            Update Successfull!                                         
                        </div>
                        <div id="error" class="alert alert-danger" role="alert">
                            Error: <span id='errorText'></span>
                        </div>
                        <div class="usa-grid usa-buffer-top">
                                <div class="usa-width-one-whole row">
                                    <div class="col col-md-4">
                                        <div class="form-group">
                                            <input type="button" value="Export JSON" id="exportJSON">
                                            <input type="button" value="Import JSON" id="importJSON">
                                        </div>
                                        <div class="form-group">
                                            <input type="button" value="Export CSV" class='bg-warn'>
                                            <input type="button" value="Import CSV" class='bg-warn'>
                                        </div>
                                        <div class="form-group">
                                            <input type="button" value="Export List" class='bg-warn'>
                                            <input type="button" value="Import List" class='bg-warn'>
                                        </div>
                                    </div>
                                    <div class="col col-md-8">
                                        <div class="form-group">
                                            <textarea class="form-control" id="PermissionsOutput">
                
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="usa-width-one-whole row" id='filters'>
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Uncheck all the boxes that meet the following criteria</label>
                                            <input type="button" value="UNCHECK" onclick="setMatching(false)">
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Check all boxes that meet the following criteria</label>
                                            <input type="button" value="CHECK" onclick="setMatching(true)">
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Role</label>
                                            <select class="form-control" id="selectRole"></select>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Method</label>
                                            <select class="form-control" id="selectPerm"></select>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label>EndPoint</label>
                                            <select class="form-control" id="selectEP"></select>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Field</label>
                                            <select class="form-control" id="selectField"></select>
                                        </div>
                                    </div>
                                </div>
                            <div class="usa-width-one-whole title-div">
                                <h1 id="title">EndPoint Permissions</h1>
                            </div>

                        </div>
                        <div class="usa-grid usa-buffer-top">
                            <table id="tblPermissions" class="usa-table display" style="width:100%">
                                <thead>
                                    <tr>
                                    </tr>
                                    <tr id="rowRoles">
                                        <th>EndPoint</th>
                                        <th>Field</th>
                                    </tr>
                                    <tr class="text-small" id="rowMethods">
                                        <td></td>
                                        <td>Permissions Go: Post, Get, Put, Delete</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                </tbody>
                            </table>
                        </div>
                    </section>
                </section>
            </div>
        </main>


        <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
        </footer>

        <script src="/boss/js/ead.min.js"></script>
        <script src="/boss/js/pagesJS/home.js"></script>
        <script>

            $(function () {

                console.log('page loaded');

                const course = {
                    "category": "cats",
                    "defaultYears": 1,
                    "defaultYearsLeader": 1,
                    "description": "kittay meow meow",
                    "title": "CATS"
                };

                $.ajax({
                    url: '/trainingCourse',
                    type: 'post',
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function (data) {
                        //$('#target').html(data.msg);
                        console.log(data);
                    },
                    data: JSON.stringify(course)
                });

            });

        </script>
        <script src="/boss/js/ead.min.js"></script>
        <script src="/boss/js/bootstrap-datepicker.js"></script>
        <script src="/boss/js/pagesJS/customFormFunctions.js"></script>
        <script src="/boss/js/pagesJS/editEmployee.js"></script>
        <script src="/boss/js/pagesJS/uploadTest.js"></script>
        <script src="/boss/js/pagesJS/ApiCalls.js"></script>
    </body>

</html>