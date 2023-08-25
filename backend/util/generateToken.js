import jwt from "jsonwebtoken";

const generateToken = (res, useId) =>{
    const JWT_SECRET= 'abc123';
    const token = jwt.sign({useId}, JWT_SECRET, {
        expiresIn: '30d'
    });

    res.cookie('jwt',token, {
        httpOnly:true,
        secure: process.env.NODE_ENV !='developement',// Use secure cookies in production
        sameSite: 'strict',// Prevent CSRF attacks
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    })
}


export default generateToken;
