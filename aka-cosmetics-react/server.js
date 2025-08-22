import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Product from "./Product.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = 5000;

// To get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ✅ Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// MONGODB CONNECTION
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/catalogDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");

    // Seed sample data if empty
    Product.countDocuments().then((count) => {
      if (count === 0) {
        Product.insertMany([
          {
            name: "Luxury Lipstick",
            price: 20,
            description: "Long-lasting color.",
            image: "/images/lip-stick.jpg",
          },
          {
            name: "Silky Foundation",
            price: 35,
            description: "Smooth and natural look.",
            image: "/images/foundation.avif",
          },
          {
            name: "Matte Eyeliner",
            price: 15,
            description: "Smudge-proof matte finish.",
            image: "/images/eyeliner.jpg",
          },
          {
            name: "Glow Highlighter",
            price: 25,
            description: "Brighten your skin with shimmer.",
            image: "/images/highlighter.jpg",
          },
          {
            name: "Compact Powder",
            price: 35,
            description: "Brighten your skin with smoothness.",
            image: "/images/compact-powder.jpg",
          },
          {
            name: "Eye Shadow Palatte",
            price: 25,
            description: "Help you feel better in eyes.",
            image: "/images/eye-shadow-palatte.jpg",
          },
          {
            name: "Lip Gloss",
            price: 25,
            description: "Make lips softer more than lip balms.",
            image: "/images/lip-gloss.jpg",
          },
          {
            name: "Mascara",
            price: 25,
            description:
              "Lift your lashes and make your eyes known to everyone.",
            image: "/images/mascara.jpg",
          },
          {
            name: "Setting Powder",
            price: 25,
            description: "Helps your make up stay for a long time",
            image: "/images/setting-powder.jpg",
          },
        ]);
        console.log("Sample products added.");
      }
    });
  })
  .catch((err) => console.error(err));

// ROUTES
app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.get("/api/products/featured", async (req, res) => {
  const products = await Product.find().limit(3);
  res.json(products);
});

app.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.json(newProduct);
});

// START SERVER
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
