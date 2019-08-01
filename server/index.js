const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 3000
const db = require('./db')
const routes = require('./routes')
const helmet = require('helmet')

app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(bodyParser.json())

app.use(helmet())

app.use(routes)

app.use((err, req, res, next) => {
    if  (!err.code) {
        res.status(500)
    } else {
        res.status(err.code)
    }
	res.json({error: 'Not found'})
})

db.connection.once('open', () => {
    app.listen(port, () => console.log(`Server started on port ${port}`))
})