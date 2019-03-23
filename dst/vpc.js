'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable newline-per-chained-call, new-cap, no-param-reassign, consistent-return, no-underscore-dangle, array-callback-return, max-len */
var router = module.exports = _express2.default.Router();

_mongoose2.default.connect('mongodb://localhost:27017/mydb');
var vpc = new _mongoose2.default.Schema({
  name: { type: String, default: '' },
  description: { type: String, default: '' }
});
var MyVpc = _mongoose2.default.model('vpc', vpc);

router.get('/', function (req, res) {
  MyVpc.find({}, function (err, docs) {
    console.log(docs);
    res.send(docs);
  });
});

router.post('/', function (req, res) {
  MyVpc.update({ name: req.body.name }, { name: req.body.name, description: req.body.description }, { upsert: true }, function (err) {
    if (err) return handleError(err);
    console.log("saved something to db");
    res.send("saved something to db");
  });
});