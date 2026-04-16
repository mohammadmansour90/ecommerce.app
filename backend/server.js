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

// connect db and cloudinary
connectDB()
connectCloudinary()

// middlewares
app.use(cors())
app.use(express.json())

// api endpoints
app.use('/user', userRouter)
app.use('/product', productRouter)
app.use('/cart', cartRouter)
app.use('/order', orderRouter)

app.get('/', (req, res) => {
  res.send('API Working')
})

const PORT = process.env.PORT || 4000

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

export default app