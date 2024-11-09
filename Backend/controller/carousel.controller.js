import Carousel from "../models/carousel.model.js";

// Controller to get all carousel items
export const getCarouselItems = async (req, res) => {
    try {
        const carouselItems = await Carousel.find();
        res.json(carouselItems);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving carousel data", error });
    }
};

// Controller to get a single carousel item by ID
export const getCarouselItemById = async (req, res) => {
    const { id } = req.params;
    try {
        const carouselItem = await Carousel.findById(id);
        if (!carouselItem) {
            return res.status(404).json({ message: "Carousel item not found" });
        }
        res.json(carouselItem);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving carousel item", error });
    }
};

// Controller to update a carousel item
export const updateCarouselItem = async (req, res) => {
    const { id } = req.params;
    const { title, subtitle, image, route } = req.body;
    console.log("Updating carousel item:", req.body); 
    try {
        const updatedCarouselItem = await Carousel.findByIdAndUpdate(
            id,
            { title, subtitle, image, route, updated_at: new Date() },
            { new: true } // Return the updated document
        );

        if (!updatedCarouselItem) {
            return res.status(404).json({ message: "Carousel item not found" });
        }

        res.json({
            message: "Carousel item updated successfully",
            updatedCarouselItem,
        });
    } catch (error) {
        res.status(500).json({ message: "Error updating carousel item", error });
    }
};

// Controller to add a new carousel item
export const addCarouselItem = async (req, res) => {
    const { title, subtitle, image, route } = req.body;
    try {
        const newCarouselItem = new Carousel({
            title,
            subtitle,
            image,
            route,
        });

        await newCarouselItem.save();
        res.status(201).json({
            message: "Carousel item added successfully",
            newCarouselItem,
        });
    } catch (error) {
        res.status(500).json({ message: "Error adding carousel item", error });
    }
};

// Controller to delete a carousel item
export const deleteCarouselItem = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCarouselItem = await Carousel.findByIdAndDelete(id);
        if (!deletedCarouselItem) {
            return res.status(404).json({ message: "Carousel item not found" });
        }
        res.json({ message: "Carousel item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting carousel item", error });
    }
};
