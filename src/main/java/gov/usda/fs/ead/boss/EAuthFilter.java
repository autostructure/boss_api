package gov.usda.fs.ead.boss;

import gov.usda.fs.ead.boss.auth.EAuth;
import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

//@Component
//@Order(1)
public class EAuthFilter implements Filter {

    protected FilterConfig filterConfig = null;

    @Override
    public void init(FilterConfig fc) throws ServletException {
        filterConfig = fc;
    }

    @Override
    public void doFilter(
            ServletRequest request,
            ServletResponse response,
            FilterChain chain) throws IOException, ServletException {

        HttpServletRequest servletRequest = (HttpServletRequest) request;
        HttpServletResponse servletResponse = (HttpServletResponse) response;

        String portalUrl = "https://fsapps.dev.wrk.fs.usda.gov/";

        EAuth eauth = (EAuth) servletRequest.getSession(true).getAttribute(EAuth.EAUTH);
        Object inProgress = servletRequest.getSession(true).getAttribute(EAuth.IN_PROGRESS);
        String reqURI = servletRequest.getRequestURI();

        if (shallPass(reqURI)) {
            chain.doFilter(request, response);
            return;
        }

        if (eauth == null) {
            if (inProgress == null) {
                servletRequest.getSession(true).setAttribute(EAuth.IN_PROGRESS, "Y");
                String redirect = portalUrl;
                servletResponse.sendRedirect(redirect);
            } else {
                reqURI = getMyUrl(servletRequest);
                if (shallPass(reqURI)) {
                    // ...
                } else {
                    servletRequest.getSession().setAttribute("javax.servlet.error.status_code", "403");
                    servletRequest.getSession().setAttribute("javax.servlet.error.message", "Unable to Authenticate User");
                    servletResponse.sendError(403, "Unable to authenticate user");
                }
            }
        } else {
            chain.doFilter(request, response);
        }
    }

    private String getMyUrl(HttpServletRequest req) {
        String path = req.getContextPath();
        String xUrl = req.getRequestURL().toString();
        int i = xUrl.indexOf(path);
        path += "/auth/login";
        return xUrl.substring(0, i) + path;
    }

    private boolean shallPass(String reqURI) {
        return reqURI.endsWith("login") 
                || reqURI.contains("simUser") 
                || reqURI.contains("/css/")
                || reqURI.contains("/js/ead.min.js")
                || reqURI.endsWith("register")
                || reqURI.endsWith("register/profile");
    }
}
