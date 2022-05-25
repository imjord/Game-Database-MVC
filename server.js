// imports
const express = require("express");
const db = require("./config/connection.js");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'))


// views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// routes
const UserRoutes = require("./routes/User");
const createGame = require("./routes/Game");

app.use("/users", UserRoutes);
app.use("/games", UserRoutes);
app.use("/addgames", createGame);

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});
//404
app.use("*", (req, res) => {
  res.status(404).render("404", { title: "404" });
});
// start server with db

db.once("open", () => {
  app.listen(PORT, () => {
    console.log("server live");
  });
});
