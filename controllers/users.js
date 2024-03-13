const User = require("../models/users");
const uuid = require("uuid");
// Route   /add-users
// Method GET
// Descr Get add-users page
const getAddUsersPage = (req, res) => {
  res.render("add-users", {
    title: "Add new user",
  });
};

// Route   /users
// Method POST
// Descr POST add new users page
const addNewUsers = (req, res) => {
  const uid = uuid.v4();
  const users = new User(uid, req.body.username, req.body.age);
  users.save();
  res.redirect("/");
};


module.exports = {
  getAddUsersPage,
  addNewUsers,
};
