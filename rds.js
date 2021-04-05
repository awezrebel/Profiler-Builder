var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Awez@0987',
  port: '3306',
 database: 'database1',
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
 

con.query(`   SELECT * FROM database1.analysis `, function(err, result) {
  if(err){
  throw err;
  } else {
   
  console.log(result);      
  }
  });
 
 