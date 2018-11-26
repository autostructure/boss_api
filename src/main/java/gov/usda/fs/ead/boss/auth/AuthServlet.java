package gov.usda.fs.ead.boss.auth;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class AuthServlet extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("In process request");
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet FSAppsServlet</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet FSAppsServlet at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        doPost(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       
        String authid = request.getParameter("authid");
        String authid1 = request.getParameter("usdaeauthid");
        String email = request.getParameter("email");
        String firstname = request.getParameter("firstname");
        String lastname = request.getParameter("lastname");
        
        if (authid != null) {
           
            EAuth eauth = new EAuth(authid, email, firstname, lastname);
            request.getSession(true).setAttribute(EAuth.EAUTH, eauth);
            request.getSession(true).setAttribute(EAuth.IN_PROGRESS, null);
            // response.sendRedirect("/fia/rmrsplotphoto");
            response.sendRedirect(request.getContextPath());
        }
    }


    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
