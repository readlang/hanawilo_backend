// For '/category' endpoints

const getCategories = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'You hit me! Show me all the categories!' })
}

const createCategory = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Create catergory with category name of ${req.body.categoryName} and gender of ${req.body.gender}` })
}

const putCategory = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'You hit me! PUTPUTPUT the categories!' })
}

const deleteCategories = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'deleting the categories!' })
}

module.exports = {
    getCategories,
    createCategory,
    putCategory,
    deleteCategories
}