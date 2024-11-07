import cors from 'cors'
import express from 'express'
import sampleRouter from './routes/sample'

const app = express()
const port = 8081

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/sample', sampleRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`))
