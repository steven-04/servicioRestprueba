const express = require('express');
const mysql = require('mysql');
const app = express();

// Configura la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'databasesrtmovil.clfxmhvfjy3a.sa-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'root2023',
  database: 'moviles',
  port: 3306
});

// Conecta a la base de datos
connection.connect((err) => {
  if (err) throw err;
  console.log('Conexión exitosa a la base de datos MySQL');
});

// Ruta para obtener todos los usuarios
app.get('/usuarios', (req, res) => {
  connection.query('SELECT * FROM tb_usuario', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

// Cierra la conexión a la base de datos
// connection.end((err) => {
//   if (err) throw err;
//   console.log('Conexión a la base de datos cerrada');
// });

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
