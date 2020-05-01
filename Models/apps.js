const db = require("./conn.js");

class Apps {
  static async getAllApplications(user_id) {
    try {
      const response = await db.any(
        `SELECT
        *
        FROM applications
        INNER JOIN users ON users.id = applications.user_id
        INNER JOIN companies ON companies.id = applications.company_id
        WHERE users.id = ${user_id} ORDER BY application_date DESC
        ;`
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async getPublicApplications() {
    try {
      const response = await db.any(
        `SELECT
        *
        FROM applications
        INNER JOIN users ON applications.user_id = users.id
        where applications.make_public='Yes';`
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Apps;
