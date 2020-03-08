//Require necessary NPM package 
const express = require('express');
const mongoose =require('mongoose');

//Instaniate Express Application Object 
const app =express();


//Define the port for the API to run on 
const port= process.env.PORT || 5000;
//Start the server to listen to the requests on a given port 
app.listen(port,()=>{
    console.log(`blogy is listeing on port ${port}`);
}) 