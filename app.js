const express = require('express');
const { PORT } = require('./config');
const ServerMessage = require('./Utils/ServerMessage');
const bodyParser = require('body-parser');
const FileController = require('./Utils/FileController');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Router(app);
FileController(app);

app.listen(PORT, () => {
    console.log(`${ServerMessage(`Server is running on port ${PORT}`)}`);
});
