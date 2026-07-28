const Favorite = require("../models/Favorite");


const addFavorite = async (req, res) => {
    try {

        const { city, country } = req.body;

        if (!city || !country) {
            return res.status(400).json({
                success: false,
                message: "City and country are required."
            });
        }

        const favorite = await Favorite.create({
            user: req.user._id,
            city,
            country
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

const getFavorites = async (req, res) => {
    try {

        const favorites = await Favorite.find({
            user: req.user._id
        });

        res.status(200).json({
            success: true,
            count: favorites.length,
            favorites
        });

    } catch (error) {
        
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

module.exports = {
    addFavorite,
    getFavorites
};