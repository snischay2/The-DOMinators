const express = require("express");
const Schedule = require("../models/Schedule");

const router = express.Router();

// Add Schedule
router.post("/", async (req, res) => {
  try {
    const schedule = new Schedule(req.body);
    await schedule.save();
    res.status(201).json(schedule);
  } catch (error) {
    res.status(500).json({ message: "Error adding schedule" });
  }
});

// Get All Schedules
router.get("/", async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ message: "Error fetching schedule" });
  }
});

// Delete Schedule
router.delete("/:id", async (req, res) => {
  try {
    await Schedule.findByIdAndDelete(req.params.id);
    res.json({ message: "Schedule deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting schedule" });
  }
});

module.exports = router;