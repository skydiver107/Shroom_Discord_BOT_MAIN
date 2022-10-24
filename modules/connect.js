const { dbConnection } = require('../config')
const mongoose = require('mongoose')

module.exports = {
    connect: () => {
        try {
            mongoose.connect(dbConnection)
            console.log('connected to database with succes!')
        } catch (err) {
            console.log(err)
        }
    }
}