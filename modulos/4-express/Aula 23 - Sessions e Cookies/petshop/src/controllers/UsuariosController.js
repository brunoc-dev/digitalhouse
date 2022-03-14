const { validationResult } = require("express-validator");
const UsuarioModel = require('../models/UsuarioModel');
const bcrypt = require('bcrypt');

const LOGIN_INVALIDO = { msg: 'Usuário ou senha inválidos' }

module.exports = {
  editar (req, res) {
    res.render('cadastro-usuario', { erros: null });
  },

  criar (req, res) {
    const erros = validationResult(req).errors;
    
    if (erros.length) {
      return res.render('cadastro-usuario', { erros });
    }

    UsuarioModel.criar({ ...req.body, senha: bcrypt.hashSync(req.body.senha, 10) })
    return res.redirect('/');
  },

  login (req, res) {
    const { body } = req;
    const usuario = UsuarioModel.buscar(body)

    if (!usuario) {
      return res.render('login', { erros: [LOGIN_INVALIDO] });
    }

    const senhaCripto = bcrypt.hashSync(body.senha, 10);
    const senhasIguais = bcrypt.compareSync(usuario.senha, senhaCripto)

    if (!senhasIguais) {
      return res.render('login', { erros: [LOGIN_INVALIDO] });
    }

    req.session.usuario = usuario;

    return res.redirect('/servicos/admin');
  }
};