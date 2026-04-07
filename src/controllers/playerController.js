// Player Controller
const players = []; // In-memory storage for demo

const getAllPlayers = (req, res) => {
  res.json(players);
};

const createPlayer = (req, res) => {
  const player = req.body;
  players.push(player);
  res.status(201).json(player);
};

const getPlayerById = (req, res) => {
  const id = req.params.id;
  const player = players.find(p => p.id == id);
  if (player) {
    res.json(player);
  } else {
    res.status(404).json({ message: 'Player not found' });
  }
};

const updatePlayer = (req, res) => {
  const id = req.params.id;
  const index = players.findIndex(p => p.id == id);
  if (index !== -1) {
    players[index] = { ...players[index], ...req.body };
    res.json(players[index]);
  } else {
    res.status(404).json({ message: 'Player not found' });
  }
};

const deletePlayer = (req, res) => {
  const id = req.params.id;
  const index = players.findIndex(p => p.id == id);
  if (index !== -1) {
    players.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Player not found' });
  }
};

module.exports = {
  getAllPlayers,
  createPlayer,
  getPlayerById,
  updatePlayer,
  deletePlayer
};