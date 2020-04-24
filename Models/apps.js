const db = require("./conn.js");
class Apps {
  
  static async getAllApplications(user_id) {
    console.log("calling allapplications method")
    try {
      const response = await db.any(
        `select * from applications where applications.user_id=${user_id};`
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }
  static async getPublicApplications() {
    try {
      const response = await db.any(
        `select * from applications where make_public='yes';`
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Apps;

