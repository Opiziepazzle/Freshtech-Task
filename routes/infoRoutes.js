const express = require('express');
const { fillInfo } = require('../controllers/infoController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/fill-info', protect, fillInfo);

module.exports = router;
