import { sql } from "./db.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }

  const secret = process.env.INIT_SECRET;
  const provided = req.headers["x-init-secret"] || req.query.secret;

  if (!secret || provided !== secret) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    await sql`CREATE TABLE IF NOT EXISTS projects (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      image VARCHAR(255),
      description TEXT,
      tech TEXT[],
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

    return res
      .status(200)
      .json({ success: true, message: "Database initialized" });
  } catch (error) {
    console.error("Error initializing DB", error);
    return res
      .status(500)
      .json({ success: false, message: "Initialization failed" });
  }
}
