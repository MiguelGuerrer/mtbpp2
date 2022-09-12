create schema dbproyectomtb;
use dbproyectomtb;

CREATE TABLE usuario(
id_usuario int  unsigned primary key auto_increment,
email varchar(50) not null,
contrasenia varchar(50) not null,
foto  varchar (200) not null,
fecha  date not null,
DNI int unsigned not null,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
