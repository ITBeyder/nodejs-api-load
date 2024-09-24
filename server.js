const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to log incoming requests
app.use((req, res, next) => {
  const { method, url, body } = req;
  console.log(`Incoming request: ${method} ${url}`);
  if (Object.keys(body).length > 0) {
    console.log(`Request body: ${JSON.stringify(body)}`);
  }
  next(); // Pass control to the next middleware or route handler
});

// Simple endpoint to demonstrate API usage
app.post('/api/data', (req, res) => {
  // Simulate processing by responding after a short delay
  setTimeout(() => {
    res.json({ message: "Data received", data: req.body });
  }, 100); // Simulate some processing time
});

// Health check
app.get('/health', (req, res) => {
  res.send('OK');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
