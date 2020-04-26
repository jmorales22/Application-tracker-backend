var express = require("express");
var router = express.Router();
const addApp = require("../Models/addApp");

router.post("/applicationinfo", async (req, res) => {
  console.log("req body: ", req.body);
  const {
    company_id,
    city,
    position,
    position_description,
    application_date,
    offer_extended,
    make_public,
  } = req.body;
  const response = await addApp.addApplicationData(
    company_id,
    city,
    position,
    position_description,
    application_date,
    offer_extended,
    make_public
  );

  if (response.command === "INSERT" && response.rowCount >= 1) {
    res.sendStatus(200);
  } else {
    res.send("Could not add new comment").status(409);
  }
});

module.exports = router;
