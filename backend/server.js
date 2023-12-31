import express from 'express';
import  path from 'path';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
dotenv.config();
const port = process.env.PORT || 4000;

connectDB();
 
const app =express();

app.use(cookieParser())

//For the BodyParser
app.use(express.json());
//This will allow us to send the Form Data
app.use(express.urlencoded({extended: true}))

app.use('/api/users', userRoutes)

if (process.env.NODE_ENV === 'production') {
     const __dirname = path.resolve();
     app.use(express.static(path.join(__dirname, '/frontend/dist')));
   
     app.get('*', (req, res) =>
       res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
     );
   } else {
     app.get("/",(req, res)=>{
          res.send("Server is Ready");
     });
   }

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>console.log(`Server Started on Port ${port}`))
