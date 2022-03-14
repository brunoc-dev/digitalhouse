const path = require('path');
const fs = require('fs');

const usuariosJSON = path.join('usuarios.json');

module.exports = {
  criar ({ nome, email, senha }) {
    const usuariosCadastrados = JSON.parse(fs.readFileSync(usuariosJSON));
    usuariosCadastrados.push({ nome, email, senha });
    fs.writeFileSync(usuarios, JSON.stringify(usuariosCadastrados));
  },

  buscar ({ email }) {
    const usuariosCadastrados = JSON.parse(fs.readFileSync(usuariosJSON))
    return usuariosCadastrados.find(usuario => usuario.email === email);
  }
}