const rx = require('@reactivex/rxjs');
var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var promise = fetch('http://jsonplaceholder.typicode.com/users/');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/promise', function (req, res, next) {

  promise.then(data => data.json())
    //.then(data => res.send(data))
    .then(data=>{res.render('users',{users: data})})
    .catch((err) => { console.log(err) });
});

router.get('/observable', function (req, res, next) {
  var response = rx.Observable.fromPromise(promise);
  response.map((data) => data.json()
    .subscribe((data) => res.send(data)));
  //res.send('observabele');
});

router.get('/asyncawait', function (req, res, next) {
asyncAwait(req);
//   res.send('from syncawait');
});

async function asyncAwait(req) {
  try {
    let results = await promise;
    result.then(data => data.json())
      .then(data => res.send(data))
      .catch((err) => { console.log(err) });
  } catch (err) {
    console.log(Error.message);

  }

}

module.exports = router;
