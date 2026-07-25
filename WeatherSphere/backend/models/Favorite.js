const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    user: {
        // ObjectId: Every MongoDB document automatically has an _id.
        type: mongoose.Schema.Types.ObjectId,
        // ref: "User" => this tells mongoose "The ObjectId stored here belongs to the User model."
        ref: "User",
        required: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;