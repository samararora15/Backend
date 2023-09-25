//import express

const express = require('express');
const userRouter = require('./routers/userRouter')
const productRouter = require('./routers/productRouter');

const cors = require('cors');

//initialize express

const app = express();
const port = 5000;

//middleware
//parse json data
app.use(express.json());
app.use(cors(
    {
        origin : ['http://localhost:3000']
    }
));

app.use( '/user', userRouter);
app.use('/product', productRouter);

app.get( '/', (req,res) => {
    res.send('response from express');
} );

app.get( '/add', (req,res) => {
    res.send('response from add');
} );

app.get( '/getall', (req,res) => {
    res.send('resposne from getall');
} );

app.get( '/update', (req,res) => {
    res.send('resposne from update');
} );

//add
//getall
//update

//starting the server
app.listen(port, () => {console.log('express server started')});

// step 1 - backend
// step 2 - npm init -y
// step 3 - npm i express.js
// step 4 - nodemon setup
// step 4 - index file and then routers