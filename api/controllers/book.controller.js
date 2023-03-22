const listBook = (req, res) => {
    res.status(200).send("API ok")
}

const createBook = (req, res) => {
    res.status(200).json(req.body)
}

module.exports = {
    listBook,
    createBook
}