import express from "express";
import session from "cookie-session";
// import PORT  from "./config/config.js";
// import SERVER_SESSION_SECRET from "./config/config.js"
const SERVER_SESSION_SECRET = "custom-encryption-phrase";
const PORT = 8080;
const app = express();

app.use(
  session({ secret: SERVER_SESSION_SECRET, maxAge: 24 * 60 * 60 * 1000 })
);
app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`));
