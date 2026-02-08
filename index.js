const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

//Serve any static files from /assets folder
app.use("/", express.static(path.join(process.cwd(), "assets")));

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
