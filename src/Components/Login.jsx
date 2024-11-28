import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-blue-600 text-center mb-4">Insurance Login</h1>
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
        {/* Footer */}
        <div className="text-center mt-4 text-sm text-gray-500">
          <p>
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
          <p>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
