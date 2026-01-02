import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-indigo-500 selection:text-white scroll-smooth">
      <Routes>
        <Route index element={<Portfolio />} />
      </Routes>
    </div>
  );
}
