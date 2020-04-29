const db = require("./conn.js");

class AppInterview {
  static async getAllInterviews() {
    try {
      const response = await db.any(`select * from interviews;`);
      return response;
    } catch (err) {
      return err.message;
    }
  }
  static async getAppsInterviews(user_id) {
    try {
      const response = await db.any(`SELECT * FROM applications INNER JOIN interviews ON applications.id = interviews.application_id INNER JOIN companies ON companies.id = applications.company_id;`);
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = AppInterview;
