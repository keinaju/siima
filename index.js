const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Siima!");
});

//Serve static files from /assets
app.use("/assets", express.static(path.join(process.cwd(), "assets")));

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
