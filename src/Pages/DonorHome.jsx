import React, { useState } from 'react'
import Navbar1 from '../Components/Navbar1'

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

  const filteredCharities = charities.filter(charity =>
    charity.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <Navbar1 />

      <div className="max-w-6xl mx-auto mt-32 px-6">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-3 leading-tight tracking-tight">
          Welcome, Donor! 👋
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Discover charitable organizations and keep track of your impact.
        </p>

        {/* Tabs */}
        <div className="flex gap-6 mb-8 border-b border-gray-300">
          <button
            className={`px-5 py-3 text-lg font-semibold transition-all border-b-4 rounded-t-md ${
              activeTab === 'charities'
                ? 'border-indigo-500 text-indigo-700 bg-indigo-50 shadow-sm'
                : 'border-transparent text-gray-600 hover:text-indigo-600 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('charities')}
          >
            🌟 Charities
          </button>
          <button
            className={`px-5 py-3 text-lg font-semibold transition-all border-b-4 rounded-t-md ${
              activeTab === 'history'
                ? 'border-indigo-500 text-indigo-700 bg-indigo-50 shadow-sm'
                : 'border-transparent text-gray-600 hover:text-indigo-600 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('history')}
          >
            📜 Donation History
          </button>
        </div>

        {/* Content */}
        {activeTab === 'charities' && (
          <>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search charities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredCharities.map((charity, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-white via-gray-50 to-indigo-50 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-indigo-300"
                >
                  <h3 className="text-2xl font-bold text-indigo-700 mb-3 group-hover:scale-105 transition-transform">
                    {charity.name}
                  </h3>
                  <p className="text-gray-700 mb-1">
                    <strong>Account No:</strong> {charity.accNo}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <strong>Address:</strong> {charity.address}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <strong>Phone:</strong> {charity.phone}
                  </p>
                  <p className="text-gray-700">
                    <strong>Email:</strong>{' '}
                    <a
                      href={`mailto:${charity.email}`}
                      className="text-indigo-600 hover:underline"
                    >
                      {charity.email}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'history' && (
          <div className="grid gap-6 md:grid-cols-2">
            {donationHistory.map((donation, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-500">
                    {donation.date}
                  </span>
                  <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                    {donation.amount}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-indigo-700 mb-1">
                  {donation.charity}
                </h4>
                <p className="text-gray-600 text-sm">Thank you for your generous contribution!</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default DonorHome
