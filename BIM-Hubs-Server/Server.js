import express from "express";
import session from "cookie-session";
import PORT  from "./config/config";
import SERVER_SESSION_SECRET from "./config/config"

const app = express();

app.use(
  session({ secret: SERVER_SESSION_SECRET, maxAge: 24 * 60 * 60 * 1000 })
);
app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
