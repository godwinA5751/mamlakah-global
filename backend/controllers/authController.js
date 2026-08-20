import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {

    try {

        const { username, password } = req.body;

        const admin = await Admin.findOne({ username });

        if (!admin)
            return res.status(401).json({
                message: "Invalid credentials",
            });

        const valid = await bcrypt.compare(
            password,
            admin.password
        );

        if (!valid)
            return res.status(401).json({
                message: "Invalid credentials",
            });

        const token = jwt.sign(
            {
                id: admin._id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );

        res.json({
            token,
        });

    } catch (err) {

        res.status(500).json({
            message: err.message,
        });

    }

};