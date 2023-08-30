const express = require("express");
const APS = require("forge-apis");
const {
  APS_CLIENT_ID,
  APS_CLIENT_SECRET,
  APS_CALLBACK_URL,
  INTERNAL_TOKEN_SCOPES,
  PUBLIC_TOKEN_SCOPES,
} = require("../config/config");

const oAuth2Client = new APS.AuthClientThreeLegged(
  APS_CLIENT_ID,
  APS_CLIENT_SECRET,
  APS_CALLBACK_URL,
  [
    "data:read", // Add necessary scopes
  ]
);
const {
  getAuthorizationUrl,
  authCallbackMiddleware,
  authRefreshMiddleware,
  getUserProfile,
} = require("../services/aps.js");

let router = express.Router();

router.get("/api/auth/login", function (req, res) {
  res.redirect(getAuthorizationUrl());
});

router.get("/api/auth/logout", function (req, res) {
  req.session = null;
  res.redirect("http://localhost:5173");
});

// router.get("/api/auth/callback", authCallbackMiddleware, function (req, res) {
//   res.cookie(
//     "sessionData",
//     JSON.stringify({
//       public_token: req.session.public_token,
//       internal_token: req.session.internal_token,
//       refresh_token: req.session.refresh_token,
//       expires_at: req.session.expires_at,
//     })
//   );
//   res.redirect("http://localhost:5173/home");
// });

router.get("api/auth/callback", async (req, res, next) => {
  const code = req.query.code;
  try {
    const credentials = await oAuth2Client.getToken(code);

    req.session.accessToken = credentials.access_token;
    req.session.refreshToken = credentials.refresh_token;
    res.redirect("http://localhost:5173/home");
    next();
  } catch (error) {
    console.error("Token retrieval error:", error);
    res.status(500).send("Token retrieval error");
  }
});

router.get("/api/auth/token", function (req, res) {
  res.json(req.publicOAuthToken);
});

router.get(
  "/api/auth/profile",
  authRefreshMiddleware,
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
