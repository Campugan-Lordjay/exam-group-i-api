const express = require('express');
const router = express.Router();

router.get('/exams', (req, res) => {
  const exams = [
    { id: 1, name: 'Math Exam', date: '2025-04-10' },
    { id: 2, name: 'Science Exam', date: '2025-04-15' }
  ];
  res.json(exams);
});

module.exports = router;