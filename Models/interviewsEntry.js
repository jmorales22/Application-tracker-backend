const db = require ('./conn.js');

class AddInterviewInfo {
  static async addInterviewInfo (
    // user_id,
    // application_id,
    // company_id,

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
  ) {
    try {
      const response = await db.any (
        `insert into interviews
      (round, interview_type, interview_date, interview_rating, interviewer, follow_up_person, follow_up_phone, follow_up_email, whiteboarding, code_challenge, comments )
      values
      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) returning id`,
        [
        //   user_id,
        //   application_id,
        //   company_id,
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
        ]
      );
      console.log (response);
      return response;
    } catch (error) {
      console.error ('ERROR: ', error);
      return error;
    }
  }
}

module.exports = AddInterviewInfo;
