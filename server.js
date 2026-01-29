import express from 'express'
import cors from 'cors'
import apiRouter from './src/routes/index.js'

const server = express()
const port =  process.env.PORT || 3000;
const host = '0.0.0.0'

server.use(cors())
server.use(express.json())
server.use('/api' , apiRouter)

server.listen(port, host , () => {
    console.log('Сервер запущен')
})
