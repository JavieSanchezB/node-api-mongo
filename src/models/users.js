const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    doc_identidad: {
        type: String,
        required: true,
      },  
  nombres: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  rol: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('usuarios', userSchema);