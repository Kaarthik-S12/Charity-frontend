import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DonorProfile({ onClose }) {
  const [profilePic, setProfilePic] = useState(null);
  const inputFile = useRef(null);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated!');
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-5">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="donor-profile-title"
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full px-10 py-10 flex flex-col md:flex-row gap-10 font-sans transition-all duration-300"
      >
        {/* Close Button */}
        <button
          onClick={() => navigate('/')}
          aria-label="Close profile modal"
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Profile Image */}
        <div
          onClick={() => inputFile.current.click()}
          className="flex flex-col items-center justify-center cursor-pointer w-40 h-40 rounded-full bg-gray-100 border border-gray-300 shadow hover:shadow-md transition relative"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && inputFile.current.click()}
        >
          <img
            alt="Profile"
            src={profilePic || 'https://www.gravatar.com/avatar?d=mp&f=y'}
            className="object-cover w-full h-full rounded-full select-none pointer-events-none"
            draggable={false}
          />
          <div className="absolute inset-0 bg-white/10 hover:bg-white/60 flex items-center justify-center rounded-full opacity-0 hover:opacity-100 transition">
            <span className="text-sm text-gray-700 font-medium">Change</span>
          </div>
          <input
            ref={inputFile}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6">
          <h2
            id="donor-profile-title"
            className="text-2xl font-semibold text-gray-900 mb-2"
          >
            Donor Profile
          </h2>

          {[
            { label: 'Name', name: 'name', type: 'text', placeholder: 'Your Name' },
            { label: 'Address', name: 'address', type: 'text', placeholder: '123 Main Street' },
            { label: 'Phone', name: 'phone', type: 'tel', placeholder: '9876543210', pattern: '[0-9]{10,15}' },
            { label: 'Email', name: 'email', type: 'email', placeholder: 'example@email.com' },
          ].map(({ label, name, type, placeholder, pattern }, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <label
                htmlFor={name}
                className="text-sm font-medium text-gray-800 tracking-wide"
              >
                {label}
              </label>
              <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                pattern={pattern}
                value={form[name]}
                onChange={handleChange}
                required
                autoComplete="off"
                className="
                  w-full px-5 py-3
                  border border-gray-300 rounded-xl
                  text-gray-900 placeholder-gray-400
                  text-base font-medium
                  shadow-sm
                  transition-all
                  duration-200
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  focus:border-blue-500
                  hover:border-gray-400
                "
              />
            </div>
          ))}

          <button
            type="submit"
            className="
              mt-4 bg-blue-600 hover:bg-blue-700
              text-white text-base font-semibold
              py-3 px-6 rounded-xl shadow-md
              transition-all duration-200
              focus:outline-none focus:ring-4 focus:ring-blue-300
            "
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default DonorProfile;
