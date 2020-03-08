// Require necessary NPM packages
const express = require("express");

// Require Mongoose Model for Article
const Article = require("../models/article");

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

/**
 * Action:        INDEX
 * Method:        GET
 * URI:           /api/articles
 * Description:   Get All Articles
 */
router.get("/api/articles", (req, res) => {
  Article.find()
    // Return all Articles as an Array
    .then(allArticles => {
      res.status(200).json({ articles: allArticles });
    })
    // Catch any errors that might occur
    .catch(error => {
      res.status(500).json({ error: error });
    });
});
/**
 * Action:....SHOW
 * Method:...GET
 * URI:....../api/atricles//5d664b8b4f5092aba18e9
 * Description:..GET An Articles by Article ID
 */
router.get("/api/articles/:id", (req, res) => {
  Article.findById(req.params.id)
    .then(article => {
      if (article) {
        res.status(200).json({ article: article });
      } else {
        //if we couldnt find a doucment with the matching ID
        res.status(404).json({
          error: {
            name: "DocumentNotFoundError",
            message: "The provied ID Dosent match any documents"
          }
        });
      }
    })
    //Catch any eror that might occur
    .catch(error => {
      res.status(404).json({ error: { error } });
    });
});

/**
 * Action:.......CREATE
 * MEthod:..........POST
 * URI:........./api/articles
 * Description:..create a new Article
 */
router.post("/api/articles", (req, res) => {
  Article.create(req.body.article)
    // On a successful `create` action, respond with 201
    // HTTP status and the content of the new article.
    .then(newArticle => {
      res.status(201).json({ article: newArticle });
    })
    // Catch any errors that might occur
    .catch(error => {
      res.status(500).json({ error: error });
    });
});

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
