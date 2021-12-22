const express = require("express")
const db=require("../models");
module.exports=(app)=>
{
    app.get("/api/v1/users",(req, res, next)=>{
        db.User.findAll({

            attributes:["f_name","l_name","email","contact"]
        }).then((users)=>{
            res.json(users)
        }).catch((err)=>{
            next(err)
            console.log(err)
        })
    })
}
