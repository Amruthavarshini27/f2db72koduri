var laptop = require('../models/laptop');

// List of all laptop 
exports.laptop_list = function (req, res) {
    res.send('NOT IMPLEMENTED: laptop list');
};

// List of all laptop 
exports.laptop_list = async function (req, res) {
    try {
        thelaptops = await laptop.find();
        res.send(thelaptops);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific laptop. 
exports.laptop_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: laptop detail: ' + req.params.id);
};

// for a specific laptop. 
exports.laptop_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await laptop.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// List of all laptop 
// exports.laptop_detail = async function(req, res) { 
//     try{ 
//         thelaptops = await laptop.find(); 
//         res.send(thelaptops); 
//     } 
//     catch(err){ 
//         res.status(500); 
//         res.send(`{"error": ${err}}`); 
//     }   
// };

// Handle laptop create on POST. 
exports.laptop_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: laptop create POST');
};

// List of all laptop 
exports.laptop_create_post = async function (req, res) {
    try {
        thelaptops = await laptop.find();
        res.send(thelaptops);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle laptop delete form on DELETE. 
exports.laptop_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: laptop delete DELETE ' + req.params.id);
};

// List of all laptop 
exports.laptop_delete = async function (req, res) {
    try {
        thelaptops = await laptop.find();
        res.send(thelaptops);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle laptop update form on PUT. 
// exports.laptop_update_put = function (req, res) {
//     res.send('NOT IMPLEMENTED: laptop update PUT' + req.params.id);
// };

// List of all laptop 
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
exports.laptop_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await laptop.findById(req.params.id)
        // Do updates of properties 

        if (req.body.laptop_name)toUpdate.laptop_name = req.body.laptop_name;
        if (req.body.laptop_color) toUpdate.laptop_color = req.body.laptop_color;
        if (req.body.laptop_price) toUpdate.laptop_price = req.body.laptop_price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};


// VIEWS 
// Handle a show all view 
exports.laptop_view_all_Page = async function (req, res) {
    try {
        thelaptops = await laptop.find();
        res.render('laptops', {
            title: 'laptop Search Results',
            results: thelaptops
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle laptop create on POST. 
exports.laptop_create_post = async function (req, res) {
    console.log(req.body)
    let document = new laptop();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"laptop_type":"goat", "cost":12, "size":"large"} 
    document.laptop_name = req.body.laptop_name;
    document.laptop_color = req.body.laptop_color;
    document.laptop_price = req.body.laptop_price;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};