const express = require('express');
const config = require('config');
const empsRelatedRoutes = require('./route/emps');
const loginRelatedRoutes = require('./route/login');


const app = express();
app.use(express.json());

app.use((request, response, next)=>
{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.setHeader('Access-Control-Allow-Headers',"*");
    response.setHeader('Access-Control-Allow-Methods', "*")
    next();
})

app.use('/emps',empsRelatedRoutes);
app.use('/login',loginRelatedRoutes);

// const portNo = 9999;
app.listen(9999,()=>{console.log("server started at 9999")});
