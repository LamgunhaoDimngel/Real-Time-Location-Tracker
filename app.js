const express = require("express");
const app = express();

const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const server = http.createServer(app);

app.set("view engine","ejs");
// app.set(express.static(path.join(__dirname,"public")));

const io = socketio(server);

io.on("connection",function(socket){
    socket.on("send-location",function(data){
        io.emit("receive-location",{id:socket.id,...data});
    })

    socket.on("disconnect",function(){
        io.emit("user-disconnected",socket.id);
    })
    console.log("connection");
    
});

app.get("/",function(req,res){
    res.render("index");
});

server.listen("4000");