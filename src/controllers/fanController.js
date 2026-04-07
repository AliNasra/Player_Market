const Fan = require('../models/Fan');

const getAllFans = async (req, res) => {
  try {
    const fans = await Fan.findAll({ include: ['Tickets'] });
    res.json(fans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createFan = async (req, res) => {
  try {
    const fan = await Fan.create(req.body);
    res.status(201).json(fan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getFanById = async (req, res) => {
  try {
    const fan = await Fan.findByPk(req.params.id, { include: ['Tickets'] });
    if (fan) {
      res.json(fan);
    } else {
      res.status(404).json({ message: 'Fan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateFan = async (req, res) => {
  try {
    const [updated] = await Fan.update(req.body, { where: { fan_ID: req.params.id } });
    if (updated) {
      const fan = await Fan.findByPk(req.params.id);
      res.json(fan);
    } else {
      res.status(404).json({ message: 'Fan not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteFan = async (req, res) => {
  try {
    const deleted = await Fan.destroy({ where: { fan_ID: req.params.id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Fan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Relationship endpoints
const buyTicket = async (req, res) => {
  try {
    const ticket = await Ticket.create({ ...req.body, fan_ID: req.params.id });
    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllFans,
  createFan,
  getFanById,
  updateFan,
  deleteFan,
  buyTicket,
};