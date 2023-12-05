const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000 ;
///.use
app.use(express.urlencoded({extended: true}));
// const User = require("./models/CustomerSchema");
app.set("view engine", "ejs");
app.use(express.static("public"))
// var moment = require("moment");//format date
// moment().format();
//delete
var methodOverride = require("method-override");
app.use(methodOverride("_method"));

//route
const allRoutes = require("./routes/allRoutes");
const addUserRoute = require("./routes/addUser");
app.use(allRoutes);
app.use( "/user/add.html",addUserRoute);
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//to autorefresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
//
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//get

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
mongoose
.connect("mongodb+srv://sohaibmagrabi:YcXsl0wpmvkWVI8J@cluster0.vasibxt.mongodb.net/all-data?retryWrites=true&w=majority")
.then(() => {
    app.listen(port, () => {
       console.log(`http://localhost:${port}`);
    });
})
.catch((err) => {console.log(err);
});