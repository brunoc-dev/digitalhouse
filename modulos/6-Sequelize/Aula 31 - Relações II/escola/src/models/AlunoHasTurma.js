module.exports = (sequelize, dataTypes) => {
  const AlunoHasTurma = sequelize.define('AlunoHasTurma', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    aluno_id: {
      type: dataTypes.INTEGER,
      allowNull: false
    },

    turma_id: {
      type: dataTypes.INTEGER,
      allowNull: false
    },

    numero_faltas: {
      type: dataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'alunos_has_turmas',
    timestamps: false
  });

  return AlunoHasTurma;
}