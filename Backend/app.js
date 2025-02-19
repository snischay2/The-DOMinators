const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const contact = require('./routes/contact');
const multer = require('multer');
const mongoose = require('mongoose');
const attendanceRoutes = require("./routes/attendanceRoutes");
const routes = require('./routes');

const path = require("path");


require('./conn/conn');
app.use(cors());
app.use(express.json());

const _dirname = path.resolve();




app.use("/api/v1", contact);
app.use("/api/v1/attendance", attendanceRoutes);
app.use("/api" ,routes);

app.use(express.static(path.join(_dirname, "/Project_1/dist")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "Project_1", "dist", "index.html"));
});

app.listen("1000", () => {
    console.log("Server at port 1000");
});