var laptop = require('../models/laptop'); 
 
// List of all laptops 
exports.laptop_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: laptop list'); 
}; 

// List of all laptops 
exports.laptop_list = async function(req, res) { 
    try{ 
        thelaptops = await laptop.find(); 
        res.send(thelaptops); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// // for a specific laptop. 
exports.laptop_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Amoazon detail: ' + req.params.id); 
}; 
// for a specific laptop. 
exports.laptop_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await laptop.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
// List of all laptops 
exports.laptop_detail = async function(req, res) { 
    try{ 
        thelaptops = await laptop.find(); 
        res.send(thelaptops); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle laptop create on POST. 
exports.laptop_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: laptop create POST'); 
}; 
 
// List of all laptops 
exports.laptop_create_post = async function(req, res) { 
    try{ 
        thelaptops = await laptop.find(); 
        res.send(thelaptops); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle laptop delete form on DELETE. 
exports.laptop_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: laptop delete DELETE ' + req.params.id); 
}; 
// Handle laptop delete on DELETE. 
exports.laptop_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await laptop.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// List of all laptops 
// exports.laptop_delete = async function(req, res) { 
//     try{ 
//         thelaptops = await laptop.find(); 
//         res.send(thelaptops); 
//     } 
//     catch(err){ 
//         res.status(500); 
//         res.send(`{"error": ${err}}`); 
//     }   
// }; 
 




// Handle laptop update form on PUT. 
// exports.laptop_update_put = function(req, res) { 
//     res.send('NOT IMPLEMENTED: laptop update PUT' + req.params.id); 
// }; 

// List of all laptops 
// exports.laptop_update_put = async function(req, res) { 
//     try{ 
//         thelaptops = await laptop.find(); 
//         res.send(thelaptops); 
//     } 
//     catch(err){ 
//         res.status(500); 
//         res.send(`{"error": ${err}}`); 
//     }   
// }; 

// Handle laptop update form on PUT. 
exports.laptop_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await laptop.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.laptop_name)toUpdate.laptop_name = req.body.laptop_name; 
        if(req.body.laptop_color) toUpdate.laptop_color = req.body.laptop_color; 
        if(req.body.laptop_price) toUpdate.laptop_price = req.body.laptop_price; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
//Handle building the view for updating a laptop. 
// query provides the id 
exports.laptop_update_Page =  async function(req, res) { 
    console.log("update view for laptop_name "+req.query.id) 
    try{ 
        let result = await laptop.findById(req.query.id) 
        res.render('laptopupdate', { title: 'laptop Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.laptop_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await laptop.findById(req.query.id) 
        res.render('laptopdelete', { title: 'laptop Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a laptop. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.laptop_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('laptopcreate', { title: 'laptop Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.laptop_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await laptop.findById( req.query.id) 
        res.render('laptopdetail',  
{ title: 'laptop Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// VIEWS 
// Handle a show all view 
exports.laptop_view_all_Page = async function(req, res) { 
    try{ 
        thelaptops = await laptop.find(); 
        res.render('laptops', { title: 'laptop Search Results', results: thelaptops }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle laptop create on POST. 
exports.laptop_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new laptop(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"laptop_type":"goat", "laptop_price":12, "size":"large"} 
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
