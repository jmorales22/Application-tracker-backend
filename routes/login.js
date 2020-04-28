var express = require('express');
var router = express.Router();

const loginUser = require('../Models/loginUser');
bcrypt = require('bcrypt');

router.post('/loginuser', async (req, res) => {
    const { email, user_password } = req.body;

    const user = new loginUser(email, user_password);

    const loginResponse = await user.login(email);
    console.log('login response is', loginResponse);
    
    console.log(loginResponse.user_id)

    if (!!loginResponse.isValid) {
      res.json({ userId: loginResponse.user_id }).status(200);
    } else {
      res.json({ userId: null }).status(401);
    }
    });
  
    router.get('/logout', function(req, res) {
      req.session.destroy();
      res.redirect('/');
      });
  
  module.exports = router;

