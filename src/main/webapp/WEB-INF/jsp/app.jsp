<%@ page import="org.springframework.security.saml.SAMLCredential" %>
<%@ page import="org.springframework.security.core.context.SecurityContextHolder" %>
<%@ page import="org.springframework.security.core.Authentication" %>
<%@ page import="org.opensaml.saml2.core.Attribute" %>
<%@ page import="org.springframework.security.saml.util.SAMLUtil" %>
<%@ page import="org.opensaml.xml.util.XMLHelper" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page import="java.util.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr">



    <body>
        <h3>Welcome to APP Application!</h3>
        <%
         Enumeration eNames = request.getHeaderNames();
         while (eNames.hasMoreElements()) {
            String name = (String) eNames.nextElement();
            String value = request.getHeader(name);
            out.println("name:" + name + " value:" + value + "\n");
            }
            
           
        %>
        <div id="site-wrapper">



            <div class="main" id="main-two-columns">
                <div class="left" id="main-content">
                    <div class="section">
                        <div class="section-content">
                            <div class="post">
                                <div class="post-title"><h2 class="label label-green">Authenticated user</h2></div>
                                <%
                                        out.println("AUTH=" + request.getParameter("auth"));
                                        out.println("id=" + request.getParameter("authid"));
                                        out.println("email=" + request.getParameter("email"));
                                        out.println("lastname=" + request.getParameter("lastname"));
                                        out.println("firstname=" + request.getParameter("firstname"));
                               
                       
                                %>
                                <p class="quiet large">Overview of the authenticated user's data.</p>
                                <div class="post-body">
                                    <%
                                        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
                                        SAMLCredential credential = (SAMLCredential) authentication.getCredentials();
                                        pageContext.setAttribute("authentication", authentication);
                                        pageContext.setAttribute("credential", credential);
                                        pageContext.setAttribute("assertion", XMLHelper.nodeToString(SAMLUtil.marshallMessage(credential.getAuthenticationAssertion())));
                                    %>
                                    <p>

                                        <p>
                                            <table>
                                                <tr>
                                                    <td colspan="2"><h5>Principal's SAML attributes</h5></td>
                                                </tr>
                                                <c:forEach var="attribute" items="${credential.attributes}">
                                                    <tr>
                                                        <td width="200">
                                                            <strong><c:out value="${attribute.name}"/></strong><c:if test="${not empty attribute.friendlyName}"> (<c:out value="${attribute.friendlyName}"/>)</c:if>
                                                            </td>
                                                            <td>
                                                            <%
                                                                Attribute a = (Attribute) pageContext.getAttribute("attribute");
                                                                String[] attributeValues = credential.getAttributeAsStringArray(a.getName());
                                                                pageContext.setAttribute("attributeValues", attributeValues);
                                                            %>
                                                            <c:forEach var="attributeValue" items="${attributeValues}">
                                                                <c:out value="${attributeValue}"/>&nbsp;
                                                            </c:forEach>
                                                        </td>
                                                    </tr>
                                                </c:forEach>
                                            </table>

                                            <p>

                                                <table>
                                                    <tr>
                                                        <td><h5>Assertion XML</h5></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <textarea style="height: 400px" disabled="disabled"><c:out value="${assertion}"/></textarea>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <div>
                                                    <form class="left" action="<c:url value="/saml/logout"/>" method="get">
                                                        <input type="submit" value="Global Logout" class="button"/>
                                                    </form>
                                                    <form class="left" action="<c:url value="/saml/logout"/>" method="get">
                                                        <input type="hidden" name="local" value="true"/>
                                                        <input type="submit" value="Local Logout" class="button"/>
                                                    </form>
                                                </div>
                                                </div>
                                                </div>
                                                <div class="clearer">&nbsp;</div>
                                                </div>
                                                </div>
                                                <div class="clearer">&nbsp;</div>
                                                </div>

                                                </div>

                                                </div>
                                                </body>
                                                </html>

