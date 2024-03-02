import User from "../models/user.model.js";
import bcryptjs from "bcryptjs/dist/bcrypt.js";
import { errorHandler } from "../utlis/error.js";
import  jwt  from "jsonwebtoken";

// Signup controller function
export const signup  = async (req, res, next) => {
    const { username, email, password } = req.body;

    // Check if all required fields are provided
    if (!username || !email || !password || username === "" || email === "" || password === "") {
        next(errorHandler(400, 'All fields are required'));
    }

    // Hash the password
    const hashPassword = bcryptjs.hashSync(password, 10);

    // Create a new user instance
    const newUser = new User({
        username,
        email,
        password: hashPassword,
    });

    try {
        // Save the new user to the database
        await newUser.save();
        res.json('Signup successful');
    } catch (error) {
        next(error);
    }
};

// Signin controller function
export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password || email === "" || password === "") {
        next(errorHandler(400, 'All fields are required'));
    }

    try {
        // Find user by email
        const validUser = await User.findOne({ email });

        // If user not found
        if (!validUser) {
          return  next(errorHandler(404, 'User not found'));
        }

        // Compare passwords
        const validPassword = bcryptjs.compareSync(password, validUser.password);

        // If password is invalid
        if (!validPassword) {
            return next(errorHandler(400, 'Invalid Password'));
        }

        // Sign JWT token
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

        // Hiding the password 
        const {password: pass, ...rest}= validUser._doc;

        // Set token in cookie and send user data
        res.status(200).cookie('access_token', token, { httpOnly: true }).json(rest);
    } catch (error) {
        next(error);
    }
};
