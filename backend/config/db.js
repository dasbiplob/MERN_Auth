import mongoose from 'mongoose';


const connectDB = async () => {
    const MONGO_URI = "mongodb+srv://mern123:mern123@mernauth.52rbrgk.mongodb.net/mernauth?retryWrites=true&w=majority"
    try {
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
      } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
      }
    };

export default connectDB;
