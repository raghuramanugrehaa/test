var chai=require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../app');
chai.use(chaiHttp);
describe ('App',function(){

    it('this is description part',function() {

        chai.request(server)
            .get('/')
            .end(function (err,res) {
                res.should.have.statusCode(200);
            });
    });



});