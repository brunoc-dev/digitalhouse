const express = require("express");
const router = express.Router();
const EnderecosController = require('../controllers/EnderecosController');

router.get("/:cep", EnderecosController.buscarEnderecoPorCEP);

module.exports = router;