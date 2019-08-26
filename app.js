const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const path = require("path");
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, "public"))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// const {getHomePage} = require('./routes/index');
// const {addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');
const port = 3000;

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "singto11442525",
  database: "employee"
});
app.get("/employee", (req, res) => {
  // Router เวลาเรียกใช้งาน
  let sql = "SELECT * FROM employee.tableEmployee;"; // คำสั่ง sql
  db.query(sql, (err, results) => {
    // สั่ง Query คำสั่ง sql
    if (err) throw err; // ดัก error
    console.log(results[0]); // แสดงผล บน Console
    res.json(results); // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
  });
});
// ---------------------------------------------------------
app.post("/employee/delete", (req, res) => {
  let sql = `DELETE FROM employee.tableEmployee WHERE id=${req.body.id};`; //adsadad
  db.query(sql, (err, results) => {
    
    if (err) throw err; 
    console.log(results[0]); 
    res.json(results); 
  });
});
// ---------------------------------------------------------
app.get("/employee/:id", (req, res) => {
  // Router เวลาเรียกใช้งาน
  let sql = `SELECT * FROM employee.tableEmployee WHERE id=${req.params.id};`; // คำสั่ง sql
  db.query(sql, (err, results) => {
    // สั่ง Query คำสั่ง sql
    if (err) throw err; // ดัก error
    console.log(results[0]); // แสดงผล บน Console
    res.json(results); // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
  });
});
// ---------------------------------------------------------
// ---------------------------------------------------------
app.post("/employee/add", (req, res) => {
  let sql = `INSERT INTO employee.tableEmployee (id,first_name, age) VALUES (3,'test3', '16');`;
  db.query(sql, (err, results) => {
    // สั่ง Query คำสั่ง sql
    if (err) throw err; // ดัก error
    console.log(results[0]); // แสดงผล บน Console
    res.json(results); // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
  });
});

//----------------------------------------------------------
// app.set('port', process.env.port || port); // set express to use this port
// app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
// app.set('view engine', 'ejs'); // configure template engine


// routes for the app
/*
app.get('/', getHomePage);
app.get('/add', addPlayerPage);
app.get('/edit/:id', editPlayerPage);
app.get('/delete/:id', deletePlayer);
app.post('/add', addPlayer);
app.post('/edit/:id', editPlayer);
*/

// set the app to listen on the port
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
