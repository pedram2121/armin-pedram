import Image from 'next/image';
import React from 'react';
import P91 from '../../Image/image 91.png';
import P92 from '../../Image/image 92.png';
import P93 from '../../Image/Rectangle 19.png';
import senf from '../../Image/Senf.png';
import Bazargan from '../../Image/Bazargan.png';

function TermsandConditions() {
  return (
    <div className="h-full w-full bg-[#F5F6F7] -mt-[125px] flex flex-col items-center mx-auto">
      <div className="container font-Vazirmatn2 text-black mt-96 mb-16 px-4">
        {/* متن بالایی */}
        <div className="flex flex-col text-center items-center space-y-8">
          <div className="text-4xl md:text-4xl lg:text-5xl font-semibold font-Vazirmatn1 text-black">
            مجوز های طلای خرداد
          </div>
          <div className="flex justify-center font-Vazirmatn2 px-5 text-[16px] text-center max-w-[850px]">
            میلی، به عنوان بستر امن و معتبر خرید و فروش آنلاین طلای آب شده، دارای مجوزهای لازم خرید و فروش طلا به صورت آنلاین است. طلایی که در میلی معامله می‌شود، توسط میلی و تمامی سازمان ها و اتحادیه های مربوط به خرید و فروش آنلاین طلای آب شده تایید می شود. در بستر امن میلی، طلای ۱۸ عیار با خلوص ۷۵۰ معامله می شود و با فاکتور تضمینی و قانونی به دریافت کنندگان طلا در قالب شمش های پک شدۀ گرمی طلا تحویل داده می شود. تمامی شمش های طلای میلی در برترین و معتبرترین آزمایشگاه خلوص طلا، ذوب و آماده‌سازی و بسته‌بندی می‌شود. میلی، متعهد می‌شود بستری امن و قابل اعتماد برای افرادی که به دنبال خرید امن طلای آب‌شده به صورت آنلاین هستند، فراهم کند
          </div>
        </div>

        <div className="flex justify-center mt-14">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
              <path id="Vector" d="M19.5 13.5L12 21M12 21L4.5 13.5M12 21V3" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      </div>

      <div className="bg-white w-full py-20 font-Vazirmatn2">
        <div className="container px-4 space-y-32">
          {/* کارت اول */}
          <div className="w-full bg-[#F5F6F7] border-t-8 border-t-blue-600 rounded-b-xl p-6">
            <div className="text-right text-[20px] text-black mb-6">مجوز اینماد و شامد طلای خرداد</div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Image className="w-40 h-40" src={P91} alt="p91" />
              <Image className="w-40 h-40" src={P92} alt="p92" />
            </div>
          </div>

          {/* کارت دوم */}
          <div className="w-full bg-[#F5F6F7] border-t-8 border-t-blue-600 rounded-b-xl p-6">
            <div className="text-right text-[20px] text-black mb-6">پروانه کسب خرده‌فروشی طلای آب‌شده شرکت سرمایه زرین ماندگار (میلی)</div>
            <div className="flex justify-center">
              <Image className="w-[90%] max-w-[600px] h-auto" src={P93} alt="p93" />
            </div>
            <div className="text-center mt-8">
              <button className="bg-blue-600 px-10 py-3 rounded-lg text-white">
                استعلام مجوز از اتحادیه طلا و جواهر
              </button>
            </div>
          </div>

          {/* کارت سوم */}
          <div className="w-full bg-[#F5F6F7] border-t-8 border-t-blue-600 rounded-b-xl p-6">
            <div className="text-right text-[20px] text-black mb-6">مجوز نظام صنفی رایانه‌ای</div>
            <div className="flex justify-center">
              <Image className="w-[90%] max-w-[600px] h-auto" src={senf} alt="senf" />
            </div>
            <div className="text-center mt-8">
              <button className="bg-blue-600 px-10 py-3 rounded-lg text-white">
                استعلام مجوز از نظام صنفی رایانه‌ای
              </button>
            </div>
          </div>

          {/* کارت چهارم */}
          <div className="w-full bg-[#F5F6F7] border-t-8 border-t-blue-600 rounded-b-xl p-6">
            <div className="text-right text-[20px] text-black mb-6">عضویت در اتاق بازرگانی</div>
            <div className="flex justify-center">
              <Image className="w-[90%] max-w-[600px] h-auto" src={Bazargan} alt="bazargan" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsandConditions;
