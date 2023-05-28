const express = require("express");
const router = express.Router();

//Crear Usuarios
router.post('/users', (req,res) =>{
    res.send("crear nuevo usuario")
})

module.exports = router;