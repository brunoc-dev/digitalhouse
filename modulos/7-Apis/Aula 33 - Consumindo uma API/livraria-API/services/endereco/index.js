const { buscarEnderecoPorCEP } = require('./requests');

module.exports = {
  async buscarPorCEP (cep) {
    const endereco = await buscarEnderecoPorCEP(cep);

    if (!endereco) throw new Error('Não foi possível pesquisar o endereço!');

    return {
      cep: endereco.cep,
      uf: endereco.state,
      cidade: endereco.city,
      bairro: endereco.neighborhood,
      rua: endereco.street
    }
  }
}