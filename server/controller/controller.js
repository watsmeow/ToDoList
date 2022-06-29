const item = require('../model/model')


exports.createItem = (req, res) => {
    if (!req.body) {
        res.send({message: `you're a jabroni`})
    }

    let newItem = new item({
        item: req.body.item
    })
    console.log(req.body)

    newItem 
        .save()
        .then(data => {
            res.redirect('/index')})
        .catch(err => {
            console.log(err)
        })
}


exports.deleteItem = (req, res) => {
    const id = req.params.id
    item.findByIdAndDelete(id)
        .then(
            res.send({message: `item deleted`})
        )
        .catch(err => {
            console.log(err)
        })
}

exports.getItems = (req, res) => {
    item.find()
        .then(data => {
            //console.log(data)
            res.send(data)
        })
        .catch(err => {
            console.log(err)
        })
}

