const db = require("./conn.js");

class AddUser {

  static async addUser(
      first_name,
      last_name,
      email,
      user_password,
      is_admin,
      contact_me
    ) {
    try {
      const response = await db.one(`insert into users
      (first_name, last_name, email, user_password, is_admin, contact_me)
      values
      ($1, $2, $3, $4, $5, $6)`,
      [first_name, last_name, email, user_password, is_admin, contact_me]);
      return response;
    } catch (error) {
        console.error('ERROR: ', error);
        return error;
    }
  }
}

module.exports = AddUser;