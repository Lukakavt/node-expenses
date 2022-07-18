const express = require('express');

const app = express();
const port = 3300;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const routes = require('./routes');

routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
