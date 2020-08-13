const app = require('./app');

const port = process.env.PORT || 3300;

app.listen(port, () => {
  console.log(`Test API is listening at http://localhost:${port}`);
});