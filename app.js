const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

//middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({extended : false}))

//rest api
app.get('/', (req, res) =>{
    res.send("<h1>Server is running</h1>")
})

const PORT = process.env.PORT || 8087

//routes
app.use('/auth', require('./routes/jwtRoutes'))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})