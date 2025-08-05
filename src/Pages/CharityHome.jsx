import React, { useState, useEffect } from 'react'
import Navbar1 from '../Components/Navbar1'

function CharityHome() {
  const [activeTab, setActiveTab] = useState('donors')
  const [donors, setDonors] = useState([
    {
      name: 'John Doe',
      email: 'john@example.com',
      amount: 1000,
    },
    {
      name: 'Priya Sharma',
      email: 'priya@gmail.com',
      amount: 2500,
    },
  ])

  const totalAmount = donors.reduce((sum, donor) => sum + Number(donor.amount), 0)

  const [formData, setFormData] = useState({
    name: 'Jane Smith',
    email: 'jane@charitymail.org',
    amount: 500,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setDonors((prev) => [...prev, formData])
    alert('Donor added successfully!')
    setFormData({ name: '', email: '', amount: '' })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeTab])

  return (
    <>
      <Navbar1 />

      <div className="h-screen overflow-hidden flex flex-col justify-between bg-gradient-to-br from-[#f9f4ef] to-[#fffdfc] font-sans">
        <div className="max-w-7xl mx-auto mt-32 px-6 grid lg:grid-cols-3 gap-12 flex-grow overflow-hidden">
          <div className="lg:col-span-1 flex flex-col justify-start overflow-hidden">
            <h1 className="text-5xl font-extrabold text-[#5c4033] mb-4 leading-tight tracking-tight">
              Charity Dashboard 🏥
            </h1>
            <p className="text-lg text-[#7b5e47] mb-6 pr-4">
              Monitor and manage your donor network, keep track of contributions, and add new donors with ease.
            </p>
            <div className="bg-[#fff5ec] p-6 rounded-2xl shadow-xl border border-[#e4d5c3]">
              <p className="text-sm text-[#7b5e47] mb-2 font-semibold tracking-wide">Total Donations Received</p>
              <h2 className="text-4xl font-bold text-[#5c4033] tracking-wider">₹{totalAmount}</h2>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col overflow-hidden">
            <div className="flex gap-6 mb-8 border-b border-[#d7c4b0]">
              <button
                onClick={() => setActiveTab('donors')}
                className={`flex-1 px-8 py-4 text-lg font-semibold transition-all border-b-4 rounded-t-2xl shadow-sm text-center whitespace-nowrap overflow-hidden text-ellipsis tracking-wide ${
                  activeTab === 'donors'
                    ? 'border-[#c2a58a] text-[#5c4033] bg-[#fefaf7]'
                    : 'border-transparent text-[#7b5e47] hover:text-[#5c4033] hover:bg-[#f7f2ee]'
                }`}
              >
                🙋 Donors to Your Charity
              </button>

              <button
                onClick={() => setActiveTab('add')}
                className={`flex-1 px-8 py-4 text-lg font-semibold transition-all border-b-4 rounded-t-2xl shadow-sm text-center whitespace-nowrap overflow-hidden text-ellipsis tracking-wide ${
                  activeTab === 'add'
                    ? 'border-[#c2a58a] text-[#5c4033] bg-[#fefaf7]'
                    : 'border-transparent text-[#7b5e47] hover:text-[#5c4033] hover:bg-[#f7f2ee]'
                }`}
              >
                ➕ Add Donor
              </button>
            </div>

            <div className="w-full flex-grow overflow-y-auto pr-2 custom-scrollbar">
              {activeTab === 'donors' && (
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                  {donors.map((donor, index) => (
                    <div
                      key={index}
                      className="bg-[#fffefc] border border-[#e4d5c3] p-6 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between transform hover:scale-[1.02]"
                    >
                      <h3 className="text-2xl font-bold text-[#5c4033] mb-2 tracking-tight">{donor.name}</h3>
                      <p className="text-[#7b5e47] text-sm mb-1">{donor.email}</p>
                      <span className="inline-block mt-2 text-green-900 font-semibold bg-green-100 px-4 py-1 rounded-full w-max">
                        ₹{donor.amount} Donated
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'add' && (
                <div className="bg-[#fffefc] p-10 rounded-3xl shadow-2xl border border-[#e4d5c3] animate-fade-in-up">
                  <h2 className="text-3xl font-bold text-[#5c4033] mb-6 tracking-wide">Add a Donor</h2>

                  <form onSubmit={handleSubmit} className="grid gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#7b5e47] mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Aisha Khan"
                        className="w-full px-4 py-3 border border-[#d7c4b0] rounded-xl bg-[#fff9f5] focus:outline-none focus:ring-2 focus:ring-[#c2a58a]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#7b5e47] mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. aisha@example.com"
                        className="w-full px-4 py-3 border border-[#d7c4b0] rounded-xl bg-[#fff9f5] focus:outline-none focus:ring-2 focus:ring-[#c2a58a]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#7b5e47] mb-1">Donation Amount (₹)</label>
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="e.g. 1000"
                        className="w-full px-4 py-3 border border-[#d7c4b0] rounded-xl bg-[#fff9f5] focus:outline-none focus:ring-2 focus:ring-[#c2a58a]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-4 bg-[#5c4033] text-white py-3 rounded-xl hover:bg-[#4b3328] transition font-semibold shadow-md hover:shadow-lg"
                    >
                      Add Donor
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>

        <footer className="bg-gradient-to-r from-[#5c4033] to-[#a1866f] text-white py-6 shadow-inner animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 text-center text-sm">
            © {new Date().getFullYear()} <span className="font-semibold">CharityFinder</span>. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  )
}

export default CharityHome