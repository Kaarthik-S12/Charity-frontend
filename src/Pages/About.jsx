import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import officeImg from '../assets/office.webp'; // Ensure this image exists

function About() {
  const navigate = useNavigate();

  return (
    <>
      {/* Top Navigation */}
      <div className="flex justify-end p-6 bg-gradient-to-r from-[#f5f0eb] to-[#f9f5f0] shadow-sm">
        <button
          onClick={() => navigate('/')}
          className="bg-gradient-to-r from-[#b08968] to-[#7f5539] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition-all duration-300"
        >
          Back to Home
        </button>
      </div>

      {/* Main Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 py-20 px-6 md:px-20 bg-gradient-to-br from-[#f8f4f0] to-[#f1e7de]">
        {/* Left - About Content */}
        <div className="md:w-1/2 bg-white/70 backdrop-blur-lg p-10 rounded-3xl border border-[#e3d5ca] shadow-xl" data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5e412f] mb-6 leading-snug tracking-wide">
            About <span className="text-[#a47148]">CharityFinder</span>
          </h2>
          <p className="text-[#4b3c2d] text-lg leading-relaxed mb-6">
            CharityFinder is your bridge to meaningful impact. Our platform makes giving simple,
            trustworthy, and effective — by connecting donors with real-world causes.
          </p>

          <ul className="list-disc pl-5 space-y-3 text-[#574136] font-medium text-base">
            <li>✨ Discover causes that resonate with you.</li>
            <li>💝 Contribute money, food, time, or items securely.</li>
            <li>🌱 Empower real people and grassroots organizations.</li>
            <li>🤝 Be part of a growing kindness revolution.</li>
          </ul>

          <p className="mt-6 italic text-[#3e2c20]">
            “It’s not about how much we give — but how much love we put into giving.”
          </p>
        </div>

        {/* Right - Image */}
        <div className="md:w-1/2" data-aos="fade-left">
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-[#d4b07c] transition-all hover:scale-105 duration-500">
            <img
              src={officeImg}
              alt="Modern office or NGO"
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#f3ebe5] py-16 px-6 md:px-20 text-[#453528] font-sans border-t border-[#e6d5c3]">
        <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#5a3e2b]">
          Contact & Connect
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-base md:text-lg">
          {/* Contact Info */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#a47148] text-xl" />
            <span>charityfinder@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-[#a47148] text-xl" />
            <span>+91 9876543210</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-[#a47148] text-xl" />
            <span>Chennai, Tamil Nadu, India</span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4 hover:text-[#0a66c2] transition-colors">
            <FaLinkedin className="text-[#0a66c2] text-xl" />
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <div className="flex items-center gap-4 hover:text-[#c13584] transition-colors">
            <FaInstagram className="text-[#c13584] text-xl" />
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          </div>
          <div className="flex items-center gap-4 hover:text-[#1da1f2] transition-colors">
            <FaTwitter className="text-[#1da1f2] text-xl" />
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          </div>
          <div className="flex items-center gap-4 hover:text-[#1877f2] transition-colors">
            <FaFacebook className="text-[#1877f2] text-xl" />
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#ede0d4] text-[#3f2f21] text-center py-6 mt-4 shadow-inner text-sm">
        © {new Date().getFullYear()} CharityFinder. Designed with heart in India.
      </footer>
    </>
  );
}

export default About;
