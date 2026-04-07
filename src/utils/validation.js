const { z } = require('zod');

// Player validation schema
const playerSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  birthDate: z.string().refine((date) => !isNaN(Date.parse(date)), { message: 'Invalid date' }),
  rating: z.number().min(0).max(100),
  salary: z.number().min(0),
  password: z.string().min(6),
  email: z.string().email(),
  userName: z.string().min(3),
});

// Fan validation schema
const fanSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  password: z.string().min(6),
  email: z.string().email(),
  userName: z.string().min(3),
});

// Login schema
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

module.exports = {
  playerSchema,
  fanSchema,
  loginSchema,
};