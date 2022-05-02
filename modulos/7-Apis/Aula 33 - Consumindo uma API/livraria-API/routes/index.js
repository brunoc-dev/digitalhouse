const express = require("express");
const router = express.Router();
const LivrosController = require('../controllers/LivrosController');

router.get("/", LivrosController.index);

module.exports = router;