import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        
        {/* Error Code */}
        <h1 className="text-7xl font-bold text-red-500">404</h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-2 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
          Please check the URL or go back to the homepage.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 bg-green-900 text-white rounded-lg hover:bg-green-700 transition"
          >
            Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;