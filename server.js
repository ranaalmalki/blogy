//Require necessary NPM package 
const express = require('express');
const mongoose =require('mongoose');


//Require Route file
const indexRouter =require('./app/routes/index');
const articlesRouter = require('./app/routes/articles');


//Require DB configutstion file
const db =require('./config/db');
// Establish Database Connection 
mongoose.connect(db,{useNewUrlParser:true});
mongoose.connection.once('open',()=>{
    console.log('connected to mongo',db);
});
//Instaniate Express Application Object 
const app =express();


//Define the port for the API to run on 
const port= process.env.PORT || 5000;

/***Routes***/

//Mount importes Routers 
app.use(indexRouter);
app.use(articlesRouter);

//Start the server to listen to the requests on a given port 
app.listen(port,()=>{
    console.log(`blogy is listeing on port ${port}`);
}) 
/*
  C.U.R.D - Table
  Create          CREATE
  Read
    Read All      INDEX
    Read By ID    SHOW
  Update          UPDATE
  Delete          DESTROY
*/ 