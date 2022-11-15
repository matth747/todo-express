const router = require('express').Router();
const results = require

router.get('/api/notes', (req, res) => {
    
    res.json(results);
  });

router.get('/api/notes/:id', (req, res) => {
  res.json(results)
});

router.post('/api/notes', (req, res) => {
  req.body.
  res.json(results)
});