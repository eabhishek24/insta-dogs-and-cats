const express = require("express");
const app = express();   
const path = require("path");  // line 1 --> for requiring the path

const port = 8080;

//using ejs
app.use(express.static("public"));
app.set("view engine" , "ejs");
app.set("views",path.join(__dirname,"/views")); //line  2--> for joining with the working views folder

 
app.get("/" , (req,res) => {
    res.render ("home.ejs");  
});


app.get("/ig/:username" , (req , res) => {
    let { username } = req.params; 
    const instaData = require("./data.json");
    let data = instaData[username];
    console.log(data);
    res.render("instagram.ejs" , {data });
});


app.listen(port,() =>{
    console.log(`listening on port ${port}`);
});

