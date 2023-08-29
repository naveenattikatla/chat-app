const express = require("express")
const connection = require("./backend/db/db")
const { Login, SignUp } = require("./backend/userController/userAthentication")
const { notfound } = require("./backend/middlewares/middlewares")

const app= express()


app.use(express.json())
connection()

app.get("/",(req,res)=>{
    res.send("app is running")
})
app.post("/app/login", Login);
app.post("/login",SignUp)

app.use(notfound)

app.listen(5000, console.log("server is created"))