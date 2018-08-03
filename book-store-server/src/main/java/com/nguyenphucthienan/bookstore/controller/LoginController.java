package com.nguyenphucthienan.bookstore.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Collections;
import java.util.Map;

@RestController
public class LoginController {
    @RequestMapping("/user-login")
    public Map<String, String> token(HttpSession session, HttpServletRequest request) {
        String remoteHost = request.getRemoteHost();
        int portNumber = request.getRemotePort();

        System.out.println(remoteHost + ":" + portNumber);

        return Collections.singletonMap("token", session.getId());
    }

    @RequestMapping("/check-session")
    public ResponseEntity checkSession() {
        return new ResponseEntity("{\"message\" : \"Session active\"}", HttpStatus.OK);
    }

    @RequestMapping(value = "/user-logout", method = RequestMethod.POST)
    public ResponseEntity logout() {
        SecurityContextHolder.clearContext();
        return new ResponseEntity("{\"message\" : \"Logout successfully!\"}", HttpStatus.OK);
    }
}
