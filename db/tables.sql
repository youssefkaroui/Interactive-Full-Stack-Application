CREATE TABLE authors (
    id VARCHAR(5) PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255)
);

CREATE TABLE books (
    isbn INT PRIMARY KEY,
    title VARCHAR(255),
    author_id VARCHAR(5),
    publication_year INT,
    genre VARCHAR(255),
    view_count INT DEFAULT 0,
    checkout_count INT DEFAULT 0,
    e-book TEXT,
    FOREIGN KEY (author_id) REFERENCES authors(id)
);

CREATE TABLE codelanguage (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    version VARCHAR(255)
);

CREATE TABLE documentation(
    DocID INT PRIMARY KEY,
    docTitle VARCHAR(255),
    codelanguage_id INT NOT NULL UNIQUE,
    version VARCHAR(35),
    author VARCHAR(255),
    link VARCHAR(255)
    FOREIGN KEY (codelanguage_id) REFERENCES codelanguage(id) ON DELETE CASCADE

);

CREATE TABLE users (
    id INT PRIMARY KEY ,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255)

);

CREATE TABLE checkoutCart(
    cartID INT PRIMARY KEY,
    userID INT,
    BookID INT,
    checkout_count INT,
    checkout_date DATE,
    FOREIGN KEY userID  REFERENCES users(id),
    FOREIGN KEY BookID REFERENCES books(id)

);