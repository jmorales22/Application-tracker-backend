const db = require("./conn.js");

class Interviews {
  static async getAllInterviews() {
    try {
      const response = await db.any(`select * from interviews;`);
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Interviews;
