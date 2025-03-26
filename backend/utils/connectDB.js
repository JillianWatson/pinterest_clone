import mongoose from 'mongoose'

const uri = "mongodb+srv://admin:pssword1@pinterestcluster.tbqqiak.mongodb.net/?retryWrites=true&w=majority&appName=PinterestCluster"

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("MongoDB is connected")    
    } catch (error) {
        console.log('MongoDB connection error', error)
    }
}; 

export default connectDB;