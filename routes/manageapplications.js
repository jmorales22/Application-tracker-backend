var express = require("express");
var router = express.Router();
const AppInterviews = require('../Models/appInterview.js');

router.get("/:user_id?", async function (req, res) {
  const { user_id } = req.params;
    let data = await AppInterviews.getAppsInterviews(user_id);
    res.json(data);
});

module.exports = router;