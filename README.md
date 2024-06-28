#User Management System
This project is a simple User Management System built with Angular 14. It allows you to:
Display a list of users with their names, emails, and roles.
Add new users with validation.
Edit existing user information.
Delete users with a confirmation dialog.
Assign roles to users.
Search for users by name or email.
Sort users by name or email.
Implement pagination with 10 users per page.

#Features
User List: Display a sortable and paginated list of users.
Add User: Form to add a new user with name, email, and role fields. Validates email format.
Edit User: Edit user information with validation.
Delete User: Confirmation dialog before deleting a user.
Role Management: Assign roles to users.
Search: Search users by name or email.

#Data Persistence: Uses local storage for data persistence.

#Responsive Design: Works well on both desktop and mobile devices.

#Prerequisites
Node.js (>= 14.x)
Angular CLI (>= 14.x)

#Installation
step 1: Clone the repository:

git clone https://github.com/your-username/user-management-system.git
cd user-management-system

step 2:Install the dependencies:

npm install

step 3: Start the development server:

ng serve

step 4: Open your browser and navigate to http://localhost:4200.

#Usage
User List: The default page displays a list of users. You can sort by name or email, search for users, and paginate through the list.
Add User: Click on the "Add User" button to open the add user form. Fill in the details and click "Add User" to save.
Edit User: Click on the "Edit" button next to a user in the list to open the edit form. Modify the details and click "Update User" to save changes.
Delete User: Click on the "Delete" button next to a user in the list. Confirm the deletion in the dialog box.
Search: Use the search box to filter users by name or email.
Pagination: Use the pagination buttons to navigate through the user list.

#Code Quality
The code is organized into separate components and services following Angular best practices.
Comments and documentation are provided for better readability and maintainability.

#Error Handling
Proper validation is implemented for forms, especially for email format.
Error messages are displayed appropriately for user inputs.
Confirmation dialogs are used to prevent accidental deletions.

#Responsiveness
The application is designed to be responsive and works well on different devices, including desktop and mobile.
