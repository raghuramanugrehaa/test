var request = require('request');
var express = require('express')
var port=3000;
var bodyParser = require('body-parser');

var app = express()
console.log("8080");
// get list of contacts from a company
app.get('/', function(req, res) {
    var options = { headers: {
        'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo='
    },
        url: "http://13.126.47.35:8080/AccountRight/48b58bb2-e017-4368-87c4-1fe44c1334ca/Contact/Customer/?format=json"
    }
    request.get(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 200) {

            console.log("success response from Myob: "+body);
            res.status(response.statusCode).send(body);
        } else {
            console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);
        }
    });
})
app.get('/ge',function (req,res) {
    res.status(200).send('kk');
})


app.listen(3000)
module.exports=app;