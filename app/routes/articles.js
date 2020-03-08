// Require necessary NPM packages
const express = require('express');

// Require Mongoose Model for Article
const Article = require('../models/article');

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

/**
 * Action:        INDEX
 * Method:        GET
 * URI:           /api/articles
 * Description:   Get All Articles
 */
router.get('/api/articles', (req, res) => {
  Article.find()
  // Return all Articles as an Array
  .then((allArticles) => {
    res.status(200).json({ articles: allArticles });
  })
  // Catch any errors that might occur
  .catch((error) => {
    res.status(500).json({ error: error });
  });
});
/**
 * Action:....SHOW
 * Method:...GET
 * URI:....../api/atricles//5d664b8b4f5092aba18e9
 * Description:..GET An Articles by Article ID
 */


 /**
  * Action:.......CREATE
  * MEthod:..........POST
  * URI:........./api/articles
  * Description:..create a new Article
  */

   /**
  * Action:.......UPDATE
  * MEthod:..........PATCH
  * URI:........./api/articles/5d664b8b4f5092aba18e9
  * Description:..update An Article by Article ID
  */

     /**
  * Action:.......DESTROY
  * MEthod:..........DELETE
  * URI:........./api/articles/5d664b8b4f5092aba18e9
  * Description:..Delete An article by Article ID
  */

// Export the Router so we can use it in the server.js file
module.exports = router;










/*
function find(cbSuccess, cbError)
  if true
    cbSuccess()
  else
    cbError
find( ()=>{ok}, ()=>{fail} )
find.then( ()=>{ok} ).catch( ()=>{fail} )
function ok
  return ok
function fail
  return fail
find.then(ok).catch(fail)
*/