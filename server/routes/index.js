var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var router = express.Router();

const URL = 'mongodb://username:password@mongo/test?authSource=admin';
const client = new MongoClient(URL);

(async() => {
  try {
    await client.connect();
    console.log('Succesfully connected to mongo');
  } catch (e) {
    console.error(e);
  }
})();

const db = client.db();
const col = db.collection('test-collection');
var id = new ObjectId();
col.insertOne({_id:id,n:0});

/* GET home page. */
router.get('/', async function(req, res, next) {
  col.updateOne({_id:id},{$inc:{n:1}});
  result = await col.findOne({_id:id});
  console.log(result);
  res.render('index', { title: 'Express' +result['n'] });
});

module.exports = router;
