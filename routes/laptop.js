// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('laptop', { title: 'Search Results laptop' });
// });

// module.exports = router;

var express = require('express'); 
const laptop_controlers= require('../controllers/laptop'); 
var router = express.Router(); 
 
/* GET laptops*/ 
router.get('/', laptop_controlers.laptop_view_all_Page ); 
module.exports = router; 

// GET request for one laptop. 
router.get('/laptops/:id', laptop_controlers.laptop_detail); 