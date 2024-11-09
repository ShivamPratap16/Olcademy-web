import express from "express";
import {
    addCarouselItem,
    deleteCarouselItem,
    getCarouselItemById,
    getCarouselItems,
    updateCarouselItem
} from "../controllers/carousel.controller.js";

const router = express.Router();

// Route to get all carousel items
router.get("/carousel", getCarouselItems);

// Route to get a single carousel item by ID
router.get("/carousel/:id", getCarouselItemById);

// Route to update a carousel item by ID
router.put("/carousel/:id", updateCarouselItem);

// Route to add a new carousel item
router.post("/carousel", addCarouselItem);

// Route to delete a carousel item by ID
router.delete("/carousel/:id", deleteCarouselItem);

export default router;
