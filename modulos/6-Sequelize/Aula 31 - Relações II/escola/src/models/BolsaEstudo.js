module.exports = (sequelize, DataTypes) => {
  const BolsaEstudo = sequelize.define('BolsaEstudo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },

    nome_programa: DataTypes.STRING,
    numero_aplicacoes: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    empresa_anjo: DataTypes.STRING
  }, {
    tableName: 'bolsa_estudos',
    timestamps: false,
  });

  return BolsaEstudo
}