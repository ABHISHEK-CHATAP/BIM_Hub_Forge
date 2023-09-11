const express = require("express");

const {
  getAuthorizationUrl,
  authCallbackMiddleware,
  authRefreshMiddleware,
  getUserProfile,
} = require("../services/aps.js");

let router = express.Router();

router.get("/api/auth/login", function (req, res) {
  res.json({redirectUrl: getAuthorizationUrl()});
});

router.get("/api/auth/logout", function (req, res) {
  req.session = null;
  res.redirect("http://localhost:5173");
});

router.get("/api/auth/callback", authCallbackMiddleware, function (req, res) {
  res.cookie(
    "sessionData",
    JSON.stringify({
      public_token: req.session.public_token,
      internal_token: req.session.internal_token,
      refresh_token: req.session.refresh_token,
      expires_at: req.session.expires_at,
    })
  );
  res.redirect("http://localhost:5173/home");
});


router.get("/api/auth/token",authRefreshMiddleware, function (req, res) {
  res.json(req.publicOAuthToken);
});

router.get(
  "/api/auth/profile",
  async function (req, res, next) {
   
    try {
      const profile = await getUserProfile(req.internalOAuthToken);
      res.json({ name: `${profile.firstName} ${profile.lastName}` });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
