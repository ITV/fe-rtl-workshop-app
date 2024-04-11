const express = require('express');
const path = require('path');
const animalsRouter = require('./api/animals');

const app = express();

app.use('/api', animalsRouter);
app.use('/images', express.static(path.join(__dirname, './api/animals/metadata/images')));
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
