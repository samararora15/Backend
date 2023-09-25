const mongoose = require('mongoose');

const url = "mongodb+srv://officialsamar404:roadto3000@cluster0.tbe3kft.mongodb.net/MyDatabase?retryWrites=true&w=majority";


//asynchronous function
mongoose.connect(url)
.then((result) => {
    console.log('database successfully connected');
}).catch((err) => {
    console.log(err);
});
module.exports = mongoose;

console.log('Stay Happy')