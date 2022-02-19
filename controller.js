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

module.exports.forgetPass = async function (req, res) {
    // console.log();
    console.log(req);
    let reso = await userModel.updateOne({ email: req.body.email }, { password: req.body.password })
    if (reso) {
        res.json("Update Success");
    } else {
        res.json("Not updated");
    }
}
module.exports.deleteUser = async function (req, res) {
    let reso = await userModel.deleteOne({ email: req.body.email })
    if (reso) {
        res.json("Delete Success");
    } else {
        res.json("Not Deleted");
    }
    
}