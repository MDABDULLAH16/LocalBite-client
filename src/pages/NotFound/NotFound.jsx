
import { Link } from "react-router";
import funnyImage from "/404.png";  

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <img src={funnyImage} alt="404 Not Found" className="w-64 mb-6" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 mb-6 text-center">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-500 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
