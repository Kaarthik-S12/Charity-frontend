import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LogOut, User } from 'lucide-react'
import CharityProfile from '../Components/CharityProfile'
import DonorProfile from './DonorProfile'

function Navbar1() {
  const location = useLocation()
  const navigate = useNavigate()

  const isCharity = location.pathname.startsWith('/charity')
  const isCharityPage = location.pathname === '/charity/profile'
  const isDonorPage = location.pathname === '/donor/profile'

  const profilePath = isCharity ? '/charity/profile' : '/donor/profile'

  const handleClose = () => {
    navigate(isCharity ? '/charity' : '/donor')
  }

  return (
    <>
      <div className="w-full flex justify-center px-4 mt-4">
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/90 border border-gray-200 shadow-md rounded-b-2xl transition-all duration-300">
          <div className="px-6 py-4 flex justify-between items-center relative">

            {/* Logo */}
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

            {/* Profile + Logout */}
            <div className="flex items-center gap-4">
              <Link
                to={profilePath}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-indigo-100 text-indigo-600 font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
                title="Profile"
              >
                <User className="w-5 h-5" />
              </Link>

              <button
                onClick={() => navigate('/')}
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

      {/* Profile Modals */}
      {(isCharityPage || isDonorPage) && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[999] flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-[90%] max-w-3xl relative animate-fade-in">
            <button
              onClick={handleClose}
              className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
              title="Close"
            >
              &times;
            </button>

            {isCharityPage ? <CharityProfile /> : <DonorProfile />}
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar1
