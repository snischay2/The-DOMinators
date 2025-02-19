const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  totalClasses: { type: Number, required: true, default: 0 },
  attendedClasses: { type: Number, required: true, default: 0 },
});

const Attendance = mongoose.model("Attendance", attendanceSchema);
module.exports = Attendance;