import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3001;

// Add middleware for parsing request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Validate email and password
  if (email === 'test@test.com' && password === '123') {
    return res.status(200).json({ message: 'Login successful!' });
  } else {
    return res.status(400).json({ message: 'Invalid email or password' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
