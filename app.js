const express = require('express');
const bodyParser = require('body-parser');
const db = require('./pgq');
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', db.getRuns)
app.get('/:id', db.getRunById)
app.post('/', db.createRun)
app.put('/', db.updateRun)
app.delete('/:id', db.deleteRun)


app.listen(port, () => {
    console.log(`App is running on port: ${port}.`);
})

