const express = require('express');
const passport = require('passport');
const router = express.Router();

// @desc Auth with Google
// @route GET /
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// @desc Google auth callback
// @route GET /auht/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (re, res) => {
    res.redirect('/dashboard');
  }
);

// @desc Logout User
// @route /auth/logout

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
