const express = require("express");
const app = express();

app.get("", (req, resp) => {
  resp.send(`<h1>Hello World</h1>`);
});
app.get("/about", (req, resp) => {
  resp.send(`<h2>About Page</h2>`);
});
// give name in url like-->page-name?name=shivam
// example--->localhost:5000/contact?name=shivam_gupta
app.get('/contact',(req,resp)=>{
  resp.send(`<h3>Welcome ${req.query.name}</h3>`)
})
app.listen(5000)