var User = require('../model/user');
var express=require('express');
let router=express.Router();


router.get('/',function(req, res) {
  
  User.find(function(err, user) {
    if (err) {
      return res.send(err);
    }

    res.json(user);
  });
});

router.get('/user/:id',function(req,res,next){
  console.log('af'+req.params.id);
   User.findOne({_id:req.params.id}, function(err,user) {
    if (err) {
      return res.send(err);
    }

    res.json(user);
  });
});

router.delete('/user/:id',function(req,res,next){
   User.remove({
    _id: req.params.id
  }, function(err, user) {
    if (err) {
      return res.send(err);
    }

    res.json({ message: 'Successfully deleted' });
  });
});

router.route('/').post(function(req, res) {
  var user = new User(req.body);

  user.save(function(err) {
    if (err) {
      return res.send(err);
    }

    res.send({ message: 'user Added' });
  });
});
router.put('/user/:id', (req, res) => {
  User.findOne({ _id: req.params.id }, function(err, user) {
    if (err) {
      return res.send(err);
    }

    for (prop in req.body) {
      user[prop] = req.body[prop];
    }


    user.save(function(err) {
      if (err) {
        return res.send(err);
      }

      res.json({ message: 'user updated!' });
    });
  });
});

module.exports=router;