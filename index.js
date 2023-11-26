const express = require('express')
const userRouter = require('./router/ruangans')
const connectDB = require('./config/db')

const app = express()
const port = 3000

// const cors = require('cors');

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 
// app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(userRouter)

connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
