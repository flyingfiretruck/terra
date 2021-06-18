const express = require('express');
const session = require('express-session');

const app = express();
const path = require('path');

const port = 3000;

app.use(express.static('client/dist'));
app.use(express.json());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});
