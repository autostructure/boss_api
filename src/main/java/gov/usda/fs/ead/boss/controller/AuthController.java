package gov.usda.fs.ead.boss.controller;

import gov.usda.fs.ead.boss.auth.EAuth;
import gov.usda.fs.ead.boss.model.EmployeeProfile;
import gov.usda.fs.ead.boss.repository.EmployeeProfileRepository;
import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    EmployeeProfileRepository employeeProfileRepository;

    @GetMapping("/auth/login")
    public ResponseEntity doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        return doPost(request, response);
    }

    @PostMapping("/auth/login")
    public ResponseEntity doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

        String authid = request.getParameter("authid");
        String email = java.net.URLDecoder.decode(request.getParameter("email"), "UTF-8");
        String firstname = request.getParameter("firstname");
        String lastname = request.getParameter("lastname");

        EmployeeProfile p = employeeProfileRepository.findByFsEmail(email.trim());

        // System.out.println(p.getFsEmail());
        
        if (p != null) {

            if (authid != null) {
                EAuth eauth = new EAuth(authid, email, firstname, lastname);
                request.getSession(true).setAttribute(EAuth.EAUTH, eauth);
                request.getSession(true).setAttribute(EAuth.IN_PROGRESS, null);
                response.sendRedirect(request.getContextPath() + "/");
            }

        } else {
            response.sendRedirect(request.getContextPath() + "/register");
        }

        return new ResponseEntity<>("huh?", HttpStatus.OK);

    }
}
