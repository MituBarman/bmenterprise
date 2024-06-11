const express = require("express");
const app = express();
const path =require('path')
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get("*",(req,res)=>{
    res.send("<h1>Page not found</h1>")

})
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"))

})

module.exports = app;
