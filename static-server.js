const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname), {
  redirect: false,
  extensions: false,
  index: false,
}));

app.listen(8080, () => {
  console.log('Static server running on port 8080');
});