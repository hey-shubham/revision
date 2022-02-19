const express = require('express')
const userRouter = express.Router();

// const userModel = require("./db");
const {createUser,login,forgetPass,deleteUser} = require("./controller")

userRouter.post("/createUser",createUser)
userRouter.post("/login",login)
userRouter.post("/forget",forgetPass)
userRouter.post("/delete",deleteUser)

module.exports = userRouter;