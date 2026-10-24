const express = require("express");
// express app
const app = express();
// listening for requests
app.listen(3000);

// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to Home Page</h1>");
// });

// sending html files
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirects
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

// for 404 page--- this app.use() should be the last route in the app.js file, should be at the bottom
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
