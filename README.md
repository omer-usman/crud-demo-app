CRUD Demo App
This is a simple CRUD (Create, Read, Update, Delete) application built using React, Redux, React Router, Ant Design, Formik, and Yup. The application allows users to manage a list of courses. It includes role-based access control, where only users with the 'admin' role can add new courses.

Features
•	Course Management: Add, view, and manage courses.
•	Role-Based Access Control: Only 'admin' users can add new courses.
•	State Management: Uses Redux for state management.
•	Routing: Uses React Router for navigation.
•	UI Components: Uses Ant Design for a modern UI.
•	Form Handling: Uses Formik for form management and Yup for validation.
Technologies Used
•	React: For building the user interface.
•	Redux: For state management.
•	React Router: For routing.
•	Ant Design: For UI components.
•	Formik: For form handling.
•	Yup: For form validation.
Getting Started
Prerequisites
•	Node.js and npm installed on your machine.
Installation
1.	Clone the repository:
git clone https://github.com/yourusername/crud-demo-app.git
cd crud-demo-app
 
2.	Install the dependencies:
npm install
 
Running the Application
1.	Start the development server:
npm start
 
2.	Open your browser and navigate to http://localhost:3000.
Project Structure
•	src/components: Contains the React components for the application.
o	CourseList.js: Component to list all courses.
o	CourseForm.js: Component to add/edit a course.
o	ProtectedRoute.js: Component to protect routes based on user roles.
•	src/redux: Contains the Redux setup.
o	actions.js: Defines Redux actions.
o	reducers.js: Defines Redux reducers.
o	store.js: Configures the Redux store.
•	src/App.js: Main application component.


