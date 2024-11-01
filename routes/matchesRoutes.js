const express = require('express');
const router = express.Router();
const matchesController = require('../controllers/matchesController'); // Verifique se o nome do controlador está correto

// Rota para obter todas as partidas
router.get('/matches', matchesController.getMatches);

// Rota para criar uma nova partida
router.post('/matches', matchesController.createMatch);

// Rota para atualizar uma partida
router.put('/matches/:id', matchesController.updateMatch);

// Rota para deletar uma partida
router.delete('/matches/:id', matchesController.deleteMatch);

module.exports = router;
