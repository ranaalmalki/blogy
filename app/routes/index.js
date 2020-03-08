// Require necessary NPM package 
const express = require('express');

//Instantiate a Router (mini app that only handle routes)
const router =express.Router();

/**
 * Action :..... INDEX
 * Method:.......GET
 * URL: ........./
 * Description: Get the Root Route 
 */
router.get('/',(req,res)=>{
    res.json({
        message:'Welcome ro Blogy'
    });
});
//Export the Router so we can use it in server.js file 
// the old version for the export defalte 
module.exports =router;