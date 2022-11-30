var express = require('express');
const laptop_controlers= require('../controllers/laptop');
var router = express.Router();

// A little function to check if we have an authorized user and continue on or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('laptop', {title:'Search Results laptop'});
// });
/* GET detail laptop page */ 
router.get('/detail', laptop_controlers.laptop_view_one_Page);
/* GET laptop */ 
router.get('/', laptop_controlers.laptop_view_all_Page );
/* GET create laptop page */ 
router.get('/create', secured, laptop_controlers.laptop_create_Page); 
/* GET update laptop page */ 
router.get('/update', secured, laptop_controlers.laptop_update_Page); 
/* GET delete laptop page */ 
router.get('/delete', secured, laptop_controlers.laptop_delete_Page); 
// GET request for one laptop. 
router.get('/laptops/:id', laptop_controlers.laptop_detail); 
module.exports = router;
 

 
