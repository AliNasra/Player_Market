const Match = require('../models/Match');

const getAllMatches = async (req, res) => {
  try {
    const matches = await Match.findAll({ include: ['team1', 'team2', 'Goals', 'Fouls', 'Tickets'] });
    res.json(matches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createMatch = async (req, res) => {
  try {
    const match = await Match.create(req.body);
    res.status(201).json(match);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getMatchById = async (req, res) => {
  try {
    const match = await Match.findByPk(req.params.id, { include: ['team1', 'team2', 'Goals', 'Fouls', 'Tickets'] });
    if (match) {
      res.json(match);
    } else {
      res.status(404).json({ message: 'Match not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMatch = async (req, res) => {
  try {
    const [updated] = await Match.update(req.body, { where: { match_ID: req.params.id } });
    if (updated) {
      const match = await Match.findByPk(req.params.id);
      res.json(match);
    } else {
      res.status(404).json({ message: 'Match not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteMatch = async (req, res) => {
  try {
    const deleted = await Match.destroy({ where: { match_ID: req.params.id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Match not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Relationship endpoints
const addGoalToMatch = async (req, res) => {
  try {
    const goal = await Goal.create({ ...req.body, match_ID: req.params.id });
    res.status(201).json(goal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addFoulToMatch = async (req, res) => {
  try {
    const foul = await Foul.create({ ...req.body, match_ID: req.params.id });
    res.status(201).json(foul);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addTicketToMatch = async (req, res) => {
  try {
    const ticket = await Ticket.create({ ...req.body, match_ID: req.params.id });
    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllMatches,
  createMatch,
  getMatchById,
  updateMatch,
  deleteMatch,
  addGoalToMatch,
  addFoulToMatch,
  addTicketToMatch,
};