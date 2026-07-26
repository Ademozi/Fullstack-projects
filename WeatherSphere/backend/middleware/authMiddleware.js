const User = require("../models/User");
const jwt = require("jsonwebtoken");


// next => continue to the controller if everything is valid
const protect = async (req, res, next) => {
    try {

        console.log(req.headers.authorization);

        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "No token provided."
            });
        }

        // Extract only the token
        const token = authHeader.split(" ")[1];

        console.log(token);

        // Verify the token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        console.log(decoded);

        // -password means exclude password because we don't need it 
        const user = await User.findById(decoded.id)
            .select("-password")

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found."
            });
        }

        // Attach the user to the request
        // Now every controller after this middleware can access: req.user
        req.user = user;
        
        next();

    } catch (error) {

        res.status(401).json({
            success: false,
            message: "Not authorized."
        });

    }
};

module.exports = protect;