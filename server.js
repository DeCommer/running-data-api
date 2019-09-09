const express = require('express');
const bodyParser = require('body-parser');
const runRoutes = require('./routes/routes')
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.use(runRoutes)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile('index.html')
  })
  

app.listen(port, () => console.log(`App is running on port: ${port}.`));

