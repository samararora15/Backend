const {Schema, model} = require('../connection');

const myschema = new Schema({
    // key value pairs
    name : String,
    model : String,
    price: Number
});

module.exports = model( 'productsData', myschema);