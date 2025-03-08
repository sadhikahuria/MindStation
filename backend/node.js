const express = require('express');
const fs = require('fs');
const axios = require('axios');
const router = express.Router();

router.post('/text-summary', async (req, res) => {
  const { filename } = req.body;
  const text = require('fs').readFileSync(`./uploads/${filename}`, 'utf-8');

  const response = await axios.post(
    'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
    { inputs: text },
    { headers: { 'Authorization': 'Bearer YOUR_FREE_HUGGINGFACE_TOKEN' } }
  );

  res.json({ summary: response.data[0].summary_text });
});

module.exports = router;
