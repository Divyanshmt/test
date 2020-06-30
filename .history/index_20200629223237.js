const express = require('express');
const app = express();
const port = 3000


const action = (req, res) => {
    console.log('req.url: ', req.url)
}

app.get('/', action)
app.listen(port, () => { console.log('server statrted: ', "server statrted"); })
