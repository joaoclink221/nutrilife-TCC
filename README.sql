create database bd_nutrilife;

use bd_nutrilife;

create table tb_login(
email                varchar(200),
senha                varchar(20)
);

create table tb_cadastro_paciente(
id_paciente                   INT AUTO_INCREMENT PRIMARY KEY,
nome                 varchar(200) not null, 
data_nascimento      DATE not null,
genero               varchar(200) not null,
telefone             varchar(20) not null,
email                varchar(200) not null,
situaçao          varchar(220) not null,
cintura             decimal(10,2) not null,
quadril             decimal(10,2) not null,
peso                decimal(10,2) not null,
altura              decimal(10,2) not null, 
Descrição           text  not null
);

create table tb_consultas(
id_consulta          INT AUTO_INCREMENT PRIMARY KEY,
nome_do_paciente           int not null,
data_consulta        DATETIME,
tipo_consulta        varchar(200) not null,
valor           decimal(10,2),
);



create table tb_financeiro(
id_despesa           INT AUTO_INCREMENT PRIMARY KEY,
situacao            boolean,
tipo_despesa        text,
valor                decimal(5,2),
receita_mes            decimal(5,2),
gasto                decimal(5,2),
lucro                decimal(5,2)
);


