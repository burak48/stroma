# Backend for Blog Web Application

This is the backend of a blog web application. The backend is built with Node.js and uses the Express framework to expose an API for CRUD operations on a database of blog posts. The API can be used by the frontend to create, read, update, and delete blog posts. The database used for this application is a simple JSON file.

## Setup

1. Clone the repository
2. Navigate to the backend directory
3. Install the dependencies with npm install
4. Start the server with npm run dev or npm start

The server should now be running on http://localhost:3001. You can test the API by visiting http://localhost:3001/blogs in your web browser.

## API Endpoints

The following API endpoints are available:

### GET /blogss

Returns a list of all blog posts.

### GET /blogs/:id

Returns the blog post with the given ID.

### POST /blogs

Creates a new blog post with the given data.

### PUT /blogs/:id

Updates the blog post with the given ID.

### DELETE /blogs/:id

Deletes the blog post with the given ID.

## Testing

The backend includes a set of tests to ensure that the APIs are working correctly. You can run the tests using npm test.

## Database

The database used in this application is a mock database created using the faker.js library. It contains 7 blogs with randomly generated id, image, title, content, date, author. The database is re-generated each time the server is restarted.

## Technologies Used

- Node.js
- Express
- Faker.js
- Jest

## Contributing

If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
