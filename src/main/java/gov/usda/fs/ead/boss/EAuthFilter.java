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

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(1)
public class EAuthFilter implements Filter {

    private final static Logger LOG = LoggerFactory.getLogger(EAuthFilter.class);

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

        if (reqURI.endsWith("login") || reqURI.contains("simUser")) {
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
                if (reqURI.endsWith("login") || reqURI.contains("simUser")) {
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
        LOG.info("Path======" + path);
        String xUrl = req.getRequestURL().toString();
        LOG.info("xURL======" + xUrl);
        int i = xUrl.indexOf(path);
        path += "/auth/login";
        String url = xUrl.substring(0, i) + path;
        LOG.info("URL=======" + url);
        return url;
    }
}
