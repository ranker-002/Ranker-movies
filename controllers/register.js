const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.json({ status: "error", error: "Please enter your name, email, and password" });
    } else {
        try {
            const existingUser = await db.query('SELECT email FROM users WHERE email = ?', [email]);
            if (existingUser.length > 0) {
                return res.json({ status: "error", error: "email has already been registered" });
            }

            const hashedPassword = await bcrypt.hash(password, 8);

            await db.query('INSERT INTO users SET ?', { name, email, password: hashedPassword }, (error, results) => {
                if (error) {
                    console.error("Error during registration:", error);
                    return res.status(500).json({ status: "error", error: "eamil already exist" });
                }
                return res.json({ status: "success", success: "user has been registered - login now" });
            });
        } catch (error) {
            console.error("Error during registration:", error);
            return res.status(500).json({ status: "error", error: "there is error during the registration restart again" });
        }
    }
};

module.exports = register;