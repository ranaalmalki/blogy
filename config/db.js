// Creating a base name for the MongoDB
const mongooseBaseName = 'blogy';
// Create the MongoDB URI for Development and Test
const database = {
  development: `mongodb://localhost/${mongooseBaseName}-development`,
  test: `mongodb://localhost/${mongooseBaseName}-test`,
}

//identify if development environment is Test or Development 
//select DB based on wether a test file was executed before server
const localDB =process.env.TESTENV ? database.test:database.development;


//Enviroment varible MONGODB_URL will be available in 
//Heroku production enviroment , otherwise use Test or Development 
const currentDB = process.env.MONGODB_URL||localDB;






//Export the appropriate database based on the current enviroment 
module.exports=currentDB; 