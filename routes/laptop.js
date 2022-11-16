var express = require('express');
const laptop_controlers= require('../controllers/laptop');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('laptop', {title:'Search Results laptop'});
// });
/* GET detail laptop page */ 
router.get('/detail', laptop_controlers.laptop_view_one_Page);
/* GET laptop */ 
router.get('/', laptop_controlers.laptop_view_all_Page );
/* GET create laptop page */ 
router.get('/create', laptop_controlers.laptop_create_Page); 
/* GET create update page */ 
router.get('/update', laptop_controlers.laptop_update_Page); 
/* GET delete costume page */ 
router.get('/delete', laptop_controlers.laptop_delete_Page); 
// GET request for one laptop. 
router.get('/laptops/:id', laptop_controlers.laptop_detail); 
module.exports = router;
 

 
