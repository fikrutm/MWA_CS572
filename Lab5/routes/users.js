var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var data = {ths: 'data'}
// Get All data
router.get('/users', function(req, res, next){
    
           
              res.json(data);
    });

    router.get('/promise', function(req,res,next){
        res.send('promise');
    });

// fetch('http://jsonplaceholder.typicode.com/users/')
//         .then(function (res) {
//                 return res.text();
//         }).then(function (body) {
//                 console.log(body);
//         }).catch(console.log('rejected'));

module.exports =router;