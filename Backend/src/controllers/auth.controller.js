import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


//Signup controller
const signUp = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        
        // before creating a user , let's convert the password to some hashed value using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            username,
            email,
            password : hashedPassword
        })

        user.save();

        //Create a token for the user
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"});
        res.cookie('token', token, {httpOnly: true});

        res.status(201).json({
            message: "User created successfully",  
        });

        


    } catch (error) {
        res.status(500).json({
            message: "Error creating user",
            error: error.message
        });
    }
}


// Signin Controller
const signIn = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await userModel.findOne({email});

        if(!user) {
            res.status(404).json({
                message: "User not found"
            });
        }

        //Now check whether the password user entered is correct or not
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid password"
            });
        }

        const cookie = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"});
        res.cookie('token', cookie, {httpOnly: true});

        res.status(200).json({
            message: "User signed in successfully",
        })


    } catch (error) {
        res.status(500).json({
            message: "Error signin user",
            error: error.message
        });
    }
}


//Logout Controller
const logOut = async (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({
            message: "User logged out successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Error logout user",
            error: error.message
        });
    }
}

export {signUp, signIn, logOut};