import { neon } from "@neondatabase/serverless";

const sql = neon(
  "postgresql://neondb_owner:npg_uSLC6ciDr9YN@ep-old-dream-adclu4jq-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
);

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
