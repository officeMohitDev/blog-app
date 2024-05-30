import express from 'express'
import dotenv from 'dotenv'

const app = express();


app.get("/", (req, res, next) => {
    res.json({msg: "hello"})
})

export default app;