import { sql } from "./db.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const skills = await sql`SELECT * FROM skills ORDER BY id ASC`;
    if (!skills) {
      return res
        .status(404)
        .json({ success: false, message: "No skills in the database" });
    }
    return res.status(200).json(skills);
  } catch (error) {
    console.error("Error in /api/skills", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
}
