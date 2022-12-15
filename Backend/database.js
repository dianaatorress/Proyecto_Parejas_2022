var mysql = require("mysql");
const express = require("express");
const port = 3000;
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

const app = express();
app.use("/Backend", express.static("Backend"));
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/enviarRespuesta', (req, res) => {
//     // recibimos info del frontend
//     // en este punto vamos a enviar info a la BD
//     // avisarle al front si la info se guarda o no

//     res.send('Recibir re!')
// })

//datos de connection con la bd local
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
});

//como ya creamos la db, ahora tmb tenemos que poner ese dato en los valores predeterminados
// con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "1234",
//   database: "daisy",
// });

//comprobar que la connection con la bd
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});


//crear db llamada 'daisy'
// con.query("CREATE DATABASE daisy", function (err, result) {
//   if (err) throw err;
//   console.log("Database created");
// });

// //como ya creamos la db, ahora tmb tenemos que poner ese dato en los valores predeterminados
con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "daisy",
});

//creamos entidad llamada 'userLogin'
var sql = "CREATE TABLE userLogin (name VARCHAR(255), password VARCHAR(255))";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});

//insertamos dentro de la entidad 2 atributos: name & password
// var sql = "INSERT INTO userLogin (name, password) VALUES ('damaris', '1234')";
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("1 Record Insterted");
// });

// //vemos la tabla en la db
// var sql = "SELECT * FROM userLogin";
// con.query(sql, function (err, result, fields) {
//   if (err) throw err;
//   console.log(result);
// });

// var sql = "SELECT * FROM userLogin WHERE name = ? and password = ?";
// con.query(sql, function (err, result, fields) {
//   //si los datos son correctos, ingresas a la pag de actividades
//   if (results.lenght > 0) {
//     res.redirect("/welcomeUser");
//     //sino, te redirecciona a la pag de login
//   } else {
//     res.redirect("/");
//   }
//   res.end();
// })

app.post("/login", encoder, function (req, res) {
  var name = req.body.name;
  var password = req.body.password;

  // alert('Holaa :)')
  // res.redirect("/login/welcomeUser");

  con.query(
    "SELECT * FROM userLogin WHERE name = ? and password = ?",
    [name, password], function (err, result, fields) {
      //si los datos son correctos, ingresas a la pag de actividades
      if (result.lenght > 0) {
        // res.redirect("/login/welcomeUser");
        console.log("si me conecte bro");

        //sino, te redirecciona a la pag de login
      } else {
        res.redirect("/login");
        console.log("no me conecte bro");
      }
      res.end();
    }
  );
});



// vemos la tabla en la db
var sql = "SELECT * FROM userLogin";
con.query(sql, function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

//Esto es para que cuando ingrese correctamente, le abra la pag de actividades
app.get("/login/welcomeUser", function (req, res) {
  res.sendFile(__dirname + "/pagActividades.html");
});

//comprobar que la connection con el puerto es correcta
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// function validar(){
//   if (){

//   }
// }