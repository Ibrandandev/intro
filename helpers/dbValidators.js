const Usuario = require("../models/usuario");
const Role = require("../models/role");

const isValidEmail = async (correo) => {
  const emailExist = await Usuario.findOne({ correo });

  if (emailExist) {
    throw new Error(`El correo ${correo} ya esta Registrado`);
  }
};

const isValidRole = async (rol) => {
  const roleExist = await Role.findOne({ rol });

  if (!roleExist) {
    throw new Error(`El rol ${rol} no existe en la base de datos`);
  }
};

module.exports = {
  isValidEmail,
};
