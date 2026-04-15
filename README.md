# Scalable REST API with Authentication & Role-Based Access Control

## Features

- User registration & login with JWT authentication
- Password hashing using bcrypt
- Role-based access control (Admin/User)
- Logout clears JWT token from browser storage
- Protected CRUD APIs for tasks
- API versioning (/api/v1)
- MongoDB schema design
- Swagger API documentation
- Centralized error handling
- Basic frontend UI for testing authentication and task CRUD APIs

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- JWT
- Bcrypt
- Swagger

### Frontend
- React.js (Basic UI)
- Axios (API requests)
- JWT-based authentication flow

## Test Admin Credentials

Email: admin@test.com
Password: admin123

This account has role: admin and can delete any task.

## Installation

Clone repository:


git clone https://github.com/aditishukla16/backend-assignment


### Backend Setup


cd server
npm install
npm run dev


### Frontend Setup (if included)


cd client
npm install
npm start


Frontend runs on:


http://localhost:3000


Backend runs on:


http://localhost:5000


## Environment Variables

Create a `.env` file inside server folder:


PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


## API Documentation

Swagger available at:


http://localhost:5000/api-docs


Interactive testing steps:

1. Register or login user
2. Copy JWT token
3. Click **Authorize** button
4. Access protected task routes

## Authentication Flow

1. Register user
2. Login to receive JWT token
3. Use token in header:


Authorization: Bearer <token>


## Role-Based Access Control

User:
- Create own tasks
- View own tasks

Admin:
- View all tasks
- Delete any task



## Frontend Functionality

The frontend provides a minimal interface to interact with backend APIs:

- User registration page
- Login page with JWT authentication
- Protected dashboard after login
- Create tasks
- View tasks list
- Delete tasks (admin only)
- Display API success/error messages

Frontend communicates with backend using:


http://localhost:5000/api/v1


## Project Structure


server/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── docs/
└── utils/

client/
├── components/
├── pages/
└── services/


## Scalability Improvements (Future Enhancements)

- Introduce Redis caching
- Add database indexing
- Separate authentication into microservice
- Add centralized logging (Winston)
- Containerize application using Docker
- Deploy behind load balancer for horizontal scaling