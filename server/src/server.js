const express = require("express");
// const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

// server.use(router);

server.get("/", (req, res) => {
  res.send({ msg: "Pueba deply" });
});

module.exports = server;
