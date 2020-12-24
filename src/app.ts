import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import './database/connection'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/users', routes)

const port = process.env.PORT || 8080
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
)
