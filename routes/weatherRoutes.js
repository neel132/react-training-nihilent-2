// routes/weatherRoutes.js
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { getWeather, postWeather } = require('../controllers/weatherController');
const router = express.Router();

router.get('/', authMiddleware, getWeather);
router.post('/', authMiddleware, postWeather);

module.exports = router;