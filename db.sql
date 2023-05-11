/*SQL QUERY in POSTGRE */
CREATE DATABASE your_database;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

INSERT INTO products (product_name, price) VALUES
('Товар 1', 100.00),
('Товар 2', 200.00),
('Товар 3', 300.00);
