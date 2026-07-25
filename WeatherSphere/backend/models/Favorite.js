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
        required: [true, "City is required"],
        trim: true
    },
    country: {
        type: String,
        required: [true, "Country is required"],
        uppercase: true
    }
}, {
    timestamps: true
});

// What does this index do?
// It creates a compound unique index.
// That means:
// The same user cannot save the same city twice.
// But different users can each save London.
favoriteSchema.index(
    { user: 1, city: 1 },
    { unique: true }
);

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;