import "dotenv/config";
import express from "express";
import cors from "cors";
import { sql } from "./config/db.js";
import projectsRoute from "./routes/projects.js";
import skillsRoute from "./routes/skills.js";


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        "http://localhost:5173",
        process.env.FRONTEND_URL,
        "https://ryanawex.site",
        "https://www.ryanawex.site",
      ].filter(Boolean);
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);

app.use("/api/projects", projectsRoute);
app.use("/api/skills", skillsRoute);

async function initDB() {
  try {
    await sql`CREATE TABLE IF NOT EXISTS projects (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      image VARCHAR(255),
      description TEXT,
      tech TEXT[],  -- Array of technologies
      github VARCHAR(255),
      demo VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;
    await sql`CREATE TABLE IF NOT EXISTS skills (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      icon TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;
    console.log("Database initialized successfully");
  } catch (error) {
    console.log("Error initDB", error);
  }
}

initDB().then(() => {
  app.listen(PORT, () => console.log("Server running on port", PORT));
});
