const User = require("../models/User");


// next => continue to the controller if everything is valid
const protect = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "No token provided."
            });
        }

        // Extract only the token
        const token = authHeader.split(" ")[1];

        // Verify the token
        const decoded = JsonWebTokenError.verify(
            token,
            process.env.JWT_SECRET
        );

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