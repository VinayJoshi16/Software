const express = require("express");
const mongoose = require("./config/db");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const bloodRoutes = require("./routes/blood");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/blood", bloodRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
