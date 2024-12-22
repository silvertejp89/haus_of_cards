# MySQL Docker Container - Projectarium

## Purpose

We use Docker to create an isolated MySQL environment for the **Haus of Cards** project. The container makes it easy to start and share the database among team members, and it can be reused for future projects within **Projectarium**.

---

## Instructions for Running the Container

### Container Settings

- **Container Name:** `projectarium-db`
- **Port Settings:**
  - **Host Port:** `3307`
  - **Container Port:** `3306`
- **Environment Variables:**
  - `MYSQL_ROOT_PASSWORD=my-secret-pw`
  - `MYSQL_DATABASE=haus_of_cards`

---

## How to Use the Container

### Starting the Container

1. Open Docker Desktop.
2. Find the container `projectarium-db` in the **Containers** tab.
3. Click **Start** to run the container.

### Connecting to the Database

Use the following settings to connect to MySQL:

- **Host:** `localhost`
- **Port:** `3307`
- **Username:** `root`
- **Password:** `my-secret-pw`
- **Database:** `haus_of_cards`

---

## Common Docker Commands

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

---

## Troubleshooting

### If `3307` is occupied

1. Stop the service using port `3307`, or
2. Use a different host port (e.g., `3308`) and update the settings.

### If the container doesn’t run

1. Check the logs in Docker Desktop.
2. Verify that you have a functional Docker installation.

---

## Contact

If you encounter issues, contact the [team lead or technical manager] for assistance.
