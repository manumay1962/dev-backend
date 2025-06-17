import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen("process.env.PORT")
    console.log(`SERVING IS RUNNING ON PORT ${process.env.PORT}`)
})
.catch(()=>{
    console.log(`erroor coming`)
})