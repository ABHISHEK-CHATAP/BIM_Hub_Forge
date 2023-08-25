import express from "express";
import getPublicToken from "../services/aps";
import {
  APS_CLIENT_ID,
  APS_CLIENT_SECRET,
  APS_CALLBACK_URL,
  PUBLIC_TOKEN_SCOPES,
  INTERNAL_TOKEN_SCOPES,
} from "../config/config";
const router = express.Router();

// Endpoint to get the public Oauth token
router.get("/api/auth/token", async function (req, res, next) {
  try {
    res.json(await getPublicToken());
  } catch (err) {
    next(err);
  }
});

// router.post('/api/signin', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Exchange email and password for an access token
//     const oAuth2Client = new OAuth2ThreeLegged({
//       clientId: APS_CLIENT_ID,
//       clientSecret: APS_CLIENT_SECRET,
//       redirectUri: APS_CALLBACK_URL,
//     });

//     const tokenResponse = await oAuth2Client.authenticate(['data:read'], 'email', email, 'password', password);
//     const accessToken = tokenResponse.access_token;

//     res.json({ accessToken });
//   } catch (error) {
//     console.error('Error signing in:', error);
//     res.status(500).json({ error: 'An error occurred while signing in' });
//   }
// })

export default router;
