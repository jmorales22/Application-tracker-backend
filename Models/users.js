const db = require("./conn.js");

class Users {
  static async getAllUsers() {
    try {
      const response = await db.any(`SELECT * FROM users;`);
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Users;
