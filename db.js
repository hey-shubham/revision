const mongoose = require('mongoose');

const { Schema, model } = require('mongoose');
    (async function () {
        const connection = await mongoose.connect(
            "mongodb+srv://ramsay_11:1234@cluster0.2efly.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
        )
        if (connection) {
            console.log("connected");
        } else {
            console.log("No connection found");
        }
    })();

const loginSchema = Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})
const userModel = model('userModel', loginSchema)
// findById()
// save()
// findOne()
module.exports = userModel


// Two types of function provided by Schema
// pre:- pre function run before the query execute,E.g, if we want to validate if the email is valid email or not we use the pre function.
// post:- post function run after the query execute
