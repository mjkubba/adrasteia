/* eslint-disable newline-per-chained-call, new-cap, no-param-reassign, consistent-return, no-underscore-dangle, array-callback-return, max-len */
import express from 'express';
import mongoose from 'mongoose';

const router = module.exports = express.Router();

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true });
const vpc = new mongoose.Schema({
  vpcName: { type: String, default: '' },
  description: { type: String, default: '' },
  accountNumber: { type: String, default: '' }
});
const MyVpc = mongoose.model('vpc', vpc);


router.get('/:vpcName', (req, res) => {
  MyVpc.find({ vpcName: req.params.vpcName }, function (err, docs) {
    if (err) {
      console.log("Error: " + err);
      res.send(err)
    } else {
      res.send(docs)
    }
  });
});

router.get('/', (req, res) => {
  MyVpc.find({}, function (err, docs) {
    if (err) {
      console.log("Error: " + err);
      res.send(err)
    } else {
      res.send(docs)
    }
  });
});

router.post('/', (req, res) => {
  MyVpc.update({vpcName: req.body.vpcName},{ vpcName: req.body.vpcName, description: req.body.description, accountNumber: req.body.accountNumber }, { upsert : true }, function (err) {
    if (err) {
      console.log("Error: " + err);
      res.send(err)
    } else {
      res.send("saved to db")
    }
  });
});
