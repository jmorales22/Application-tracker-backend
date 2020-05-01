const db = require("./conn.js");

class AddInterviewInfo {
  constructor(
    id,
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
  ) {
    this.id = id;
    this.user_id = user_id;
    this.application_id = application_id;
    this.company_id = company_id;
    this.round = round;
    this.interview_type = interview_type;
    this.interview_date = interview_date;
    this.interview_rating = interview_rating;
    this.interviewer = interviewer;
    this.follow_up_person = follow_up_person;
    this.follow_up_phone = follow_up_phone;
    this.follow_up_email = follow_up_email;
    this.whiteboarding = whiteboarding;
    this.code_challenge = code_challenge;
    this.comments = comments;
  }
  static async addInterviewInfo(
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
  ) {
    try {
      const response = await db.any(
        `INSERT INTO interviews
      (user_id, application_id, company_id, round, interview_type, interview_date, interview_rating, interviewer, follow_up_person, follow_up_phone, follow_up_email, whiteboarding, code_challenge, comments )
      VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) returning id`,
        [
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
        ]
      );
      return response;
    } catch (error) {
      console.error("ERROR: ", error);
      return error;
    }
  }
}

module.exports = AddInterviewInfo;
