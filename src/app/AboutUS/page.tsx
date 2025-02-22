"use client"
import React, { useEffect, useState } from 'react'
import mmm from '../../Image/mmm.png'
import user from '../../Image/user.png'
import ssm from '../../Image/ssm.png'
import bg from '../../Image/bg.png'
import jm from '../../Image/jm.png'
import Image from 'next/image'
import { useResponsive } from '@/component-Home/ResponsiveContext/ResponsiveContext'

function AboutUS() {

    const { isMobile } = useResponsive();

    return (
      <div className="h-auto w-full flex flex-col items-center justify-between overflow-hidden overflow-y-hidden overflow-x-auto mx-auto">
        {!isMobile ? (
          <>
            <div className="container font-Vazirmatn2 text-black mt-32 mb-32">
              {/* //متن بالایی */}
              <div className="flex flex-col text-center items-center justify-center space-y-8">
                <div className="text-4xl md:text-4xl lg:text-5xl font-semibold font-Vazirmatn1 text-black">
                  درباره ما
                </div>
                <div className="flex justify-center font-Vazirmatn2 px-5 text-[16px] text-center max-w-[850px]">
                  خرید و فروش طلای آب‌شده به عنوان یکی از متداول‌ترین و موثرترین
                  روش‌های حفظ ارزش سرمایه و افزایش قدرت خرید است. طلا به دلیل دو
                  ویژگی ارزش ذاتی و قابلیت نقدشوندگی بالا، همواره در سبد سرمایه
                  گذاری قرار دارد. با طلا میتوان در مقابل نوسانات بازار قدرتمند
                  شد. در میلی می‌توان به هر میزان طلای آب شده خرید و یا طلای
                  خریداری شده را به میلی فروخت. هم‌چنین امکان انتقال و هدیۀ طلا
                  در میلی به راحتی و آنی وجود دارد
                </div>
              </div>

              <div className="flex mx-auto items-center justify-center mt-20">
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
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </div>

            <div className="w-full flex justify-around items-center h-[600px] bg-[#FFF4DB] font-Vazirmatn2 text-black ">
              <div className="w-auto md:w-1/3 lg:w-2/5 xl:w-9/20 space-y-8 text-center flex flex-col items-center justify-center">
                <div className="text-3xl md:text-3xl lg:text-5xl xl:ml-14 font-semibold font-Vazirmatn1 text-black text-right whitespace-nowrap">
                  ... طلای خرداد انتخابی درست
                </div>

                <div className="text-right text-[15px] sm:w-[350px] sm:text-[12px] md:w-[420px] md:text-[13px] xl:w-[605px] xl:text-[14px]">
                  ما در میلی با هدف تسهیل سرمایه‌گذاری عموم مردم، بستری برای
                  خرید و فروش آنلاین طلا فراهم کرده‌ایم. واحد سرمایه‌گذاری در
                  میلی، یک میلی‌گرم طلای ۱۸ عیاره. کاربر تو هر زمان می‌تونه طلای
                  آنلاین خریداری شده‌اش تو میلی رو بفروشه و وجه اون رو دریافت
                  کنه و یا معادل طلای خریداری شده‌اش رو در قالب شمش‌های طلای
                  گرمی 18 عیار (مورد تایید اتحادیه) همراه با فاکتور رسمی تحویل
                  بگیره
                </div>

                <div className="flex gap-4">
                  <div className="flex-col space-y-5">
                    <div className="bg-[#F1EBFF] px-5 xl:space-x-6 xl:w-64 xl:h-24 md:w-40 md:h-16 sm:w-32 sm:h-12 lg:w-44 lg:h-16 rounded-md flex items-center justify-center text-center">
                      <div className="text-center text-[17px] sm:w-[350px] sm:text-[12px] md:w-[420px] md:text-[13px] xl:w-[605px] xl:text-[17px] relative">
                        <div
                          className="absolute xl:-top-7 lg:-top-4 right-2 sm:text-[8px]
                                     md:text-[10px] md:-top-4 md:mr-1 sm:-top-3 lg:text-[10px] xl:text-[17px]  whitespace-nowrap "
                        >
                          امن و دارای مجوز
                        </div>
                        <div className="text-gray-600 xl:top-2 sm:top-1 sm:-mr-1 lg:top-1 lg:right-2 text-[11px] absolute right-3 sm:text-[7px] md:text-[8px] lg:text-[9px] xl:text-[12px] whitespace-nowrap">
                          Years of Experience
                        </div>
                      </div>
                      <Image
                        className="xl:w-14 xl:h-14 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8"
                        src={jm}
                        alt="User"
                      />
                    </div>

                    <div className="bg-[#FFF9EE] px-5 xl:space-x-6 xl:w-64 xl:h-24 md:w-40 md:h-16 sm:w-32 sm:h-12 lg:w-44 lg:h-16 rounded-md flex items-center justify-center text-center">
                      <div className="text-center text-[17px] sm:w-[350px] sm:text-[12px] md:w-[420px] md:text-[13px] xl:w-[605px] xl:text-[17px] relative">
                        <div
                          className="absolute xl:-top-7 lg:-top-4 right-2 sm:text-[8px]
                                     md:text-[10px] md:-top-4 md:mr-1 sm:-top-3 lg:text-[10px] xl:text-[17px]  whitespace-nowrap "
                        >
                          خرید در هر مقدار
                        </div>
                        <div className="text-gray-600 xl:top-2 sm:top-1 sm:-mr-1 lg:top-1 lg:right-2 text-[11px] absolute right-3 sm:text-[5px] md:text-[6px] lg:text-[7px] xl:text-[10px] whitespace-nowrap">
                          نبود سقف خرید در خرید و فروش
                        </div>
                      </div>
                      <Image
                        className="xl:w-14 xl:h-14 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8"
                        src={ssm}
                        alt="User"
                      />
                    </div>
                  </div>
                  <div className="flex-col space-y-5">
                    <div className="bg-[#E7F5E8] px-5 xl:space-x-6 xl:w-64 xl:h-24 md:w-40 md:h-16 sm:w-32 sm:h-12 lg:w-44 lg:h-16 rounded-md flex items-center justify-center text-center">
                      <div className="text-center text-[17px] sm:w-[350px] sm:text-[12px] md:w-[420px] md:text-[13px] xl:w-[605px] xl:text-[17px] relative">
                        <div
                          className="absolute xl:-top-7 lg:-top-4 right-2 sm:text-[8px]
                                     md:text-[10px] md:-top-4 md:mr-1 sm:-top-3 lg:text-[10px] xl:text-[17px]  whitespace-nowrap "
                        >
                          دسترسی آسان
                        </div>
                        <div className="text-gray-600 xl:top-2 sm:top-1 sm:-mr-1 lg:top-1 lg:right-2 text-[11px] absolute right-3 sm:text-[7px] md:text-[8px] lg:text-[9px] xl:text-[12px] whitespace-nowrap">
                          برای کاربران عادی
                        </div>
                      </div>
                      <Image
                        className="xl:w-14 xl:h-14 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8"
                        src={user}
                        alt="User"
                      />
                    </div>

                    <div className="bg-[#FEEDFA] px-5 xl:space-x-6 xl:w-64 xl:h-24 md:w-40 md:h-16 sm:w-32 sm:h-12 lg:w-44 lg:h-16 rounded-md flex items-center justify-center text-center">
                      <div className="text-center text-[17px] sm:w-[350px] sm:text-[12px] md:w-[420px] md:text-[13px] xl:w-[605px] xl:text-[17px] relative">
                        <div
                          className="absolute xl:-top-7 lg:-top-4 right-2 sm:text-[8px]
                                     md:text-[10px] md:-top-4 md:mr-1 sm:-top-3 lg:text-[10px] xl:text-[17px]  whitespace-nowrap "
                        >
                          خرید آنی و سریع
                        </div>
                        <div className="text-gray-600 xl:top-2 sm:top-1 sm:-mr-1 lg:top-1 lg:right-2 text-[11px] absolute right-3 sm:text-[5px] md:text-[6px] lg:text-[7px] xl:text-[10px] whitespace-nowrap">
                          بدون پیچیدگی و به مراحل طولانی
                        </div>
                      </div>
                      <Image
                        className="xl:w-14 xl:h-14 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8"
                        src={bg}
                        alt="User"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 lg:w-2/5 xl:w-9/20">
                <Image src={mmm} alt="Face" className="w-full h-auto" />
              </div>
            </div>

            <div className="container flex flex-wrap justify-between gap-6 md:gap-8 xl:gap-4 p-4 sm:p-6 bg-white font-Vazirmatn2 mt-12">
              {[
                { value: "580", label: "تعداد تراکنش ها" },
                { value: "3000", label: "مقدار طلای فروخته شده به گرم" },
                { value: "2000", label: "مقدار طلای خریداری شده به گرم" },
                { value: "1230", label: "کاربر فعال" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col   items-center justify-center w-auto text-center"
                >
                  <div className="text-[#387CFF] text-3xl sm:text-4xl font-bold leading-tight flex items-center gap-1">
                    <span>{item.value}</span>
                    <span className="font-light">+</span>
                  </div>
                  <div className="text-[#747481] text-xs sm:text-sm font-medium uppercase leading-5">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="mt-32  text-black flex flex-col items-center text-center min-h-screen overflow-y-auto overflow-x-auto font-Vazirmatn2">
            <div className="  justify-center">
              <div className="text-center space-y-6 px-4">
                <div className=" text-black text-2xl md:text-3xl font-semibold font-Vazirmatn1 text-center">
                  درباره ما
                </div>
                <div
                  className="text-[11px] text-black
                                     font-Vazirmatn2 text-center"
                >
                  خرید و فروش طلای آب‌شده به عنوان یکی از متداول‌ترین و موثرترین
                  روش‌های حفظ ارزش سرمایه و افزایش قدرت خرید است. طلا به دلیل دو
                  ویژگی ارزش ذاتی و قابلیت نقدشوندگی بالا، همواره در سبد سرمایه
                  گذاری قرار دارد. با طلا میتوان در مقابل نوسانات بازار قدرتمند
                  شد. در میلی می‌توان به هر میزان طلای آب شده خرید و یا طلای
                  خریداری شده را به میلی فروخت. هم‌چنین امکان انتقال و هدیۀ طلا
                  در میلی به راحتی و آنی وجود دارد
                </div>
              </div>

              <div className="mt-8 overflow-x-auto">
                <Image src={mmm} alt="Face" className="w-full h-auto" />
              </div>
              <div className="text-black text-2xl md:text-3xl font-semibold font-Vazirmatn1 text-center">
                ... طلای خرداد انتخابی درست
              </div>
              <div className="text-black text-[11px] mt-4 font-Vazirmatn2 px-5 text-center">
                ما در میلی با هدف تسهیل سرمایه‌گذاری عموم مردم، بستری برای خرید
                و فروش آنلاین طلا فراهم کرده‌ایم. واحد سرمایه‌گذاری در میلی، یک
                میلی‌گرم طلای ۱۸ عیاره. کاربر تو هر زمان می‌تونه طلای آنلاین
                خریداری شده‌اش تو میلی رو بفروشه و وجه اون رو دریافت کنه و یا
                معادل طلای خریداری شده‌اش رو در قالب شمش‌های طلای گرمی 18 عیار
                (مورد تایید اتحادیه) همراه با فاکتور رسمی تحویل بگیره
              </div>

              <div className="flex w-auto gap-4 justify-center items-center mt-8">
                <div className="flex-col space-y-5">
                  <div className="bg-[#F1EBFF] w-40 h-16 px-5 rounded-md flex items-center justify-center text-center">
                    <div className="text-center text-[14px] relative">
                      <div className="absolute -right-6 -top-4 whitespace-nowrap">
                        امن و دارای مجوز
                      </div>
                      <div className="text-gray-600 text-[10px] absolute -right-4 top-1 whitespace-nowrap">
                        Years of Experience
                      </div>
                      <div className="absolute -right-16 -top-4">
                        <Image
                          className="w-9 h-9 text-right"
                          src={jm}
                          alt="User"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FFF9EE] w-40 h-16 px-5 rounded-md flex items-center justify-center text-center">
                    <div className="text-center text-[14px] relative">
                      <div className="absolute -right-6 -top-4 whitespace-nowrap">
                        خرید در هر مقدار
                      </div>
                      <div className="text-gray-600 text-[8px] absolute -right-7 top-2 whitespace-nowrap">
                        نبود سقف خرید در خرید و فروش
                      </div>
                      <div className="absolute -right-16 -top-4">
                        <Image
                          className="w-9 h-9 text-right"
                          src={ssm}
                          alt="User"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-col space-y-5">
                  <div className="bg-[#F1EBFF] w-40 h-16 px-5 rounded-md flex items-center justify-center text-center">
                    <div className="text-center text-[14px] relative">
                      <div className="absolute -right-6 -top-4 whitespace-nowrap">
                        امن و دارای مجوز
                      </div>
                      <div className="text-gray-600 text-[10px] absolute -right-4 top-1 whitespace-nowrap">
                        Years of Experience
                      </div>
                      <div className="absolute -right-16 -top-4">
                        <Image
                          className="w-9 h-9 text-right"
                          src={user}
                          alt="User"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FFF9EE] w-40 h-16 px-5 rounded-md flex items-center justify-center text-center">
                    <div className="text-center text-[14px] relative">
                      <div className="absolute -right-6 -top-4 whitespace-nowrap">
                        خرید در هر مقدار
                      </div>
                      <div className="text-gray-600 text-[8px] absolute -right-7 top-2 whitespace-nowrap">
                        نبود سقف خرید در خرید و فروش
                      </div>
                      <div className="absolute -right-16 -top-4">
                        <Image
                          className="w-9 h-9 text-right"
                          src={bg}
                          alt="User"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container flex flex-wrap justify-between gap-6 bg-white font-Vazirmatn2 mt-12">
              {[
                { value: "580", label: "تعداد تراکنش ها" },
                { value: "3000", label: "مقدار طلای فروخته شده به گرم" },
                { value: "2000", label: "مقدار طلای خریداری شده به گرم" },
                { value: "1230", label: "کاربر فعال" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-auto text-center"
                >
                  <div className="text-[#387CFF] text-[20px] font-bold  flex items-center gap-1 px-12">
                    <span className="">{item.value}</span>
                    <span className="font-light ">+</span>
                  </div>
                  <div className="text-[#747481] text-xs sm:text-sm font-medium uppercase leading-5">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
}
export default AboutUS
