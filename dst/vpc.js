'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable newline-per-chained-call, new-cap, no-param-reassign, consistent-return, no-underscore-dangle, array-callback-return, max-len */
var router = module.exports = _express2.default.Router();

_mongoose2.default.connect(process.env.MONGO_DB);
var vpc = new _mongoose2.default.Schema({
  vpcName: { type: String, default: '' },
  description: { type: String, default: '' },
  accountNumber: { type: String, default: '' }
});
var MyVpc = _mongoose2.default.model('vpc', vpc);

router.get('/', function (req, res) {
  MyVpc.find({}, function (err, docs) {
    res.send(docs);
  });
});

router.post('/', function (req, res) {
  MyVpc.update({ vpcName: req.body.vpcName }, { vpcName: req.body.vpcName, description: req.body.description, accountNumber: req.body.accountNumber }, { upsert: true }, function (err) {
    if (err) {
      console.log("Error: " + err);
      res.send(err);
    } else {
      res.send("saved to db");
    }
  });
});