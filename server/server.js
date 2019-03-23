import favicon from 'serve-favicon';
import morgan from 'morgan';
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.use(compression());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log('info', '[EXPRESS] - listening port: %d', port);
});


app.use('/vpcs', require('./vpcs'));
app.use('/subnets', require('./subnets'));

if (process.env.NOFE) {
  console.log("Starting server without frontend");
} else {
  app.use(express.static(path.join(__dirname, '../static')));
  app.use(favicon(path.join(__dirname, '../static/favicon.ico')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../static/index.html'));
  });
}

module.exports = app;
