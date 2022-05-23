
//have all teh routes such as homepage and login

const router = require('express').Router()
const sequelize = require('../config/connection')
//const models


router.get('/', (req, res) => {
    res.render('homepage')
})

module.exports = router; 