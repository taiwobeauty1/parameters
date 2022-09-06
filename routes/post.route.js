const router  = require("express").Router;
const {
    
    getPost,
    getPosts,
    updatePost,
    createPost,
    deletePost,
} = require("../controllers/post.controller");

const postRouter = router();

postRouter.route("/").post(createPost).get(getPosts);
postRouter.route("/:postId").get(getPost).patch(updatePost).delete(deletePost)
          .get(getPost)
          .patch(updatePost)
          .delete(deletePost)

module.exports = postRouter;