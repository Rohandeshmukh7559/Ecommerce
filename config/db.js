import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async() =>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URL);
        console.log(`connect to mongo db ${conn.connection.host} `.bgWhite);
    }
    catch(error){
      console.log(`error in monogoose ${error}`.bgRed.white);
    }
};

export default connectDB;