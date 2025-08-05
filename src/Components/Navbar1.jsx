import React from 'react'
import { Link } from 'react-router-dom'
import { LogOut, User } from 'lucide-react'

function Navbar1() {
  return (
    <div className="w-full flex justify-center px-4 mt-4">
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/90 border border-gray-200 shadow-md rounded-b-2xl transition-all duration-300">
        <div className="px-6 py-4 flex justify-between items-center relative">

          {/* Left: Logo + Name */}
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

          {/* Right: Profile Avatar + Logout Button */}
          <div className="flex items-center gap-4">
            {/* Profile Circle */}
            <Link
              to="/profile"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-indigo-100 text-indigo-600 font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
              title="Profile"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Logout Button */}
            <button
              onClick={() => {
                // logout logic here
                console.log('Logged out')
              }}
              className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-full font-medium shadow-sm hover:shadow-md hover:border-red-500 hover:text-red-600 transition-all duration-200 flex items-center gap-2"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar1
