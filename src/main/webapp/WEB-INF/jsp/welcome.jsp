<!DOCTYPE HTML>
<%@ page language="java" import="java.util.*" %>
<%@ page import = "java.util.ResourceBundle" %>
<html>

    <head>
        <title>Region 6 Portal</title>
        <meta http-equiv="Content-Type" content="text/css;charset=utf-8" />
        <meta name="google" content="notranslate">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="assets/css/main.css" /> </head>

    <body>
        <% ResourceBundle resource = ResourceBundle.getBundle("system");
            String name=resource.getString("teaurl");  		
            name = "gateway.jsp?relayState=" + name;
        %>
        <div style="display: none"> </div>
        <!-- Header -->
        <header id="header" class="alt">
            <div class="inner" style="background-image: url(assets/img/grey_mountains2.png); height: 420px; width: 100%;">
                <h1><img src="images/USDA_logo.png" alt="USDA Forest Service LOGO" style="width: 42px"> Region 6 Portal</h1> 
                <!--  <a href="" class="button" style="box-shadow: inset 0 0 0 2px #fff;
color: #fff !important; margin-top: 100px">LOGOUT</a>-->
                <p style="margin-top:20px">USDA Forest Service</p>
            </div>
        </header>
        <!-- Wrapper -->
        <div id="wrapper">
            <!-- Items -->
            <section class="main items">
                <article class="item">
                    <header style="background-image: url(assets/img/timber.jpg);">
                        <h3 style="width: 200px; background-color: inherit;">TEA</h3> </header>
                    <ul class="actions">
                        <li><a href="<%=name %>" class="button">Access App</a></li>
                    </ul>
                </article>
            </section>
        </div>
    </body>

</html>