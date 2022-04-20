const express = require('express');
const router = express.Router();
const AlunosController = require('../controllers/AlunosController');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');

/* GET home page. */
router.get('/', AlunosController.index);

router.get('/queries/alunos', async (req, res) => {
  const [{ totalAlunos }] = await sequelize.query(
    `
      SELECT COUNT(*) as totalAlunos FROM alunos;
    `,
    { type: QueryTypes.SELECT }
  );

  return res.send({ totalAlunos });
});

router.get('/queries/alunos/1', async (req, res) => {
  const [{ totalAlunos }] = await sequelize.query(
    `
      SELECT COUNT(*) as totalAlunos
      FROM alunos
      WHERE alunos.nome LIKE ?
    `,
    {
      type: QueryTypes.SELECT,
      replacements: ['%th%']
    }
  );

  return res.send({ totalAlunos });
});

router.get('/queries/alunos/2', async (req, res) => {
  const [{ totalAlunos }] = await sequelize.query(
    `
      SELECT COUNT(*) as totalAlunos
      FROM alunos
      WHERE alunos.nome = $1
    `,
    {
      type: QueryTypes.SELECT,
      bind: ['Thiago']
    }
  );

  return res.send({ totalAlunos });
});

module.exports = router;