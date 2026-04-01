const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const appShell = path.join(__dirname, "public", "index.html");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(appShell);
});

["/scheduling", "/scheduling/create"].forEach((routePath) => {
  app.get(routePath, (req, res) => {
    res.sendFile(appShell);
  });
});

["/scenarios"].forEach((routePath) => {
  app.get(routePath, (req, res) => {
    res.sendFile(appShell);
  });
});

["/jobs", "/jobs/create"].forEach((routePath) => {
  app.get(routePath, (req, res) => {
    res.redirect("/scheduling");
  });
});

app.get(/^\/jobs\/edit\/[^/]+$/, (req, res) => {
  res.redirect("/scheduling");
});

app.get(/^\/scheduling\/edit\/[^/]+$/, (req, res) => {
  res.sendFile(appShell);
});

app.listen(PORT, () => {
  console.log(`Controller GUI is running at http://localhost:${PORT}`);
});
