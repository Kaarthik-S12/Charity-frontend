import React, { useState } from 'react';
import Navbar2 from '../Components/Navbar2';

export const AdminHome = () => {
  const [activeTab, setActiveTab] = useState('charities');

  const charities = [
    { name: 'Helping Hands Foundation', email: 'contact@helpinghands.org', totalReceived: 1500 },
    { name: 'Food for All', email: 'support@foodforall.org', totalReceived: 2200 },
    { name: "Children's Care", email: 'info@childcare.org', totalReceived: 1700 },
    { name: 'Nature Trust', email: 'hello@naturetrust.org', totalReceived: 900 },
    { name: 'Urban Relief', email: 'relief@urbanrelief.org', totalReceived: 1200 },
  ];

  const users = [
    { name: 'Karthik S', email: 'karthik@example.com', totalDonated: 1000 },
    { name: 'Anjali P', email: 'anjali@example.com', totalDonated: 2700 },
    { name: 'Priya R', email: 'priya@example.com', totalDonated: 800 },
    { name: 'John M', email: 'john@example.com', totalDonated: 1200 },
    { name: 'Meera L', email: 'meera@example.com', totalDonated: 600 },
  ];

  const totalSystemAmount = charities.reduce((sum, c) => sum + c.totalReceived, 0);

  // Get top donor for stats
  const topDonor = users.reduce(
    (top, u) => (u.totalDonated > top.totalDonated ? u : top),
    users[0]
  );

  return (
    <>
      <Navbar2 />

      {/* Decorative, non-overlapping background */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-[6rem] left-1/2 -translate-x-1/2 w-[90vw] h-[60vw] max-w-6xl max-h-[520px]
            bg-[radial-gradient(ellipse_at_center,rgba(217,197,172,0.17)_0%,rgba(255,255,252,0)_90%)]"
         />
      </div>

      <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-[#f9f4ef] via-[#f7f0ea] to-[#fffdfc] font-sans">
        <main className="max-w-7xl mx-auto mt-24 px-4 flex flex-col-reverse lg:flex-row gap-8 w-full flex-grow">
          {/* Main dashboard area */}
          <section className="flex-1 flex flex-col">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#4b2e17] mb-10 drop-shadow">
              Welcome, Admin <span role="img" aria-label="admin">👨‍💼</span>
            </h1>

            {/* Tabs */}
            <nav className="flex space-x-4 mb-10 border-b border-[#e4d5c3] pb-2 w-full overflow-x-auto scrollbar-hide">
              {['charities', 'users', 'total'].map(tab => (
                <button
                  key={tab}
                  className={`
                    px-7 py-2 font-semibold rounded-full focus:outline-none
                    transition-all duration-200 border-b-4 shadow-sm
                    whitespace-nowrap
                    ${activeTab === tab
                      ? 'border-[#c2a58a] bg-[#fff8f5]/95 text-[#6b4324] shadow-md'
                      : 'border-transparent text-[#968071] hover:text-[#5c4033] hover:bg-[#f3ede6]/90'}
                  `}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === 'charities' && '🏢 Charities'}
                  {tab === 'users' && '👤 Donors'}
                  {tab === 'total' && '💰 System Total'}
                </button>
              ))}
            </nav>

            {/* Tab Content */}
            <div className="flex-grow">
              {activeTab === 'charities' && (
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                  {charities.map((charity, idx) => (
                    <div
                      key={idx}
                      className="relative p-8 rounded-2xl border-l-8 border-[#c2a58a]
                        bg-white/80 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1
                        min-h-[160px] flex flex-col justify-between"
                    >
                      <span className="absolute -top-6 left-8 text-4xl  pointer-events-none select-none">🏢</span>
                      <h3 className="text-xl md:text-2xl font-semibold text-[#5c4033] tracking-wide mb-2">{charity.name}</h3>
                      <p className="text-[#7b5e47] text-sm mb-2">
                        <strong>Email:</strong>{' '}
                        <a
                          href={`mailto:${charity.email}`}
                          className="text-indigo-600 hover:text-indigo-800 hover:underline"
                        >
                          {charity.email}
                        </a>
                      </p>
                      <p className="text-[#3c763d] text-lg mt-1 flex items-center gap-1 font-semibold">
                        <span>Total Received:</span>{' '}
                        <span className="font-mono text-green-700 text-xl">
                          ₹{charity.totalReceived.toLocaleString()}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'users' && (
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                  {users.map((user, idx) => (
                    <div
                      key={idx}
                      className="relative p-8 rounded-2xl border-l-8 border-[#5c99e5]
                        bg-white/80 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1
                        min-h-[160px] flex flex-col justify-between"
                    >
                      <span className="absolute -top-6 left-8 text-4xl  pointer-events-none select-none">👤</span>
                      <h3 className="text-xl md:text-2xl font-semibold text-[#5c4033] tracking-wide mb-2">{user.name}</h3>
                      <p className="text-[#7b5e47] text-sm mb-2">
                        <strong>Email:</strong>{' '}
                        <a
                          href={`mailto:${user.email}`}
                          className="text-indigo-600 hover:text-indigo-800 hover:underline"
                        >
                          {user.email}
                        </a>
                      </p>
                      <p className="text-[#2563eb] text-lg mt-1 flex items-center gap-1 font-semibold">
                        <span>Total Donated:</span>{' '}
                        <span className="font-mono text-blue-700 text-xl">
                          ₹{user.totalDonated.toLocaleString()}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'total' && (
                <div className="py-14 flex flex-col items-center justify-center
                  bg-[#fffaf5]/90 rounded-2xl border border-[#e4d5c3] shadow-xl mx-auto max-w-2xl mt-20">
                  <div className="text-6xl font-extrabold text-green-700 mb-4 underline decoration-[#c2a58a] decoration-8 underline-offset-4 drop-shadow-lg">
                    ₹{totalSystemAmount.toLocaleString()}
                  </div>
                  <h2 className="text-3xl font-bold text-[#5c4033] mb-2 tracking-tight drop-shadow">
                    Total Funds in the System
                  </h2>
                  <p className="text-[#7b5e47] text-lg text-center max-w-xl">
                    This is the total amount received by all listed charities on the platform.<br />
                    <span className="font-semibold">Thank you</span> to all the generous donors who made this possible!
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Sidebar - Always in its own column, never overlapping */}
          <aside className="hidden lg:block w-full max-w-xs flex-shrink-0">
            <div className="bg-white/90 rounded-2xl shadow-xl p-8 sticky top-32 right-0 z-10 backdrop-blur">
              <h4 className="font-black text-[#a1866f] text-2xl flex items-center gap-2 mb-6">
                <span className="text-2xl">📊</span>
                Quick Stats
              </h4>
              <ul className="space-y-5 text-[#5c4033] text-base">
                <li className="flex items-center gap-3">
                  <span className="text-lg">🏢</span>
                  <span>Total Charities: <b>{charities.length}</b></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lg">👤</span>
                  <span>Total Donors: <b>{users.length}</b></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lg">🎯</span>
                  <span>Largest Donor: <b>{topDonor.name}</b></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lg">💸</span>
                  <span>Avg Charity Fund: <b>
                    ₹{(totalSystemAmount / charities.length).toLocaleString()}
                  </b></span>
                </li>
              </ul>
              <div className="mt-7 text-center text-[#968071] text-[15px]">
                <div className="mb-2">✨ Keep making a difference! ✨</div>
                <div className="italic opacity-50">"Service to others is the rent you pay for your room here on earth."</div>
              </div>
            </div>
          </aside>
        </main>

        <footer className="bg-gradient-to-r from-[#5c4033] to-[#a1866f] text-white py-7 border-t border-[#e4d5c3]/60 shadow-inner mt-10">
          <div className="max-w-7xl mx-auto px-4 text-center text-sm tracking-wider">
            © {new Date().getFullYear()} <span className="font-semibold">CharityFinder</span>. Admin Dashboard.
          </div>
        </footer>
      </div>
    </>
  );
};
