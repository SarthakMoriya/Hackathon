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

/**Controller and Routers*/
import authRouter from './routes/authRoutes.js'
import { register } from "./controllers/auth.js";

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
app.use('/auth',authRouter)

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