const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const travelData = require('./travelData');

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 204 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
const port = 3001;
const Cors = cors(corsOptions);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(Cors);

app.get('/api/travel', (req, res) => {
    res.status(200).json({ message: travelData });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});