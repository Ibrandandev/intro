const { request, response } = require("express");

const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt");

const getUsers = (req = request, res = response) => {
  const { apiKey, limit } = req.query;

  res.json({ mensaje: "Listado", apiKey, limit });
};

const postUsers = async (req = request, res = response) => {
  const data = req.body;
  const { nombre, correo, password, rol } = data;

  const usuario = new Usuario({ nombre, correo, password, rol });
  const salt = bcrypt.genSaltSync(10);
  usuario.password = bcrypt.hashSync(password, salt);

  await usuario.save();
  res.json({ usuario, mensaje: "Usuario creado Correctamente" });
};

const putUsers = (req = request, res = response) => {
  res.json({ mensaje: "Actualizo Mensaje" });
};

const deleteUsers = (req = request, res = response) => {
  res.json({ mensaje: "Elimino Mensaje" });
};

module.exports = { getUsers, postUsers, putUsers, deleteUsers };
