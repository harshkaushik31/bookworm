import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const protectedRoute = async(req , res , next) => {
    try{
        // get token from user 
        const token = req.header("Authorization").replace("Bearer ","");
        
        if(!token){
            return res.status(401).json({ message: "No authentication token, access denied" })
        }
        
        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        // find user from user id
        const user = await User.findOne({_id : decoded.userId}).select("-password");

        if(!user){
            return res.status(401).json({ message: "Token is not valid" })
        }

        req.user = user; 
        next();

    }catch(error){
        console.log("Authentication error: ",error.message)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export default protectedRoute; 