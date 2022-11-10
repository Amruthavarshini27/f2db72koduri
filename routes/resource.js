var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var laptop_controller = require('../controllers/laptop'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/laptops', laptop_controller.laptop_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/laptops/:id', laptop_controller.laptop_delete); 
 
// PUT request to update Costume. 
router.put('/laptops/:id', laptop_controller.laptop_update_put); 
 
// GET request for one Costume. 
router.get('/laptops/:id', laptop_controller.laptop_detail); 
 
// GET request for list of all Costume items. 
router.get('/laptops', laptop_controller.laptop_list); 
 
module.exports = router; 