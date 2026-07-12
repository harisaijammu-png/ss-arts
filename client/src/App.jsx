import React from 'react';
import Hero from './components/Hero';
import ServicesGallery from './components/ServicesGallery';
import PaymentInfo from './components/PaymentInfo';
import ContactLocation from './components/ContactLocation';
import SEO from './components/SEO';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <SEO />
      
      {/* Navigation (Optional simple header if needed, but Hero serves as main entry) */}
      <header className="absolute top-0 w-full z-50 bg-transparent border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-white font-black text-xl tracking-wider">SS ARTS</div>
          <nav className="hidden md:flex space-x-8 text-xl font-black text-gray-300">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#payment" className="hover:text-white transition-colors">Payments</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Hero />
        <ServicesGallery />
        <PaymentInfo />
        <ContactLocation />
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12 text-center border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} SS Arts Digital Printing. All rights reserved.</p>
        <p className="text-sm mt-2">Singarayakonda, Andhra Pradesh</p>
      </footer>
    </div>
  );
}

export default App;
