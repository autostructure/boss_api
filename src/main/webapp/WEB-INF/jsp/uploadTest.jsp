<!doctype html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="img/favicons/favicon.ico" type="image/x-icon">
        <title>FIA-BOSS</title>
        <link rel="stylesheet" href="css/ead.min.css">
        <link rel="stylesheet" href="css/pagesCSS/all.css">
        <link rel="stylesheet" href="css/pagesCSS/home.css">
    </head>

    <body class="layout-demo">
        <header class="usa-header usa-header-extended" role="banner" id="mainHeader">
        </header>

        <main id="background">
            <div class="container mainTitleDiv">
                <p>Hey how's it going my name G R E G</p>
                <form method="POST" enctype="multipart/form-data" action="/certificate?trainingId=1">
                    <table>
                        <tr><td>File to upload:</td><td><input type="file" name="file" /></td></tr>
                        <tr><td></td><td><input type="submit" value="Upload" /></td></tr>
                    </table>
                </form>
            </div>
        </main>


        <footer class="usa-footer usa-footer-medium" role="contentinfo" id="mainFooter">
        </footer>

        <script src="js/ead.min.js"></script>
        <script src="js/pagesJS/home.js"></script>
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
    </body>

</html>