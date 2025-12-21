const express = require("express");
const path = require("path");

const noteRoutes = require("./routes/noteRoutes");

const app = express();

app.use(express.json());

// serve HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// notes API
app.use("/api/notes", noteRoutes);

module.exports = app;
