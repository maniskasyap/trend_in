const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.argv.slice(2)[0];
const app = express();
app.use(bodyParser.json());

app.get('/lookup', (req, res) => {
  console.log('Returning lookup!');
  res.send('lookup');
});

// app.use('/img', express.static(path.join(__dirname, 'img')));

console.log(`Lookup service listening on port ${port}`);
app.listen(port);
