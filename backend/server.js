import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudlinary.js';
import adminRouter from './routes/adminRoute.js';
import doctorRounter from './routes/doctorRoute.js';
import userRouter from './routes/userRoute.js';


// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()


// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRounter)
app.use('/api/user', userRouter)

// localhost:4000/api/admin/add-doctor

app.get('/' , (req,res)=>{
    res.send('API WORKING Great ')
})

app.listen(port, ()=> console.log("Server Started",port))