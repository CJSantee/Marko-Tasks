-- *** This will delete any database named dormlife and any user named db_admin ***
DROP DATABASE IF EXISTS marko_tasks;
DROP USER IF EXISTS db_admin;
CREATE USER db_admin WITH ENCRYPTED PASSWORD 'password';
CREATE DATABASE marko_tasks WITH OWNER db_admin;

-- connects to newly created dormlife db
\c marko_tasks db_admin

-- DDL
CREATE TABLE IF NOT EXISTS tasks (
	id SERIAL PRIMARY KEY,
	title TEXT,
	details TEXT, 
	complete BOOLEAN,
	deadline TIMESTAMP
);
