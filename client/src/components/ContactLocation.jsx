import React from 'react';
import { MapPin, Phone, Mail, Clock, Truck } from 'lucide-react';

const ContactLocation = () => {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gray-50 border-t border-gray-100" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl">Visit Our Shop</h2>
          <p className="mt-4 text-lg text-gray-600">
            We are locally owned and operated in Singarayakonda. Come see our work!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          
          {/* Contact Details */}
          <div className="p-8 sm:p-12 space-y-8 flex flex-col justify-center">
            <h3 className="text-3xl font-black tracking-tight text-gray-900 mb-2">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 bg-brand-50 p-3 rounded-full text-brand-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-gray-600">
                    Opposite Pakala Road, Trunk Road<br />
                    Singarayakonda (Beside SBH ATM)<br />
                    Andhra Pradesh
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 bg-brand-50 p-3 rounded-full text-brand-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-gray-600 hover:text-brand-600 transition-colors">
                    <a href="tel:+919290078861">+91 92900 78861</a>
                  </p>
                  <p className="text-gray-600 mt-1">
                    WhatsApp available
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 bg-brand-50 p-3 rounded-full text-brand-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-gray-600 hover:text-brand-600 transition-colors break-all">
                    <a href="mailto:digitalprintingssarts@gmail.com">digitalprintingssarts@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 bg-brand-50 p-3 rounded-full text-brand-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-1">Hours</p>
                  <p className="text-gray-600">
                    24/7 we are available you can contact us
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 bg-brand-50 p-3 rounded-full text-brand-600">
                  <Truck className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-1">Shipping</p>
                  <div className="text-gray-600">
                    <p>We deliver our products all over India.</p>
                    <p className="text-gray-500 font-medium mt-1">* You must pay shipping charges by own</p>
                    <div className="mt-3 space-y-1">
                      <p className="font-semibold text-brand-700">Preference for Bulk Orders:</p>
                      <ul className="list-disc pl-4 space-y-0.5 text-gray-600">
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
          <div className="h-[400px] lg:h-auto bg-gray-200 relative">
            {/* The query uses the address to pinpoint the map. In a real app, an API key is recommended, but this iframe uses a general search embed which often works for local landmarks if specifically formatted, or a simple placeholder approach. We use a standard Google Maps embed URL format. */}
            <iframe
              title="SS Arts Digital Printing Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383.07687836371!2d80.016335!3d15.25055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a15993557e1b5%3A0xcb065a7e3ec3ef0!2sSingarayakonda%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full object-cover filter contrast-100"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;
