const express = require('express');
const router = express.Router();
const userModel = require("../models/userModel");
const userSessionModel = require('../models/userSession');

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

//SUBMIT A User info -- Sign Up
router.post(`/signup`, (req, res) => {
  // const { body } = req;
  // const {
  //   name,
  //   password
  // } = body;
  //
  // let {email} = body;
  const {fullName, password} = req.body;
  let {email} = req.body;

  if (!fullName) {
    return res.send({
      success: false,
      message: 'Error: Name cannot be blank.'
    });
  }
  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }

  email = email.toLowerCase();

  //Verify email
  userModel.find({
    email: email
  }, (error, previousUsers) => {
    if (error) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    } else if (previousUsers.length > 0) {
      return res.send({
        success: false,
        message: 'Error: This email has been used.'
      });
    }

    // Save the new User info -- using userModel
    const newUser = new userModel();
    newUser.fullName = fullName;
    newUser.email = email;
    newUser.password = newUser.generateHash(password);
    const savedUser = newUser.save()
    .catch((error) => {
      console.log("Error: ", error);
      res.status(500).json({error:"Cannot register user at the moment!"});
    });
    if (savedUser) {
      res.json({message: "Thanks for registering!"});
    }
  });
});

// Sign In
router.post(`/signin`, (req, res) => {
  const { body } = req;
  const {password} = body;
  let {email} = body;

  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }

  email = email.toLowerCase();

  userModel.find({
    email: email
  }, (error, users) => {
    if (error) {
      console.log("error 2:", error);
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    }
    if (users.length != 1) {
      return res.send({
        success: false,
        message: 'Error: Found more than one user.'
      });
    }

    const user = users[0];
    if (!user.validPassword(password)) { // valid the password
      return res.send({
        success: false,
        message: 'Error: Invalid password.'
      });
    }
    const userSession = new userSessionModel(); // correct user using userSession
    userSession.userId = user._id;
    userSession.save((error, doc) => {
      if (error) {
        console.log(error);
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      } return res.send({
        success: true,
        message: 'Valid Sign In',
        token: doc._id
      });
    });
  });
});

// Get the token for easy login
router.get(`/verify`, (req, res) => {
  const { query } = req;
  const { token } = query;
  userSessionModel.find({   // Verify the token is one of them and not deleted.
    _id: token,
    isDeleted: false
  }, (error, sessions) => {
    if (error) {
      console.log("error 2:", error);
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    }
    if (sessions.length != 1) {
      return res.send({
        success: false,
        message: 'Error: Found more than one user session.'
      });
    } else {
      return res.send({
        success: true,
        message: 'Verify token successful'
      });
    }
  });
});

//Logout, if success logout, set isDeleted to true
router.get(`/logout`, (req, res) => {
  const { query } = req;
  const { token } = query;
  userSessionModel.findOneAndUpdate({   // Verify the token is one of them and not deleted.
    _id: token,
    isDeleted: false
  },
  {$set: {isDeleted: true}}, null,
  (error, sessions) => {
    if (error) {
      console.log("error 2:", error);
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    } return res.send({
        success: true,
        message: 'Verified token and successful logout'
      });
  });
});

module.exports = router;
