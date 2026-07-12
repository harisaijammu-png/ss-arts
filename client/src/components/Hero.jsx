import React from 'react';
import { PhoneCall, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-900 to-gray-900 text-white overflow-hidden py-32 px-6 lg:px-8 text-center sm:text-left">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-brand-500/10 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in space-y-8">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
            <span className="block text-brand-300">SS Arts</span>
            <span className="block mt-2">Digital Printing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto sm:mx-0">
            Premium quality printing, custom engraving, and laser cutting services in Singarayakonda. We bring your vision to life with precision and style.
          </p>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <a 
                href="tel:+919290078861"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-brand-500 text-white hover:bg-brand-400 transition-all shadow-lg hover:shadow-brand-500/25 group"
              >
                <PhoneCall className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Call Now
              </a>
              <a 
                href="https://maps.google.com/?q=SS+Arts+Digital+Printing+Singarayakonda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-all border border-white/10"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </a>
            </div>
            
            <div className="flex flex-col gap-4 justify-center sm:justify-start pt-2">
              <a 
                href="https://www.youtube.com/@SsartsShaik"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-400 hover:text-red-300 font-extrabold text-3xl tracking-tight transition-colors group"
              >
                <svg viewBox="0 0 24 24" className="w-10 h-10 mr-4 group-hover:scale-110 transition-transform shadow-lg rounded-xl">
                  <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                  <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Visit our YouTube channel
              </a>
              
              <a 
                href="https://www.instagram.com/looking9ssarts?igsh=MXB0aDJnY29oNWUzbg=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-pink-400 hover:text-pink-300 font-extrabold text-3xl tracking-tight transition-colors group"
              >
                <svg viewBox="0 0 24 24" className="w-10 h-10 mr-4 group-hover:scale-110 transition-transform shadow-lg rounded-xl">
                  <defs>
                    <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <rect x="1" y="1" width="22" height="22" rx="6" ry="6" fill="url(#ig-grad)" />
                  <path fill="none" stroke="#FFFFFF" strokeWidth="2" d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="#FFFFFF" />
                  <rect x="5" y="5" width="14" height="14" rx="3" ry="3" fill="none" stroke="#FFFFFF" strokeWidth="2" />
                </svg>
                Visit our Instagram profile
              </a>
            </div>
          </div>
        </div>
        
        {/* Logo Image */}
        <div className="hidden lg:flex justify-center items-center relative animate-slide-up">
           <div className="relative w-full max-w-md">
             {/* Glowing background effect for the logo */}
             <div className="absolute inset-0 bg-brand-500/20 blur-3xl rounded-full scale-110"></div>
             
             {/* Cropping container to hide the white borders of the image file */}
             <div className="relative z-10 w-full aspect-square rounded-full shadow-2xl border-4 border-white/10 overflow-hidden flex items-center justify-center bg-[#1a2e35]">
               <img 
                 src="/logo.png" 
                 alt="SS Arts Logo" 
                 className="w-full h-full object-cover scale-[1.22]"
               />
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
