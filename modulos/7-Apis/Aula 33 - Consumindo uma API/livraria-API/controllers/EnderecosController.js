const EnderecoService = require("../services/endereco");

module.exports = {
  async buscarEnderecoPorCEP (req, res) {
    try {
      const { cep } = req.params;
      const endereco = await EnderecoService.buscarPorCEP(cep);
      res.status(200).json({ resultado: endereco });
    } catch (error) {
      if (error.response.status === 404) {
        return res.status(404).json({ errors: { msg: 'Endereço não encontrado.' } });
      }

      return res.status(500).json({ errors: { msg: 'Não foi possível executar essa operação no momento' } });
    }
  }
}