Food Ordering App
This is a simple food ordering application designed using React. It consists of several components and functionalities.

Components
Header
Includes the logo of the app.
Navigation links: Home, About, Cart.
Body
Search bar for finding specific food items.
Search button to initiate the search process.
Place cards displaying images, ratings, and costs of food items.
Footer
Contains various links related to the app.
Installation and Setup

Initialize npm for package.json:
npm init

Install Parcel as a dev dependency:
npm install -D parcel

Install React and React-DOM:
npm install react react-dom

Remove the main field from package.json.

Run Parcel on index.html:
npx parcel index.html

Add scripts in package.json for convenience:

"scripts": {
"start": "parcel index.html",
"build": "parcel build index.html"
}

To start the application, run:
npm start

Data Passing
Props are used to pass data between components. They serve as arguments to functions within components.

Viewing JSON Data
You can use a JSON viewer plugin to easily visualize and navigate JSON data.

Config Driven UI
The application follows a "config driven UI" approach, where the website's behavior and appearance are determined by data configurations rather than hard-coded values. This enhances flexibility and scalability in managing the application's content and functionality.

Unique Key Property
Each item in React components should be represented uniquely using a key property. If not, React will re-render everything, leading to inefficient rendering. Unique keys help React identify which items have changed, been added, or been removed, resulting in optimized rendering performance.
