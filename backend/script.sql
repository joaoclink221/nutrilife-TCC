create database bd_nutrilife;

use bd_nutrilife;

create table tb_login(
email                varchar(200),
senha                varchar(64)
);

insert into tb_login( email, senha)
values("admNutri@gmail.com", "adm@nutri");

create table tb_cadastro_paciente(
id_paciente                   INT AUTO_INCREMENT PRIMARY KEY,
nome                 varchar(200) , 
data_nascimento      DATE ,
genero               varchar(200) ,
telefone             varchar(20),
email                varchar(200),
/*situacao          varchar(220),*/
cintura             decimal(10,2),
quadril             decimal(10,2),
peso                decimal(10,2),
altura              decimal(10,2),
tipo_dieta			varchar(255),
data_inicio			date,
data_fim			date, 
Descricao          varchar(255) 
);
DESCRIBE tb_cadastro_paciente;

create table tb_consultas(
id_consulta          INT AUTO_INCREMENT PRIMARY KEY,
nome_do_paciente           varchar(255),
data_consulta        DATETIME,
tipo_consulta        varchar(200) not null,
valor           decimal(10,2)
);

SELECT * FROM tb_cadastro_paciente;

create table tb_financeiro(
id_despesa           INT AUTO_INCREMENT PRIMARY KEY,
situacao            boolean,
ds_despesa        varchar(255),
valor                decimal(5,2)
);

/*drop database bd_nutrilife;


