/* employee can work in only ONE place.
   In one place can work MANY employees. */

CREATE TABLE workplace_v1 (
    id BIGSERIAL NOT NULL PRIMARY KEY ,
    company_name VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    office_location VARCHAR(100) NOT NULL
);

CREATE TABLE employee_v1 (
    id BIGSERIAL NOT NULL PRIMARY KEY ,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender varchar(10) NOT NULL,
    date_of_birth DATE NOT NULL,
    email VARCHAR(150),
    salary NUMERIC(19,2) NOT NULL,
    workplace_id BIGINT,
    FOREIGN KEY (workplace_id) REFERENCES workplace_v1(id)
);

INSERT INTO workplace_v1 (company_name, city, office_location) VALUES ('Samsung', 'Waszawa', 'plac Europejski 1');
INSERT INTO workplace_v1 (company_name, city, office_location) VALUES ('Nokia', 'Wrocław', 'Lotnicza 12');
INSERT INTO workplace_v1 (company_name, city, office_location) VALUES ('Credit Suisse', 'Wrocław', 'Szczytnicka 9');

INSERT INTO employee_v1 (first_name, last_name, gender, date_of_birth, email, salary, workplace_id)
VALUES ('Monika', 'Kaszuba', 'k', '1999-04-05', 'm.kaszuba@o2.pl', 3500, 1);
INSERT INTO employee_v1 (first_name, last_name, gender, date_of_birth, email, salary, workplace_id)
VALUES ('Marek', 'Zdun', 'm', '1985-03-12', 'm.zdum@wp.pl', 5000, 3);
INSERT INTO employee_v1 (first_name, last_name, gender, date_of_birth, email, salary, workplace_id)
VALUES ('Krzysztof', 'Kowalski', 'm', '1989-10-05', 'krzys.kowal@wp.pl', 4250, 1);

