const { Schema, model } = require("mongoose");

const usuarioSchema = Schema({
  nombre: { type: String, required: [true, "El Nombre es obligatorio"] },
  correo: {
    type: String,
    required: [true, "El Correo es obligatorio"],
    unique: true,
  },
  password: { type: String, required: [true, "La contraseña es obligatoria"] },
  img: { type: String },
  rol: {
    type: String,
    required: true,
    // enum: ["USER_ROLE", "ADMIN_ROLE"],
    // default: "USER_ROLE",
  },
  estado: { type: Boolean, default: true },
});

usuarioSchema.methods.toJSON = () => {
  const { __v, password, ...usuario } = this.toObject();
  return usuario;
};

module.exports = model("Usuario", usuarioSchema);
