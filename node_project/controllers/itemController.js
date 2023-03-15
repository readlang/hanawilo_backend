

const getItems = (req, res, next) => {

    if (Object.keys(req.query).length) {
        const {
            gender,
            price,
            isClearance,
            colors,
            sizes
        } = req.query

        const filter = []

        if (gender) filter.push(gender)
        if (price) filter.push(price)
        if (isClearance) filter.push(isClearance)
        if (colors) filter.push(colors)
        if (sizes) filter.push(sizes)

        for (const query of filter) {
            console.log(`Searching item by ${query}`)
        }
    }
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')  // Saying that the payload will be JSON
    .json({message: 'Show me all the items'})  
}

const postItem = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Creating item with name of ${req.body.itemName}`})
}

const deleteItems = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'deleting the items!' })
}

// For /item/:itemId - single resource
const getItem = (req, res, next) => { 
    console.log(req.params)
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `show me the item with the item Id of ${req.params.itemId}` })
}

const putItem = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `update item with the item Id of ${req.params.itemId}` })
}

const deleteItem = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `delete item with the item Id of ${req.params.itemId}` })
}

module.exports = {
    getItems,
    postItem,
    deleteItems,

    getItem,
    putItem,
    deleteItem
}