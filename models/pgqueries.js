const { Pool, Client } = require('pg')
const connectionString = 'postgresql://joseph@localhost:5432/nikeRunningData'
const pool = new Pool({connectionString: connectionString})

const createRun = (request, response) => {
    const runId = request.body.id
    const {id, title, date, avg_pace, distance, duration, est_calories, location, notes } = request.body

    pool.query('INSERT INTO running_history (id, title, date, avg_pace, distance, duration, est_calories, location, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', 
    [id, title, date, avg_pace, distance, duration, est_calories, location, notes], (err, results) => {
        
        response.status(201).send(`Run added with Id: ${runId}`)
    })
}

const getRuns = (request, response) => {
    pool.query('SELECT * FROM running_history ORDER BY id DESC LIMIT 100', (error, results) => {
        if(error) {
            throw error;
        }
        response.status(200).json(results.rows)
    })
}

const getRunById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM running_history WHERE id = $1', [id], (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const updateRun = (request, response) => {
    const runId = request.body.id
    const { id, title, date, avg_pace, distance, duration, est_calories, location, notes } = request.body

    pool.query(
        'UPDATE running_history SET id = $1, title = $2, date = $3, avg_pace = $4, distance = $5, duration = $6, est_calories = $7, location = $8, notes = $9 WHERE id = $1', 
        [id, title, date, avg_pace, distance, duration, est_calories, location, notes],
        (error, results) => {
            if(error) {
                throw error
            }
            response.status(200).send(`Run modified with Id: ${runId}`);
        }
    )
}


const deleteRun = (request, response) => {
    const runId = parseInt(request.params.id)

    pool.query('DELETE FROM running_history WHERE id = $1', [runId], (error, result) => {
        if(error) {
            throw error
        }
        response.status(200).send(`Run deleted with id: ${runId}`)
    })
}

module.exports = {
    getRuns,
    getRunById,
    createRun,
    updateRun,
    deleteRun
}