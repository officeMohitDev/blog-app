import { configDotenv } from "dotenv";
configDotenv()
const _config = {
    port: process.env.PORT,
    databaseUrl: process.env.MONGO_URL
};


export const config = Object.freeze(_config) // makes it readable freeze