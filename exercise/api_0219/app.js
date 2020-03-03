/*   ------- 官方初始範例----------

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
}); 
    -------官方範例---------- */


const express = require('express'); // 要用express所以一定要先引用
const app = express();
const moongoose = require('mongoose');  // 要用mongoDB所以要用這個套件
const bodyParser = require('body-parser'); // 引用中介 解析JSON的套件
const cors = require('cors'); // 引用cors
require('dotenv/config'); // import env file


//Middleware Cors
app.use(cors());

// 要確認所有的 request 都要先經過 bodyParser 才可以
app.use(bodyParser.json());


// Import Routes
const postRoute = require('./routes/posts');

//Middleware
// app.use('/posts', ()=>{
//     console.log('this is a middleware running')
// })

app.use('/posts', postRoute);

//ROUTES

app.get('/', (req, res) => {
    res.send('Lets try this');

});

// Connect to MongoDB
moongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true
    },
    () => { console.log('connected to db!')
})


//How to start listening to the server

app.listen(3000);
