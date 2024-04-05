const jwt = require("jsonwebtoken");
const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");
const { redirect } = require("express/lib/response");

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.json({ status: "error", error: "please enter your email and password" });
    else {
        db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
            if (err) throw err;
            if (!result.length || !await bcrypt.compare(password, result[0].password)) {
                return res.json({ status: "error", error: "incorrect Email or Password" });
            } else {
                const token = jwt.sign({ id: result[0].id}, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES,
                });
                const cookieOptions = {
                    expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true
                };
                res.cookie("userRegistered", token, cookieOptions);
                //res.json({ status: "success", success: "user has been logged In" });
                res.redirect("/home");
            
            }
        });
    }
};

module.exports = login;