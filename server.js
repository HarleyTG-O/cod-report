const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the respective directories
app.use('/basic', express.static(path.join(__dirname, 'basic')));
app.use('/beta', express.static(path.join(__dirname, 'beta')));
app.use('/docs', express.static(path.join(__dirname, 'docs')));
app.use('/public', express.static(path.join(__dirname, 'public')));

// Handle API requests
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from API' });
});

// Handle all other routes by serving the main HTML file from the public directory
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});