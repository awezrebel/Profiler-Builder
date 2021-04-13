const request = require("supertest");
const x = require("../profileserver");

 
 

describe("GET / ", () =>{
test("It should respond with main", async() => {
const response = await request(x.app).get("/ ");
expect(response.statusCode).toBe(200);
});
});

describe("GET / ", () =>{
test("It should respond with edit", async() => {
const response = await request(x.app).get("/edit");
expect(response.statusCode).toBe(200);
});
});
 
describe("GET / ", () =>{
test("It should respond with logout", async() => {
const response = await request(x.app).get("/logout");
expect(response.statusCode).toBe(200);
});
});

describe("GET / ", () =>{
test("It should respond with warning", async() => {
const response = await request(x.app).get("/warning");
expect(response.statusCode).toBe(200);
});
});

  
describe("GET / ", () =>{
test("It should respond with workshop update", async() => {
const response = await request(x.app).get("/wupdate");
expect(response.statusCode).toBe(200);
});
});

    
describe("GET / ", () =>{
test("It should respond with add or delete", async() => {
const response = await request(x.app).get("/adddel");
expect(response.statusCode).toBe(200);
});
});
      
describe("GET / ", () =>{
test("It should respond with Profile", async() => {
const response = await request(x.app).get("/padddel");
expect(response.statusCode).toBe(200);
});
});
  
describe("GET / ", () =>{
test("It should respond with Acheivments", async() => {
const response = await request(x.app).get("/aadddel");
expect(response.statusCode).toBe(200);
});
});