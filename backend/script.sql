create database bd_nutrilife;

use bd_nutrilife;

create table tb_login (
    email varchar(200),
    senha varchar(20)
);

insert intpo tb_login (email,senha) values ('joao@gmail.com','123');

create table tb_cadastro_paciente (
    id_paciente int auto_increment primary key,
    nome varchar(200),
    data_nascimento date,
    genero varchar(200),
    email varchar(200),
    telefone varchar(20),
    endereco varchar(200),
    info_saude varchar(220)    
);

create table tb_consultas (
    id_consulta int auto_increment primary key,
    id_paciente int,
    data_consulta datetime,
    tipo_consulta varchar(200),
    observacao varchar(255),
    foreign key (id_paciente) references tb_cadastro_paciente(id_paciente)
);

create table tb_medidas_corporais (
    id_medida int auto_increment primary key,
    id_paciente int,
    cintura decimal(10,2),
    quadril decimal(10,2),
    peso decimal(10,2),
    altura decimal(10,2),
    data_medida date,
    foreign key (id_paciente) references tb_cadastro_paciente(id_paciente)
);

create table tb_financeiro (
    id_despesa int auto_increment primary key,
    situacao boolean,
    tipo_despesa text,
    valor decimal(10,2),
    receita_mes decimal(10,2),
    gasto decimal(10,2),
    lucro decimal(10,2)
);

create table tb_plano_alimentar (
    id_plano int auto_increment primary key,
    id_paciente int,
    desc_plano varchar(200),
    tipo_dieta varchar(200),
    data_inicio date,
    conclusao date,
    foreign key (id_paciente) references tb_cadastro_paciente(id_paciente)
);

create table tb_historico_consultas (
    id_historico int auto_increment primary key,
    id_paciente int,
    detalhes_consulta varchar(200),
    data_consulta datetime,
    foreign key (id_paciente) references tb_cadastro_paciente(id_paciente)
);
