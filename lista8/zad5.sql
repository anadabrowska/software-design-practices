CREATE TABLE workplace_v2 (
    id BIGSERIAL NOT NULL PRIMARY KEY ,
    company_name VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    office_location VARCHAR(100) NOT NULL
);

CREATE TABLE employee_v2 (
    id BIGSERIAL NOT NULL PRIMARY KEY ,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender varchar(10) NOT NULL,
    date_of_birth DATE NOT NULL,
    email VARCHAR(150),
    salary NUMERIC(19,2) NOT NULL
);

CREATE TABLE workplaces_employees (
  worklace_id BIGINT NOT NULL,
  employee_id BIGINT NOT NULL,
  PRIMARY KEY (worklace_id, employee_id),
  FOREIGN KEY (worklace_id) REFERENCES workplace_v2(id),
  FOREIGN KEY (employee_id) REFERENCES employee_v2(id)
);

INSERT INTO workplace_v2 (company_name, city, office_location) VALUES ('Samsung', 'Waszawa', 'plac Europejski 1');
INSERT INTO workplace_v2 (company_name, city, office_location) VALUES ('Nokia', 'Wrocław', 'Lotnicza 12');
INSERT INTO workplace_v2 (company_name, city, office_location) VALUES ('Credit Suisse', 'Wrocław', 'Szczytnicka 9');

INSERT INTO employee_v2 (first_name, last_name, gender, date_of_birth, email, salary)
VALUES ('Monika', 'Kaszuba', 'k', '1999-04-05', 'm.kaszuba@o2.pl', 3500);
INSERT INTO employee_v2 (first_name, last_name, gender, date_of_birth, email, salary)
VALUES ('Marek', 'Zdun', 'm', '1985-03-12', 'm.zdum@wp.pl', 5000);
INSERT INTO employee_v2 (first_name, last_name, gender, date_of_birth, email, salary)
VALUES ('Krzysztof', 'Kowalski', 'm', '1989-10-05', 'krzys.kowal@wp.pl', 4250);

INSERT INTO workplaces_employees (worklace_id,employee_id) VALUES (1,3);
INSERT INTO workplaces_employees (worklace_id,employee_id) VALUES (1,2);
INSERT INTO workplaces_employees (worklace_id,employee_id) VALUES (3,3);
INSERT INTO workplaces_employees (worklace_id,employee_id) VALUES (2,1);

SELECT employee_v2.id, employee_v2.first_name
FROM employee_v2 INNER JOIN workplaces_employees
ON workplaces_employees.employee_id = employee_v2.id
WHERE workplaces_employees.worklace_id = 1;
