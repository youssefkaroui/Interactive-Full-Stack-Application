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
    checkout_count INT DEFAULT 0;
    /* UPDATE books
    SET checkout_count = checkout_count + 1
    WHERE id = <book_id>;
    SELECT checkout_count    updates book counter
    FROM books
    WHERE id = <book_id>; */
    FOREIGN KEY (author_id) REFERENCES authors(id),
    FOREIGN KEY (genre_id) REFERENCES genres(id)
);

CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255)
);
