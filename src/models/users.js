const mongodb = require("mongodb");
const { route } = require("../routes/users");

const userSchema = mongodb.Schema({
    name:{
        type:String,
    required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})