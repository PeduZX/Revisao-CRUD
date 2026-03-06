# Revisao-CRUD

CREATE DATABASE crud_api_revisao;
USE crud_api_revisao;

CREATE TABLE users(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    cpf_num BIGINT,
    data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

