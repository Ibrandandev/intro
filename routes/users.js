const { Router } = require("express");

const { check } = require("express-validator");

const { isValidEmail, isValidRole } = require("../helpers/dbValidators");

const {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers,
} = require("../controllers/usersControllers");

const router = Router();

router.get("/", getUsers);

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("correo", "No es un correo Valido").isEmail(),
    check("correo").custom(isValidEmail),
    check(
      "password",
      "La contraseña debe tener como minimo 6 caracteres"
    ).isLength({ min: 6 }),
    check("rol").custom(isValidRole),
  ],
  postUsers
);

router.put("/:id", putUsers);

router.delete("/:id", deleteUsers);

module.exports = router;
