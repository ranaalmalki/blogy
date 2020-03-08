//Require necassry NPM package
const monoose = require('mongoose');

//Define Article Schema 
const articleSchema = new monoose.Schema({
    title:{type:String,require:true},
    content:String,
    author:{type:String,require:true},
    published:{type:Boolean,default:true},
    publishedOn:{type:Date,default:Date.now},
},{
    timestamps:true,

});

//Comile our Model based on the schema 
const Article = monoose.model('Article',articleSchema);


//Export our model for use 
module.exports =Article;