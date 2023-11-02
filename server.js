const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', (req, res) => res.send('Happy Halloween!'));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));