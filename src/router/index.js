import express from 'express'
import { mainController } from '../controller/index.js'

const main = express()

main.get('/', mainController)

export default main