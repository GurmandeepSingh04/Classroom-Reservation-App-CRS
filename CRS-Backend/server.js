import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import pg from "pg";
import env from "dotenv";
import cron from "node-cron";
import "./auth.js";

const app = express();
const port = process.env.PORT || 3000;

env.config();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production" ? "true" : "auto",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

export const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

cron.schedule("* * * * *", async () => {
  try {
    const now = new Date();
    let currentHour = now.getHours();
    let pastHour = currentHour - 1;
    if (pastHour < 0) {
      pastHour = 23; // handle the midnight wrap-around
    }

    // Convert pastHour to string with leading zero if necessary
    const formattedPastHour = pastHour.toString().padStart(2, "0");
    await db.query("DELETE FROM timeslot WHERE CAST(time AS INTEGER) <= $1", [
      formattedPastHour,
    ]);
  } catch (err) {
    console.log(err);
  }
});

import indexRouter from "./routes/indexRouter.js";
app.use("/", indexRouter);

import authRouter from "./routes/authRouter.js";
app.use("/auth/user/id", authRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
