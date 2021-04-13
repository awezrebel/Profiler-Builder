var http = require('http');
const fs = require('fs'); 
const fse = require('fs-extra');  
let express=require('express');
var validator = require('validator');
const path = require('path');
const router = express.Router();
var mysql = require('mysql');
var url = require('url');
var c=0;
 
let app = express();
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req,res) {
var query = require('url').parse(req.url,true).query;
var flag1=2;
var flag2=0;
var j=0,z=0;
let wp,block=null;
var name=null;
var username=query.username;
var uname=query.uname;
var uname1=query.uname1;
var password=query.password;
var pwd=query.pwd;
var otp=query.otp;
var projects =query.projects;
var mobile =query.mobile ;
var epass =query.epass ;
var ecpass=query.ecpass;

//workshop update
var id=query.id;
var Organisation=query.Organisation;
var duration=query.duration;
var Objective =query.Objective;
var Tools=query.Tools;
var Outcome=query.Outcome;
 
//skills update
var languages =query.languages;
var web =query.web;
var tools=query.tools;
 
//project Update
var Topic = query.Topic;
var PTopic =query.PTopic ;
var PDuration =query.PDuration ;
var PObjective  =query.PObjective ;
var PTools =query.PTools ;
var POutcome=query.POutcome;

//Achievements Update
var  AName =query.AName;
var ADName = query.ADName;
var Details =query.Details ;
var Location=query.Location;


//password update 

var  oldpass =query.oldpass;
var  newpass =query.newpass;
var  cpass =query.cpass;


//truncating temporary files
 
if(c==0){
fs.truncate('block.txt', 0, function() {
console.log("File Content Deleted");
});

fs.truncate('out.txt', 0, function() {
console.log("File Content Deleted");
});
c+=1;
}

//REMOVE COMMENTS WHILE RUNNING JTEST

//res.send("Jtest.html");
 


//mycon with database
//aws rds
<<<<<<< HEAD
/*
=======

>>>>>>> 82107575bb5d6a80aa8ad4a66dfa568643fad366
var mycon = mysql.createmycon({
host: "database-1.cxg5ddbyrmb4.us-east-1.rds.amazonaws.com",
user: "admin",
password: "E7r9t8@Q#h%Hy+MProfile-Builder", // sensitive
multipleStatements: true ,
port: "3306",
database: "database1"
});


//localhost
<<<<<<< HEAD
 
=======
 /*
>>>>>>> 82107575bb5d6a80aa8ad4a66dfa568643fad366
var mycon = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Awez@0987',
        port: '3306',
        database: 'database1',
    
       multipleStatements: true 
});
*/
 
if(uname!=null){
res.sendfile("otp.html");
var spawn = require("child_process").spawn; 
var process = spawn('python',["./otpv.py",] ); 

};


app.get('/otp', function(req, res) {
res.sendfile("otp.html");
var spawn = require("child_process").spawn; 
var process = spawn('python',["./otpv.py",] ); 
}); 

//login
 
if(username != undefined && password != undefined) {
fse.truncate('currentlogin.txt')
fs.readFile('block.txt', 'utf-8', (err, data) => { 
if (err) throw err;

if(username==data){
res.send("Your account is blocked ..pls login after 24hrs");
}else{

var test = 0;             
pd=password;
mycon.query('SELECT * from login', function (error,login, fields) {
if (error) throw error;

var length = login.length;

for(var i = 0; i < length; i++){
if (login[i].uname==username && login[i].pwd==password){
test=1
fs.appendFile('currentlogin.txt', username, (err) => { 
if (err) throw err; 
}) 
}
}
console.log(username);
console.log(password);
if(test==1){ 
res.redirect("/data");
}
if(test==0){
wrongpass();
}
});
//mycon.end();
}})
}



function wrongpass(){
var count=0;
let data = username+",";
fs.appendFile('Out.txt', data, (err) => { 
if (err) throw err; 
}) 
var count=0;
try {  
var data1 = fs.readFileSync('out.txt', 'utf8');
console.log(data.toString());    
} catch(e) {
console.log('Error:', e.stack);
}
console.log("data" ,data1);
let inp=data1.split(",");

for(var w=0;w<=inp.length-1;w++){
if(inp[w]==username){
count++;
}
}
if(count==0){
res.send("Please provide valid details \n left 2 attempts");
}else if(count==1){
res.send("Please provide valid details \n left 1 attempt");
}else if(count>1){
res.send("Your account is blocked ..pls login after 24hrs");
fs.appendFile('block.txt', username, (err) => {
console.log("succesfully blocked"); 
if (err) throw err; 
}) 
console.log("user " + username + "blocked");
}
    
count=0;
}

var obj = {};
 
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.get('/data', function(req, res){

fs.readFile('currentlogin.txt', 'utf-8', (err, data) => { 
if (err) throw err; 
mycon.query(`SELECT name FROM login  WHERE (uname ='${data}')`, function(err, result) {
if(err){
throw err;
} else {
obj = {print: result};

res.render('print', obj);   
console.log(obj);      
}
});
});      
});




//forgot password 
if(otp!=null){
fs.readFile('otp.txt', 'utf-8', (err, data) => { 
if (err) throw err; 
if(otp==data){
forgotpass();
}else{
res.send("please provide the correct otp");
}
});
 
    



function forgotpass() {
mycon.connect(function (err) {
if (err) throw err;
console.log("Connected RDS");
});
const sql3=`UPDATE login SET pwd = '${pwd}' WHERE (uname ='${uname1}')`;
mycon.query(sql3, function (err, result) {
if (err) throw err;
console.log(result);
});
//mycon.end();
res.send( `<p>Congratulations you have successfully reset your password` );
 
}
}


//profile 

var obj1 = {};
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.get('/profile', function(req, res) { 
fs.readFile('currentlogin.txt', 'utf-8', (err, data) => { 
if (err) throw err;         
mycon.query(`  select username,rollno, username, dob, mobile, cgpa, projects, images, remarks, mother, father, parentmobile, address,mail from profile WHERE (rollno ='${data}')`, function(err, result) {
        if(err){
        throw err;
        } else {
        obj1 = {profile: result};
        res.render('profile', obj1);   
        console.log(obj1);      
        }
        });
});
}); 
    
//edit details
app.engine('html', require('ejs').renderFile);
 
app.get('/edit',function(req,res){
res.render(__dirname+'/edit.html');
});


if(oldpass != null && newpass != null){
        fs.readFile('currentlogin.txt', 'utf-8', (err, data) => { 

if(newpass==cpass){

if (err) throw err;   
mycon.query(`  select * from database1.login `, function(err, login1) {
 
if(err) throw err;

var length1 = login1.length;
var success=0;
for(var i = 0; i < length1; i++){
if (login1[i].uname==data  && login1[i].pwd==oldpass){
success=1;
}
}
if(success==1){
 
mycon.query(` UPDATE database1.login SET pwd = '${cpass}' WHERE (uname = '${data}');`, function(err, result) {  
res.sendfile("psuccess.html");  
if(err) throw err;

console.log(result);
})
}else{
        res.send("old password feild data did not matched with our database");
} 
})
}else{
res.send("password and confirm password are not matched")
}

}
        )}

//workshops
var obj2 = {};
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.get('/workshops',function(req,res){
        fs.readFile('currentlogin.txt', 'utf-8', (err, data) => { 
                if (err) throw err;         
                mycon.query(`  select  certificateid , Organisation, duration, Objective, Tools, Outcome from workshops WHERE (rollno ='${data}')`, function(err, result) {
                        if(err){
                        throw err;
                        } else {
                        obj2 = {workshops: result};
                        res.render('workshops', obj2);   
                        console.log(obj2);      
                        }
                        });
                });
                }); 
 
//skills
var obj3 = {};
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.get('/skills',function(req,res){
        fs.readFile('currentlogin.txt', 'utf-8', (err, data) => { 
                if (err) throw err;         
                mycon.query(`  select  rollno, languages, web, tools from skills WHERE (rollno ='${data}')`, function(err, result) {
                        if(err){
                        throw err;
                        } else {
                        obj3 = {skills: result};
                        res.render('skills', obj3);   
                        console.log(obj3);      
                        }
                        });
                });
                }); 



//Achievements
 
var obj4 = {};
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.get('/Achievements',function(req,res){
        fs.readFile('currentlogin.txt', 'utf-8', (err, data) => { 
                if (err) throw err;         
                mycon.query(`  select  Name, Details, Location from Achievements WHERE (rollno ='${data}')`, function(err, result) {
                        if(err){
                        throw err;
                        } else {
                        obj4 = {Achievements: result};
                        res.render('Achievements', obj4);   
                        console.log(obj4);      
                        }
                        });
                });
                });
                

//Projects
 
var obj5 = {};
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.get('/projects',function(req,res){
        fs.readFile('currentlogin.txt', 'utf-8', (err, data) => { 
                if (err) throw err;         
                mycon.query(`  select  Topic, Duration, Objective, Tools, Outcome from projects WHERE (rollno ='${data}')`, function(err, result) {
                        if(err){
                        throw err;
                        } else {
                        obj5 = {projects: result};
                        res.render('projects', obj5);   
                        console.log(obj5);      
                        }
                        });
                });
                }); 
//warning
app.get('/warning', function(req,res){
res.sendfile("warning.html");
});

//workshop update
app.get('/wupdate',function(req,res){
res.sendfile("wupdate.html");      
})

app.get('/adddel',function(req,res){
res.sendfile("adddel.html");
})
//updating database 
if(Organisation != null){
        fs.readFile('currentlogin.txt', 'utf-8', (err, data) => { 
                if (err) throw err;         
                mycon.query(` INSERT INTO database1.workshops (certificateid, rollno, Organisation, duration, Objective,Tools,Outcome) VALUES ('${id}','${data}', '${Organisation}','${duration}','${Objective}','${Tools}','${Outcome}')`, function(err, result) {
                        if(err) throw err;
                        console.log(result);
                        });
                });
                res.sendfile("usuccess.html");
}

//removing 
if(id !=null && Organisation ==null){
        mycon.query(` DELETE FROM database1.workshops WHERE (certificateid = '${id}');`, function(err, result) {
                if(err) throw err;
                console.log(result);
                });
                res.sendfile("usuccess.html")
        
}

app.get('/sadddel',function(req,res){
res.sendfile("sadddel.html");
})

if(languages  != null){
        fs.readFile('currentlogin.txt', 'utf-8', (err, data) => { 
                if (err) throw err;         
                mycon.query(` INSERT INTO database1.skills (rollno , languages , web , tools) VALUES ('${data}','${languages}','${web}', '${tools}')`, function(err, result) {
                        if(err) throw err;
                        console.log(result);
                        });
                });
                res.sendfile("usuccess.html");
        }


//skills update
app.get('/sdelete',function(req,res){
       
                fs.readFile('currentlogin.txt', 'utf-8', (err, data) => { 
                        if (err) throw err; 
                mycon.query(  `DELETE FROM database1.skills WHERE (rollno = '${data}')`,function(err,result){
                if(err) throw err;
                console.log(result);
                });
        })
                res.sendfile("usuccess.html")
})
 
  
//project update
app.get('/padddel',function(req,res){
        res.sendfile("padddel.html");
        })


if(POutcome != null){
        fs.readFile('currentlogin.txt', 'utf-8', (err, data) => { 
                if (err) throw err;         
                mycon.query(` INSERT INTO database1.projects (rollno, Topic, Duration, Objective, Tools, Outcome) VALUES ('${data}','${PTopic}','${PDuration}', '${PObjective}','${PTools}','${POutcome}')`, function(err, result) {
                        if(err) throw err;
                        console.log(result);
                        });
                });
                res.sendfile("usuccess.html");
}


if(Topic != null){
      console.log("line no 411" + Topic)
        fs.readFile('currentlogin.txt', 'utf-8', (err, data) => { 
        if (err) throw err; 
        mycon.query(  `DELETE FROM database1.projects WHERE (Topic = '${Topic}')`,function(err,result){
        if(err) throw err;
        console.log(result);
        });
})
        res.sendfile("usuccess.html")
}


//Achievements Updates
app.get('/aadddel',function(req,res){
res.sendfile("aadddel.html");
})

if(AName != null){
                fs.readFile('currentlogin.txt', 'utf-8', (err, data) => { 
                        if (err) throw err;         
                        mycon.query(` INSERT INTO database1.Achievements   (rollno, Name , Details , Location) VALUES ('${data}','${AName}','${Details}', '${Location}')`, function(err, result) {
                                if(err) throw err;
                                console.log(result);
                                });
                        });
                        res.redirect("/success");
}

app.get('/success',function(req,res){
res.sendfile("usuccess.html");
})

if(ADName != null){
  
        mycon.query(  `DELETE FROM database1.Achievements WHERE (Name = '${ADName}')`,function(err,result){
        if(err) throw err;
        console.log(result);
        });
 
        res.sendfile("usuccess.html")
}

//logout
app.get('/logout', function(req, res) {
res.sendfile("logout.html");
});

})
app.listen(8000);

module.exports.app = app;
//jest.setTimeout(50000);
console.log("hi shaik iam listening to port 8000 ")



