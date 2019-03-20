import favicon from 'serve-favicon';
import morgan from 'morgan';
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';

// const { exec } = require('child_process');

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

mongoose.connect('mongodb://localhost:27017/mydb');
const vpc = new mongoose.Schema({
  name: { type: String, default: '' },
  description: { type: String, default: '' }
});
const MyVpc = mongoose.model('vpc', vpc);

app.get('/vpc', (req, res) => {
  MyVpc.find({}, function (err, docs) {
    console.log(docs);
    res.send(docs)
  });
});

app.post('/vpc', (req, res) => {
  MyVpc.update({name: req.body.name},{ name: req.body.name, description: req.body.description }, { upsert : true }, function (err) {
    if (err) return handleError(err);
    console.log("saved something to db");
    res.send("saved something to db")
  });
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../static/index.html'));
});

module.exports = app;
