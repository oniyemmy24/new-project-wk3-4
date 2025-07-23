const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./data/database');
require('dotenv').config();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/items', require('./routes/items'));
app.use('/api-docs', require('./routes/swagger'));

db.initDb().then(() => {
  app.listen(port, () => console.log(`Server running on port ${port}`));
}).catch((err) => console.error(err));
