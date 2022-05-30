-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */
CREATE DATABASE legendarium;
USE legendarium;

CREATE TABLE personagem (
	idPer INT PRIMARY KEY AUTO_INCREMENT,
	nomePerso VARCHAR(50),
	racaPerso VARCHAR(50),
	classePerso VARCHAR(50)
);

CREATE TABLE usuario (
	idUser INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    fkPer int,
    foreign key (fkPer) references usuario (idUser)
);

insert into personagem values
(null, 'reinaldo', 'elfo', 'guerreiro');

insert into usuario values 
(null, 'ricardo', 'ricardo@gmail.com', '1234', 1);

INSERT INTO personagem (nomePerso, racaPerso, classePerso) VALUES ('erafasd', 'Orc', 'Mago');
INSERT INTO usuario (nome, email, senha) VALUES ('ricardo', 'rikas@gmail.com', '234234');

select * from usuario, personagem where fkPer = idPer;
select * from usuario;


/* para sql server - remoto - produção */
CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

