'use strict';

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const { exec } = require('child_process');

var app = (0, _express2.default)();

app.use((0, _compression2.default)());
app.use((0, _morgan2.default)('tiny'));
app.use(_express2.default.static(_path2.default.join(__dirname, '../static')));
app.use((0, _serveFavicon2.default)(_path2.default.join(__dirname, '../static/favicon.ico')));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

var port = process.env.PORT || 3333;

app.listen(port, function () {
  console.log('info', '[EXPRESS] - listening port: %d', port);
});

_mongoose2.default.connect('mongodb://localhost:27017/mydb');
var vpc = new _mongoose2.default.Schema({
  name: { type: String, default: '' },
  description: { type: String, default: '' }
});
var MyVpc = _mongoose2.default.model('vpc', vpc);

app.get('/vpc', function (req, res) {
  MyVpc.find({}, function (err, docs) {
    console.log(docs);
    res.send(docs);
  });
});

app.post('/vpc', function (req, res) {
  MyVpc.update({ name: req.body.name }, { name: req.body.name, description: req.body.description }, { upsert: true }, function (err) {
    if (err) return handleError(err);
    console.log("saved something to db");
    res.send("saved something to db");
  });
});

app.get('*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '../static/index.html'));
});

module.exports = app;