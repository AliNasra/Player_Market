require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
require('./models'); // Load associations
const app = express();

// Sync database
sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => console.error('Database sync error:', err));

// Middleware
app.use(express.json());

// Routes
app.use('/api', require('./routes'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;