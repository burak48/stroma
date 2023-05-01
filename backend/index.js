import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import fs from 'fs';
const mockData = JSON.parse(fs.readFileSync('./mockData.json', 'utf-8'));

import { faker } from '@faker-js/faker';

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

app.post('/blog', (req, res) => {
  let newBlog = req.body;

  newBlog = {
    ...newBlog,
    id: faker.datatype.uuid(),
    date: faker.date.recent(),
    image: faker.image.city(320, 180),
  };

  const blogs = mockData;
  mockData.push(newBlog);

  fs.writeFileSync('./mockData.json', JSON.stringify(blogs, null, 2));

  res.status(200).json({ message: 'Blog added successfully' });
});

function getBlogById(blogId) {
  return mockData.find((blog) => blog.id === blogId);
}

app.get('/blog/:id', (req, res) => {
  const blogId = req.params.id;
  const blog = getBlogById(blogId);

  if (!blog) {
    return res.status(404).json({ error: 'Blog not found' });
  }

  res.json(blog);
});

app.delete('/blog/:id', (req, res) => {
  const blogId = req.params.id;
  const blogData = mockData;

  const blogIndex = blogData.findIndex((blog) => blog.id === blogId);
  // If the blog is not found, return a 404 error
  if (blogIndex === -1) {
    return res.status(404).send('Blog not found');
  }

  // Remove the blog from the array
  blogData.splice(blogIndex, 1);

  // Write the updated blogs data to the JSON file
  fs.writeFileSync('./mockData.json', JSON.stringify(blogData, null, 2));

  return res.status(200).send('Blog deleted successfully');
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
