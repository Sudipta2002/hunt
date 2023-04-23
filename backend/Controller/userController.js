const { User } = require('../Model/index');
const signUp = async(req, res) => {
    const { username, email, password } = req.body;
    try {
        // console.log(req);
        const response = await User.create({
            username: username,
            email: email,
            password: password
        });
        return res.status(201).json({
            data: response,
            success: true,
            message: "User Created Successfully",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong",
            data: {},
            success: false,
            err: error
        })
    }
}

const signIn = async(req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({
                message: 'No User found',
                success: false
            })
        }
        if (!user.comparePassword(req.body.password)) {
            return res.status(401).json({
                message: 'Incorrect Password',
                success: false
            })
        }
        const token = user.genJWT();

        return res.status(200).json({
            success: true,
            data: token,
            username: user.username,
            id: user._id,
            message: "User Logged In Successfully",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            message: "Something went wrong",
            data: {},
            success: false,
            err: error
        })
    }
}

module.exports = { signUp, signIn };