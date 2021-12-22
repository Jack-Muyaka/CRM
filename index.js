const express = require("express");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const methodOverride = require("method-override");
const db = require("./models");

const app = express();
app.use(morgan());
app.use(methodOverride());
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.text());
app.use(bodyparser.json());
db.sequelize.sync({force:false}).then(()=>{
    const PORT = process.env.port || 4000
    app.listen(PORT,(
    console.log(`Application running on ${PORT}`)
))
}).catch((err)=>{
    console.log(err)
})

