import express, {NextFunction, Request, Response} from 'express'

const createUser = async (req: Request, res: Response) => {
    res.json({msg: "usre registered nigga"})
}


export {createUser}