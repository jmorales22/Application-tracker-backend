const db = require("./conn.js");
bcrypt = require('bcrypt');


class loginUser {
    constructor(email, password) {
      this.email = email;
      this.password = password;
  }
    
    checkPassword(hashedPassword) {
      console.log("Hashed: " + hashedPassword);
      console.log("This " + this.password);
        return bcrypt.compareSync(this.password, hashedPassword);
    }

    async login(email) {

      console.log(email)

      try {
      const response = await db.any (
      `SELECT id, first_name, last_name, email, user_password FROM Users WHERE email = $1;`,
      [email]
      );
      console.log(response)
      console.log(response[0].user_password)
  
      const isValid = this.checkPassword(response[0].user_password);
        
      if (!!isValid) {
        const { id, first_name, last_name, email } = response;

        console.log(id);

        return { user_id: id, first_name: first_name, last_name: last_name, email: email };
      } else {
        return { isValid };
      }
    } catch (error) {
      console.error('ERROR:', error);
      return error;
    }
  }
}

module.exports = loginUser;