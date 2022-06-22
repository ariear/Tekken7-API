import express from 'express'
import { getCharacters , detailCharacter } from '../controller/character.js'

const character = express()

character.get('/characters', getCharacters)
character.get('/character/:id', detailCharacter)

export default character