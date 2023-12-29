const express = require('express');
const app = express();

app.get('/sum', (req, res) => {
  const { a, b } = req.query;
  const result = parseInt(a) + parseInt(b);
  res.json({ result });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
