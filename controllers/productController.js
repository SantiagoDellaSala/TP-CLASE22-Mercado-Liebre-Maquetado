const {leerJSON, escribirJSON} = require('../data/index')
const fs = require('fs');

module.exports = {
    products : (req,res) => {
        const products = leerJSON('products');
        return res.render('products', {
            products
        })
    }
}