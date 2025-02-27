"use client";

import Image from "next/image";
import React from "react";
import P91 from "../../Image/image 91.png";
import P92 from "../../Image/image 92.png";
import P93 from "../../Image/Rectangle 19.png";
import senf from "../../Image/Senf.png";
import Bazargan from "../../Image/Bazargan.png";
import { useResponsive } from "@/component-Home/ResponsiveContext/ResponsiveContext";

function TermsandConditions() {
  const { isMobile } = useResponsive();

  return (
    <div className="h-full w-full bg-[#F5F6F7] -mt-[125px] flex flex-col items-center mx-auto">
      <div className="container font-Vazirmatn2 text-black mt-96 mb-16 px-4">
        {!isMobile ? (
          <>
            {/* محتوا برای حالت دسکتاپ */}
            <div className="flex flex-col text-center items-center space-y-8">
              <div className="text-4xl md:text-4xl lg:text-5xl font-semibold font-Vazirmatn1 text-black">
                مجوز های طلای خرداد
              </div>
              <div className="flex justify-center font-Vazirmatn2 px-5 text-[16px] text-center rtl max-w-[850px]">
                میلی، به عنوان بستر امن و معتبر خرید و فروش آنلاین طلای آب شده،
                دارای مجوزهای لازم خرید و فروش طلا به صورت آنلاین است.
              </div>
            </div>
            <div className="flex justify-center mt-14">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Frame">
                  <path
                    id="Vector"
                    d="M19.5 13.5L12 21M12 21L4.5 13.5M12 21V3"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>

            <div className="bg-white w-full py-20 font-Vazirmatn2 mt-14">
              <div className="container px-4 space-y-32">
                {/* کارت اول */}
                <div className="w-full bg-[#F5F6F7] border-t-8 border-t-blue-600 rounded-b-xl p-6">
                  <div className="text-right text-[20px] text-black mb-6">
                    مجوز اینماد و شامد طلای خرداد
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <Image className="w-40 h-40" src={P91} alt="p91" />
                    <Image className="w-40 h-40" src={P92} alt="p92" />
                  </div>
                </div>

                {/* کارت دوم */}
                <div className="w-full bg-[#F5F6F7] border-t-8 border-t-blue-600 rounded-b-xl p-6">
                  <div className="text-right text-[20px] text-black mb-6">
                    پروانه کسب خرده‌فروشی طلای آب‌شده شرکت سرمایه زرین ماندگار
                    (میلی)
                  </div>
                  <div className="flex justify-center">
                    <Image
                      className="w-[90%] max-w-[600px] h-auto"
                      src={P93}
                      alt="p93"
                    />
                  </div>
                  <div className="text-center mt-8">
                    <button className="bg-blue-600 px-10 py-3 rounded-lg text-white">
                      استعلام مجوز از اتحادیه طلا و جواهر
                    </button>
                  </div>
                </div>

                {/* کارت سوم */}
                <div className="w-full bg-[#F5F6F7] border-t-8 border-t-blue-600 rounded-b-xl p-6">
                  <div className="text-right text-[20px] text-black mb-6">
                    مجوز نظام صنفی رایانه‌ای
                  </div>
                  <div className="flex justify-center">
                    <Image
                      className="w-[90%] max-w-[600px] h-auto"
                      src={senf}
                      alt="senf"
                    />
                  </div>
                  <div className="text-center mt-8">
                    <button className="bg-blue-600 px-10 py-3 rounded-lg text-white">
                      استعلام مجوز از نظام صنفی رایانه‌ای
                    </button>
                  </div>
                </div>

                {/* کارت چهارم */}
                <div className="w-full bg-[#F5F6F7] border-t-8 border-t-blue-600 rounded-b-xl p-6">
                  <div className="text-right text-[20px] text-black mb-6">
                    عضویت در اتاق بازرگانی
                  </div>
                  <div className="flex justify-center">
                    <Image
                      className="w-[90%] max-w-[600px] h-auto"
                      src={Bazargan}
                      alt="bazargan"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* محتوا برای حالت موبایل */
          <div className="w-full px-6 py-8 text-center">
            <div className="text-2xl font-semibold mb-4">
              مجوز های طلای خرداد
            </div>
            <div className="text-sm text-center px-4 mb-6">
              میلی، به عنوان بستر امن و معتبر خرید و فروش آنلاین طلای آب شده،
              دارای مجوزهای لازم خرید و فروش طلا به صورت آنلاین است.
            </div>

            <div className="space-y-8">
              {/* کارت اول */}
              <div className="bg-white rounded-xl p-6 border-t-4 border-t-blue-600">
                <div className="text-right text-[18px] text-black mb-4">
                  مجوز اینماد و شامد طلای خرداد
                </div>
                <div className="flex justify-center gap-6 mb-6">
                  <Image className="w-24 h-24" src={P91} alt="p91" />
                  <Image className="w-24 h-24" src={P92} alt="p92" />
                </div>
              </div>

              {/* کارت دوم */}
              <div className="bg-white rounded-xl p-6 border-t-4 border-t-blue-600">
                <div className="text-right text-[18px] text-black mb-4">
                  پروانه کسب خرده‌فروشی طلای آب‌شده
                </div>
                <div className="flex justify-center mb-4">
                  <Image
                    className="w-[90%] max-w-[400px] h-auto"
                    src={P93}
                    alt="p93"
                  />
                </div>
                <div>
                  <button className="bg-blue-600 px-8 py-2 rounded-lg text-white w-full">
                    استعلام مجوز از اتحادیه طلا و جواهر
                  </button>
                </div>
              </div>

              {/* کارت سوم */}
              <div className="bg-white rounded-xl p-6 border-t-4 border-t-blue-600">
                <div className="text-right text-[18px] text-black mb-4">
                  مجوز نظام صنفی رایانه‌ای
                </div>
                <div className="flex justify-center mb-4">
                  <Image
                    className="w-[90%] max-w-[400px] h-auto"
                    src={senf}
                    alt="senf"
                  />
                </div>
                <div>
                  <button className="bg-blue-600 px-8 py-2 rounded-lg text-white w-full">
                    استعلام مجوز از نظام صنفی رایانه‌ای
                  </button>
                </div>
              </div>

              {/* کارت چهارم */}
              <div className="bg-white rounded-xl p-6 border-t-4 border-t-blue-600">
                <div className="text-right text-[18px] text-black mb-4">
                  عضویت در اتاق بازرگانی
                </div>
                <div className="flex justify-center mb-4">
                  <Image
                    className="w-[90%] max-w-[400px] h-auto"
                    src={Bazargan}
                    alt="bazargan"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TermsandConditions;
