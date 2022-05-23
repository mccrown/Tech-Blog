
const router = require('express').Router()

const userRoutes = require('./user-routes')
const commentRoutes = require('./comment-routes')
const postRoutes = require('./post-routes')

//user or users
router.use('/users', userRoutes)
router.use('/comments', commentRoutes)
router.use('/posts', postRoutes)



module.exports = router