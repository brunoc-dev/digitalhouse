const EnderecoService = require("../services/endereco");

module.exports = {
  async buscarEnderecoPorCEP (req, res) {
    try {
      const { cep } = req.params;
      const endereco = await EnderecoService.buscarPorCEP(cep);
      res.status(200).json({ resultado: endereco });
    } catch (error) {
      res.status(500).json({ errors: { msg: 'Não foi possível executar essa operação no momento' } });
    }
  }
}