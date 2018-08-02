package com.nguyenphucthienan.bookstore.service;

import com.nguyenphucthienan.bookstore.domain.User;
import com.nguyenphucthienan.bookstore.repository.UserRepository;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserSecurityService implements UserDetailsService {
    private static final org.slf4j.Logger logger = LoggerFactory.getLogger(UserSecurityService.class);

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            logger.warn("Username {} not found", username);
        }
        return user;
    }
}
