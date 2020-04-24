var express = require('express');
var router = express.Router();
const Apps = require('../Models/apps.js');
const AddUser = require('../Models/addUser.js');
const Users = require('../Models/users.js');


//* Adds bcrypt for password encription//
bcrypt = require('bcrypt');
const saltRounds = 10;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Welcome to API').status(200);
});

/* Shows all users (will be only visible to admin) */
router.get('/users', async function (req, res, next) {
  const all = await Users.getAllUsers();
  res.json(all);
});

/* Shows all public applications */
router.get('/apps', async function (req, res, next) {
  const all = await Apps.getAllApplications();
  res.json(all);
});

/* Adds new user */
router.post('/adduser', async (req, res) => {
  
  const {
    first_name,
    last_name,
    email,
    user_password,
    is_admin,
    contact_me,
  } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(user_password, salt);

  try {
    const response = await AddUser.addUser(
    first_name,
    last_name,
    email,
    hash,
    is_admin,
    contact_me
  );

  if (response.command === 'INSERT' && response.rowCount >= 1) {
    res.json({'userId': response.id}).status(200);
  } else {
    res.send("Could not add new user").status(409);
  }
  res.sendStatus(200);
  }
  catch (err) {
    return err;
    }
  }
);

module.exports = router;