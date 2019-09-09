const express = require('express');
const db = require('../models/pgqueries');
const router = express.Router();

router.get('/runs', db.getRuns)
router.get('/runs/:id', db.getRunById)
router.post('/runs', db.createRun)
router.put('/runs', db.updateRun)
router.delete('/runs/:id', db.deleteRun)


module.exports = router;