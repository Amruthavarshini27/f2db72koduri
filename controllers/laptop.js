var Laptop = require('../models/laptop'); 
 
// List of all laptops 
exports.laptop_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Laptop list'); 
}; 
 
// for a specific laptop. 
exports.laptop_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Laptop detail: ' + req.params.id); 
}; 
 
// Handle laptop create on POST. 
exports.laptop_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Laptop create POST'); 
}; 
 
// Handle laptop delete form on DELETE. 
exports.laptop_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Laptop delete DELETE ' + req.params.id); 
}; 
 
// Handle laptop update form on PUT. 
exports.laptop_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Laptop update PUT' + req.params.id); 
}; 

// List of all Costumes 
exports.laptop_list = async function(req, res) { 
    try{ 
        thelaptops = await Laptop.find(); 
        res.send(theLaptops); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// VIEWS 
// Handle a show all view 
exports.laptop_view_all_Page = async function(req, res) { 
    try{ 
        theLaptops = await Laptop.find(); 
        res.render('Laptop', { title: 'Laptop Search Results', results: theLaptops }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume create on POST. 
exports.laptop_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Laptop(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.laptop_name = req.body.laptop_name; 
    document.laptop_color = req.body.laptop_color; 
    document.laptop_price = req.body.laptop_price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};