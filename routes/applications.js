var express = require("express");
var router = express.Router();
const Apps = require('../Models/apps.js');

router.get("/:user_id", async function (req, res) {
  const { user_id } = req.params;
    let data = await Apps.getAllApplications(user_id);
    console.log("data", data)
    res.json(data);
});

router.get('/', function (req, res, next) {
  res.send('Welcome to API').status(200);
});

module.exports = router;
