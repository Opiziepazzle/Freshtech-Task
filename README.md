Express & MongoDB Authentication Project

This project is a simple Node.js application using Express and MongoDB for user authentication and information management. It includes functionalities for signup, login, password change, and filling in user information with options for network selection, phone number, and Airtime Share Pin.

Features

User Signup: Register users with email and password.
User Login: Authenticate users with email and password, returning a JWT token.
Password Change: Allow users to change their password by providing the current password, new password, and confirmation of the new password.
Fill Info: Users can provide additional information such as network selection (MTN, Airtel, Etisalat), phone number, and Airtime Share Pin.


Project Structure

/project-root
│
├── /controllers
│   └── authController.js         # Handles authentication logic
│   └── infoController.js         # Handles user info logic
├── /models
│   └── userModel.js              # Defines the user schema and model
│   └── infoModel.js              # Defines the user info schema and model
├── /routes
│   └── authRoutes.js             # Routes for signup, login, and password change
│   └── infoRoutes.js             # Routes for filling in user info
├── /middleware
│   └── authMiddleware.js         # JWT authentication middleware
├── app.js                        # Entry point for the application
├── package.json
└── .env                          # Environment variables configuration


Installation
Clone the repository:

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

Install dependencies:

npm install


Set up environment variables:
Create a .env file in the root directory with the following variables:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000


Start the application:
npm start


The application will run on http://localhost:5000.

Endpoints
Auth Routes
POST /auth/signup - User Signup

Request Body:
{
  "email": "user@example.com",
  "password": "yourpassword"
}

POST /auth/login - User Login
Request Body:
{
  "email": "user@example.com",
  "password": "yourpassword"
}

Response:
{
  "token": "jwt-token"
}

POST /auth/change-password - Change Password (Protected Route)
Request Headers:
{
  "Authorization": "Bearer jwt-token"
}

Request Body:
{
  "currentPassword": "yourcurrentpassword",
  "newPassword": "newpassword",
  "confirmNewPassword": "newpassword"
}

Info Routes
POST /info/fill-info - Fill Info (Protected Route)
Request Headers:
{
  "Authorization": "Bearer jwt-token"
}

Request Body:
{
  "network": "MTN",
  "phoneNumber": "08012345678",
  "airtimePin": "1234"
}

Dependencies
Express: Web framework for Node.js
Mongoose: MongoDB object modeling tool
Bcryptjs: Library to hash and compare passwords
Jsonwebtoken: Library to generate and verify JWT tokens
Dotenv: Module to load environment variables from a .env file
Running Tests
To run tests (if any), use:

npm test


License
This project is licensed under the MIT License - see the LICENSE file for details.# Freshtech-Task/backend
