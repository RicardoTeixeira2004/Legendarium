CREATE DATABASE legendarium;
USE legendarium;
DROP DATABASE legendarium;

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

INSERT INTO personagem (nomePerso, racaPerso, classePerso) 
VALUES 
('Elfo Mago', 'Elfo', 'Mago'),
('Elfo Guerreiro', 'Elfo', 'Guerreiro'),
('Elfo Escudeiro', 'Elfo', 'Escudeiro'),
('Elfo Bardo', 'Elfo', 'Bardo'),
('Elfo Arqueiro', 'Elfo', 'Arqueiro'),

('Humano Mago', 'Humano', 'Mago'),
('Humano Guerreiro', 'Humano', 'Guerreiro'),
('Humano Escudeiro', 'Humano', 'Escudeiro'),
('Humano Bardo', 'Humano', 'Bardo'),
('Humano Arqueiro', 'Humano', 'Arqueiro'),

('Anão Mago', 'Anão', 'Mago'),
('Anão Guerreiro', 'Anão', 'Guerreiro'),
('Anão Escudeiro', 'Anão', 'Escudeiro'),
('Anão Bardo', 'Anão', 'Bardo'),
('Anão Arqueiro', 'Anão', 'Arqueiro'),

('Hobbit Mago', 'Hobbit', 'Mago'),
('Hobbit Guerreiro', 'Hobbit', 'Guerreiro'),
('Hobbit Escudeiro', 'Hobbit', 'Escudeiro'),
('Hobbit Bardo', 'Hobbit', 'Bardo'),
('Hobbit Arqueiro', 'Hobbit', 'Arqueiro');

insert into usuario values 
(null,'Elfo Mago', 'Elfo', 'Mago', 1),
(null,'Elfo Guerreiro', 'Elfo', 'Guerreiro', 2),
(null,'Elfo Escudeiro', 'Elfo', 'Escudeiro', 3),
(null,'Elfo Bardo', 'Elfo', 'Bardo', 4),
(null,'Elfo Arqueiro', 'Elfo', 'Arqueiro',5),

(null,'Humano Mago', 'Humano', 'Mago',6),
(null,'Humano Guerreiro', 'Humano', 'Guerreiro',7),
(null,'Humano Escudeiro', 'Humano', 'Escudeiro',8),
(null,'Humano Bardo', 'Humano', 'Bardo',9),
(null,'Humano Arqueiro', 'Humano', 'Arqueiro',10),

(null,'Anão Mago', 'Anão', 'Mago',11),
(null,'Anão Guerreiro', 'Anão', 'Guerreiro',12),
(null,'Anão Escudeiro', 'Anão', 'Escudeiro',13),
(null,'Anão Bardo', 'Anão', 'Bardo',14),
(null,'Anão Arqueiro', 'Anão', 'Arqueiro',15),

(null,'Hobbit Mago', 'Hobbit', 'Mago',16),
(null,'Hobbit Guerreiro', 'Hobbit', 'Guerreiro',17),
(null,'Hobbit Escudeiro', 'Hobbit', 'Escudeiro',18),
(null,'Hobbit Bardo', 'Hobbit', 'Bardo',19),
(null,'Hobbit Arqueiro', 'Hobbit', 'Arqueiro',20);





INSERT INTO personagem (nomePerso, racaPerso, classePerso) 
VALUES 
('Elfo Mago', 'Elfo', 'Mago'),
('Elfo Guerreiro', 'Elfo', 'Mago'),
('Elfo Escudeiro', 'Elfo', 'Mago'),
('Elfo Bardo', 'Elfo', 'Mago'),
('Elfo Arqueiro', 'Elfo', 'Mago'),

('Elfo Mago', 'Elfo', 'Guerreiro'),
('Elfo Guerreiro', 'Elfo', 'Guerreiro'),
('Elfo Escudeiro', 'Elfo', 'Bardo'),
('Elfo Bardo', 'Elfo', 'Bardo'),
('Elfo Arqueiro', 'Elfo', 'Arqueiro'),

('Humano Mago', 'Humano', 'Arqueiro'),
('Humano Guerreiro', 'Humano', 'Arqueiro'),
('Humano Escudeiro', 'Humano', 'Arqueiro'),
('Humano Bardo', 'Humano', 'Arqueiro'),
('Humano Arqueiro', 'Humano', 'Arqueiro'),

('Hobbit Mago', 'Hobbit', 'Arqueiro'),
('Hobbit Guerreiro', 'Hobbit', 'Escudeiro'),
('Hobbit Escudeiro', 'Hobbit', 'Escudeiro'),
('Hobbit Bardo', 'Hobbit', 'Arqueiro'),
('Hobbit Arqueiro', 'Hobbit', 'Arqueiro');

insert into usuario values 
(null,'Elfo Mago', 'Elfo', 'Mago', 21),
(null,'Elfo Guerreiro', 'Elfo', 'Guerreiro', 22),
(null,'Elfo Escudeiro', 'Elfo', 'Escudeiro', 23),
(null,'Elfo Bardo', 'Elfo', 'Bardo', 24),
(null,'Elfo Arqueiro', 'Elfo', 'Arqueiro',25),

(null,'Elfo Mago', 'Elfo', 'Mago', 26),
(null,'Elfo Guerreiro', 'Elfo', 'Guerreiro', 27),
(null,'Elfo Escudeiro', 'Elfo', 'Escudeiro', 28),
(null,'Elfo Bardo', 'Elfo', 'Bardo', 29),
(null,'Elfo Arqueiro', 'Elfo', 'Arqueiro',30),

(null,'Anão Mago', 'Anão', 'Mago',31),
(null,'Anão Guerreiro', 'Anão', 'Guerreiro',32),
(null,'Anão Escudeiro', 'Anão', 'Escudeiro',33),
(null,'Anão Bardo', 'Anão', 'Bardo',34),
(null,'Anão Arqueiro', 'Anão', 'Arqueiro',35),

(null,'Hobbit Mago', 'Hobbit', 'Mago',36),
(null,'Hobbit Guerreiro', 'Hobbit', 'Guerreiro',37),
(null,'Hobbit Escudeiro', 'Hobbit', 'Escudeiro',38),
(null,'Hobbit Bardo', 'Hobbit', 'Bardo',39),
(null,'Hobbit Arqueiro', 'Hobbit', 'Arqueiro',40);




select * from usuario, personagem where fkPer = idPer;
select * from usuario;
select * from personagem;


