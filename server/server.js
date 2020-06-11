require('./db/mongoose')
const path = require('path')
const express = require('express')
const cors = require('cors')
const charactersRouter = require('./routers/characters')

const app = express()

const publicPath = path.join(__dirname, '..', 'build')
const port = process.env.PORT || 8080

//enable Cross-Origin Resource Sharing
app.use(cors())

//parses incoming requests with JSON payloads
app.use(express.json())

app.use(express.static(publicPath))

app.use(charactersRouter)

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html' ))
})

app.listen(port, () => {
    console.log(`Server is up at port ${port}`)
})