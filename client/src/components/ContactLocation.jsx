import React from 'react';
import { MapPin, Phone, Mail, Clock, Truck } from 'lucide-react';

const ContactLocation = () => {
  return (
    <section className="py-24 px-6 lg:px-8 bg-transparent" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">Visit Our Shop</h2>
          <p className="mt-4 text-lg text-slate-300">
            We are locally owned and operated in Singarayakonda. Come see our work!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 bg-white/5 backdrop-blur-xl rounded-[2rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_20px_40px_-10px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden relative">
          
          {/* subtle gradient glow */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-brand-500/5 to-transparent pointer-events-none"></div>

          {/* Contact Details */}
          <div className="p-8 sm:p-12 space-y-8 flex flex-col justify-center relative z-10">
            <h3 className="text-3xl font-black tracking-tight text-white mb-2">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 bg-brand-500/20 p-3 rounded-full border border-brand-500/30 text-brand-300 shadow-[0_0_15px_rgba(20,184,166,0.15)] group-hover:bg-brand-500/30 transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-slate-400">
                    Opposite Pakala Road, Trunk Road<br />
                    Singarayakonda (Beside SBH ATM)<br />
                    Andhra Pradesh
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 bg-brand-500/20 p-3 rounded-full border border-brand-500/30 text-brand-300 shadow-[0_0_15px_rgba(20,184,166,0.15)] group-hover:bg-brand-500/30 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-slate-400 hover:text-brand-400 transition-colors">
                    <a href="tel:+919290078861">+91 92900 78861</a>
                  </p>
                  <p className="text-slate-500 mt-1">
                    WhatsApp available
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 bg-brand-500/20 p-3 rounded-full border border-brand-500/30 text-brand-300 shadow-[0_0_15px_rgba(20,184,166,0.15)] group-hover:bg-brand-500/30 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-slate-400 hover:text-brand-400 transition-colors break-all">
                    <a href="mailto:digitalprintingssarts@gmail.com">digitalprintingssarts@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 bg-brand-500/20 p-3 rounded-full border border-brand-500/30 text-brand-300 shadow-[0_0_15px_rgba(20,184,166,0.15)] group-hover:bg-brand-500/30 transition-colors">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-1">Hours</p>
                  <p className="text-slate-400">
                    24/7 we are available you can contact us
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 bg-brand-500/20 p-3 rounded-full border border-brand-500/30 text-brand-300 shadow-[0_0_15px_rgba(20,184,166,0.15)] group-hover:bg-brand-500/30 transition-colors">
                  <Truck className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-1">Shipping</p>
                  <div className="text-slate-400">
                    <p>We deliver our products all over India.</p>
                    <p className="text-slate-500 font-medium mt-1">* You must pay shipping charges by own</p>
                    <div className="mt-3 space-y-1">
                      <p className="font-semibold text-brand-300">Preference for Bulk Orders:</p>
                      <ul className="list-disc pl-4 space-y-0.5 text-slate-400">
                        <li>We will give discounts for bulk orders.</li>
                        <li>Shipping charges are free if it is between 1kg to 5kg.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-auto bg-[#0B1120] relative rounded-b-[2rem] lg:rounded-l-none lg:rounded-r-[2rem] overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10 z-10">
            <iframe
              title="SS Arts Digital Printing Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383.07687836371!2d80.016335!3d15.25055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a15993557e1b5%3A0xcb065a7e3ec3ef0!2sSingarayakonda%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full object-cover filter invert-[0.9] hue-rotate-180 contrast-75 opacity-80 mix-blend-screen"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;
