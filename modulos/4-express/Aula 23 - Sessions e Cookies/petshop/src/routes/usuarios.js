const express = require('express');
const router = express.Router();
const validadorCadastroUsuarios = require('../middlewares/validadorCadastroUsuarios');
const UsuariosController = require('../controllers/UsuariosController');

router.get('/cadastrar', UsuariosController.editar);
router.post('/cadastrar', validadorCadastroUsuarios, UsuariosController.criar);

router.post('/login', UsuariosController.login);

module.exports = router;
