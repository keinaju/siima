const express = require("express");
const path = require("path");

const app = express();

//Serve all static files from /assets folder:
app.use("/", express.static(path.join(process.cwd(), "assets")));

//Start listening to connections on specified port:
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
