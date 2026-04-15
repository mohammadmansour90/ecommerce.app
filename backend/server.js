import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRouter.js'
import orderRouter from './routes/orderRoute.js'

const app = express()

connectDB()
connectCloudinary()

app.use(express.json())
app.use(cors())

// IMPORTANT:
// Because Vercel mounts this backend at /api,
// do NOT put /api again here.
app.use('/user', userRouter)
app.use('/product', productRouter)
app.use('/cart', cartRouter)
app.use('/order', orderRouter)

app.get('/', (req, res) => {
  res.send('API Working')
})

export default app