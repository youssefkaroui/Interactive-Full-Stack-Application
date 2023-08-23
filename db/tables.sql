USE OnlineLib_db;

CREATE TABLE authors (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE codelanguage (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE books (
    id INT PRIMARY KEY,
    title VARCHAR(255),
    author_id INT,
    genre_id INT,
    publication_year INT,
<<<<<<< HEAD
    view_count INT DEFAULT 0, -- Add this column
=======
    view_count INT DEFAULT 0,
>>>>>>> 93acade7d9023df80f1f5825a1358fbb35aa0d39
    checkout_count INT DEFAULT 0,
    FOREIGN KEY (author_id) REFERENCES authors(id),
    FOREIGN KEY (genre_id) REFERENCES genres(id)
);

CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255)
);
