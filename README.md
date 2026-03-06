# Revisao-CRUD

CREATE DATABASE crud_api_revisao; <br>
USE crud_api_revisao;  <br>

CREATE TABLE users(  <br>
	id INT AUTO_INCREMENT PRIMARY KEY,  <br>
    nome VARCHAR(255) NOT NULL,  <br>
    email VARCHAR(255) NOT NULL UNIQUE,  <br>
    senha VARCHAR(255) NOT NULL,  <br>
    cpf_num BIGINT,  <br>
    data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP  <br>
)  <br>

