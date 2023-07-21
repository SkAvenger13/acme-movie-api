const express = require('express');
const app = express();
const {
  models: { Actor, Movie, Role },
} = require('./db');

app.get('/', (req, res, next) => {
  res.status(200).json({ test: 'working' });
});

app.get('/api/movies', async (req, res, next) => {
  const movies = await Moves.findAll();
  res.status(200).json(movies);
});

module.exports = app;
