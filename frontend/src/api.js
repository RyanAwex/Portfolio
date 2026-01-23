// Use local backend in development, otherwise use relative `/api` for serverless deployment
export const API = import.meta.env.DEV ? "http://localhost:5000/api" : "/api";
