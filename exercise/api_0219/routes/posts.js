const express = require('express'); // 要用express所以一定要先引用
const router = express.Router(); // 使用express 裡的Router去製作route
const Post = require('../models/Post'); //引用剛才的Schema


// Get back all the posts
router.get('/', async (req, res) => {

    try {
        const posts = await Post.find(); //find後面可以加別的語法如limit可以規定存取數量
        res.json(posts); //將結果用json顯示

    } catch (err) { //錯誤時顯示error
        res.json({
            message: error
        });
    }

});

// Submit a new post (save)
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savePost = await post.save();
        res.json(savePost);
    } catch (err) {
        res.json({
            message: error
        });
    }

});

// Get Specific post (特定的post by id)

router.get('/:postId', async (req, res) => {
    // console.log(req.params.postId) 用來測試是否可以真的抓到id by postman
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({
            message: error
        });
    };
})

// Delete Specific post

router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Post.remove({
            "_id": req.params.postId
            // remove({ "DB上的欄位名稱" = req進來的postId }) 
        });
        res.json(removePost);
    } catch (err) {
        res.json({
            message: error
        })
    }
})

// Update Specific post

router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne({
            "_id": req.params.postId //抓到這筆資料
        }, {
            $set:{ // 更新內容
                title: req.body.title, //params 是用來抓id 要抓內容用 body
                description: req.body.description
            }
        });
        res.json(updatePost);
    } catch (err) {
        res.json({
            message: error
        })
    }
})


module.exports = router;