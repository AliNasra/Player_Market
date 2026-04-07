const express = require('express');
const router = express.Router();

// Import controllers
const playerController = require('../controllers/playerController');
const teamController = require('../controllers/teamController');
const matchController = require('../controllers/matchController');
const fanController = require('../controllers/fanController');

// Player routes
router.get('/players', playerController.getAllPlayers);
router.post('/players', playerController.createPlayer);
router.get('/players/:id', playerController.getPlayerById);
router.put('/players/:id', playerController.updatePlayer);
router.delete('/players/:id', playerController.deletePlayer);

// Team routes
router.get('/teams', teamController.getAllTeams);
router.post('/teams', teamController.createTeam);
router.get('/teams/:id', teamController.getTeamById);
router.put('/teams/:id', teamController.updateTeam);
router.delete('/teams/:id', teamController.deleteTeam);
router.post('/teams/:id/players', teamController.addPlayerToTeam);
router.delete('/teams/:id/players', teamController.removePlayerFromTeam);
router.post('/teams/:id/trainers', teamController.addTrainerToTeam);
router.delete('/teams/:id/trainers', teamController.removeTrainerFromTeam);

// Match routes
router.get('/matches', matchController.getAllMatches);
router.post('/matches', matchController.createMatch);
router.get('/matches/:id', matchController.getMatchById);
router.put('/matches/:id', matchController.updateMatch);
router.delete('/matches/:id', matchController.deleteMatch);
router.post('/matches/:id/goals', matchController.addGoalToMatch);
router.post('/matches/:id/fouls', matchController.addFoulToMatch);
router.post('/matches/:id/tickets', matchController.addTicketToMatch);

// Fan routes
router.get('/fans', fanController.getAllFans);
router.post('/fans', fanController.createFan);
router.get('/fans/:id', fanController.getFanById);
router.put('/fans/:id', fanController.updateFan);
router.delete('/fans/:id', fanController.deleteFan);
router.post('/fans/:id/tickets', fanController.buyTicket);

// Auth routes
router.use('/auth', require('./auth'));

module.exports = router;