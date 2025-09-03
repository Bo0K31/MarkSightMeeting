const express = require('express');
const {getMeetings, createMeeting, updateMeeting, deleteMeeting} = require('../controllers/meeting');

const router = express.Router();

router.route('/').get(getMeetings).post(createMeeting);
router.route('/:id').put(updateMeeting).delete(deleteMeeting);

module.exports = router;