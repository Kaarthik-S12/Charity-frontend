import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className="w-full flex justify-center mt-4 px-4">
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gray-100/90 border border-gray-200 shadow-lg rounded-b-2xl transition-all duration-300">

        <div className="px-6 py-4 flex justify-between items-center relative">

          {/* Left: Logo + Brand Name */}
          <div className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-10 rounded-md shadow-md transform transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-2xl font-extrabold text-gray-800 tracking-tight animate-fade-in">
              Charity<span className="text-indigo-600">Finder</span>
            </span>
          </div>

          {/* Right: Links and Dropdown */}
          <div className="flex items-center gap-6">

            <Link
              to="/about"
              className="relative text-gray-700 font-medium transition duration-300 hover:text-indigo-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-indigo-500 after:transition-all after:duration-300"
            >
              About Us
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="relative bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 hover:brightness-110 text-white px-6 py-2.5 rounded-full font-semibold shadow-md transition-all duration-300 hover:shadow-indigo-500/50 hover:scale-105">
                Login / Signup
              </button>

              {/* Dropdown */}
              <div
                className={`absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-all duration-200 ${
                  showDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <Link
                  to="/login"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-indigo-600 transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-indigo-600 transition"
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
