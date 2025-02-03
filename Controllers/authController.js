const UserModel = require('../Models/userModel.js');

const UserRegisteration = async (req, res) => {

    try {
        const response = await UserModel.create(req.body);

        if (response) {
            res.status(201).json({ status: 201, data: response });
        } else {
            res.status(200).json({ status: 400, message: "Registeration Failed" });
        }

    } catch (error) {
        console.log("ERROR DURING REGISTERATION ", error)
    }
};


const UserLogin = async (req, res) => {
    try {

        // find user according email 
        // if exist -> Already Exist , else --> Login
        // execute database query for find user
        // {email, password}
        // req.body.password === user.password
        // response

        const user = await UserModel.findOne({ email: req.body.email });

        if (!user) {
            return res.send(200).json({ status: 404, success: false, message: "Your are not registered" })
        }

        // if exist
        if (req.body.password === user.password) {
            res.status(200).json({ status: 200, success: true, message: "Successfully Login", data: user })
        } else {
            res.status(200).json({ status: 400, success: false, message: "Incorrect Credentials" });
        }

    } catch (error) {
        console.log("ERROR DURING LOGIN", error);
    }
}

module.exports = { UserRegisteration, UserLogin }