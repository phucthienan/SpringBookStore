package com.nguyenphucthienan.bookstore.service;

import com.nguyenphucthienan.bookstore.domain.User;
import com.nguyenphucthienan.bookstore.domain.security.UserRole;

import java.util.Set;

public interface UserService {
    User createUser(User user, Set<UserRole> userRoles);
}
