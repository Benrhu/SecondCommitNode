import dotenv from 'dotenv'
import server from './src/server'
import { LogInfo, LogSuccess, LogError }  from './src/utils/logger'

dotenv.config()

const port = process.env.PORT|| 8081

server.listen(port, () => console.log(`Example app listening on port ${port}!`))

server.on('error', (error) => {
    LogError(`[SERVER ERROR]: ${error}`)
})