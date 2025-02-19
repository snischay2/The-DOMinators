const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const contact = require('./routes/contact');
const multer = require('multer');
const mongoose = require('mongoose');
const attendanceRoutes = require("./routes/attendanceRoutes");
const routes = require('./routes');


require('./conn/conn');
app.use(cors());
app.use(express.json());




app.use("/api/v1", contact);
app.use("/api/v1/attendance", attendanceRoutes);
app.use("/api" ,routes);



app.listen("1000", () => {
    console.log("Server at port 1000");
});