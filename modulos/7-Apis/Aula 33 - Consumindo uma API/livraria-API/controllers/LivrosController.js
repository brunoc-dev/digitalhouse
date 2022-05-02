const { Livro } = require('../models');

module.exports = {
  async index (req, res) {
    const livros = await Livro.findAll();

    return res.json({ resultado: livros });
  },

  async getOne (req, res) {
    const { id } = req.params;
    const livro = await Livro.findByPk(id);

    return res.json({ resultado: livro });
  },

  async update (req, res) {
    const { id } = req.params;
    const { estoque } = req.body;

    const livro = await Livro.update({ estoque }, {
      where: { id }
    })

    return res.json({ resultado: livro });
  }
}