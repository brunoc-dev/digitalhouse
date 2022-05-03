const express = require("express");
const router = express.Router();
const LivrosController = require('../controllers/LivrosController');

router.get("/", LivrosController.index);
router.get("/:id", LivrosController.getOne);
router.patch("/:id", LivrosController.update);

// CRUD - Padrão REST
// Read, Create, Update, Delete
// Métodos http
// get, post, patch, put, delete?

module.exports = router;