const { Router } = require("express");
const { getMainPage, getUserPageId } = require("../controllers/main");
const router = Router();
router.get("/", getMainPage);
router.get("/:uid", getUserPageId);

module.exports = router;
