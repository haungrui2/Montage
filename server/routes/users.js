const express = require('express');
const router = express.Router();
const userModel = require("../models/userModel");
const userSessionModel = require('../models/userSession');

/* GET users listing. */
router.get(`/:id`, async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

//SUBMIT A User info -- Sign Up
router.post(`/signup`, (req, res) => {
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
      return res.status(409).json({message: "User with email already exists!"});
    }

    // Save the new User info -- using userModel
    const newUser = new userModel();
    newUser.fullName = fullName;
    newUser.email = email;
    newUser.password = password;
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
router.post(`/signin`, async (req, res) => {
  const {password} = req.body;
  let {email} = req.body;

  email = email.toLowerCase();
  const adminEmail = "montageadmin@gmail.com";

  const userWithEmail = await userModel.find({email: email})
    .catch((error) => {
      console.log("Error :", error);
    });

  userModel.findOneAndUpdate({   // Verify the token is one of them and not deleted.
    email: adminEmail,
    isAdmin: false
  },
  {$set: {isAdmin: true}}).catch((error) => {
    console.log("Error: ", error);
  })
  // , null,
  // (error) => {
  //   if (error) {
  //     console.log("error 2:", error);
  //     return res.send({
  //       success: false,
  //       message: 'Error: Server error'
  //     });
  //   } return res.send({
  //       success: true,
  //       message: 'Verified Admin!'
  //     });
  // });

    if (!userWithEmail) {
      return res.status(400).json({message: "Email or Password does not match!"});
    }
    if (userWithEmail[0].password !== password) {
      return res.status(400).json({message: "Email or Password does not match!"});
    }

    const userSession = new userSessionModel(); // correct user using userSession
    userSession.userId = userWithEmail[0]._id;
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
