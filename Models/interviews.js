const db = require("./conn.js");

class Interviews {
  static async getAllInterviews() {
    try {
      const response = await db.any(`select * from applications inner join users on applications.user_id = users.id; 
      `);
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Interviews;
