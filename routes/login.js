var express = require('express');
var router = express.Router();

const loginUser = require('../Models/loginUser');
bcrypt = require('bcrypt');


 //* To log in new a user *//

router.post('/loginuser', async (req, res) => {
console.log('loginRoute')
    const { email, user_password } = req.body;

    console.log(user_password);
    
    const user = new loginUser(email, user_password);

    const loginResponse = await user.login(email);
    console.log('login response is', loginResponse);
    
    if (!!loginResponse.isValid) {
      req.session.is_logged_in = loginResponse.isValid;
      req.session.user_id = loginResponse.user_id;
      req.session.first_name = loginResponse.first_name;
      req.session.last_name = loginResponse.last_name;
      req.session.save();

      console.log(res);

      res.json({ userId: response.id }).status(200);
  
      res.redirect('/main');
    } else {
      //res.sendStatus(401);
      res.redirect('/');
    }
    });
  
    router.get('/logout', function(req, res) {
      req.session.destroy();
      res.redirect('/');
      });
  
  module.exports = router;

