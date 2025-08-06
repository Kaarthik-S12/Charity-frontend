import React, { useState } from 'react'
import Navbar1 from '../Components/Navbar1'
import { Search } from 'lucide-react'

function DonorHome() {
  const [activeTab, setActiveTab] = useState('charities')
  const [searchQuery, setSearchQuery] = useState('')

  const charities = [
    {
      name: 'Helping Hands Foundation',
      accNo: '1234567890',
      address: '123 Charity Lane, New Delhi',
      phone: '+91 9876543210',
      email: 'contact@helpinghands.org',
    },
    {
      name: 'Food for All',
      accNo: '9876543210',
      address: '456 Kindness Street, Mumbai',
      phone: '+91 9123456780',
      email: 'support@foodforall.org',
    },
    
  ]

  const donationHistory = [
    { date: '2025-08-01', amount: '₹500', charity: 'Helping Hands Foundation' },
    { date: '2025-07-15', amount: '₹1000', charity: 'Food for All' },
  ]

  const filteredCharities = charities.filter((charity) =>
    charity.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // ✅ Calculate total donated amount
  const totalDonated = donationHistory.reduce((sum, d) => {
    const numeric = parseInt(d.amount.replace(/[^\d]/g, ''))
    return sum + numeric
  }, 0)

  return (
    <>
      <Navbar1 />

      <div className="h-screen overflow-hidden flex flex-col justify-between bg-gradient-to-br from-[#f9f4ef] to-[#fffdfc] font-sans">
        <div className="max-w-7xl mx-auto mt-32 px-6 grid lg:grid-cols-3 gap-12 flex-grow overflow-hidden">
          {/* Left Sidebar / Welcome */}
          <div className="lg:col-span-1 flex flex-col justify-start overflow-hidden">
            <h1 className="text-5xl font-extrabold text-[#5c4033] mb-4 leading-tight tracking-tight">
              Welcome, Donor! 👋
            </h1>
            <p className="text-lg text-[#7b5e47] mb-6 pr-4">
              Discover charitable organizations and keep track of your impact.
            </p>

            {/* ✅ Total Donated Amount Feature */}
            <div className="bg-[#fffaf5] border border-[#e4d5c3] rounded-2xl p-5 shadow-md mt-4">
              <h3 className="text-xl font-semibold text-[#5c4033] mb-2">💰 Total Funded</h3>
              <p className="text-3xl font-bold text-green-700">₹{totalDonated.toLocaleString()}</p>
              <p className="text-sm text-[#7b5e47] mt-1">Thank you for your generosity!</p>
            </div>
          </div>

          {/* Right Main Panel (75% width) */}
          <div className="lg:col-span-2 flex flex-col overflow-hidden">
            {/* Tabs */}
            <div className="flex gap-6 mb-6 border-b border-[#d7c4b0]">
              <button
                className={`flex-1 px-6 py-4 text-lg font-semibold transition-all border-b-4 rounded-t-2xl shadow-sm text-center tracking-wide ${
                  activeTab === 'charities'
                    ? 'border-[#c2a58a] text-[#5c4033] bg-[#fefaf7]'
                    : 'border-transparent text-[#7b5e47] hover:text-[#5c4033] hover:bg-[#f7f2ee]'
                }`}
                onClick={() => setActiveTab('charities')}
              >
                🌟 Charities
              </button>
              <button
                className={`flex-1 px-6 py-4 text-lg font-semibold transition-all border-b-4 rounded-t-2xl shadow-sm text-center tracking-wide ${
                  activeTab === 'history'
                    ? 'border-[#c2a58a] text-[#5c4033] bg-[#fefaf7]'
                    : 'border-transparent text-[#7b5e47] hover:text-[#5c4033] hover:bg-[#f7f2ee]'
                }`}
                onClick={() => setActiveTab('history')}
              >
                📜 Donation History
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="w-full flex-grow overflow-y-auto pr-2 custom-scrollbar">
              {activeTab === 'charities' && (
                <>
                  {/* Search Bar */}
                  <div className="mb-6 relative w-full md:w-1/2">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search charities..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-[#d7c4b0] rounded-xl bg-[#fff9f5] shadow-md focus:outline-none focus:ring-2 focus:ring-[#c2a58a]"
                    />
                  </div>

                  {/* Charities List */}
                  {filteredCharities.length === 0 ? (
                    <p className="text-center text-gray-500 italic">
                      No charities found matching "<span className="font-medium">{searchQuery}</span>".
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {filteredCharities.map((charity, index) => (
                        <div
                          key={index}
                          className="p-6 rounded-3xl bg-[#fffefc] border border-[#e4d5c3] shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                        >
                          <h3 className="text-2xl font-bold text-[#5c4033] mb-3">{charity.name}</h3>
                          <p className="text-[#7b5e47] mb-1">
                            <strong>Account No:</strong> {charity.accNo}
                          </p>
                          <p className="text-[#7b5e47] mb-1">
                            <strong>Address:</strong> {charity.address}
                          </p>
                          <p className="text-[#7b5e47] mb-1">
                            <strong>Phone:</strong> {charity.phone}
                          </p>
                          <p className="text-[#7b5e47]">
                            <strong>Email:</strong>{' '}
                            <a href={`mailto:${charity.email}`} className="text-indigo-600 hover:underline">
                              {charity.email}
                            </a>
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {activeTab === 'history' && (
                <div className="grid gap-6 md:grid-cols-2">
                  {donationHistory.map((donation, index) => (
                    <div
                      key={index}
                      className="p-6 bg-[#fffefc] rounded-3xl shadow-md border border-[#e4d5c3] hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-[#7b5e47]">{donation.date}</span>
                        <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold shadow-sm">
                          {donation.amount}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-[#5c4033] mb-1">{donation.charity}</h4>
                      <p className="text-[#7b5e47] text-sm">
                        Thank you for your generous contribution!
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-[#5c4033] to-[#a1866f] text-white py-6 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 text-center text-sm">
            © {new Date().getFullYear()} <span className="font-semibold">CharityFinder</span>. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  )
}

export default DonorHome
