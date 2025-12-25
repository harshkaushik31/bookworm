import express from 'express'
import { createPost, deletePost, getPosts, getRecommendedBooksByLoggedInUser } from '../controllers/books.controller.js'
import protectedRoute from '../middleware/auth.middleware.js'

const router = express.Router()

router.post("/",protectedRoute,createPost)
router.get("/",protectedRoute,getPosts)
router.delete("/:id", protectedRoute, deletePost)
router.get("/user", protectedRoute, getRecommendedBooksByLoggedInUser)

export default router 