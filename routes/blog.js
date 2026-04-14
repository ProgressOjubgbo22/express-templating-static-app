const express = require("express")
const router = express.Router();


let posts = [
    {id: 1, title: "maths", content: "equations"},
    {id: 2, title: "phy", content: "motion"},
    {id: 3, title: "chem", content: "matter"}
]

// getting all post
router.get("/view/all", (req, res) => {
    res.render("index", {posts})
});

// getting single post
router.get("/view/post/:id", (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    res.render("post", {post})
})

// //posting post

router.get("/view/create", (req, res) => {
    res.render("create");
});

router.post("/view/create", (req, res) => {
    const newpost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content
    }

    posts.push(newpost)
    res.redirect("/view/all")
})

// // updating post

router.get("/view/edit/:id", (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    res.render("edit", {post});
});

router.post("/view/edit/:id", (req, res) => {
    const post = posts.find(p => p.id == req.params.id)
    post.title = req.body.title
    post.content = req.body.content

    res.redirect("/view/all")
})

// //delete post
router.post("/view/delete/:id", (req, res) => {
    const id = parseInt(req.params.id); 
    posts = posts.filter(p => p.id !== id);
    res.redirect("/view/all")
})
module.exports = router;
