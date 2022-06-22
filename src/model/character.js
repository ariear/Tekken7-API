import mongoose from "mongoose";

const CharacterSchema = new mongoose.Schema({
    id: Number,
    name: String,
    short_name: String,
    gender: String,
    avatar: String,
    image: String,
    age: String,
    region: String
})

const Character = mongoose.model('Character', CharacterSchema)

export default Character