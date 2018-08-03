package com.nguyenphucthienan.bookstore.controller;

import com.nguyenphucthienan.bookstore.domain.Book;
import com.nguyenphucthienan.bookstore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.Iterator;
import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {
    @Autowired
    private BookService bookService;

    @RequestMapping(value = {"", "/"}, method = RequestMethod.POST)
    public Book addBook(@RequestBody Book book) {
        return bookService.save(book);
    }

    @RequestMapping(value = "/{bookId}/images", method = RequestMethod.POST)
    public ResponseEntity uploadImage(@PathVariable Long bookId,
                                      HttpServletRequest request, HttpServletResponse response) {
        try {
            MultipartHttpServletRequest multipartHttpServletRequest = (MultipartHttpServletRequest) request;
            Iterator<String> iterator = multipartHttpServletRequest.getFileNames();
            MultipartFile multipartFile = multipartHttpServletRequest.getFile(iterator.next());
            String fileName = bookId + ".png";

            byte[] bytes = multipartFile.getBytes();
            BufferedOutputStream bufferedOutputStream = new BufferedOutputStream(
                    new FileOutputStream(new File("src/main/resources/static/images/books/" + fileName)));
            bufferedOutputStream.write(bytes);
            bufferedOutputStream.close();

            return new ResponseEntity("{\"message\" : \"Upload image successfully\"}", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity("{\"message\" : \"Upload image failed\"}", HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(value = {"", "/"}, method = RequestMethod.GET)
    public List<Book> getBooks() {
        return bookService.findAll();
    }

    @RequestMapping(value = "/{bookId}", method = RequestMethod.GET)
    public Book getBook(@PathVariable Long bookId) {
        return bookService.findById(bookId);
    }

    @RequestMapping(value = {"", "/"}, method = RequestMethod.PUT)
    public Book updateBook(@RequestBody Book book) {
        return bookService.save(book);
    }
}
