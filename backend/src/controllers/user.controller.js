import User from "../models/User.js";
import jwt from "jsonwebtoken";

const generateToken = (userId) => {
    return jwt.sign(
        {userId},
        process.env.JWT_SECRET,
        {expiresIn: '7d'}
    )
}

export const registerUser = async (req, res) => {
    try{
        const{ email, username, password } = req.body;

        if(!user || !username || !password){
            return res.status(400).json({ message: "All feilds are required" })
        }

        if(password.length < 6){
            return res.status(400).json({ message: "Password length must be greater than 6"})
        }

        if(username.length < 3){
            return res.status(400).json({ message: "Username length sould be greater than 3"})
        }

        // check if user already exists
        const existingEmail = await User.findOne({email})
        if(existingEmail){
            return res.status(400).json({ message: "email already exits" })
        }

        const existingUsername = await User.findOne({username})
        if(existingUsername){
            return res.status(400).json({ message: "username already exits" })
        }

        // get random avatar
        const profileImage = `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`

        const user = new User({
            username,
            email,
            password,
            profileImage
        })

        await user.save()

        const token = generateToken(user._id);

        res.status(201).json({
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                profileImage: user.profileImage
            }
        })

    }catch(error){
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}