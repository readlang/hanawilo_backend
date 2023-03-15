// For '/category' endpoints
const getCategories = (req, res, next) => {
    // query params
    if ( Object.keys(req.query).length ) { // converts keys to array and checks length
        const category = req.query.category
        console.log(`Searching for category: ${category}`)
    }

    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'You hit me! Show me all the categories!' })
}

const createCategory = (req, res, next) => {
    res
    .status(201) // code for sucessful meaning "created"
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Create catergory with category name of ${req.body.categoryName} and gender of ${req.body.gender}` })
}

const deleteCategories = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'deleting the categories!' })
}

// For /category/:categoryId - single resource
const getCategory = (req, res, next) => {
    console.log(req.params)
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `show me the category with the category Id of ${req.params.categoryId}` })
}

const putCategory = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `update category with the category Id of ${req.params.categoryId}` })
}

const deleteCategory = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `delete category with the category Id of ${req.params.categoryId}` })
}

module.exports = {
    getCategories,
    createCategory,
    deleteCategories,

    getCategory,
    putCategory,
    deleteCategory
}