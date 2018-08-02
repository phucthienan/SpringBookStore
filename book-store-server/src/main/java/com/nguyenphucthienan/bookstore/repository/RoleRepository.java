package com.nguyenphucthienan.bookstore.repository;

import com.nguyenphucthienan.bookstore.domain.security.Role;
import org.springframework.data.repository.CrudRepository;

public interface RoleRepository extends CrudRepository<Role, Long> {
}
