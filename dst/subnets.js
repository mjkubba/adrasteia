"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable newline-per-chained-call, new-cap, no-param-reassign, consistent-return, no-underscore-dangle, array-callback-return, max-len */
var router = module.exports = _express.default.Router();

_mongoose.default.connect(process.env.MONGO_DB, {
  useNewUrlParser: true
});

var subnet = new _mongoose.default.Schema({
  subnetName: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  vpcName: {
    type: String,
    default: ''
  }
});

var MySubnet = _mongoose.default.model('subnet', subnet);

router.get('/:vpcName', function (req, res) {
  MySubnet.find({
    vpcName: req.params.vpcName
  }, function (err, docs) {
    if (err) {
      console.log("Error: " + err);
      res.send(err);
    } else {
      res.send(docs);
    }
  });
});
router.get('/', function (req, res) {
  MySubnet.find({}, function (err, docs) {
    if (err) {
      console.log("Error: " + err);
      res.send(err);
    } else {
      res.send(docs);
    }
  });
});
router.post('/', function (req, res) {
  MySubnet.update({
    subnetName: req.body.subnetName
  }, {
    vpcName: req.body.vpcName,
    description: req.body.description,
    subnetName: req.body.subnetName
  }, {
    upsert: true
  }, function (err) {
    if (err) {
      console.log("Error: " + err);
      res.send(err);
    } else {
      res.send("saved to db");
    }
  });
});