import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Import routes
import userRoute from "./route/user.route.js";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4001;

mongoose.connect(process.env.MongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log("Error connecting to MongoDB:", error));

// Register routes in specific order

app.use("/user", userRoute);
// app.use("/carousel", carouselRoute); // Use the carousel route

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
