require('dotenv').config();

const express = require("express");

const bodyParser= require("body-parser");

const expressLayouts = require("express-ejs-layouts");

const  flash =require("connect-flash");

const session = require("express-session");

const fileUpload = require("express-fileupload")

const cookieParser = require("cookie-parser");

const app =express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.use(expressLayouts);

app.use(flash());

app.use(fileUpload());

app.use(cookieParser("CookingBlogSecure"));

app.use(session({
    secret:"CookingBlogSecerts",
    resave:true,
    saveUninitialized:true
}))

app.set("view engine" ,"ejs");

app.set("layout" ,"./layouts/main");

const routes = require ("./server/routes/receipeRoute.js") ;

app.use("/",routes);





app.listen(3000, (req,res) => {
    console.log("Server is running on port 3000");
})