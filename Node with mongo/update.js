const dbConnect = require("./mongodb");

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: "Y51a" },
    {
      $set: { name: "51a" },
    }
  );
  console.log(result);
};

updateData();
