// const express = require("express");
// const app = express();
// const reqFilter = require("./middleware");
// // or,
// /*
// const reqFilter = (req, resp, next) => {
//   if (!req.query.age) {
//     resp.send("Please provide your age");
//   } else if (req.query.age < 18) {
//     resp.send("You are under age");
//   } else {
//     next();
//   }
// };
// */

// // app.use(reqFilter);
// // //use when we want all site will be blocked
// app.get("", (req, resp) => {
//   resp.send("Welcome to my site");
// });
// app.get("/about", reqFilter, (req, resp) => {
//   // // use when only single or selected site want to block(on second parameter )
//   resp.send("About Page");
// });
// app.listen(5000);

// *************************************************************************
//                       Second method for secure site

const express = require("express");
const app = express();
const reqFilter = require("./middleware");
const route = express.Router();

route.use(reqFilter);

//Route is used because to increase productivity

app.get("/", (req, resp) => {
  resp.send("Hello World");
});

// In this route and contact page are secure

route.get("/about", (req, resp) => {
  resp.send("About Page");
});

route.get("/contact", (req, resp) => {
  resp.send("Contact US");
});

app.get("/help", (req, resp) => {
  resp.send("How may i help you");
});

app.use("/", route);
app.listen(5000);
