var express = require("express");
var router = express.Router();

var burger = require('../models/burgers.js');

router.get('/', function(req,res){
    burger.all(function(data){
        burgerObject = {
            burger: data
        }
        console.log(burgerObject);
        res.render('index, burgerObject');
    });
});

router.post("/api/burgers", function(req, res){
    burger.create([
        "burger", "type"
    ], [
        req.body.burger, req.body.sleepy
    ], function(result){
        res.json({ id: result.insertId });
    });
});

router.delete('/api/burger/:id', function(req, res){
    var conidtion = 'id' = + req.params.id;

    burger.delete(condition, function(result){
        if (result.affectedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

module.exports = router;