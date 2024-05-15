import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('../client/build'));

app.get('/api/lessons', (req, res) => {
  // This would typically fetch data from a database or another source
  res.json({ message: 'API is working' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
