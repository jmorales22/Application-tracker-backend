var express = require ('express');
var router = express.Router ();
const addInterviewInfo = require ('../Models/interviewsEntry');

router.post ('/', async (req, res) => {
  console.log ('req body: ', req.body);
  const {
    user_id,
    application_id,
    company_id,
    round,
    interview_date,
    interview_rating,
    interviewer,
    follow_up_phone,
    follow_up_email,
    whiteboarding,
    comments,
  } = req.body;
  const response = await addinterviewInfo.addInterviewInfo (
    user_id,
    application_id,
    company_id,
    round,
    interview_date,
    interview_rating,
    interviewer,
    follow_up_phone,
    follow_up_email,
    whiteboarding,
    comments
  );

  if (response.command === 'INSERT' && response.rowCount >= 1) {
    res.sendStatus (200);
  } else {
    res.send ('Could not add new comment').status (409);
  }
});

module.exports = router;
