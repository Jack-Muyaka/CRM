const express = require("express");
const app = express();
app.get("/",(req, res)=>{
    res.send("hello i'm getting started with node")
})
const port = 5000
app.listen(port)
