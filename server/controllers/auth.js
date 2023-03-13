import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Farmers from '../Models/farmerModel.js'


/* REGISTER USER */
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phone,
      password,
      picturePath,
      state,
      city
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newFarmer = new Farmers({
      firstName,
      lastName,
      phone,
      password: passwordHash,
      picturePath,
      state,
      city
    });
    const savedFarmer = await newFarmer.save();
    res.status(201).json({ farmer: savedFarmer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const farmer = await Farmers.findOne({ phone });
    if (!farmer) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, farmer.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: farmer._id }, 'process.env.JWT_SECRET');
    // delete farmer.password;
    res.status(200).json({ token, farmer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};