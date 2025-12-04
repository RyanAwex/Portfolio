import { sql } from "../backend/config/db.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const skills = await sql`SELECT * FROM skills ORDER BY id ASC`;
      if (!skills) {
        return res
          .status(404)
          .json({ success: false, message: "No skills in the database" });
      }
      res.status(200).json(skills);
    } catch (error) {
      console.error("Error in skills route", error);
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
