const dbConnect=require('./mongodb')
// handle by promise
/*
dbConnect().then((resp) => {
  resp.find().toArray().then((data) => {
    console.log(data);
  });
});
*/
// Handle by async await
// /*
const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
};
main();
// */
