import User from "../models/User.js";
import jwt from "jsonwebtoken";

const generateToken = (userId) => {
    return jwt.sign(
        {userId},
        process.env.JWT_SECRET,
        {expiresIn: '7d'}
    )
}

export const register = async (req, res) => {
    try{
        const{ email, username, password } = req.body;

        if(!username || !username || !password){
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

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({ message: "All feilds are required" })
        }

        // check if user exits
        const user = await User.findOne({ email })
        
        if(!user){
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }

        // check if the password given by user is correct or not
        const isPasswordCorrect = await user.comparePassword(password);
        if(!isPasswordCorrect){ return res.status(400).json({ message: "Invalid credentials" }) }

        // generate token
        const token = generateToken(user._id);

        res.status(200).json({
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                profileImage: user.profileImage
            }
        })

    } catch (error) {
        console.log("Error in login route: ",error);
        res.status(500).json({ message: "Internal server error" })
    }
}