const express= require('express');
const path= require("path");
const app=express();

const port = process.env.PORT || 3002;

app.use(express.static(path.join(__dirname,"../../Mercado Libre")));

app.listen(port, ()=>{
    console.log("Corriendo");
});

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"./views/home.html"));
});

app.get("/register.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"))
});

app.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"))
});