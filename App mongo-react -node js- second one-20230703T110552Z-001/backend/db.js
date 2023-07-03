const mongoose = require("mongoose");

mongoose.connect("mongodb://mongodb-ramzi.ramzi.svc:27017/bookstore");


const db = mongoose.connection;

db.on("error", console.error.bind(console, "Database connection failed..."));

db.once("open", ()=> {
    console.log("Database Connected Successfully");
})
