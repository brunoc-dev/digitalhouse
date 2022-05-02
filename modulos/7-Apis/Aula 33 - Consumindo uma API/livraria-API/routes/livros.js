const express = require("express");
const router = express.Router();
const LivrosController = require('../controllers/LivrosController');

router.get("/", LivrosController.index);
router.get("/:id", LivrosController.getOne);
router.patch("/:id", LivrosController.update);

module.exports = router;