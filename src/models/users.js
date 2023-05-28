const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const password = 'contra123';
const passwordv2 = 'contra123';
const hash = bcrypt.hashSync(password, saltRounds);
console.log(''+hash);

// Load hash from your password DB.
const validadepasword = bcrypt.compareSync(password, hash); // true
console.log('la contraseña es'+ validadepasword);
bcrypt.compareSync(passwordv2, hash); // false

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
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
},
{
  timestamps: true,
}
);

module.exports = mongoose.model('usuarios', userSchema);