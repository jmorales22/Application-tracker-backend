const db = require("./conn.js");
bcrypt = require('bcrypt');
var express = require('express');
var router = express.Router();


class loginUser {
    
    checkPassword(hashedPassword) {
        return bcrypt.compareSync(this.password, hashedPassword);
    }

    async login(req, res) {
    
        try {
        const response = await db.any (
        `SELECT id, first_name, last_name, password FROM Users WHERE email = $1;`,
        [this.email]
        );
    
        const isValid = this.checkPassword(response.password);
        
      if (!!isValid) {
        const { id, first_name, last_name } = response;
        return { isValid, user_id: id, first_name, last_name };
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