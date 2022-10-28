const mongoose = require("mongoose")

const dbName = "bit-user"
const uri =`mongodb+srv://NIOENATOR:Argolla2912@cluster0.lvejfed.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(uri)
    .then((db) => console.log("Conexion a base de datos exitosa"))
    .catch((err)=> console.log(err))

module.exports = mongoose