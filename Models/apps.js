const db = require("./conn.js");
class Apps {
  static async getAllApplications(user_id) {
    console.log("calling allapplications method");
    try {
      const response = await db.any(
        `SELECT
        *
        FROM applications
        INNER JOIN users ON users.id = applications.user_id
        INNER JOIN companies ON companies.id = applications.company_id
        WHERE users.id = ${user_id}
        ;`
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }

  //  static async getAllData(user_id) {
  //     try {
  //       const response = await db.any(
  //         `SELECT * FROM users INNER JOIN applications ON users.id = applications.user_id INNER JOIN companies ON companies.id = applications.company_id WHERE users.id=${user_id};`
  //       );
  //       return response;
  //     } catch (err) {
  //       return err.message;
  //     }
  //   }

  static async getPublicApplications() {
    try {
      const response = await db.any(
        `SELECT
        *
        FROM applications
        INNER JOIN users ON applications.user_id = users.id
        where applications.make_public='yes';`
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Apps;
