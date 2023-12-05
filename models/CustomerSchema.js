
const mongoose = require("mongoose");
const  Schema =mongoose.Schema;

//define the schema(structura of the article)
const userSchema = new Schema ({
    firstName : String,
    lastName : String,
    email: String,
    phoneNumber : Number,
    age : Number,
    country : String,
    gender: String,

},{timestamps: true});
// create a model based on that schema
const User = mongoose.model("Customer" ,userSchema);

//3.export the model
module.exports = User

//4. export the schema