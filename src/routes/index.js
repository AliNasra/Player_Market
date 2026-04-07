const express = require('express');
const router = express.Router();

// Import controllers
const playerController = require('../controllers/playerController');

// Routes
router.get('/players', playerController.getAllPlayers);
router.post('/players', playerController.createPlayer);
router.get('/players/:id', playerController.getPlayerById);
router.put('/players/:id', playerController.updatePlayer);
router.delete('/players/:id', playerController.deletePlayer);

module.exports = router;