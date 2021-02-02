const express = require('express')
const app = express()
const port = 2255
const db = require('./db')

app.get('/', (req, res) => {
    db.students.findAll({})
        .then(data => {
            res.send({
                msg: "Data fetched sucessfully",
                data
            })
        })
        .catch(err => {
            console.log(err)
            res.send({
                msg: err.message
            })
        })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})