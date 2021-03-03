CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE Burgers (
id  INTEGER NOT NULL AUTO_INCREMENT,
 burger_name VARCHAR(30) NOT NULL,
 devoured BOOLEAN,
 PRIMARY KEY (id)
 );
 
INSERT INTO burgers (burger_name, devoured) VALUES ('a', TRUE);
INSERT INTO burgers (burger_name, devoured) VALUES ('b', FALSE);