"use strict";

var _serveFavicon = _interopRequireDefault(require("serve-favicon"));

var _morgan = _interopRequireDefault(require("morgan"));

var _express = _interopRequireDefault(require("express"));

var _compression = _interopRequireDefault(require("compression"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use((0, _compression.default)());
app.use((0, _morgan.default)('tiny'));
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
var port = process.env.PORT || 3333;
app.listen(port, function () {
  console.log('info', '[EXPRESS] - listening port: %d', port);
});
app.use('/vpcs', require('./controllers/vpcs'));
app.use('/subnets', require('./controllers/subnets'));

if (process.env.NOFE) {
  console.log("Starting server without frontend");
} else {
  app.use(_express.default.static(_path.default.join(__dirname, '../static')));
  app.use((0, _serveFavicon.default)(_path.default.join(__dirname, '../static/favicon.ico')));
  app.get('*', function (req, res) {
    res.sendFile(_path.default.join(__dirname, '../static/index.html'));
  });
}

module.exports = app;