const express = require("express");
const ConnectDB = require("./config/connectDB");
const route = require("./routes/contact_routes");
require("dotenv").config();
const app = express();

ConnectDB();
app.use(express.json());
app.use("/api/contacts", route);
app.listen(process.env.port, () =>
  console.log(`server is runnig on port ${process.env.port}`)
);
