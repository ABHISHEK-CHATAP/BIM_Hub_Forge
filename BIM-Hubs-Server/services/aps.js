import APS from "forge-apis";
import {
  APS_CLIENT_ID,
  APS_CLIENT_SECRET,
  APS_CALLBACK_URL,
  PUBLIC_TOKEN_SCOPES,
  INTERNAL_TOKEN_SCOPES,
} from "../config/config";

//to generate internal auth token
const internalAuthClient = new APS.AuthClientThreeLegged(
  APS_CLIENT_ID,
  APS_CLIENT_SECRET,
  APS_CALLBACK_URL,
  INTERNAL_TOKEN_SCOPES
);

// To generate external auth token
const publicAuthClient = new APS.AuthClientThreeLegged(
  APS_CLIENT_ID,
  APS_CLIENT_SECRET,
  APS_CALLBACK_URL,
  PUBLIC_TOKEN_SCOPES
);

// Function for generating auth url
const service = {
  async getAuthorizationUrl() {
    internalAuthClient.generateAuthUrl();
  },

  // Function for auth callback user to the app after authorization
  async authCallbackMiddleware(req, res, next) {
    const internalCredentials = await internalAuthClient.getToken(
      req.query.code
    );
    const publicCredentials = await publicAuthClient.refreshToken(
      internalCredentials
    );
    req.session.public_token = publicCredentials.access_token;
    req.session.internal_token = internalCredentials.access_token;
    req.session.refresh_token = publicCredentials.refresh_token;
    req.session.expires_at = Date.now() + internalCredentials.expires_in * 1000;
    next();
  },

  // Function generating new auth token by using refresh token

  async authRefreshMiddleware(req, res, next) {
    const { refresh_token, expires_at } = req.session;
    if (!refresh_token) {
      res.status(401).end();
      return;
    }

    if (expires_at < Date.now()) {
      const internalCredentials = await internalAuthClient.refreshToken({
        refresh_token,
      });
      const publicCredentials = await publicAuthClient.refreshToken(
        internalCredentials
      );
      req.session.public_token = publicCredentials.access_token;
      req.session.internal_token = internalCredentials.access_token;
      req.session.refresh_token = publicCredentials.refresh_token;
      req.session.expires_at =
        Date.now() + internalCredentials.expires_in * 1000;
    }
    req.internalOAuthToken = {
      access_token: req.session.internal_token,
      expires_in: Math.round((req.session.expires_at - Date.now()) / 1000),
    };
    req.publicOAuthToken = {
      access_token: req.session.public_token,
      expires_in: Math.round((req.session.expires_at - Date.now()) / 1000),
    };
    next();
  },

  //Function for getting user profile
  async getUserProfile(token) {
    const resp = await new APS.UserProfileApi().getUserProfile(
      internalAuthClient,
      token
    );
    return resp.body;
  },
};

export default service;
