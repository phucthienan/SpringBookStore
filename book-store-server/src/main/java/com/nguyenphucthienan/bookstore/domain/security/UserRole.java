package com.nguyenphucthienan.bookstore.domain.security;

import com.nguyenphucthienan.bookstore.domain.User;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "user_role")
public class UserRole implements Serializable {
    private static final long serialVersionUID = 789789789789L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userRoleId;

    public UserRole() {
    }

    public UserRole(User user, Role role) {
        this.user = user;
        this.role = role;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id")
    private Role role;

    public long getUserRoleId() {
        return userRoleId;
    }

    public void setUserRoleId(long userRoleId) {
        this.userRoleId = userRoleId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
