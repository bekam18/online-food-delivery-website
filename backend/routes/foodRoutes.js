import express from "express";
import Food from "../models/Food.js";

const router = express.Router();

// ✅ Get all foods
router.get("/", async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Add a new food (for testing)
router.post("/", async (req, res) => {
  const { name, description, image, price, category } = req.body;
  try {
    const newFood = new Food({ name, description, image, price, category });
    await newFood.save();
    res.status(201).json(newFood);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
