-- Create database
CREATE DATABASE IF NOT EXISTS shopdb;
USE shopdb;

-- Shopper detail table
CREATE TABLE shopper_detail (
    buyer_id INT AUTO_INCREMENT PRIMARY KEY,
    shopper_name VARCHAR(100) NOT NULL,
    mobile_number VARCHAR(20) NOT NULL,
    gmail VARCHAR(100) NOT NULL,
    orders TEXT NOT NULL
);