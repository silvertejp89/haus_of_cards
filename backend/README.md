# Haus of Cards - Backend README

## Description

The backend for Haus of Cards, built using Node.js and Express, and connected to a MySQL database.

## Getting Started

### 1. Install Dependencies

In the terminal, navigate to the backend folder:

```
cd backend
npm install
```

### 2. Run the Server

Start the backend server:

```
node src/app.js
```

The backend runs on:  
`http://localhost:3000`

## Project Structure

```
backend/
├── src/
│   ├── routes/      # API routes
│   ├── models/      # Database models
│   ├── middleware/  # Middleware functions
│   ├── config/      # Configuration files
│   ├── utils/       # Utility functions
│   └── app.js       # Main server file
├── package.json     # Backend dependencies
├── package-lock.json
└── README.md        # Backend documentation
```

## Dependencies

- Express
- MySQL2
- Cors

## API Endpoints

- **GET `/`**: Returns a welcome message.

## Authors

- **Kriss**
