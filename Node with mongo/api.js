const express = require("express");
const { Long } = require("mongodb");
const dbConnect = require("./mongodb");
const app = express();

//Read
// app.get("/", async (req, resp) => {
//   let data = await dbConnect();
//   data = await data.find().toArray();
//   resp.send(data);
// });

app.use(express.json());
//Insert

// app.post("/", async (req, resp) => {
//   let data = await dbConnect();
//   result = await data.insertOne(req.body);
//   resp.send(result);
// });

// UPDATE

// app.put("/", async (req, resp) => {
//   let data = await dbConnect();
//   let result = data.updateOne({ name: "51a" }, { $set: req.body });
//   resp.send({ result: "update" });
// });

//Delete

// app.delete("/:id", async (req, resp) => {
//   console.log(req.params.id);
//   const data = await dbConnect();
//   const result = data.deleteOne({
//     _id: new MongoDBNamespace.ObjectId(req.params.id),
//   });
//   resp.send(result);
// });

app.listen(5000);
