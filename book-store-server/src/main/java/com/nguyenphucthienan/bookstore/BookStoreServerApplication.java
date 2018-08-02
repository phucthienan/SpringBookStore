package com.nguyenphucthienan.bookstore;

import com.nguyenphucthienan.bookstore.config.SecurityUtility;
import com.nguyenphucthienan.bookstore.domain.User;
import com.nguyenphucthienan.bookstore.domain.security.Role;
import com.nguyenphucthienan.bookstore.domain.security.UserRole;
import com.nguyenphucthienan.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class BookStoreServerApplication implements CommandLineRunner {
    @Autowired
    private UserService userService;

    public static void main(String[] args) {
        SpringApplication.run(BookStoreServerApplication.class, args);
    }

    @Override
    public void run(String... args) {
        // Role roleAdmin = new Role();
        // roleAdmin.setRoleId(1);
        // roleAdmin.setName("ROLE_ADMIN");
        //
        // Role roleUser = new Role();
        // roleUser.setRoleId(2);
        // roleUser.setName("ROLE_USER");
        //
        // Set<UserRole> userRoles = new HashSet<>();
        //
        // User user1 = new User();
        // user1.setFirstName("Admin");
        // user1.setLastName("Admin");
        // user1.setUsername("admin");
        // user1.setPassword(SecurityUtility.bCryptPasswordEncoder().encode("admin"));
        // user1.setEmail("admin@email.com");
        //
        // userRoles.add(new UserRole(user1, roleAdmin));
        // userService.createUser(user1, userRoles);
        //
        // userRoles.clear();
        //
        // User user2 = new User();
        // user2.setFirstName("User");
        // user2.setLastName("User");
        // user2.setUsername("user");
        // user2.setPassword(SecurityUtility.bCryptPasswordEncoder().encode("user"));
        // user2.setEmail("user@email.com");
        //
        // userRoles.add(new UserRole(user2, roleUser));
        // userService.createUser(user2, userRoles);
    }
}
