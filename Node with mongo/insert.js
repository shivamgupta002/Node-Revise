const dbConnect = require("./mongodb");
const insertData = async () => {
  const db = await dbConnect();
  
//   const result = await db.insertOne
 //it insert only one element
  const result = await db.insertMany([
    {
      name: "max5",
      brand: "Micromax",
      prize: 340,
      category: "mobile",
    },
    {
      name: "max6",
      brand: "Micromax",
      prize: 460,
      category: "mobile",
    },
  ]);
};
insertData();
