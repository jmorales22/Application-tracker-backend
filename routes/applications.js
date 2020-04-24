var express = require("express");
var router = express.Router();
const Apps = require("../Models/apps.js");

router.get("/:user_id?", async function (req, res) {
  const { user_id } = req.params;
  const data = await Apps.getAllApplications(user_id);
  res.json(data);
});
module.exports = router;
