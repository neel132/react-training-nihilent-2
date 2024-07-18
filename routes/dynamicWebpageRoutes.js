// routes/dynamicWebpageRoutes.js
const express = require('express');
const { serveWebpage } = require('../controllers/dynamicWebpageController');
const router = express.Router();

router.get('/dashboard', serveWebpage);

module.exports = router;