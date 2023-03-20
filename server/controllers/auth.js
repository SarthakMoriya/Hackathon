import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Farmers from '../Models/farmerModel.js'
import Sellers from '../Models/sellerModel.js'
import OtherSellers from '../Models/otherSellers.js'

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
      city,
      type,
      area,
    } = req.body;
    console.log(type)
    if (type === 'Farmer') {

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      const newFarmer = new Farmers({
        firstName,
        lastName,
        phone,
        password: passwordHash,
        picturePath,
        state,
        city,
        type,
        area
      });
      const savedFarmer = await newFarmer.save();
      res.status(201).json({ user: savedFarmer });
    }
    if (type === 'Seller') {
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      const newSeller = new Sellers({
        firstName,
        lastName,
        phone,
        password: passwordHash,
        picturePath,
        state,
        city,
        type
      });
      const savedSeller = await newSeller.save();
      res.status(201).json({ user: savedSeller });
    }
    if (type === 'Retailer') {
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      const newSeller = new OtherSellers({
        firstName,
        lastName,
        phone,
        password: passwordHash,
        picturePath,
        state,
        city,
        type
      });
      const savedSeller = await newSeller.save();
      res.status(201).json({ user: savedSeller });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { phone, password, } = req.body;
    let user = await Farmers.findOne({ phone }) || await Sellers.findOne({ phone }) || await OtherSellers.findOne({ phone });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });


    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, 'process.env.JWT_SECRET');
    // delete farmer.password;
    res.status(200).json({ token, user: { ...user }, type: user.type });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};