var Job = require('../model/job');
var express=require('express');
let router=express.Router();


router.get('/',function(req, res) {
  
  Job.find(function(err,job) {
    if (err) {
      return res.send(err);
    }

    res.json(job);
  });
});

router.get('/job/:id',function(req,res,next){
  console.log('af'+req.params.id);
   Job.findOne({_id:req.params.id}, function(err,job) {
    if (err) {
      return res.send(err);
    }

    res.json(job);
  });
});

router.delete('/job/:id',function(req,res,next){
   Job.remove({
    _id: req.params.id
  }, function(err, job) {
    if (err) {
      return res.send(err);
    }

    res.json({ message: 'Successfully deleted' });
  });
});

router.route('/').post(function(req, res) {
  var job = new Job(req.body);

  job.save(function(err) {
    if (err) {
      return res.send(err);
    }

    res.send({ message: 'job Added' });
  });
});
router.put('/job/:id', (req, res) => {
  Job.findOne({ _id: req.params.id }, function(err, job) {
    if (err) {
      return res.send(err);
    }

    for (prop in req.body) {
      job[prop] = req.body[prop];
    }


    job.save(function(err) {
      if (err) {
        return res.send(err);
      }

      res.json({ message: 'job updated!' });
    });
  });
});

module.exports=router;