const express = require("express");
const {
  Addcontact,
  ListContact,
  DeleteContact,
  FindById,
  Update,
} = require("../controllers/contact_controllers");
const route = express.Router();

route.post("/", Addcontact);
route.get("/", ListContact);
route.delete("/:ID", DeleteContact);
route.put("/:ID", Update);
route.get("/:ID", FindById);

module.exports = route;
