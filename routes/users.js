const express = require("express");
const router = express.Router();
const { getAddUsersPage, addNewUsers } = require("../controllers/users");
router.get("/add-users", getAddUsersPage);
router.post("/users", addNewUsers);
exports.router = router;
