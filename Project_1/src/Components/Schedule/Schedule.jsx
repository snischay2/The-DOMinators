import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Schedule.css";

const SchedulePage = () => {
  const [schedule, setSchedule] = useState([]);
  const [newSchedule, setNewSchedule] = useState({
    title: "",
    date: "",
    time: "",
    type: "class",
    description: "",
  });

  useEffect(() => {
    fetchSchedule();
  }, []);

  const fetchSchedule = async () => {
    const res = await axios.get("http://localhost:1000/api/schedule");
    setSchedule(res.data);
  };

  const handleChange = (e) => {
    setNewSchedule({ ...newSchedule, [e.target.name]: e.target.value });
  };

  const addSchedule = async (e) => {
    e.preventDefault();
    console.log(newSchedule);
    await axios.post("http://localhost:1000/api/schedule", newSchedule);
    fetchSchedule();
    setNewSchedule({ title: "", date: "", time: "", type: "class", description: "" });
  };

  const deleteSchedule = async (id) => {
    await axios.delete(`http://localhost:1000/api/schedule/${id}`);
    fetchSchedule();
  };

  return (
    <div>
      <h2 className="schedule">Schedule Page</h2>

      {/* Calendar */}
      <Calendar />

      {/* Add Schedule Form */}
      <form onSubmit={addSchedule}>
        <div className="input">
        <input type="text" name="title" placeholder="Title" value={newSchedule.title} onChange={handleChange} required />
        <input type="date" name="date" value={newSchedule.date} onChange={handleChange} required />
        <input type="time" name="time" value={newSchedule.time} onChange={handleChange} required />
        <select name="type" value={newSchedule.type} onChange={handleChange}>
          <option value="class">Class</option>
          <option value="reminder">Reminder</option>
        </select>
        <input type="text" name="description" placeholder="Description" value={newSchedule.description} onChange={handleChange} />
        <button className="add" type="submit">Add</button>
        </div>
      </form>

      {/* Display Schedule */}
      <ul>
        {schedule.map((item) => (
          <li key={item._id}>
            {item.title} - {item.date} {item.time} ({item.type}) - {item.description}
            <button onClick={() => deleteSchedule(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchedulePage;