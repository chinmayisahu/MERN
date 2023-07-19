const express = require('express');
const bodyParser = require('body-parser')


const app = express();
app.use(bodyParser);

app.get('', (req, res) => {
    //const body = res.body;
    res.send({'hi': 'Chinmayii'});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);