import express from "express";
const router = express.Router();
import passport from "passport";
import bcrypt from "bcrypt";
import { db } from "../server.js";

router.get(
  "/google/callback",
  passport.authenticate("google", { session: true }),
  (req, res) => {
    res.redirect(process.env.CLIENT_URL);
  }
);
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie("connect.sid"); // Clear the session cookie
      res.status(200).json({ message: "Logged out successfully" }); // Respond with JSON
    });
  });
});

export default router;
