require("dotenv").config();
let express = require('express');
let app = express();
let dj = express.static(__dirname+ "/public")
app.use("/public",dj)
app.use((req,res,next)=>{
  let method = req.method;
  let route = req.path;
  let ip = req.ip;
  console.log(`${method} ${route} - ${ip}`);
  next();
})
app.get("/", function(req, res) {
    res.sendFile(__dirname +  "/views/index.html");
  });
app.get("/json",function(req,res){
  const vj = process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json";
  res.json({message:vj});
  console.log("vijay kumar");

})

































 module.exports = app;
