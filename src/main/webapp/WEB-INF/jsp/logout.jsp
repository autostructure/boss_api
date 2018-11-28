<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr">
    <jsp:include page=/boss/WEB-INF/templates/head.jsp/boss/>
    <body>
        <div id="site-wrapper">
            <jsp:include page=/boss/WEB-INF/templates/navigation.jsp/boss/>
            <div class="main" id="main-two-columns">
                <div class="left" id="main-content">
                    <div class="section">
                        <div class="section-content">
                            <div class="post">
                                <div class="post-title"><h2 class="label label-green">Logout</h2></div>
                                <p class="quiet large">You have been logged out.</p>
                                <div class="post-body">
                                    <p>
                                        <a href="<c:url value=/boss/" />">Back to index</a>
                                    </p>
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