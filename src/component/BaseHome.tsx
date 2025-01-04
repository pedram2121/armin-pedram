"use client";
import React, { useState, useEffect } from "react";
import Tabs from "./Tabs";

function BaseHome() {

  const [isSmallScreen, setIsSmallScreen] = useState(false);


  useEffect(() => {
    // بررسی اندازه صفحه
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // میگه بررسی کن فقط ببین اندازه صفحه بزرگه یا کوچیک
    };

    // این خط در ابتدای این یوزافکت بصورت عملی اجرا میشود و تابع فراخوانی میشود
    // نکته جالب اینه که در خط بالایی که تابع رو فقط تعریف کردیم کامپایلر حالت و مختصات اونو ذخیره میکنه - همین و فعلا کاری نمیکنه
    handleResize();

    window.addEventListener("resize", handleResize);  // هر زمان اندازه صفحه تغییر کند، تابع هندل ریسایز اجرا شود

    // پاک کردن لیسنر هنگام حذف کامپوننت
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <>
      <div className="bg-[#F5F6F7] pt-[80px] -mt-[125px]"> {/* اضافه کردن z-index و padding-top */}
        <div className="w-full ">
          <div className="container">

            {/* شرط میذاریم */}

            {!isSmallScreen ? (
              // حالت صفحه بزرگ
              <section className="sticky top-0 mx-auto flex h-screen xl:max-w-[1350px] items-center
               justify-between px-8 sm:overflow-x-hidden overflow-x-auto z-10">
                {/* سمت چپ (تب‌ها) */}
                <div className="relative hidden sm:h-[250px] sm:w-[250px] md:block md:h-[450px] 
                md:w-[450px] lg:h-[650px] lg:w-[600px] mt-16 lg:mt-36">
                  <div className="relative">
                    <div className="absolute w-full h-full">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 539 483" fill="none">
                        <path
                          d="M3.65692 278.074C8.67114 299.495 17.6069 320.017 29.7568 339.189C111.013 467.547 333.697 536.927 446.582 431.621C462.782 416.497 476.732 400.81 488.561 384.73C527.26 331.993 542.753 275.207 537.932 221.401C534.01 177.659 516.653 135.941 487.468 100.014C475.896 85.7336 462.397 72.3523 447.097 60.1518C236.884 -108.181 -34.7214 113.227 3.65692 278.074Z"
                          fill="#387CFF"
                        />
                      </svg>
                    </div>

                    <div
                      className="bg-slate-50 shadow-[0px_6px_10px_rgba(0,0,0,0.10)] z-10 w-[200px] h-[300px] sm:w-[250px] sm:h-[350px] 
                       md:w-[350px] md:h-[480px] lg:w-[420px] lg:h-[520px] 
                       absolute top-[15px] sm:top-[20px] md:top-[30px] right-[20px] 
                       sm:right-[50px] md:right-[45px] rounded-3xl"
                    >
                      <Tabs />
                    </div>
                  </div>
                </div>

                {/* سمت راست (متن‌ها) */}
                <div className="space-y-8 relative ">
                  <div className="space-y-8 text-4xl font-semibold font-Vazirmatn1 md:text-3xl lg:text-4xl xl:text-5xl whitespace-nowrap">
                    <div className="text-black flex flex-row-reverse gap-3">
                      معامله
                      <span className="font-Vazirmatn1 text-[#ECA700]">طــــــــلـا</span>
                      آب شده
                    </div>
                    <div className="block text-right"> بـدون اجـرت </div>
                    <div className="block"> آنــلایــن و بــــه ســـادگی </div>
                  </div>
                  <div className="absolute right-0 text-right">
                    <span className="text-[20px] text-gray-500 font-Vazirmatn2">
                      خرید طلای بدون اجرت حتی با ۱۰۰ هزار تومان به صورت ۲۴ ساعته و تحویل
                      فیزیکی طلا
                    </span>
                  </div>
                </div>
              </section>

              ) : (

              // حالت صفحه کوچک
              <div className="flex flex-col items-center min-h-screen">
                <section className="text-center space-y-6 mt-16 md:mt-24">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-Vazirmatn1 text-black">
                    معامله <span className="text-[#ECA700] font-bold">طــــــــلـا</span> آب شده
                  </h1>
                  <h2 className="text-2xl text-gray-700">بدون اجرت</h2>
                  <p className="text-lg md:text-xl text-gray-600">آنلاین و به سادگی</p>
                  <p className="text-sm md:text-base text-gray-500 font-Vazirmatn2">
                    خرید طلای بدون اجرت حتی با ۱۰۰ هزار تومان به صورت ۲۴ ساعته و تحویل
                    فیزیکی طلا
                  </p>
                </section>

                <section className="flex justify-center mt-12">
                  <div className="bg-slate-50 shadow-md w-full max-w-md p-6 rounded-3xl">
                    <Tabs />
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BaseHome;
