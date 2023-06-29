const MongoClient = require("mongodb").MongoClient;
// const { MongoClient } = require('mongodb');
//we can use both but this is recommended(modern javascript)

const url = "mongodb://localhost:27017";
const database = "e-comm";
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection("product");
  let response = await collection.find({}).toArray();
  console.log(response);
}

getData();
