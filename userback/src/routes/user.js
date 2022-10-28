const express = require("express")
const router = express.Router()


//importar modelo
const User = require("../models/user.model")


//crear usuario
router.post("/create-user", async (req, res) => {

    const newUser = new User(req.body)
    await newUser.save()

    return res.status(201).json({msg: "Usuario creado exitosamente"})
})

//crear validaci'on usuario
/*function register() {
    let email = document.getElementById("email").value;
  
    for (let user of BD) {
      if (email === user.email) {
        document.getElementById("password").value = "";
        return alert("el usuario ya existe");
      }
    }
  
    let user = {
      name: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      edad: document.getElementById("age").value,
      email: email,
      password: document.getElementById("password").value,
    };
  
    console.log(user);
    return;
  }
  */

//listar Usuarios
//router.get("ruta", () => {})

router.get("/get-user",async (req, res) => {

    const user = await User.find()
    return res.status(200).json({data: user})
})


//exportar las rutas
module.exports = router