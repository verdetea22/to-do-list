const express = require('express');
const router = express.Router();

// Example route for fetching all todos
router.get('/', (req, res) => {
  res.json({ message: 'Get all todos' });
});

// Export the router
module.exports = router;
