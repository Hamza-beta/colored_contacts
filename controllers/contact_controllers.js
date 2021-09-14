const Contact = require("../models/contact_models");

exports.Addcontact = async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const found = await Contact.findOne({ email });
    if (found) {
      return res.status(400).send({ msg: "user exixst" });
    }
    const AddedContact = new Contact(req.body);
    await AddedContact.save();
    res.status(200).send({ msg: "contact added", AddedContact });
  } catch (error) {
    res.status(500).send({ msg: "could not add contact" });
  }
};
exports.ListContact = async (req, res) => {
  try {
    const Contacts = await Contact.find();
    res.status(200).send({ msg: "list of contacts", Contacts });
  } catch (error) {
    res.status(500).send({ msg: "could not find any contacts" });
  }
};

exports.DeleteContact = async (req, res) => {
  const { ID } = req.params;
  try {
    const RemovedContact = await Contact.findByIdAndDelete(ID);
    res.status(200).send({ msg: "contact deleted" });
  } catch (error) {
    res.status(200).send({ msg: "could not delete contact" });
  }
};
exports.Update = async (req, res) => {
  const { ID } = req.params;
  try {
    const UpdatedContact = await Contact.findByIdAndUpdate(ID, {
      $set: { ...req.body },
    });
    res.status(200).send({ msg: "contact updated", UpdatedContact });
  } catch (error) {
    res.status(500).send({ msg: "could not update contact or deos not exist" });
  }
};

exports.FindById = async (req, res) => {
  const { ID } = req.params;
  try {
    const FindById = await Contact.findById(ID);
    res.status(200).send({ msg: "found one contact", FindById });
  } catch (error) {
    res.status(500).send({ msg: "could not find contact or id do not match" });
  }
};
