export const API =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : "https://portfolio-pi-mocha-go22e9136w.vercel.app/api";
