import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import fs from 'fs';
const mockData = JSON.parse(fs.readFileSync('./mockData.json', 'utf-8'));

const app = express();
const port = 3001;

// Add middleware for parsing request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add middleware for setting up CORS headers
app.use(cors());

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Validate email and password
  if (email === 'test@test.com' && password === '123') {
    return res.status(200).json({ message: 'Login successful!' });
  } else {
    return res.status(400).json({ message: 'Invalid email or password' });
  }
});

app.get('/blogs', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(mockData);
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
