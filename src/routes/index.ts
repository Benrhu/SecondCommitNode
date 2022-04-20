import express, { Express, Request, Response } from 'express'
import { LogInfo } from '../utils/logger'
import server from '../server'

server()

const rootRouter = express.Router()

rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('GET: httpp://localhost:8081')
})

server.use('/', rootRouter)

export default server