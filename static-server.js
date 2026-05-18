const express = require('express');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname), {
  redirect: false,
  extensions: false,
  index: false,
  fallthrough: true,
}));

// 404 handler (optional but recommended)
app.use((req, res) => {
  console.warn(`[${new Date().toISOString()}] 404 Not Found: ${req.url}`);
  res.status(404).send('Not Found');
});

// Error handler (timestamps included)
app.use((err, req, res, next) => {
  const now = new Date().toISOString();

  console.error(`[${now}] --- ERROR ---`);
  console.error(err.stack || err);

  res.status(500).send('Internal Server Error');
});

// Process-level errors (also timestamped)
process.on('uncaughtException', (err) => {
  console.error(`[${new Date().toISOString()}] Uncaught Exception:`, err);
});

process.on('unhandledRejection', (err) => {
  console.error(`[${new Date().toISOString()}] Unhandled Rejection:`, err);
});

// Start server
app.listen(8080, () => {
  console.log(`[${new Date().toISOString()}] Static server running on port 8080`);
});