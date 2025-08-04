import { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import { Typewriter } from 'react-simple-typewriter';
import img1 from '../assets/childslide.jpg';
import img2 from '../assets/animalslide.webp';
import img3 from '../assets/envslide.avif';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  const [showText, setShowText] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderImages = [img1, img2, img3];

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#fdfaf5]">
      <NavBar />
      <main className="flex-grow">
      <div className="h-10" />
      
      {/* Hero Section */}
      <section
        className="flex flex-col md:flex-row justify-between items-center px-8 py-38 gap-12 bg-gradient-to-br from-[#f5f7fa] to-[#e3eaf4] font-sans animate-fade-in-up rounded-3xl shadow-xl mx-4 mt-10"
        data-aos="fade-up"
      >
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left" data-aos="fade-right">
          <h2 className="text-5xl font-black text-indigo-700 mb-6 leading-tight drop-shadow-md">
            What is Charity?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed font-medium min-h-[140px] whitespace-pre-line">
            {showText && (
              <Typewriter
                words={[
                  "Charity is more than giving — it’s sharing love, hope, and humanity.\nIt empowers the forgotten, uplifts the struggling, and brings light where there was darkness.\nIn every act of giving, you become a reason for someone’s smile, a chapter in someone’s story of hope.\nTogether, through kindness, we build a world worth living in."
                ]}
                cursor
                typeSpeed={15}
                deleteSpeed={0}
                delaySpeed={999999}
                loop={1}
              />
            )}
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2" data-aos="fade-left">
          <div className="relative w-full h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
            {sliderImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={`
                  absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
                  ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                `}
              />
            ))}
            {/* Indicator Dots */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
              {sliderImages.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? 'bg-indigo-500' : 'bg-gray-300'
                  } transition-all duration-300`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="font-sans bg-gradient-to-b from-[#fdfcfb] via-[#f4f6f9] to-[#e8ecf3] py-20 px-6" data-aos="fade-up">
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-16 tracking-tight drop-shadow-md">
          How It Works
        </h2>
        <div className="relative max-w-xl mx-auto before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:-ml-0.5 before:bg-gradient-to-b before:from-indigo-200 before:to-indigo-500">
          {[
            { label: "Start", color: "from-pink-100 to-pink-200", dot: "bg-pink-500" },
            { label: "Register", color: "from-violet-100 to-violet-200", dot: "bg-violet-500" },
            { label: "Donate", color: "from-sky-100 to-sky-200", dot: "bg-sky-500" },
            { label: "Make Yourself Happy", color: "from-emerald-100 to-emerald-200", dot: "bg-emerald-500" },
          ].map((step, index) => (
            <div
              key={index}
              className="mb-16 relative"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-md bg-white z-20">
                <div className={`w-4 h-4 rounded-full ${step.dot} mx-auto mt-0.5`}></div>
              </div>
              <div className={`relative bg-gradient-to-br ${step.color} border border-white rounded-3xl shadow-lg px-6 py-5 max-w-sm mx-auto mt-8 transition-all duration-300 hover:scale-[1.02] ${
                index % 2 === 0 ? 'ml-14' : 'mr-14'
              }`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-wide">{step.label}</h3>
                <p className="text-gray-700 text-base leading-relaxed italic">
                  {step.label === "Start" && "Begin your journey with a heart full of kindness."}
                  {step.label === "Register" && "Join a trusted community making real change."}
                  {step.label === "Donate" && "Contribute resources to support meaningful causes."}
                  {step.label === "Make Yourself Happy" && "Feel fulfilled by helping others in need."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Donation Cards Section */}
      <section className="bg-[#f6ede2] py-24 px-6" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#b88c5a] to-[#d4b07c] mb-16 drop-shadow-md tracking-tight">
          What Can You Donate?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Money", desc: "Your financial support fuels essential aid, education, and relief programs." },
            { title: "Clothes", desc: "Donate clean clothing to help those who lack warmth and dignity." },
            { title: "Food", desc: "Feed the hungry and reduce waste by sharing nutritious meals." },
            { title: "Books", desc: "Give the gift of knowledge and learning to underprivileged communities." },
            { title: "Time / Volunteering", desc: "Your time can inspire change and transform lives on the ground." },
            { title: "Medical Supplies", desc: "Contribute supplies to improve healthcare access for those in need." },
          ].map((item, i) => (
            <div
              key={i}
              className="group w-full h-52 md:h-64 [perspective:1000px]"
              data-aos="flip-left"
              data-aos-delay={i * 100}
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-y-180">
                <div className="absolute inset-0 bg-[#fdf7ef] border border-[#e2caa3] rounded-2xl shadow-md flex items-center justify-center text-[#8a5b2a] font-bold text-xl md:text-2xl backface-hidden transition-all group-hover:scale-105">
                  {item.title}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#d2a679] to-[#b98b5d] text-white rounded-2xl shadow-xl px-6 py-6 flex items-center justify-center text-center text-sm md:text-base leading-relaxed rotate-y-180 backface-hidden">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
      {/* Footer */}
       <footer className="bg-gradient-to-r from-[#5c4033] to-[#a1866f] text-white py-6 shadow-inner animate-fade-in-up" >
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">CharityFinder</span>. All rights reserved.
        </div>
      </footer>
   </div>
    
  );
}

export default Home;
