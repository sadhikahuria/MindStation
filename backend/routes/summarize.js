require('dotenv').config();
const express = require('express');
const router = express.Router();
const fs = require('fs');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new (require('@google/generative-ai')).GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

router.post('/text-summary', async (req, res) => {
  const { filename } = req.body;
  const text = fs.readFileSync(`./uploads/${filename}`, 'utf-8');

  const prompt = `Summarize the following notes:\n\n${text}`;

  const result = await model.generateContent(prompt);
  res.json({ summary: result.response.text() });
});

module.exports = router;
