var mongoose=require('mongoose');
mongoose.connect('mongodb://user:user@ds013956.mlab.com:13956/swifthire');
var Schema=mongoose.Schema;

var jobSchema = new Schema({
company : String,
position : String,
description :String ,
category : String,
duration : String,
location : String,
lurationPerHour : String,
hourlyFee : String,
preferredDate : String,
priferedTime: String,
watingList: String,
pelectdEmployee : String
});

module.exports = mongoose.model('Job', jobSchema);