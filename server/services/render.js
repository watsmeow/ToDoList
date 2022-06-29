const axios = require('axios')

exports.getList = (req, res) => {
    axios.get('http://localhost:7000/api/vi/getItems')
        .then(function(response) {
            console.log(response.data
                )
            res.render('index', {items: response.data})
        })
        .catch(err => {
            console.log(err)
        })
}

