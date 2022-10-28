//importar mongoose
const mongoose = require("mongoose")


//schema => coleccion

//llamar a la clase schema
const { Schema } = mongoose

//crear el schema con los siguientes parametros:
// firstName, lastName, email, password, (isAdmin - true || false)
const userSchema = new Schema(
    {
        firsName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
    },
    
    {
        versionKey: false, //que deseamos capturar cada vez que se inserte un dato
        timestamps: true
    }
)

//4 exportar como un modelo
//module.exports = moongoose.model("nombre collection", el schema de la coleccion)
module.exports = mongoose.model("user", userSchema)
