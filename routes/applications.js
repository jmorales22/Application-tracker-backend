const express = require("express");
const router = express.Router();
const Apps = require("../Models/apps.js");

router.get("/:user_id?", async function (req, res) {
  const { user_id } = req.params;

  let data = await Apps.getAllApplications(user_id);
  res.json(data);
});

router.get("/all/:user_id?", async function (req, res) {
  const { user_id } = req.params;
  let data = await Apps.getAllData(user_id);
  res.json(data);
});

module.exports = router;
