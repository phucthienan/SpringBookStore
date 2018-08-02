package com.nguyenphucthienan.bookstore.repository;

import com.nguyenphucthienan.bookstore.domain.Book;
import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, Long> {
}
