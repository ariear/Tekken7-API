import Character from "../model/character.js"

export const getCharacters = (req,res) => {
    Character.find({}).then(response => {
        res.status(200).json({
            status: true,
            method: 'GET',
            data: response
        })
    })
}

export const detailCharacter = (req,res) => {
    Character.findOne({id: req.params.id}).then(response => {
        if(response === null){
            return res.status(404).json({
                status: false,
                method: 'GET',
                message: 'ID Not Found'
            })
        }
        res.status(200).json({
            status: true,
            method: 'GET',
            data: response
        })
    }).catch(err => console.log(err))
}