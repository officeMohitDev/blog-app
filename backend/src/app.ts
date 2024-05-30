import express, {NextFunction, Request, Response} from 'express'
import createHttpError, {HttpError} from 'http-errors'
import { config } from './config/config';
import globalErrorHandler from './middlewares/globalErrorHandler';
import userRouter from '../users/userRouter';
const app = express();


app.get("/", (req, res, next) => {
    const err = createHttpError(400, "Something went terribly wrong!!")
    throw err
    res.json({msg: "hello"})
})


app.use("/api/users", userRouter)

app.use(globalErrorHandler)


export default app;