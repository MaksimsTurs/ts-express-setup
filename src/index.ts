import express, { type Express } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import startListenServer from './configuration/startListenServer.config'

const Server: Express = express()

dotenv.config()

Server
.use(cors())
.use(express.json())
.use(express.urlencoded({ extended: true }))
.listen(process.env.SERVER_DEV_PORT, startListenServer)

export default Server