const express = require("express");
const Attendance = require("../models/Attendance");

const router = express.Router();

// Initialize attendance for the student
router.post("/init", async (req, res) => {
  try {
    const newAttendance = new Attendance();
    await newAttendance.save();
    res.json({ message: "Attendance initialized!", attendance: newAttendance });
  } catch (error) {
    res.status(500).json({ error: "Error initializing attendance." });
  }
});

// Update attendance (add classes)
router.put("/update", async (req, res) => {
  try {
    console.log("Received data:", req.body);
    const { totalClasses, attendedClasses } = req.body;
    let attendance = await Attendance.findOne();
        if (!attendance) {
            attendance = new Attendance({ totalClasses: 0, attendedClasses: 0 });
        }
    
    if (!attendance) {
      return res.status(404).json({ error: "Attendance record not found." });
    }

    attendance.totalClasses = totalClasses;
    attendance.attendedClasses = attendedClasses;
    await attendance.save();

    res.json({ message: "Attendance updated!", attendance });
  } catch (error) {
    res.status(500).json({ error: "Error updating attendance." });
  }
});

// Get attendance details
router.get("/", async (req, res) => {
  try {
    let attendance = await Attendance.findOne();
        if (!attendance) {
        attendance = new Attendance({ totalClasses: 0, attendedClasses: 0 });
        }
    if (!attendance) {
      return res.status(404).json({ error: "Attendance record not found." });
    }

    // Calculate attendance percentage
    const percentage =
      attendance.totalClasses > 0
        ? (attendance.attendedClasses / attendance.totalClasses) * 100
        : 0;

    // Calculate how many classes needed or can be skipped
    let neededClasses = 0;
    let canSkip = 0;

    if (percentage < 75) {
      neededClasses = Math.ceil(
        (0.75 * attendance.totalClasses - attendance.attendedClasses) / 0.25);
        //  alert("You need to attend " + neededClasses + " more classes.");
  

    } else {
      canSkip = Math.floor(
        (attendance.attendedClasses - 0.75 * attendance.totalClasses) / 0.75
      );
      // alert("You can skip " + canSkip + " classes.");
    }
    // if (totalClasses < attendedClasses) {
    //   alert("Total classes should be greater than or equal to attended classes");
    // }

    res.json({ attendance, percentage, neededClasses, canSkip });
  } catch (error) {
    res.status(500).json({ error: "Error fetching attendance." });
  }
});


module.exports = router;