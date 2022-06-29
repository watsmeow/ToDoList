const express = require('express')
const route = express.Router()

const controller = require('../controller/controller')
const services = require('../services/render')

route.post('/api/vi/createItem', controller.createItem)
route.get('/api/vi/getItems', controller.getItems)
route.delete('/api/vi/deleteItem/:id', controller.deleteItem)

route.get('/index', services.getList)

module.exports = route