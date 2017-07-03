var express = require('express');
var router = express.Router();
var fs = require('fs');

router.post('/newsletter', function (req, res, next) {
    req.assert('email', "email is required.").notEmpty();
    var errors = req.validationErrors();
    if (!errors) {
        var data = req.body;
        var textdata = "";
        for (var index in data) {
            textdata += index + ": " + data[index] + "\n";
        }
        textdata += "\n\n";
        fs.appendFile('../newsletter.txt', textdata, function (err) {
            next(err);
        });
        res.redirect('/thankyou');
    }

    else {

        
        res.render("index",{errmessage :'Invalid input fields!',csrfTokens: req.csrfToken()});
    }
});

module.exports = router;