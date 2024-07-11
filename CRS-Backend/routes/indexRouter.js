import express from "express";
const router = express.Router();
import { db } from "../server.js";
import isAuth from "../isAuth.js";

router.get("/", (req, res) => {
  res.send("Hello Sucker");
});

router.get("/user/user/user", isAuth, (req, res) => {
  const user = {
    ...req.user,
    loggedIn: true,
  };
  res.json(user);
});

router.get("/:dept", async (req, res) => {
  const dept = req.params.dept;
  try {
    const result = await db.query(
      "SELECT * FROM lecturehalls WHERE department = $1 ORDER BY CAST(REGEXP_REPLACE(name, '[^0-9]', '', 'g') AS INTEGER) ASC",
      [dept]
    );
    const items = result.rows;
    res.json(items);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:dept/:hall", async (req, res) => {
  const hall = req.params.hall;
  console.log(hall);
  try {
    const result = await db.query(
      "SELECT lecturehall, time,fullname FROM timeslot join users on timeslot.username = users.email where lecturehall = $1 ORDER BY CAST(REGEXP_REPLACE(time, '[^0-9]', '', 'g') AS INTEGER) ASC",
      [hall]
    );
    const items = result.rows;
    res.json(items);
    console.log(items);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving timeslots");
  }
});

router.post("/reserve", async (req, res) => {
  const { lecturehall, time, username } = req.body;
  try {
    await db.query(
      "INSERT INTO timeslot (lecturehall , time , username) values ($1,$2,$3)",
      [lecturehall, time, username]
    );
    res.status(200).send("Slot reserved successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error reserving slot");
  }
});

router.delete("/vacant", async (req, res) => {
  const { lecturehall, time } = req.body;
  console.log(req.body);
  console.log(lecturehall + " " + time);
  try {
    await db.query(
      "DELETE FROM timeslot WHERE lecturehall = $1 AND time = $2",
      [lecturehall, time]
    );
    res.status(200).send("Slot deleted successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error deleting slot");
  }
});

export default router;
