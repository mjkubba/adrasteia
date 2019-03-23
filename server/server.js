import favicon from 'serve-favicon';
import morgan from 'morgan';
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.use(compression());
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '../static')));
app.use(favicon(path.join(__dirname, '../static/favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log('info', '[EXPRESS] - listening port: %d', port);
});


app.use('/vpc', require('./vpc'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../static/index.html'));
});

module.exports = app;
