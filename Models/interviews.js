const db = require("./conn.js");

class Interviews {
  static async getInterviews(application_id) {
    try {
      const response = await db.any(
        `SELECT * FROM interviews
      WHERE application_id = ${application_id};
      `
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }
  static async getCompanyInterviews(id) {
    try {
      const response = await db.any(
        `SELECT * FROM companies INNER JOIN interviews ON companies.id = interviews.company_id WHERE companies.id=${id};`
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Interviews;
