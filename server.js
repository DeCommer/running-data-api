const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/pgqueries');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile('index.html')
  })
  
  app.get('/runs', db.getRuns)
  app.get('/runs/:id', db.getRunById)
  app.post('/runs', db.createRun)
  app.put('/runs', db.updateRun)
  app.delete('/runs/:id', db.deleteRun)


app.listen(port, () => console.log(`App is running on port: ${port}.`));

