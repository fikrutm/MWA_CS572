var express = require('express');
var router = express.Router();

var data = {ths: 'data'}
// Get All data
router.get('/users', function(req, res, next){
    
           
              res.json(data);
    });

    router.get('/promise', function(req,res,next){
        res.send('promise');
    });

