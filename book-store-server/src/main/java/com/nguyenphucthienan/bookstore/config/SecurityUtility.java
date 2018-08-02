package com.nguyenphucthienan.bookstore.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.security.SecureRandom;
import java.util.Random;

@Component
public class SecurityUtility {
    // Salt should be protected carefully
    private static final String SALT = "salt";

    @Bean
    public static BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder(12, new SecureRandom(SALT.getBytes()));
    }

    @Bean
    public static String randomPassword() {
        String SALT_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

        StringBuilder salt = new StringBuilder();
        Random random = new Random();

        while(salt.length() < 18) {
            int index = (int) (random.nextFloat() * SALT_CHARACTERS.length());
            salt.append(SALT_CHARACTERS.charAt(index));
        }

        return salt.toString();
    }
}
