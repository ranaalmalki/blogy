//Require necessary NPM package 
const express = require('express');
const mongoose =require('mongoose');
const cors = require('cors');

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
const reactPort = 3000;
/***Middleware***/

//Add `bodyParser` middleware which will parse JSON requests 
//into JS objects before they reach the route files
//The method `use` sets up middleware for the Eprees appliction 
app.use(express.json());

//Set CORS headers on response from this API using the `cors` NPM package
app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${reactPort}` }))
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