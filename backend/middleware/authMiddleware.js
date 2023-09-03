import jwt  from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
    let token;
  
    token = req.cookies.jwt;
    const JWT_SECRET= 'abc123';
  
    if (token) {
      try {
        const decoded = jwt.verify(token, JWT_SECRET);

        console.log(decoded) 
  
        req.user = await User.findById(decoded.useId).select('-password');
  
        next();
      } catch (error) {
        console.error(error);
        res.status(401);
        throw new Error('Not authorized, invalid token');
      }
    } else {
      res.status(401);
      throw new Error('Not authorized, no token');
    }
  });
  
  export { protect };
