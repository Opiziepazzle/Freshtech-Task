const express = require('express');
const passport = require('passport');
const router = express.Router();

// Route for Google authentication
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Route for Google callback
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect(req.session.returnTo ||'/my-account');
  }
);



module.exports = router;