// 要新增資料到mongoDB 所以用mongoose 首先要先引用(import)
const mongoose = require('mongoose'); 

// 先製作一個 Schema
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    } 
});

module.exports = mongoose.model('Posts', PostSchema);