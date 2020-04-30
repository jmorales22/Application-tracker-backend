var express = require("express");
var router = express.Router();
const Company = require("../Models/company.js");
const Interviews = require("../Models/interviews.js");

router.get("/", async function (req, res, next) {
  const all = await Company.getAllCompanies();
  res.json(all);
});

router.get("/:id?", async function (req, res) {
  const { id } = req.params;

  let data = await Interviews.getCompanyInterviews(id);
  res.json(data);
});

module.exports = router;
