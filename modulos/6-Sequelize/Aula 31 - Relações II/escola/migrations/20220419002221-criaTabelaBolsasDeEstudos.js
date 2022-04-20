'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('bolsas_estudos', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true
      },

      nome_programa: Sequelize.DataTypes.STRING,
      numero_aplicacoes: Sequelize.DataTypes.INTEGER,
      status: Sequelize.DataTypes.BOOLEAN,
      empresa_anjo: Sequelize.DataTypes.STRING
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('bolsas_estudos');
  }
};
