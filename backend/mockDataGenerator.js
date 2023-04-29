import { faker } from '@faker-js/faker';
import fs from 'fs';

const generateBlogs = (count) => {
  const blogs = [];

  for (let i = 0; i < count; i++) {
    const blog = {
      id: faker.datatype.uuid(),
      image: faker.image.city(320, 180),
      title: faker.lorem.words(),
      content: faker.lorem.paragraphs(),
      date: faker.date.recent(),
    };

    blogs.push(blog);
  }

  return blogs;
};

const mockData = generateBlogs(7);
fs.writeFileSync('./mockData.json', JSON.stringify(mockData));
