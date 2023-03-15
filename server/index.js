import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import Stripe from 'stripe'

/**Controller and Routers*/
import authRouter from './routes/authRoutes.js'
import productRouter from './routes/productRoutes.js'
import { register } from "./controllers/auth.js";
import { createProduct } from './controllers/products.js'

/**CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))
const stripe = new Stripe('sk_test_51MRccSSBHS26neoyD9rRLQaZA0NA9Md2xndOfdTYE71RxTJpi93n2xYN3FopTvXlbb8gaRY0FDibPyesPXysvUid006YWvjw2D');


/**FILE STORAGE */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/assets')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage })

/**Routes  */
app.post('/auth/register', upload.single('picture'), register)
app.post('/product/createProduct', upload.single('picture'), createProduct)
app.use('/auth', authRouter)
app.use('/product', productRouter)


/**PAYMENTS */

const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
  
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "inr",
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });

/**DataBase Connection */
const port = 8080;
mongoose.connect('mongodb+srv://sarthak:tAiNEpFTsJ0EYpXQ@cluster0.cydacj1.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
}).then(() => {
    app.listen(port, () => {
        console.log(`Server Running on port :${port}`)
    })
}).catch(err => console.log(`${err} did'nt connected!`))