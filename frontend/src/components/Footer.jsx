import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" border-t border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/60">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Rayane Sefiani. All rights reserved.
        </div>
        <div className="mt-3 md:mt-0 flex gap-4">
          <Link
            to="/privacy"
            target="_blank"
            className="text-sm hover:underline"
          >
            Privacy
          </Link>
          <Link to="/terms" target="_blank" className="text-sm hover:underline">
            Terms
          </Link>
          <Link
            to="https://github.com/RyanAwex"
            target="_blank"
            className="text-sm hover:underline"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
