/* eslint-disable newline-per-chained-call, new-cap, no-param-reassign, consistent-return, no-underscore-dangle, array-callback-return, max-len */
import express from 'express';
import mongoose from 'mongoose';

const router = module.exports = express.Router();


mongoose.connect('mongodb://localhost:27017/mydb');
const vpc = new mongoose.Schema({
  name: { type: String, default: '' },
  description: { type: String, default: '' }
});
const MyVpc = mongoose.model('vpc', vpc);


router.get('/', (req, res) => {
  MyVpc.find({}, function (err, docs) {
    console.log(docs);
    res.send(docs)
  });
});

router.post('/', (req, res) => {
  MyVpc.update({name: req.body.name},{ name: req.body.name, description: req.body.description }, { upsert : true }, function (err) {
    if (err) return handleError(err);
    console.log("saved something to db");
    res.send("saved something to db")
  });
});
