import { sql } from "../backend/config/db.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const projects = await sql`SELECT * FROM projects ORDER BY id ASC`;
      if (!projects) {
        return res
          .status(404)
          .json({ success: false, message: "No projects in the database" });
      }
      res.status(200).json(projects);
    } catch (error) {
      console.error("Error in projects route", error);
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
