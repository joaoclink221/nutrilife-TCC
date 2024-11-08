CREATE DATABASE bd_nutrilife;

USE bd_nutrilife;

CREATE TABLE tb_login (
    email VARCHAR(200) PRIMARY KEY,
    senha VARCHAR(20)
);

CREATE TABLE tb_cadastro_paciente (
    id_paciente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200) NOT NULL, 
    data_nascimento DATE NOT NULL,
    genero VARCHAR(200) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(200) NOT NULL,
    situacao VARCHAR(220) NOT NULL,
    cintura DECIMAL(10,2) NOT NULL,
    quadril DECIMAL(10,2) NOT NULL,
    peso DECIMAL(10,2) NOT NULL,
    altura DECIMAL(10,2) NOT NULL, 
    descricao TEXT NOT NULL
);

CREATE TABLE tb_consultas (
    id_consulta INT AUTO_INCREMENT PRIMARY KEY,
    id_paciente INT NOT NULL,
    data_consulta DATETIME,
    tipo_consulta VARCHAR(200) NOT NULL,
    valor DECIMAL(10,2),
    FOREIGN KEY (id_paciente) REFERENCES tb_cadastro_paciente(id_paciente)
);

CREATE TABLE tb_financeiro (
    id_despesa INT AUTO_INCREMENT PRIMARY KEY,
    situacao BOOLEAN,
    tipo_despesa TEXT,
    valor DECIMAL(10,2),
    receita_mes DECIMAL(10,2),
    gasto DECIMAL(10,2),
    lucro DECIMAL(10,2)
);
