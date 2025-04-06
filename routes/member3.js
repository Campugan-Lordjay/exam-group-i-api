router.put('/exams/:id', (req, res) => {
    const examId = parseInt(req.params.id);
    const updatedExam = req.body;
    const index = exams.findIndex(e => e.id === examId);
    
    if (index !== -1) {
      exams[index] = { ...exams[index], ...updatedExam };
      res.json({ message: 'Exam updated', exam: exams[index] });
    } else {
      res.status(404).json({ message: 'Exam not found' });
    }
  });