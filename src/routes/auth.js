const express = require('express');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { playerSchema, fanSchema, loginSchema } = require('../utils/validation');
const { sendVerificationEmail } = require('../utils/email');
const { generateToken } = require('../utils/jwt');
const { hashPassword, comparePassword } = require('../utils/password');
const Player = require('../models/Player');
const Fan = require('../models/Fan');

const router = express.Router();

// Register Player
router.post('/register/player', async (req, res) => {
  try {
    const validatedData = playerSchema.parse(req.body);
    const hashedPassword = await hashPassword(validatedData.password);
    const verificationToken = crypto.randomBytes(32).toString('hex');

    const player = await Player.create({
      ...validatedData,
      password: hashedPassword,
      verificationToken,
    });

    await sendVerificationEmail(player.email, verificationToken);

    res.status(201).json({ message: 'Player registered. Check email for verification.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Register Fan
router.post('/register/fan', async (req, res) => {
  try {
    const validatedData = fanSchema.parse(req.body);
    const hashedPassword = await hashPassword(validatedData.password);
    const verificationToken = crypto.randomBytes(32).toString('hex');

    const fan = await Fan.create({
      ...validatedData,
      password: hashedPassword,
      verificationToken,
    });

    await sendVerificationEmail(fan.email, verificationToken);

    res.status(201).json({ message: 'Fan registered. Check email for verification.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Verify Email
router.get('/verify/:token', async (req, res) => {
  try {
    const { token } = req.params;

    let user = await Player.findOne({ where: { verificationToken: token } });
    if (!user) {
      user = await Fan.findOne({ where: { verificationToken: token } });
    }

    if (!user) {
      return res.status(400).json({ error: 'Invalid token' });
    }

    user.isActivated = true;
    user.verificationToken = null;
    await user.save();

    res.json({ message: 'Email verified successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = loginSchema.parse(req.body);

    let user = await Player.findOne({ where: { email } });
    if (!user) {
      user = await Fan.findOne({ where: { email } });
    }

    if (!user || !(await comparePassword(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    if (!user.isActivated) {
      return res.status(401).json({ error: 'Account not activated' });
    }

    const token = generateToken({ id: user.id, type: user.constructor.name });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;