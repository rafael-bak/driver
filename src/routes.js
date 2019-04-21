const express = require("express");

const routes = express.Router();

routes.get("/teste", (req, res) => {    // req = resquisição feita  no servidor /     //res =  envia a resposta para cliente
    return res.send("Hello World  Rafael");
});

module.exports = routes;

