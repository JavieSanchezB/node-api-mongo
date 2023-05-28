const express = require("express");
const userSchema = require("../models/users");

const router = express.Router();

// create user
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/users/:doc_identidad", (req, res) => {
  const { doc_identidad } = req.params;
  userSchema
    .findById(doc_identidad)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/users/:doc_identidad", (req, res) => {
  const { doc_identidad } = req.params;
  const { nombres, apellidos, email, password, rol } = req.body;
  userSchema
    .updateOne({ doc_identidad: doc }, { $set: { doc_identidad, nombres, apellidos, email, password, rol } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;