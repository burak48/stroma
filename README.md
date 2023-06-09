# Blog Web Application

This is a web application for writing and sharing blog posts. It consists of a frontend built with React and a backend built with Node.js and Express.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

The web application has the following features:

- View a list of all blog posts on the home page
- View a detailed page of a blog post by clicking on it
- Create a new blog post by logging in and clicking on the "Add" button
- Edit and delete existing blog posts by logging in and clicking on the corresponding buttons on the detailed page

## Technologies

The frontend is built using:

- React
- React Router for routing
- Emotion for styling
- Axios for HTTP requests

The backend is built using:

- Node.js
- Express
- JSON Server for storing blog posts

## Getting Started

To get started, clone the repository to your local machine:

git clone https://github.com/burak48/stroma

## Configuration

To configure the application, create a .env file in the root directory of the project and set the following environment variables:

REACT_APP_API_URL=http://localhost:3001

## Running the Application

To run the application, first start the backend server:

```sh
cd backend
npm install
npm start
```

Then, start the frontend server:

```sh
cd frontend
npm install
npm start
```

The application will be running on http://localhost:3000.

## Testing

To run the tests for the backend, use the following command:

```sh
cd backend
npm test
```

To run the tests for the frontend, use the following command:

```sh
cd frontend
npm test
```

## Contributing

Contributions are welcome! If you find a bug or would like to request a new feature, please create an issue in the GitHub repository.

## License

This project is licensed under the MIT License.
