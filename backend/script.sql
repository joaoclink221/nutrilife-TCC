create database bd_nutrilife;

use bd_nutrilife;

create table tb_login(
email                varchar(200),
senha                varchar(20)
);

create table tb_cadastro_paciente(
id_paciente                   INT AUTO_INCREMENT PRIMARY KEY,
nome                 varchar(200) , 
data_nascimento      DATE ,
genero               varchar(200) ,
telefone             varchar(20),
email                varchar(200),
situacao          varchar(220),
cintura             decimal(10,2),
quadril             decimal(10,2),
peso                decimal(10,2),
altura              decimal(10,2), 
Descricao          text  
);

create table tb_consultas(
id_consulta          INT AUTO_INCREMENT PRIMARY KEY,
nome_do_paciente           text,
data_consulta        DATETIME,
tipo_consulta        varchar(200),
valor           decimal(10,2)
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



