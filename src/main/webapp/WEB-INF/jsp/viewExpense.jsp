<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="img/favicons/favicon.ico" type="image/x-icon" />
    <title>FIA-BOSS</title>
    <link rel="stylesheet" href="css/ead.min.css" />
    <link rel="stylesheet" href="css/pagesCSS/all.css" />
    <link rel="stylesheet" href="css/pagesCSS/hrPages.css" />
  </head>

  <body class="layout-demo">
    <header
      class="usa-header usa-header-extended"
      role="banner"
      id="mainHeader"
    ></header>
    <div class="usa-overlay"></div>
    <main id="main-content">
      <div class="wrapper">
        <nav id="sidebar"></nav>

        <section class="usa-section1">
          <header class="main-header" role="banner">
            <img class="bannerImg" src="/boss/img/horseBanner.jpg" alt="Banner Image" />
          </header>
          <div class="usa-grid">
            <div class="usa-width-one-whole">
              <p
                class="breadcrumb"
                style="float: right; margin-right: 10px; font-size:1.3em;"
              >
              <a class="breadcrumbLink" href="/boss/home">Home |</a>
              <a class="breadcrumbLink" href="/boss/budgetDash">Report and Analysis Dash |</a>
              <a class="breadcrumbLinkMain" href="/boss/viewExpense">View Expense</a>
              </p>
            </div>
          </div>
          <section class="usa-section">
            <div class="usa-grid usa-buffer-top">
              <div class="use-width-one-whole title-div">
                <h1 id="title">Expenses</h1>
              </div>
            </div>

            <div class="usa-grid usa-buffer-top">
              <div class="use-width-one-whole content-div">
                <h2 class="title2">View Expenses</h2>
                <table
                  id="expense"
                  class="usa-table-borderless display"
                  style="width:100%"
                >
                  <thead>
                    <tr>
                      <th scope="col">Act Code</th>
                      <th scope="col">Sec Code</th>
                      <th scope="col">Name Code</th>
                      <th scope="col">Description</th>
                      <th scope="col">Pay Period</th>
                      <th scope="col">Seq. #</th>
                      <th scope="col">Job Code</th>
                      <th scope="col">Exp Code</th>
                      <th scope="col">Total</th>
                      <th scope="col" id="stop">Date Obl</th>
                      <th scope="col">Select</th>
                    </tr>
                  </thead>
                  <tbody id="investmentTable"></tbody>
                </table>
              </div>
            </div>
          </section>
        </section>
      </div>
      <!-- end of sidenav wrapper div -->
    </main>

    <footer
      class="usa-footer usa-footer-medium"
      role="contentinfo"
      id="mainFooter"
    ></footer>

    <script src="/boss/js/ead.min.js"></script>
    <script src="/boss/js/pagesJS/ApiCalls.js"></script>
    <script src="/boss/js/pagesJS/mainPages.js"></script>
    <script src="/boss/js/pagesJS/viewExpense.js"></script>
  </body>
</html>
