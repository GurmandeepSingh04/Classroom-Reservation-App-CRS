import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";
import { db } from "./server.js";
import env from "dotenv";
import GoogleStrategy from "passport-google-oauth2";
env.config();

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/user/id/google/callback",
    },
    async (accessToken, refreshToken, profile, cb) => {
      const account = profile._json;
      try {
        const result = await db.query("SELECT * FROM users WHERE email = $1", [
          account.email,
        ]);
        if (result.rows.length === 0) {
          const newUser = await db.query(
            "INSERT INTO users (email, password , fullname , img) VALUES ($1, $2 , $3 , $4) RETURNING *",
            [account.email, "google", account.name, account.picture]
          );
          return cb(null, newUser.rows[0]);
        } else {
          return cb(null, result.rows[0]);
        }
      } catch (err) {
        return cb(err);
      }
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});
