var express = require("express");
var router = express.Router();

router.get("/:application_id?", async function (req, res, next) {
  const { application_id } = req.params;
  
  let data = await Interviews.getInterviews(application_id);
  res.json(data);
});

module.exports = router;
