# Haus of Cards - Backend README

## Description

The backend for Haus of Cards, built using Node.js and Express, and connected to a MySQL database.

---

## Getting Started

### 1. Install Dependencies

In the terminal, navigate to the backend folder:

```bash
cd backend
npm install
```

### 2. Run the Server

Start the backend server:

```bash
node src/app.js
```

The backend runs on:  
`http://localhost:3001`

---

## Using Docker for MySQL

We use Docker to create an isolated MySQL environment for the project.

### Container Settings

- **Container Name:** `projectarium-db`
- **Port Settings:**
  - **Host Port:** `3307`
  - **Container Port:** `3306`
- **Environment Variables:**
  - `MYSQL_ROOT_PASSWORD=<your-password>`
  - `MYSQL_DATABASE=<your-database-name>`

### Starting the Container

1. Open Docker Desktop.
2. Find the container `projectarium-db` in the **Containers** tab.
3. Click **Start** to run the container.

### Connecting to the Database

Use the following settings to connect to MySQL:

- **Host:** `localhost`
- **Port:** `3307`
- **Username:** `root`
- **Password:** `<your-password>`
- **Database:** `<your-database-name>`

### Common Docker Commands

For terminal users, you can also use the following commands:

- **Start the container:**
  ```bash
  docker start projectarium-db
  ```
- **Stop the container:**
  ```bash
  docker stop projectarium-db
  ```
- **Check if the container is running:**
  ```bash
  docker ps
  ```

### Troubleshooting

#### If `3307` is occupied

1. Stop the service using port `3307`, or
2. Use a different host port (e.g., `3308`) and update the settings.

#### If the container doesn’t run

1. Check the logs in Docker Desktop.
2. Verify that you have a functional Docker installation.

---

## Project Structure

```plaintext
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

---

## Dependencies

- Express
- MySQL2
- Cors

## API Endpoints

- **GET `/`**: Returns a welcome message.

---

## Authors

- **Kriss**
