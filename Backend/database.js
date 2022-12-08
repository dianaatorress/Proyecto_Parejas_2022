var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // crear db llamada 'mydb'
    con.query("CREATE DATABASE patoDonald", function(err, result) {
      if (err) throw err;
      console.log("Database created")
    });

    con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1234",
      database: "patoDonald"
    });

    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });

    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 Record Insterted");
    });

    var sql = "SELECT * FROM customers";
    con.query(sql, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });

    // alert("Hola mundo, estos son los results" + result);
  });  