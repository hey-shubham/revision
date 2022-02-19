const express = require('express')
const userRouter = express.Router();

// const userModel = require("./db");
const {createUser,login} = require("./controller")

userRouter.post("/createUser",createUser)
userRouter.post("/login",login)

module.exports = userRouter;