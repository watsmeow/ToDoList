const express = require('express')
const { appendFile } = require('fs')
const connectDB = require('./server/database/connection')
const dotenv = require('dotenv')
const morgan = require('morgan')
const path = require('path')

const PORT = 7000

const app = express()
dotenv.config({path:'config.env'})
connectDB()

app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded())
app.use(morgan('tiny'))
app.use('/', require('./server/routes/router'))

app.use('/js', express.static(path.resolve(__dirname, "assets/js")))
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))

app.listen(PORT, (res, req) => {
    console.log(`server is running at http://localhost:${PORT}`)
})