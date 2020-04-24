var express = require("express");
var router = express.Router();
const Interviews = require("../Models/interviews.js");

router.get("/", async function (req, res, next) {
  const all = await Interviews.getAllInterviews();
  res.json(all);
});

module.exports = router;
