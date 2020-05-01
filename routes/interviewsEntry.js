const express = require("express");
const router = express.Router();
const addInterviewInfo = require("../Models/interviewsEntry");

router.post("/", async (req, res) => {
  const {
    user_id,
    application_id,
    company_id,
    round,
    interview_type,
    interview_date,
    interview_rating,
    interviewer,
    follow_up_person,
    follow_up_phone,
    follow_up_email,
    whiteboarding,
    code_challenge,
    comments,
  } = req.body;

  const response = await addInterviewInfo.addInterviewInfo(
    user_id,
    application_id,
    company_id,
    round,
    interview_type,
    interview_date,
    interview_rating,
    interviewer,
    follow_up_person,
    follow_up_phone,
    follow_up_email,
    whiteboarding,
    code_challenge,
    comments
  );

  if (response.command === "INSERT" && response.rowCount >= 1) {
    res.sendStatus(200);
  } else {
    res.send("Could not add new comment").status(409);
  }
});

module.exports = router;
