const espress = require('express');
const cors = require('cors');

const app = espress();

app.use(cors());
app.use(espress.json());

app.get('/', (req, res) => {
    res.send('Hello World! mundo');
});

module.exports = app;