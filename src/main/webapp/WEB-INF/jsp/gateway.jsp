<%@ page import="org.springframework.security.saml.SAMLCredential" %>
<%@ page import="org.springframework.security.core.context.SecurityContextHolder" %>
<%@ page import="org.springframework.security.core.Authentication" %>
<%@ page import="org.opensaml.saml2.core.Attribute" %>
<%@ page import="org.springframework.security.saml.util.SAMLUtil" %>
<%@ page import="org.opensaml.xml.util.XMLHelper" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page import="java.io.*,java.util.*"  %>
<%@ page language="java" %>
<%@ page import="java.nio.charset.*" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr">

    <head>

    </head>

    <body>

        <%
     
          Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
          SAMLCredential credential = (SAMLCredential) authentication.getCredentials();
          String url = request.getParameter("relayState");//credential.getRelayState();
          String url12 = request.getParameter("relayState");
          String acn = credential.getAttributeAsString("usdacn");
          String authid = credential.getAttributeAsString("usdaeauthid");
          String sponsoremployeeid = credential.getAttributeAsString("usdasponsoremployeeid");
          String email = credential.getAttributeAsString("usdaemail");
          String lastname = credential.getAttributeAsString("usdalastname");
          String firstname = credential.getAttributeAsString("usdafirstname");
          String upn = credential.getAttributeAsString("usdaupn");
          String securityofficersuspensionstatus = credential.getAttributeAsString("usdasecurityofficersuspensionstatus");
          String assurancelevel = credential.getAttributeAsString("usdaassurancelevel");
          String assertion = XMLHelper.nodeToString(SAMLUtil.marshallMessage(credential.getAuthenticationAssertion()));
          String json = " { usdacn:" + acn + 
                          "   , " + " usdaeauthid:" + authid + 
                         "   , " + " usdasponsoremployeeid:" + sponsoremployeeid +  
                         "  , " + " usdaemail:" + email + 
                         "  , " + " usdalastname:" + lastname + 
                         "  , " + " usdafirstname:" + firstname + 
                         "  , " + " usdaupn:" + upn + 
                         "  , " + " usdasecurityofficersuspensionstatus:" + securityofficersuspensionstatus + 
                         "  , " + " usdaassurancelevel:" + assurancelevel + 
                          "}";
     
          System.out.println(json);
     
          String id =  authid ;
          String  em =   email ; 
          String lname =  lastname ;
          String  fname = firstname;                 
                    
          String basicAuth1 = Base64.getEncoder().encodeToString((json).getBytes(StandardCharsets.UTF_8));
          //url = "app.jsp";
          //session.setAttribute("JSON", value1);     
          // response.addHeader("usdacn" , acn);
           //response.addHeader("auth" , json);
           pageContext.setAttribute("url1", url);
          // pageContext.setAttribute("auth", json);
           //request.setProperty("auth", value1);
                   //response.setStatus(response.SC_MOVED_TEMPORARILY);
                 //  response.addHeader("location" , url);
                   //request.getRequestDispatcher(url).forward(request,response);
                // response.sendRedirect(url);
            
          //   out.println("Basic Auth" );  
        
              
        %>

        <form name="submitform" action=<%=url %>  method="post" > 
            <input type="hidden" name="auth" id="auth" value=<%=basicAuth1 %> />  
            <input type="hidden" name="authid" id="authid" value=<%=id %> /> 
            <input type="hidden" name="email" id="email" value=<%=em %> /> 
            <input type="hidden" name="lastname" id="lastname" value=<%=lname %> /> 
            <input type="hidden" name="firstname" id="firstname" value=<%=fname %> /> 

        </form>

        <script language="JavaScript" type="text/javascript">
            document.submitform.submit();
        </script>


    </body>
</html>

