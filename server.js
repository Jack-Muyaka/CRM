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
require("./controllers/users")(app)
require("./controllers/contacts")(app)
db.sequelize.sync({force:false}).then(()=>{
    const PORT = process.env.port || 4300
    app.listen(PORT,(
    console.log(`Application running on ${PORT}`)
))
}).catch((err)=>{
    console.log(err)
})

 