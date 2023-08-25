import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
dotenv.config();
const port = process.env.PORT || 3000;

connectDB();
 
const app =express();

app.use(cookieParser())

//For the BodyParser
app.use(express.json());
//This will allow us to send the Form Data
app.use(express.urlencoded({extended: true}))

app.use('/api/users', userRoutes)


app.get("/",(req, res)=>{
     res.send("Server is Ready");
})

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>console.log(`Server Started on Port ${port}`))
