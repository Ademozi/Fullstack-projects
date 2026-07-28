const Favorite = require("../models/Favorite");


const addFavorite = async (req, res) => {
    try {

        const { city } = req.body;

        if (!city) {
            return res.status(400).json({
                success: false,
                message: "City is required."
            });
        }

        const favorite = await Favorite.create({
            user: req.user._id,
            city
        });

        res.status(201).json({
            success: true,
            message: "Favorite city added.",
            favorite
        });

    } catch (error) {
        
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};