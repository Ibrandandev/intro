const mongoose = require("mongoose");

const connectingDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CNN);
    console.log("Bases de Datos Conectada");
  } catch (error) {
    console.log(error);
    throw new Error("Error al conectar la base de datos");
  }
};

module.exports = { connectingDb };
