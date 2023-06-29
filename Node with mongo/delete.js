const dbConnect = require("./mongodb");

const deleteData = async () => {
  let data = await dbConnect();
  let result = await data.deleteMany({ name: "max6" });
  console.warn(result);
  if (result.acknowledgment) {
    console.log("Record deleted");
  }
};
deleteData();
