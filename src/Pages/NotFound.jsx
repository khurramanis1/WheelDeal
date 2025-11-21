import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-4">
      <h1 className="text-9xl font-extrabold drop-shadow-lg">404</h1>
      <p className="text-2xl md:text-3xl mt-4 font-semibold">
        Oops! Page Not Found.
      </p>
      <p className="mt-2 text-center max-w-md text-white/90">
        The page you are looking for might not be here. Please go back home and try again.
      </p>
      <button
        onClick={() => window.history.back()}
        className="mt-8 px-6 py-3 bg-white text-pink-600 font-bold rounded-lg shadow-lg hover:bg-pink-600 hover:text-white transition"
      >
        Go Back
      </button>
    </div>
  );
}