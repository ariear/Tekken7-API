export const mainController = (req,res) => {
    res.status(200).json({
        message: 'Welcome to Tekken7 API 👋',
        documentation: 'https://github.com/ArieAkbarull/Tekken7-API'
    })
}