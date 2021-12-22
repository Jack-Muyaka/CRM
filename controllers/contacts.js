const express = require("express")
const db=require("../models");
module.exports=(app)=>
{
    app.get("/api/v1/contacts",(req, res, next)=>{
        db.Contacts.findAll({
              attributes:["phone","email","location","industry"]
        }).then((contacts)=>{
            res.json(contacts)
        }).catch((err)=>{
            next(err)
            console.log(err)
        })
    })
}
