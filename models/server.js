const express = require("express");

const cors = require("cors");

const { connectingDb } = require("../database/config");

class Server {
  constructor() {
    this.app = express();

    this.port = process.env.PORT;

    this.usuarioPath = "/api/users";

    this.connectDb();
    this.middlewares();
    this.routes();
  }

  async connectDb() {
    await connectingDb();
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.json());
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(this.usuarioPath, require("../routes/users"));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("Server Online");
    });
  }
}

module.exports = Server;
