const express = require('express');
const app = express();
const {
  models: { Actor, Movie, Role },
} = require('./db');

app.get('/', (req, res, next) => {
  res.status(200).json({ test: 'working' });
});

app.get('/api/movies', async (req, res, next) => {
  const movies = await Movie.findAll();
  res.status(200).send(movies);
});

app.get('/api/actors', async (req, res, next) => {
  const actors = await Actor.findAll();
  res.status(200).send(actors);
});

module.exports = app;
