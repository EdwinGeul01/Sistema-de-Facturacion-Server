CREATE DATABASE IF NOT EXISTS facturaciondb;
use facturaciondb;
CREATE Table IF NOT EXISTS usuarios
( 
    id int PRIMARY KEY AUTO_INCREMENT,
    user VARCHAR(250),
    pass VARCHAR (250)
);
CREATE Table IF NOT EXISTS productos
( 
    id int PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(250),
    cantidad FLOAT,
    precio float
);
CREATE Table IF NOT EXISTS historialventas
( 
    id int PRIMARY KEY AUTO_INCREMENT,
    fecha VARCHAR(200),
    total float
);

DELIMITER $$
CREATE FUNCTION `GetCantidadById`( id int )
RETURNS int
BEGIN
    declare total int;
    SELECT productos.cantidad INTO total from productos where productos.id = id;
RETURN total ;
END $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE `reducircantidad`( in id int ,in cantidad int)
begin
	
    update productos
    set productos.cantidad = ( GetCantidadById(id) - cantidad ) 
    where productos.id = id;
    
end $$

DELIMITER ;

INSERT INTO usuarios VALUES 
( 1,"admin","pass");
