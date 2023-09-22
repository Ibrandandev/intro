const { request, response } = require("express");

const Usuario = require("../models/usuario");

const getUsers = (req = request, res = response) => {
  const { apiKey, limit } = req.query;

  res.json({ mensaje: "Recibo Mensaje", apiKey, limit });
};

const postUsers = (req = request, res = response) => {
  const data = req.body;
  const { nombre, correo, password, rol } = data;

  const usuario = new Usuario({ nombre, correo, password, rol });
  res.json({ usuario, mensaje: "Envio Mensaje" });
};

const putUsers = (req = request, res = response) => {
  res.json({ mensaje: "Actualizo Mensaje" });
};

const deleteUsers = (req = request, res = response) => {
  res.json({ mensaje: "Elimino Mensaje" });
};

module.exports = { getUsers, postUsers, putUsers, deleteUsers };
