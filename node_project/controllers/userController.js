

const getUsers = (req, res, next) => {
    if (Object.keys(req.query).length) {
        const {
            userName,
            gender
        } = req.query
        
        const filter = []

        if (userName) filter.push(userName)
        if (gender) filter.push(gender)

        for (const query of filter) {
            console.log(`Searching users by ${query}`)
        }
    }

    res
    .status(200)
    .setHeader('Content-Type', 'application/json')  // Saying that the payload will be JSON
    .json({message: 'Show me all the users'})  
}

const postUser = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Creating user with name of ${req.body.userName}`})
}

const deleteUsers = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'deleting the users!' })
}

// For /user/:userId - single resource
const getUser = (req, res, next) => {
    console.log(req.params)
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `show me the user with the user Id of ${req.params.userId}` })
}

const putUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `update user with the user Id of ${req.params.userId}` })
}

const deleteUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `delete user with the user Id of ${req.params.userId}` })
}

module.exports = {
    getUsers,
    postUser,
    deleteUsers,

    getUser,
    putUser,
    deleteUser
}