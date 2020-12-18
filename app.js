var express = require("express");
var app = express();
var PORT = process.env.PORT || 5000;

app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));

app.get("/",function(req,res){
    res.render("landing");
});

app.get("/login",function(req,res){
    res.render("login");
});

app.get("/register",function(req,res){
    res.render("register");
});

app.get("/intro",function(req,res){
    res.render("intro");
});

app.get("/events", function(req,res){
    res.render("events");
});

app.get("/viewevent", function(req,res){
    res.render("event");
});

app.get("/viewprofile", function(req,res){
    res.render("profile");
});

app.listen(PORT,function(){
    console.log("Alumni Portal Running!");
});