import React from 'react';
import { Lock, ShoppingCart, Smartphone } from 'lucide-react';

const PaymentInfo = () => {
  return (
    <section className="py-24 px-6 lg:px-8 bg-transparent" id="payment">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Headers Outside the Card */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            You can place order and pay advance
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Please review your order details below. You will be redirected to Razorpay's secure payment modal to complete your transaction.
          </p>
        </div>

        {/* Order Session Card */}
        <div className="bg-[#1f2937]/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-[0_15px_50px_rgba(37,211,102,0.15)] border border-white/5 relative overflow-hidden text-center mx-auto max-w-[54rem] flex flex-col items-center gap-6">
          <div className="absolute inset-0 pointer-events-none rounded-3xl shadow-[inset_0_0_100px_rgba(255,255,255,0.02)]"></div>
          <div className="relative z-10 w-full flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Want to place your order directly via chat?</h3>
            <a 
              href="https://wa.me/919290078861?text=Hi,%20I%20would%20like%20to%20place%20an%20order%20at%20SS-ARTS%20!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebd5b] text-white px-12 py-5 text-xl md:text-2xl rounded-full font-extrabold transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] shadow-xl shadow-[#25D366]/30"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Payment Session Card */}
        <div className="bg-[#1f2937]/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-[0_15px_50px_rgba(20,184,166,0.15)] border border-white/5 relative overflow-hidden text-center mx-auto max-w-[54rem] flex flex-col items-center gap-10">
          <div className="absolute inset-0 pointer-events-none rounded-3xl shadow-[inset_0_0_100px_rgba(255,255,255,0.02)]"></div>

          {/* Phone Number & Name Section */}
          <div className="relative z-10 w-full flex flex-col items-center gap-6 mb-2">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Payment Details</h3>
            
            <div className="bg-[#111827]/80 backdrop-blur-md w-full max-w-[28rem] text-center px-6 py-4 rounded-xl border border-white/5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
              <p className="text-lg sm:text-xl font-medium text-slate-300 tracking-wide">
                Verify name: <span className="text-white font-bold tracking-wider drop-shadow-md">SYED MALINNEESA</span>
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 mt-4">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#9ca3af] font-bold text-center">
                YOU CAN PAY TO MOBILE NUMBER FROM ANY UPI:
              </p>
              <div className="text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                +91 92900 78861
              </div>
            </div>
          </div>

          {/* QR Container */}
          <div className="relative z-10 w-full flex flex-col items-center gap-8">
            <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="flex flex-col items-center gap-4">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#9ca3af] font-bold text-center">
                YOU CAN MAKE A PAYMENT THROUGH SCANNER:
              </p>
              <div className="w-72 h-72 sm:w-80 sm:h-80 bg-white rounded-3xl p-4 shadow-[0_0_30px_rgba(255,255,255,0.05)] border border-slate-600 transition-transform hover:scale-105 duration-300">
                <img src="/qr.png" alt="Payment QR Code" className="w-full h-full object-contain rounded-2xl" />
              </div>
            </div>
          </div>

          {/* Bottom Section (Alternative Payment Methods) */}
          <div className="relative z-10 w-full space-y-10 flex flex-col items-center justify-center pt-8 pb-4">
            
            <div className="flex flex-col items-center space-y-6">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#9ca3af] font-bold">
                SELECT YOUR UPI APP FOR DIRECT PAYMENT:
              </p>
              <div className="flex items-center justify-center gap-6 sm:gap-10">
                {/* PhonePe Badge */}
                <a href="phonepe://pay?pa=9290078861@ybl&pn=SS%20ARTS" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#5f259f] flex flex-col items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(95,37,159,0.3)] transition-all hover:scale-110 hover:shadow-[0_0_25px_rgba(95,37,159,0.6)]">
                  <span className="text-xs sm:text-sm font-bold text-white leading-tight">PhonePe</span>
                </a>
                {/* GPay Badge */}
                <a href="tez://upi/pay?pa=9290078861@okaxis&pn=SS%20ARTS" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex flex-col items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                  <span className="text-[15px] sm:text-[18px] font-bold text-slate-800 leading-tight tracking-tighter">GPay</span>
                </a>
                {/* Paytm Badge */}
                <a href="paytmmp://pay?pa=9290078861@paytm&pn=SS%20ARTS" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#00baf2] flex flex-col items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(0,186,242,0.3)] transition-all hover:scale-110 hover:shadow-[0_0_25px_rgba(0,186,242,0.6)]">
                  <span className="text-xs sm:text-sm font-bold text-white leading-tight">Paytm</span>
                </a>
                {/* Amazon Pay Badge */}
                <a href="upi://pay?pa=9290078861@apl&pn=SS%20ARTS" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-100 flex flex-col items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight text-center">Amazon<br/>pay</span>
                </a>
              </div>
              
              <div className="mt-8 flex justify-center w-full">
                <div className="bg-[#25D366]/10 border border-[#25D366]/20 shadow-inner rounded-2xl p-2 pl-6 sm:pl-8 pr-2 flex items-center gap-4 max-w-xl">
                  <p className="text-sm md:text-base text-[#1ebd5b] font-medium leading-relaxed text-left flex-1">
                    <span className="font-bold">Note:</span> Send a screenshot of payment and your details through WhatsApp
                  </p>
                  <a 
                    href="https://wa.me/919290078861" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex-shrink-0 bg-[#25D366] hover:bg-[#1ebd5b] rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-[0_0_15px_rgba(37,211,102,0.4)]"
                    title="Send Screenshot on WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentInfo;
