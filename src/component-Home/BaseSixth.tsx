"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import GroupA from '../Image/GroupA.png'
import Groupb from '../Image/GroupB.png'
import Groupc from '../Image/GroupC.png'
import icon from '../Image/icon.png'
import Telegram from '../Image/Telegram.png'
import Linkdin from '../Image/Linkdin.png'
import instagram from '../Image/instagram.png'
import ppp from '../Image/ppp.png'
import Un from '../Image/Un.png'
import Icon from '../Image/Icon.png';





export default function BaseSixth() {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // بررسی اندازه صفحه
    const handleResize5 = () => {
      setIsSmallScreen(window.innerWidth <= 768); // میگه بررسی کن فقط ببین اندازه صفحه بزرگه یا کوچیک
    };
    handleResize5();
    window.addEventListener("resize", handleResize5);  // هر زمان اندازه صفحه تغییر کند، تابع هندل ریسایز اجرا شود
    // پاک کردن لیسنر هنگام حذف کامپوننت
    return () => window.removeEventListener("resize", handleResize5);
  }, []);



  return (
    <div className='mt-16 min-h-[200px] w-full flex flex-col items-center justify-between overflow-hidden overflow-x-scroll bg-blue-600'>



      {
        !isSmallScreen ? (

          <>
            <div className=' container flex justify-between items-center'>
              {/* // سمت چپ شکل موبایل */}

              <div className='hidden mt-32 relative sm:h-[250px] sm:w-[250px] md:block md:h-[650px] 
                md:w-[600px] lg:h-[650px] lg:w-[600px] lg:mt-36'>
                <div style={{ width: '100%', height: '100%', paddingTop: 88, paddingLeft: 267, paddingRight: 268, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                  <div style={{ width: 435, height: 860, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                    <div style={{ width: 431, height: 860, position: 'relative' }}>
                      <div style={{ width: 407, height: 844, left: 12, top: 8, position: 'absolute', borderRadius: 52, border: '2px #C4B5FD solid' }} />
                      <div style={{ width: 423, height: 860, left: 4, top: 0, position: 'absolute', borderRadius: 58, border: '2px #C4B5FD solid' }} />
                      <div style={{ width: 4, height: 40, left: 0, top: 177, position: 'absolute', borderTopLeftRadius: 8, borderTopRightRadius: 8, border: '2px #C4B5FD solid' }} />
                      <div style={{ width: 4, height: 40, left: 0, top: 233, position: 'absolute', borderTopLeftRadius: 8, borderTopRightRadius: 8, border: '2px #C4B5FD solid' }} />
                      <div style={{ width: 4, height: 40, left: 0, top: 289, position: 'absolute', borderTopLeftRadius: 8, borderTopRightRadius: 8, border: '2px #C4B5FD solid' }} />
                      <div style={{ width: 4, height: 64, left: 431, top: 221, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', borderTopLeftRadius: 8, borderTopRightRadius: 8, border: '2px #C4B5FD solid' }} />

                      <div style={{ width: 64, height: 8, left: 184, top: 32, position: 'absolute', borderRadius: 24, border: '2px #C4B5FD solid' }} />
                      <div style={{ width: 8, height: 8, left: 264, top: 32, position: 'absolute', borderRadius: 9999, border: '2px #C4B5FD solid' }} />

                    </div>
                    <div style={{ width: 375, height: 812, position: 'relative' }}>
                    </div>
                  </div>
                </div>

                <div className='absolute -top-10'>
                  <Image src={ppp} alt="Group" />
                </div>


              </div>

              {/* نوشته سمت راست */}

              <div className="space-y-10 px-4 sm:w-[700px] md:w-[670px] text-justify">
                <div className=" text-white text-[16px] sm:text-[23px] md:text-[28px] 
               lg:text-[40px] font-semibold font-Vazirmatn1 text-right hidden lg:block">
                  دریافت اپلیکیشن طلای خرداد
                </div>
                <div className="text-[16px] sm:text-[11px] md:text-[14px] lg:text-[17px] text-white font-Vazirmatn2 text-right hidden lg:block">
                  خرید و فروش طلای آب شده یکی از انواع محبوب سرمایه‌گذاری در ایران است که باعث می‌شود از سرمایه خود در برابر تورم محافطت کنید و سود ببرید. برای خرید طلا ابشده می‌توانید به صورت حضوری به طلافروشی‌ها مراجعه کنید؛ اما روش خرید طلای آب شده آنلاین بسیار سریع‌تر، راحت‌تر و امن‌تر است
                </div>
                <div className='relative justify-center items-center text'>
                  <div className="">
                    <div className='flex flex-col -space-y-20 right-40 absolute top-0 '>
                      <div className='w-64 h-40 '>
                        <Image className='hidden  lg:block' src={GroupA} alt="GroupA" width={200} height={80} layout="intrinsic" />
                      </div>
                      <div>
                        <Image className='hidden  lg:block' src={Un} alt="Groupb" width={200} height={80} layout="intrinsic" />
                      </div>
                    </div>

                    <div className='flex flex-col space-y-5 mt-10 right-0 absolute -top-10'>
                      <div>
                        <Image className='hidden  lg:block' src={Groupb} alt="GroupA" width={200} height={80} layout="intrinsic" />
                      </div>
                      <div>
                        <Image className='hidden  lg:block' src={Groupc} alt='Groupb' width={200} height={80} layout="intrinsic" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>





            {/* // فوتر پایین پایین */}
            <div className='bg-[#061C3D] min-h-[200px] w-full flex-col justify-between items-center z-50'>
              <div className='container h-full w-full flex justify-between items-center text-white mt-28 py-20'>


                <div className='hidden md:block flex-col text-[14px] w-[200px] text-right text-gray-600 font-Vazirmatn2 space-y-4'>

                  <div className='flex flex-row-reverse gap-6 w-36 h-11 rounded-md justify-center 
                  items-center bg-gray-600'>
                    <div className='flex flex-row-reverse'>
                      <Image className='ml-2' src={Telegram} alt='Telegram' />
                      <div className='relative'>
                        <div className='absolute top-5' style={{ width: '100%', height: '100%', transform: 'rotate(180deg)', transformOrigin: '0 0', opacity: 0.15, border: '1px white solid' }}></div>
                      </div>
                    </div>

                    <div className='text-white'>
                      تلگرام
                    </div>
                  </div>


                  <div className='flex flex-row-reverse gap-6 w-36 h-11 rounded-md justify-center 
                  items-center bg-gray-600'>
                    <div className='flex flex-row-reverse'>
                      <Image className='ml-2' src={Linkdin} alt='Telegram' />
                      <div className='relative'>
                        <div className='absolute top-5' style={{ width: '100%', height: '100%', transform: 'rotate(180deg)', transformOrigin: '0 0', opacity: 0.15, border: '1px white solid' }}></div>
                      </div>
                    </div>

                    <div className='text-white'>
                      تلگرام
                    </div>
                  </div>


                  <div className='flex flex-row-reverse gap-6 w-36 h-11 rounded-md justify-center 
                  items-center bg-gray-600'>
                    <div className='flex flex-row-reverse'>
                      <Image className='ml-2' src={instagram} alt='Telegram' />
                      <div className='relative'>
                        <div className='absolute top-5' style={{ width: '100%', height: '100%', transform: 'rotate(180deg)', transformOrigin: '0 0', opacity: 0.15, border: '1px white solid' }}></div>
                      </div>
                    </div>

                    <div className='text-white'>
                      تلگرام
                    </div>
                  </div>

                </div>

                <div className='flex-col text-[14px] w-[200px] text-right text-gray-600 font-Vazirmatn2 space-y-4 '>
                  <div className='text-white'>
                    ارتباط بیشتر
                  </div>
                  <div>
                    درباره ما
                  </div>
                  <div>
                    تماس با ما
                  </div>
                  <div>
                    قوانین و مقررات
                  </div>
                  <div>
                    حریم خصوصی
                  </div>
                </div>

                <div className='flex-col text-[14px] w-[200px] text-right text-gray-600 font-Vazirmatn2 space-y-4 '>
                  <div className='text-white'>
                    دسترسی سریع
                  </div>
                  <div>
                    مجوزها
                  </div>
                  <div>
                    مشتریان حقوقی
                  </div>
                  <div>
                    کارمزدها
                  </div>
                  <div>
                    راهنمای استفاده
                  </div>
                </div>


                <div className='text-[14px] w-[450px] text-right font-Vazirmatn2 '>
                  <div className="flex gap-3 items-center text-right justify-end ">
                    <h1
                      className="font-medium font-Vazirmatn2 hover:text-gray-600 
                      sm:text-[13px] md:text-[18px] lg:text-[19px] xl:text-[26px]" >
                      طلای خرداد
                    </h1>
                    <Image className='text-right' src={Icon} alt="Logo" />
                  </div>
                  <div className='hidden md:block mt-8'>
                    خرید و فروش طلای آب شده یکی از انواع محبوب سرمایه‌گذاری در ایران است که باعث می‌شود از سرمایه خود در برابر تورم محافطت کنید و سود ببرید. برای خرید طلا ابشده می‌توانید به صورت حضوری به طلافروشی‌ها مراجعه کنید؛ اما روش خرید طلای آب شده آنلاین بسیار سریع‌تر، راحت‌تر و امن‌تر است
                  </div>
                </div>


              </div>
            </div>

          </>

        ) : (





            <div className='mt-20 text-white flex-col justify-center items-center text-center overflow-hidden overflow-x-scroll'>


            <div className=" text-white text-[19px] font-semibold font-Vazirmatn1 whitespace-nowrap">
              دریافت اپلیکیشن طلای خرداد
            </div>
            <div className="text-[11px] text-white font-Vazirmatn2 p-5 mt-3">
              خرید و فروش طلای آب شده یکی از انواع محبوب سرمایه‌گذاری در ایران است که باعث می‌شود از سرمایه خود در برابر تورم محافطت کنید و سود ببرید. برای خرید طلا ابشده می‌توانید به صورت حضوری به طلافروشی‌ها مراجعه کنید؛ اما روش خرید طلای آب شده آنلاین بسیار سریع‌تر، راحت‌تر و امن‌تر است
            </div>

            <div className='flex mt-8 px-14 space-x-6'>
              <div>
                <Image src={GroupA} alt="GroupA" width={140} height={80} layout="intrinsic" />
              </div>

              <div>
                <Image src={Un} alt='Groupb' width={140} height={80} layout="intrinsic" />
              </div>
            </div>

            <div className='flex mt-8 px-14 space-x-6'>
              <div>
                <Image src={Groupb} alt="GroupA" width={140} height={80} layout="intrinsic" />
              </div>

              <div>
                <Image src={Groupc} alt='Groupb' width={140} height={80} layout="intrinsic" />
              </div>

            </div>


            {/* // شکل موبایل */}

            <div className="relative mt-8">
              {/* تغییر اندازه برای موبایل */}
              <div
                style={{
                  width: "90%", // کاهش عرض در موبایل
                  height: "100%", // ارتفاع کامل در موبایل
                  paddingTop: 40, // کاهش padding
                  paddingLeft: 39,
                  paddingRight: 39,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "auto", // ارتفاع منعطف
                    position: "relative",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: 543, // کاهش ارتفاع در موبایل
                      position: "relative",

                    }}
                  >
                    <div
                      style={{
                        width: "90%",
                        height: "90%",
                        left: 12,
                        top: 8,
                        position: "absolute",
                        borderRadius: 31,
                        border: "2px #C4B5FD solid",
                      }}
                    />
                    <div
                      style={{
                        width: "95%",
                        height: 500,
                        left: 5,
                        top: 0,
                        position: "absolute",
                        borderRadius: 45,
                        border: "2px #C4B5FD solid",
                      }}
                    />
                    {/* سایر خطوط */}
                  </div>
                  <div
                    style={{
                      width: "90%",
                      height: "auto", // ارتفاع منعطف
                      position: "relative",
                    }}
                  ></div>
                </div>
              </div>

              <div className="absolute top-14 right-2">
                <Image src={ppp} alt="Group" />
              </div>
            </div>




            <div className='bg-[#061C3D] h-[410px] -mt-24 flex-col relative justify-between items-center z-[100]'>

                <div className="flex gap-3 items-center text-right justify-end p-8 ">
                  <h1
                    className="text-2xl font-Vazirmatn2  hover:text-gray-600" >
                    طلای خرداد
                  </h1>
                  <Image className='text-right' src={Icon} alt="Logo" />
                </div>
                <div className='-mt-1 font-Vazirmatn2 px-8'>
                  خرید و فروش طلای آب شده یکی از انواع محبوب سرمایه‌گذاری در ایران است که باعث می‌شود از سرمایه خود در برابر تورم محافطت کنید و سود ببرید. برای خرید طلا ابشده می‌توانید به صورت حضوری به طلافروشی‌ها مراجعه کنید؛ اما روش خرید طلای آب شده آنلاین بسیار سریع‌تر، راحت‌تر و امن‌تر است
                </div>

            </div>










          </div>


        )
      }










    </div>
  )
}
