const express = require('express');
const app = express();
const port = 3000
const url = require('url')


const action = (req, res) => {
    console.log('req.url: ', url.parse(req.url))
    res.send('u recived this')
}

app.get('/test', action)
app.listen(port, () => { console.log('server statrted: ', "server statrted"); })
