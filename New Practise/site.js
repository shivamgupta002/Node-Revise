/*
const express = require("express");
const path = require("path");
const app = express();
const pubicPath = path.join(__dirname, "public");

app.use(express.static(pubicPath));
app.listen(5000);
 */

// This can be excess by simply type localhost:5000/contact.html for contact page and index.html page simply access by localhost:5000
// It will public site from public folder

// #########################################################################

// /*
const express = require("express");
const path = require("path");
const pubicPath = path.join(__dirname, "public");

const app = express();
// we can also use _instead of req because there is no use of req
app.get("", (_, resp) => {
  resp.sendFile(`${pubicPath}/index.html`);
});

app.get("/contact", (req, resp) => {
  resp.sendFile(`${pubicPath}/contact.html`);
});
//************************* for dynamic site**************
//Must be created in views folder

app.set("view engine", "ejs");

app.get("/profile", (req, resp) => {
  const user = {
    name: "shivam",
    email: "shivam@gmail.com",
    country: "india",
    skill: ["html", "css", "js", "php"]
  };
  resp.render("profile", { user });
});

app.get('/login',(req,resp)=>{
  
  let name='Shivam';
  resp.render('login',{name});
})
//*************************************************

// If you entered wrong response then this page show
app.get("*", (req, resp) => {
  resp.sendFile(`${pubicPath}/noPage.html`);
});
app.listen(5000);

// */

// This can be excess by simply type localhost:5000/contact for contact page and index.html page simply access by localhost:5000
// It will public site from public folder
