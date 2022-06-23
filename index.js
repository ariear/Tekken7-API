import express from 'express'
import mongoose from 'mongoose';
import 'dotenv/config'
import cors from 'cors'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import character from './src/router/character.js';
import main from './src/router/index.js';

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use('/public', express.static(path.join(__dirname,'./public')))
app.use(cors())

app.use(main)
app.use(character)

mongoose.connect(process.env.APP_DB).then(() => {
    app.listen(3000, () => {
        console.log('App listen on port 3000');
    })
}).catch(err => console.log(err))