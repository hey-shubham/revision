const express = require("express");
const path = require("path");
const port = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const db = [];
app.get("/", (req, res) => {
  res.render("home", {
    title: "test",
    data: db,
  });
});
app.post("/form", (req, res) => {
  console.log(req.body);
  db.push(req.body);
  // return res.redirect("/come") // redirecting browser.
  return res.redirect("/");
});
app.get("/come", (req, res) => {
  // not post method as controller is provided path to show
  console.log(req.body); // empty as nothing is coming from browser to this path.
  res.send(db);
});
app.get("/delete/:name", (req, res) => {
  console.log(req.params);
  let remName = req.params.name;
  let remIdx = db.findIndex((obj) => {
    return obj.name == remName;
  });
  if (remIdx != -1) {
    db.splice(remIdx, 1);
    }
    return 
});
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }
  console.log("Server is up and running on port", port);
});
