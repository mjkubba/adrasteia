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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

app.use('/vpc', require('./vpc'));

app.get('*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '../static/index.html'));
});

module.exports = app;