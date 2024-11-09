import mongoose from "mongoose";

const carouselSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    route: {
        type: String,
        required: true,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt timestamps
});

const Carousel = mongoose.model("Carousel", carouselSchema);

export default Carousel;
