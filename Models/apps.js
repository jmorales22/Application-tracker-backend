const db = require("./conn.js");

class Apps {

  static async getAllApplications() {
    try {
      const response = await db.any(`select * from applications where make_public='yes';`);
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Apps;