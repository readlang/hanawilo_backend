// For the home domain (root url) "/" enpoint

const getRoot = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "This is the root 'home' route!" })
}

module.exports = {
    getRoot
}