const { Client } = require('pg');
const client = new Client({
    user: "ania",
    password: "weppo",
    host: "localhost",
    port: 5432,
    database: "weppo"
});

/* ------------------------ TASK 2 AND 3 ------------------------------------- */
async function getData(){  
    try{
        var {rows} = await client.query("SELECT * FROM person_v2");
        await console.table(rows);
    } catch(err){
        console.error(err);
    }
};

async function insertData(){
    const query = {
        values: ['Monika', 'Baran','k','1986-03-12', 'monika.baran@gmail.com'],
        text: "INSERT INTO person_v2 (first_name, last_name, gender, date_of_birth, email) VALUES($1, $2, $3, $4, $5) RETURNING id"
    }
    try{
        var result = await client.query(query);
        var newId = result.rows[0].id;
        console.log(`New id is: ${newId}`);
    }catch(err){
        console.error(err);
    }
}

async function deleteData(){
    var idNumber = 7;
    try{
        await client.query(`DELETE FROM person_v2 WHERE id = ${idNumber}`);
        console.log(`Deleted recond number ${idNumber} successfuly`);
    }catch(err){
        console.log(err);
    }   
}

async function updateData(){
    try{
        await client.query(`UPDATE person_v2 SET email = 'maria.polak@o2.pl' WHERE last_name = 'Polak'`);
        console.log(`Updated successfuly`);
    }catch(err){
        console.log(err);
    }   
}

async function main(){
    try{
        await client.connect()
        console.log("Connected successfuly");
        await getData();
        //await insertData();
        //await deleteData();
        await updateData();
        await getData();
    }finally{
        await client.end();
        console.log("Disconnected successfuly");
    }
};

main();

/* ------------------------ TASK 4 AND 5 ------------------------------------- */

async function insertOneToMany(){
    var workplaceId;
    const wrokpalce = {
        values: ['Amazon', 'Wrocław', 'Kaszubska 16'],
        text: "INSERT INTO workplace_v1 (company_name, city, office_location) VALUES ($1, $2, $3) RETURNING id"
    }
    const employee = {
        values: ['Tomasz', 'Kot','m','1991-12-12','t.kot91@gmail.com', 5000],
        text: "INSERT INTO employee_v1 (first_name, last_name, gender, date_of_birth, email, salary, workplace_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *"
    }
    try{
        var workResult = await client.query(wrokpalce);
        workplaceId = workResult.rows[0].id;
        console.log(`New workplace is: ${workplaceId}`);
        employee.values.push(workplaceId);
        var employeeResult = await client.query(employee);
        console.log(`New emloyee is:`);
        console.log(JSON.stringify(employeeResult.rows[0], null, 2));
    }catch(err){
        console.error(err);
    }
};

async function insertManyToMany(){
    var workplaceId;
    const wrokpalce = {
        values: ['Google', 'Warszawa', 'Emilii Plater 53'],
        text: "INSERT INTO workplace_v2 (company_name, city, office_location) VALUES ($1, $2, $3) RETURNING id"
    }
    const employee = {
        values: ['Zuzanna', 'Broniarek','m','1997-11-05','zuzanna.bron@gmail.com', 12500],
        text: "INSERT INTO employee_v2 (first_name, last_name, gender, date_of_birth, email, salary) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id"
    }
    const relation = {
        values: [],
        text: "INSERT INTO workplaces_employees (worklace_id,employee_id) VALUES ($1,$2)"
    }
    try{
        var workResult = await client.query(wrokpalce);
        workplaceId = workResult.rows[0].id;
        relation.values.push(workplaceId);
        console.log(`New workplace is: ${workplaceId}`);
        var employeeResult = await client.query(employee);
        employeeId = employeeResult.rows[0].id;
        relation.values.push(employeeId);
        console.log(`New emloyee is: ${employeeId}`);
        await client.query(relation);
        console.log(`New relation between workplace ${workplaceId} and employee ${employeeId}`)
    }catch(err){
        console.error(err);
    }
};

async function main2(){
    try{
        await client.connect()
        console.log("Connected successfuly");
        //await insertOneToMany();
        await insertManyToMany();
    }finally{
        await client.end();
        console.log("Disconnected successfuly");
    }
};

main2();