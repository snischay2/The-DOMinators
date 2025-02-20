import React, { useState, useEffect } from "react";
import axios from "axios";

const AttendancePage = () => {
  const [attendance, setAttendance] = useState({});
  const [totalClasses, setTotalClasses] = useState("");
  const [attendedClasses, setAttendedClasses] = useState("");

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const res = await axios.get("http://localhost:1000/api/v1/attendance");
      console.log("Fetched Data:", res.data);
      setAttendance(res.data);
    } catch (error) {
      console.error("Error fetching attendance:", error);
    }
  };

  const updateAttendance = async () => {
    try {
      await axios.put("http://localhost:1000/api/v1/attendance/update", {
        totalClasses: Number(totalClasses) || 0, 
        attendedClasses: Number(attendedClasses) || 0,
      });
      fetchAttendance();
      setTotalClasses("");
      setAttendedClasses("");
    } catch (error) {
      console.error("Error updating attendance:", error);
    }
  };
  if (totalClasses < 0 || attendedClasses < 0) { 
    alert("Please enter a valid number");
   
    return;
  } else if (totalClasses < attendedClasses) {
    alert("Total classes can't be less than attended classes");
    return;
  }

  return (
    <div>
      <h2>Attendance Management</h2>
      <p>Total Classes: {attendance.attendance?.totalClasses || 0}</p>
      <p>Attended Classes: {attendance.attendance?.attendedClasses || 0}</p>
      <p>Attendance Percentage: {attendance.percentage?.toFixed(2) || 0}%</p>
      {attendance.percentage < 75 ? (
        <p>You need to attend {attendance.neededClasses} more classes.</p>
      ) : (
        <p>You can skip {attendance.canSkip} classes.</p>
      )}

      <h3>Update Attendance</h3>
      <input
        type="number"
        placeholder="Total Classes"
        value={totalClasses}
        onChange={(e) => setTotalClasses(e.target.value)}
      />
      <input
        type="number"
        placeholder="Attended Classes"
        value={attendedClasses}
        onChange={(e) => setAttendedClasses(e.target.value)}
      />
      <button onClick ={updateAttendance}>Update</button>
    </div>
  );
};

export default AttendancePage;