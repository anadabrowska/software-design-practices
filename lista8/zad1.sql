CREATE SEQUENCE person_id_seq;
CREATE TABLE person_v1 (
    id INT DEFAULT NEXTVAL('person_id_seq'),
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender varchar(10) NOT NULL,
    date_of_birth DATE NOT NULL,
    email VARCHAR(150)
);

INSERT INTO person_v1 (first_name, last_name, gender, date_of_birth) VALUES (
    'Ania', 'Kowalska','k','1998-04-05');
INSERT INTO person_v1 (first_name, last_name, gender, date_of_birth) VALUES (
    'Maciek', 'Borowski','m','1986-03-12');

/* if no DEFAULT NEXTVAL()*/
INSERT INTO person_v1 VALUES (nextval('serial'), 'Ania', 'Kowalska','k','1998-04-05');

SELECT * FROM person_v1;

CREATE TABLE person_v2 (
    id BIGSERIAL NOT NULL PRIMARY KEY ,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender varchar(10) NOT NULL,
    date_of_birth DATE NOT NULL,
    email VARCHAR(150)
);

INSERT INTO person_v2 (first_name, last_name, gender, date_of_birth) VALUES (
    'Katarzyna', 'Kowalska','k','1999-04-05');
INSERT INTO person_v2 (first_name, last_name, gender, date_of_birth, email) VALUES (
    'Krzysztof', 'Borowski','m','1986-03-12', 'krzys.br@gmail.com');

SELECT * FROM person_v2;