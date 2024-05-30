import mongoose from "mongoose";
import { config } from "./config";


const connectDB = async() => {
    try {
        
        mongoose.connection.on('connected', () => {
            console.log("Connected to databse successfully");
        })

        mongoose.connection.on('error', (err) => {
            console.log("Error in connecting to databse", err)

        })
        await mongoose.connect(config.databaseUrl as string)
        
    } catch (error) {
        console.log("Failed to connet to database", error)
        process.exit(1)
    }
}

export default connectDB