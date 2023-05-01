# Frontend for Blog Web Application

This is the frontend of a simple web application that allows users to create, read, update, and delete blog posts. The application is built using React.js and uses the React Router library for navigation. It also includes a form for creating and editing blog posts, as well as a breadcrumb component for easy navigation. The app has been tested using Jest and includes a GitHub Action for continuous integration.

## Getting Started

To run the application locally, you'll need to have Node.js installed. Once you have Node.js installed, follow these steps:

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the project directory.
3. Run the command npm install to install all required dependencies.
4. Run the command npm start to start the application.
5. Open your web browser and navigate to http://localhost:3000 to view the application.

## Dependencies

This application uses the following dependencies:

-   react: a JavaScript library for building user interfaces.
-   react-dom: a package that provides DOM-specific methods that can be used at the top level of a web application to enable interaction with a web page.
-   axios: a Promise based HTTP client for the browser and node.js.
-   emotion css: a CSS-in-JS library for React that provides a more intuitive way of styling your components

## Components

The frontend of this application is composed of the following components:

-   App: The main component that renders the entire application. This component contains the state of the application and manages the API calls to the backend.
-   BlogDetail: This component displays the details of a single blog post. Users can edit or delete the post from here.
-   BlogList: This component displays a list of all blog posts available in the database.
-   Breadcrumb: This component shows a breadcrumb navigation trail for users to easily navigate to different pages within the application.
-   Home: This component is the landing page of the application. It displays all blogs.
-   Login: This component provides a login form for users to access the application's features. Users must be authenticated in order to create, edit or delete blog posts.

## Styling

The application uses Emotion for styling its components. Emotion is a popular CSS-in-JS library that provides powerful and flexible tools for styling React components.

Emotion allows us to write our styles in JavaScript code, which gives us more flexibility and control over our styles

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
