const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
    res.send("Register route")
})

const loginUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    //validation
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Please include all field!" })
    }
})

module.exports = {
    registerUser,
    loginUser
}