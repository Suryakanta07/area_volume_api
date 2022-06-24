require('dotenv').config();

const express = require("express");
const server = express();
const logger = require("morgan");
const port = process.env.PORT || 8080;

server.use(express.static(process.env.STATIC_FOLDER));
server.use((req,res,next) => {
    console.log(req.method, req.id, req.path);
    next();
})
server.use(logger());


server.get("/area",(req,res) => {
    let objectName = req.query.object;
    let metric = req.query.metric; 
    let radius = req.query.radius;
    res.json({object:objectName,metric,radius})
})

app.listen(port,() => {
    console.log(`server started at${port}`);
})