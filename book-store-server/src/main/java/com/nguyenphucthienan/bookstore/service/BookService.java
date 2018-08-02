package com.nguyenphucthienan.bookstore.service;

import com.nguyenphucthienan.bookstore.domain.Book;

import java.util.List;

public interface BookService {
    List<Book> findAll();

    Book findById(Long id);

    Book save(Book book);

    void remove(Book book);
}
