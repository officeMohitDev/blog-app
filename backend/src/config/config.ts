import { configDotenv } from "dotenv";
configDotenv()
const _config = {
    port: process.env.PORT,
    databaseUrl: process.env.MONGO_URL,
    env: process.env.NODE_ENV
};


export const config = Object.freeze(_config) // makes it readable freeze