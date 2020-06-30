const express = require('express');
const app = express();
const port = 3000


const action = (req, res) => {
    req.url
    console.log('req.url: ', req.url)
}

app.get('/', action)
app.listen()