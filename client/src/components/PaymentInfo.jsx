import React from 'react';
import { QrCode, Smartphone } from 'lucide-react';

const PaymentInfo = () => {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white border-t border-gray-100" id="payment">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl">Easy & Secure Payments</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We accept all major UPI apps including PhonePe, Google Pay, and Paytm. Scan the QR code or use our phone number to pay directly.
          </p>
        </div>

        <div className="bg-brand-50 rounded-3xl p-8 sm:p-12 shadow-sm border border-brand-100 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          <div className="space-y-6 text-center md:text-left flex-1">
            <div className="text-3xl font-black text-black tracking-wider">
              +91 92900 78861
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="inline-flex shrink-0 items-center justify-center w-16 h-16 rounded-full bg-brand-100 text-brand-600">
                <Smartphone className="w-8 h-8" />
              </div>
              <p className="text-xl font-bold text-black text-left max-w-[250px] leading-snug">
                You can pay using any upi app through your mobile
              </p>
            </div>

            <p className="text-black text-sm font-bold bg-brand-50 p-4 rounded-xl border border-brand-100 mt-2 shadow-sm text-left">
              * Please send a screenshot of your payment and customer details to the above number through WhatsApp.
            </p>
          </div>

          <div className="w-full md:w-px h-px md:h-48 bg-brand-200"></div>

          <div className="flex-1 flex flex-col items-center gap-4">
            <div className="w-64 h-64 bg-white rounded-2xl shadow-md border-2 border-brand-200 flex flex-col items-center justify-center p-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-50/50 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
              {/* QR Code Image */}
              <img src="/qr.png" alt="Payment QR Code" className="w-full h-full object-contain rounded-xl relative z-20" />
            </div>
            <p className="text-sm text-gray-500 font-bold bg-white px-4 py-2 rounded-lg inline-block shadow-sm">
              Verify name: SYED MALINNEESA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentInfo;
