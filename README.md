# Flagpost – Task List REST API

A task manager built for **SYD204**. It has a Node.js + Express backend, a MySQL database (Aiven Cloud), and a dashboard that talks to the API.

## Features

- Full CRUD REST API: create, read, update, delete tasks
- MySQL storage, so data survives server restarts
- MVC structure (routes, controllers, models)
- Parameterized queries, which protect against SQL injection
- Secrets kept in `.env`, never committed
- Dashboard with stats, progress flags, a 7-day chart, search, filter, sort and JSON export
- Home page theme picker (Classic, Ocean, Sunset, Forest, Purple) and dark mode

## Tech stack

Node.js, Express, mysql2, dotenv, MySQL 8 (Aiven), HTML/CSS/JavaScript

## API endpoints

| Method | URL | Purpose | Success |
|--------|-----|---------|---------|
| GET | `/health` | Health check | 200 |
| GET | `/tasks` | List all tasks | 200 |
| GET | `/tasks/:id` | Get one task | 200 |
| POST | `/tasks` | Create a task | 201 |
| PUT | `/tasks/:id` | Replace title and completed | 200 |
| PATCH | `/tasks/:id` | Update title and/or completed | 200 |
| DELETE | `/tasks/:id` | Delete a task | 204 |

Errors: `400` bad input, `404` task not found, `500` server or database error.

## Project structure

```
task-api/
├── server-mvc.js          entry point
├── database/schema.sql    creates the tasks table
├── public/index.html      dashboard (frontend)
└── src/
    ├── db.js              MySQL connection pool
    ├── routes/            URL to controller mapping
    ├── controllers/       validation and HTTP responses
    └── models/            SQL queries only
```

## Getting started

1. Install Node.js 18 or newer.
2. Install packages:
   ```
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in your own database details.
4. Download your service's CA certificate from Aiven and save it as `ca.pem` in the project root.
5. Run `database/schema.sql` in MySQL Workbench to create the `tasks` table.
6. Start the server:
   ```
   npm run start:mvc
   ```
7. Open http://localhost:3000

## Environment variables

```
PORT=3000
DB_HOST=your_host
DB_PORT=your_port
DB_USER=your_username
DB_PASS=your_password
DB_NAME=defaultdb
DB_SSL=REQUIRED
```

`.env` and `ca.pem` are listed in `.gitignore` and should never be committed.

## Author

Sonam Wangchuk – API practical
