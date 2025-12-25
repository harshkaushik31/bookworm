import express from 'express'
import { registerUser } from '../controllers/user.controller.js';

const router = express.Router();

router.post("/register",registerUser)

router.post("/login",async (req, res) => {
    res.send("Hitting the login path")
})

export default router;