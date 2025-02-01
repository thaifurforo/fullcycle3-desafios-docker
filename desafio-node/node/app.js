const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Thainara')`
connection.query(sql)

const selectAll = 'SELECT * FROM people';
connection.query(selectAll, (err, results) => {
    if (err) throw err;
    peopleList = results;
    console.log('Dados recuperados:', peopleList);
});

connection.end() 

app.get('/', (req, res) => {
    let html = '<h1>Full Cycle Rocks!</h1><ul>';
    peopleList.forEach(row => {
        html += `<li>${row.name}</li>`;
    });
    html += '</ul>';
    res.send(html);
});

app.listen(port, '0.0.0.0', ()=> {
    console.log('Rodando na porta ' + port)
})