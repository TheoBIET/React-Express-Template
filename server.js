const express = require('express');
const app = express();
const port = 5000;
const routes = require('./routes')
app.use (express.json ());
app.use (express.urlencoded ({extended: true}));

app.use(routes);

app.listen(port, () => console.log(`API Listening at http://localhost/${port}`));