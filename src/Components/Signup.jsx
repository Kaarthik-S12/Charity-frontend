import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

function Signup() {
  return (
    <>
      <NavBar />

      <div className="flex min-h-screen pt-7 bg-gradient-to-br from-white via-blue-50 to-blue-100">
        {/* Left Image & Quote */}
        <div className="w-1/2 relative hidden lg:block overflow-hidden rounded-r-3xl shadow-xl">
          <img
            src="https://img.freepik.com/premium-vector/lord-buddha-meditating-lotus-position-beneath-majestic-bodhi-tree_851674-87002.jpg"
            alt="Charity Visual"
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-8">
            <h2 className="text-white text-4xl md:text-5xl font-semibold text-center leading-snug tracking-tight">
              “The smallest act of kindness is worth more than the grandest intention.”
              <br />
              <span className="block mt-4 text-lg font-light italic">
                — Oscar Wilde
              </span>
            </h2>
          </div>
        </div>

        {/* Right Signup Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-8 md:px-14 pt-0">
          <div className="bg-white rounded-3xl shadow-2xl p-10 sm:p-12 w-full max-w-md border border-blue-100 animate-fade-in-down">
            <h2 className="text-4xl font-bold text-center text-blue-700 mb-6">
              Create Account
            </h2>

            <form className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>

              {/* Role Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Register as:
                </label>
                <div className="flex items-center gap-4">
                  {[ 'Charity', 'Donor'].map(role => (
                    <label
                      key={role}
                      className="inline-flex items-center text-gray-700"
                    >
                      <input
                        type="radio"
                        name="role"
                        value={role.toLowerCase()}
                        className="accent-blue-600"
                      />
                      <span className="ml-2">{role}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-3 rounded-lg shadow-md transition-transform transform hover:scale-[1.02]"
              >
                Sign Up
              </button>
            </form>

            {/* Footer */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-blue-600 hover:underline font-semibold"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
