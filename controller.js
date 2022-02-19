const userModel = require("./db");

module.exports.createUser = async function (req, res) {
  let user = await userModel.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send({ message: "That user already exist" });
  } else {
    user = new userModel({
      email: req.body.email,
      password: req.body.password,
    });
    console.log("User added success");
    res.json("User added success");
  }
  await user.save();
};

module.exports.login = async function (req, res) {
  let user = await userModel.findOne({ email: req.body.email });
  if (user) {
    console.log(user);
    if (req.body.password == user.password) {
      res.json("Login Success");
    } else {
      res.json("Password is incorrect");
    }
  } else {
    // console.log("user does not exist")
    res.json("User doesn't exist");
  }
};
