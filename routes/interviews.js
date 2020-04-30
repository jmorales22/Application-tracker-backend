var express = require("express");
var router = express.Router();

router.get("/", async function (req, res, next) {
  const all = await Interviews.getAllInterviews();
  res.json(all);
});

module.exports = router;
