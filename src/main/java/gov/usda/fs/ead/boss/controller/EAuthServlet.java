package gov.usda.fs.ead.boss.controller;


import gov.usda.fs.ead.boss.auth.EAuth;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author sdelucero
 * 
 * HTTP servlet class that works with the FSApps/eAuth gateway to process
 * the authentication post
 * 
 * The FSApps gateway will issue an HTTP POST to this servlet passing the following
 * eAuth attributes:
 *      authid
 *      email
 *      firstname
 *      lastname
 */
public class EAuthServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
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

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        doPost(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        System.out.println("Hello POST");
       
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
