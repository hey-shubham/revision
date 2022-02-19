const express = require("express");
const userRouter = require("./router.js")

// console.log(userModel)
const app = express()
app.use(express.json())

app.use(userRouter)

app.listen(5000, () => {
    console.log("Connected to server 5000");
})