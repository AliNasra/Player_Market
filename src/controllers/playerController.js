// Player Controller
const Player = require('../models/Player');

const getAllPlayers = async (req, res) => {
  try {
    const players = await Player.findAll();
    res.json(players);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createPlayer = async (req, res) => {
  try {
    const player = await Player.create(req.body);
    res.status(201).json(player);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPlayerById = async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id);
    if (player) {
      res.json(player);
    } else {
      res.status(404).json({ message: 'Player not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePlayer = async (req, res) => {
  try {
    const [updated] = await Player.update(req.body, { where: { player_ID: req.params.id } });
    if (updated) {
      const player = await Player.findByPk(req.params.id);
      res.json(player);
    } else {
      res.status(404).json({ message: 'Player not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePlayer = async (req, res) => {
  try {
    const deleted = await Player.destroy({ where: { player_ID: req.params.id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Player not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllPlayers,
  createPlayer,
  getPlayerById,
  updatePlayer,
  deletePlayer
};