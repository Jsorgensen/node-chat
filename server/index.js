const express = require('express');
const bodyParser = require('body-parser');
const bc = require(__dirname + './controllers/messages_controller.js');

const app = express();

app.use( bodyParser.json());

const baseURL = '/api/messages';
app.post(baseURL, bc.create);
app.get(baseURL, bc.read);
app.put(`${baseURL}/:id`, bc.update);
app.delete(`${baseURL}/:id`, bc.delete);

const port = 3000;
applisten(port, () => {consolelog(`Server listening on port ${port}`);});