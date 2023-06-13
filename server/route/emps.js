const express = require('express');
const config = require('config');

const appForEmps = express.Router();
const mysql = require('mysql');
var connection = mysql.createConnection({
    host : config.get("host"),
    user : config.get("user"),
    password : config.get("password"),
    database : config.get("database")
});

appForEmps.get("/",(request, response)=>
{
    connection.query("select * from Emp",(error,result)=>
    {
        if(error==null)
        {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
        else
        {
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
    })
})

appForEmps.post("/",(request,response)=>
{
    var query = `insert ignore into Emp values(${request.body.ENo}, '${request.body.EName}', '${request.body.EAddress}');` 
    connection.query(query, (error,result)=>
    {
        if (error==null){
            var data = JSON.stringify(result);
            response.setHeader("Content-Type", "application/json");
            response.write(data);
        }
        else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
    }
    );

})

appForEmps.post("/warning",(request,response)=>
{
    var query = `show warnings;` 
    connection.query(query, (error,result)=>
    {
        if (error==null){
            var data = JSON.stringify(result);
            response.setHeader("Content-Type", "application/json");
            response.write(data);
        }
        else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
    }
    );

})

appForEmps.delete("/:ENo",(request, response)=>
{
    var query = `delete from Emp where ENo=${request.params.ENo};`;
    connection.query(query,(error,result)=>{
        if (error==null){
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.send();
        }
        else{
            var error = JSON.stringify(error);
            response.setHeader("Content-Type","application/json");
            response.send();
        }
    });
})

appForEmps.put("/:ENo",(request,response)=>
{
    var query = `update Emp set EName='${request.body.EName}', EAddress='${request.body.EAddress}' where ENo=${request.body.ENo};`;
    connection.query(query,(error, result)=>
    {
        if (error == null){
            var data = JSON.stringify(result);
            response.setHeader("Content-Type", "application/json");
            response.send(result);
        }
        else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.send();
        }

    })
})

module.exports = appForEmps;
