// server-mvc.js — PART 3 complete (MVC entry point) + frontend hosting
require('dotenv').config();
const express = require('express');
const path = require('path');
const taskRoutes = require('./src/routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// NEW: serve the dashboard from /public (Express = the dining room door)
app.use(express.static(path.join(__dirname, 'public')));

// Health check moved to /health so "/" can show the home page
app.get('/health', (req, res) => {
  res.json({ message: 'Task API (MVC version) is ready!' });
});

// Every route inside taskRoutes is prefixed with /tasks
app.use('/tasks', taskRoutes);

app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(err.statusCode || 500).json({
    error: err.message || 'Internal Server Error',
  });
});

app.listen(PORT, () => {
  console.log(`MVC server running at http://localhost:${PORT}`);
});
