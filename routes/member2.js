let exams = [];

router.post('/exams', (req, res) => {
  const exam = req.body;
  exams.push(exam);
  res.status(201).json({ message: 'Exam added', exam });
});