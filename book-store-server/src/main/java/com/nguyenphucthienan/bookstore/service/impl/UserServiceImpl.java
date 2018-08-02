package com.nguyenphucthienan.bookstore.service.impl;

import com.nguyenphucthienan.bookstore.domain.User;
import com.nguyenphucthienan.bookstore.domain.security.UserRole;
import com.nguyenphucthienan.bookstore.repository.RoleRepository;
import com.nguyenphucthienan.bookstore.repository.UserRepository;
import com.nguyenphucthienan.bookstore.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Service
public class UserServiceImpl implements UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Override
    @Transactional
    public User createUser(User user, Set<UserRole> userRoles) {
        User localUser = userRepository.findByUsername(user.getUsername());

        if(localUser != null) {
            logger.info("User with username {} already exist. Nothing will be done. ", user.getUsername());
        } else {
            for (UserRole userRole : userRoles) {
                roleRepository.save(userRole.getRole());
            }

            user.getUserRoles().addAll(userRoles);
            localUser = userRepository.save(user);
        }

        return localUser;
    }
}
