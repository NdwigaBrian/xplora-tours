import express, { NextFunction, Request, Response, json }  from 'express'
import auth_router from './routes/auth.router'


let app = express()

app.use(json())



app.use('/auth', auth_router);


app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    res.json({
        message: err.message
    })
})


app.listen(4115, ()=>{
    console.log("server running on port 4115 ...");
})