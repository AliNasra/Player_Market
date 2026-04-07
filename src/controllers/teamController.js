const Team = require('../models/Team');

const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.findAll({ include: ['Players', 'Trainers', 'Owner', 'Stadium'] });
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTeam = async (req, res) => {
  try {
    const team = await Team.create(req.body);
    res.status(201).json(team);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTeamById = async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id, { include: ['Players', 'Trainers', 'Owner', 'Stadium'] });
    if (team) {
      res.json(team);
    } else {
      res.status(404).json({ message: 'Team not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTeam = async (req, res) => {
  try {
    const [updated] = await Team.update(req.body, { where: { team_ID: req.params.id } });
    if (updated) {
      const team = await Team.findByPk(req.params.id);
      res.json(team);
    } else {
      res.status(404).json({ message: 'Team not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTeam = async (req, res) => {
  try {
    const deleted = await Team.destroy({ where: { team_ID: req.params.id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Team not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Relationship endpoints
const addPlayerToTeam = async (req, res) => {
  try {
    const { playerId } = req.body;
    const team = await Team.findByPk(req.params.id);
    if (!team) return res.status(404).json({ message: 'Team not found' });

    await team.addPlayer(playerId);
    res.json({ message: 'Player added to team' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removePlayerFromTeam = async (req, res) => {
  try {
    const { playerId } = req.body;
    const team = await Team.findByPk(req.params.id);
    if (!team) return res.status(404).json({ message: 'Team not found' });

    await team.removePlayer(playerId);
    res.json({ message: 'Player removed from team' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addTrainerToTeam = async (req, res) => {
  try {
    const { trainerId } = req.body;
    const team = await Team.findByPk(req.params.id);
    if (!team) return res.status(404).json({ message: 'Team not found' });

    await team.addTrainer(trainerId);
    res.json({ message: 'Trainer added to team' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeTrainerFromTeam = async (req, res) => {
  try {
    const { trainerId } = req.body;
    const team = await Team.findByPk(req.params.id);
    if (!team) return res.status(404).json({ message: 'Team not found' });

    await team.removeTrainer(trainerId);
    res.json({ message: 'Trainer removed from team' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTeams,
  createTeam,
  getTeamById,
  updateTeam,
  deleteTeam,
  addPlayerToTeam,
  removePlayerFromTeam,
  addTrainerToTeam,
  removeTrainerFromTeam,
};