CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (id MEDIUMINT NOT NULL AUTO_INCREMENT, username CHAR(20), message VARCHAR(100), roomname char(20), PRIMARY KEY (id));

CREATE TABLE user (id MEDIUMINT NOT NULL AUTO_INCREMENT, username CHAR(20), PRIMARY KEY (id));

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

