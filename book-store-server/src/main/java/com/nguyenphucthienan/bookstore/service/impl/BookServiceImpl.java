package com.nguyenphucthienan.bookstore.service.impl;

import com.nguyenphucthienan.bookstore.domain.Book;
import com.nguyenphucthienan.bookstore.repository.BookRepository;
import com.nguyenphucthienan.bookstore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {
    @Autowired
    private BookRepository bookRepository;

    @Override
    public List<Book> findAll() {
        return (List<Book>) bookRepository.findAll();
    }

    @Override
    public Book findById(Long id) {
        Optional<Book> bookOptional = bookRepository.findById(id);
        return bookOptional.orElse(null);
    }

    @Override
    public Book save(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public void remove(Book book) {
        bookRepository.delete(book);
    }
}
