const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
  title: String,
  date: String,
  time: String,
  type: String, // "class" or "reminder"
  description: String,
});

module.exports = mongoose.model("Schedule", ScheduleSchema);