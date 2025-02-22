"use client";
import React from "react";
import Envelope from "../Image/Envelope.png";
import PhoneCall from "../Image/PhoneCall.png";
import MapPinLine from "../Image/MapPinLine.png";
import instagram from "../Image/instagram.png";
import Linkdin from "../Image/Line2.png";
import Image from "next/image";
import { useResponsive } from "./ResponsiveContext/ResponsiveContext";

function FormContactUs() {
  const { isMobile } = useResponsive();

  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-20 font-Vazirmatn2 text-white">
      {!isMobile ? (
        // حالت دسکتاپ

        <div className="flex flex-row">
          {/* فرم ورودی */}
          <div className="bg-gray-200 h-auto w-[820px] p-6 rounded-2xl rounded-tr-none rounded-br-none overflow-auto">
            <div className="flex flex-wrap justify-between py-10 gap-6 text-black">
              {/* ستون اول */}
              <div className="flex flex-col space-y-5 w-[48%]">
                <div className="text-right px-2">نام خانوادگی</div>
                <input
                  className="w-full py-3 px-3 border-2 border-gray-300 rounded-md placeholder:text-[12px] placeholder:text-right"
                  placeholder="نام خانوادگی خود را وارد کنید"
                  type="text"
                />
                <div className="text-right px-2">ایمیل</div>
                <input
                  className="w-full py-3 px-3 border-2 border-gray-300 rounded-md placeholder:text-[12px] placeholder:text-right"
                  placeholder="ایمیل خود را وارد کنید"
                  type="text"
                />
              </div>

              {/* ستون دوم */}
              <div className="flex flex-col space-y-5 w-[45%]">
                <div className="text-right px-2">نام خانوادگی</div>
                <input
                  className="w-full py-3 px-3 border-2 border-gray-300 rounded-md placeholder:text-[12px] placeholder:text-right"
                  placeholder="نام خانوادگی خود را وارد کنید"
                  type="text"
                />
                <div className="text-right px-2">ایمیل</div>
                <input
                  className="w-full py-3 px-3 border-2 border-gray-300 rounded-md placeholder:text-[12px] placeholder:text-right"
                  placeholder="ایمیل خود را وارد کنید"
                  type="text"
                />
              </div>
            </div>

            {/* بخش پیام */}
            <div className="flex flex-col space-y-5 mt-8 text-black">
              <div className="text-right px-2">متن پیام</div>
              <textarea
                className="w-full h-40 py-3 px-3 border-2 border-gray-300 rounded-md placeholder:text-[12px] placeholder:text-right resize-none"
                placeholder="متن پیام خود را وارد کنید"
              ></textarea>
              <div className="text-right">
                <button className="bg-blue-600 rounded-lg text-white w-44 h-12">
                  ثبت و ارسال
                </button>
              </div>
            </div>
          </div>

          {/* اطلاعات تماس */}
          <div className="bg-blue-500 flex-col text-2xl h-auto w-[620px] p-6 rounded-2xl rounded-l-none relative">
            {/* پس‌زمینه کم‌رنگ برای عنوان */}
            <div className="absolute right-4 top-8 text-[26px] font-extrabold text-white p-10">
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-white/20 rounded-md"></div>
              <div className="absolute -top-4 -right-10 w-6 h-6 bg-white/10 rounded-md"></div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/15 rounded-md"></div>
              تماس با ما
            </div>

            <div className="flex flex-col space-y-6 mt-32 pr-6">
              <div className="flex items-center justify-end space-x-4 space-x-reverse">
                <span className="text-white text-[16px] mr-6">
                  info@TJMKK.com
                </span>
                <div className="bg-white/20 p-3 rounded-full">
                  <Image src={Envelope} alt="Envelope" width={30} height={30} />
                </div>
              </div>

              <div className="flex items-center justify-end space-x-4 space-x-reverse">
                <span className="text-white text-[16px] mr-6">
                  021-91200150
                </span>
                <div className="bg-white/20 p-3 rounded-full">
                  <Image
                    src={PhoneCall}
                    alt="PhoneCall"
                    width={30}
                    height={30}
                  />
                </div>
              </div>

              <div className="flex items-center justify-end space-x-4 space-x-reverse">
                <span className="text-white text-[16px] mr-6">
                  بلوار نلسون ماندلا، کوچه ناوک، پلاک ۶
                </span>
                <div className="bg-white/20 p-3 rounded-full">
                  <Image
                    src={MapPinLine}
                    alt="MapPinLine"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full px-4">
          {/* اطلاعات تماس در موبایل */}
          <div
            className="bg-blue-500 text-white p-6 rounded-3xl mb-6
           shadow-lg flex flex-col items-center text-center space-y-4"
          >
            <div className="text-lg font-bold text-right">
              <span className="text-right">تماس با ما</span>
            </div>

            <div className="w-full flex flex-col space-y-3">
              <div className="flex items-center justify-between w-full px-4">
                <span className="text-sm ml-6">info@TJMKK.com</span>
                <div className="bg-white/20 p-2 rounded-full">
                  <Image src={Envelope} alt="Envelope" width={22} height={22} />
                </div>
              </div>
              <div className="flex items-center justify-between w-full px-4">
                <span className="text-sm ml-10">021-91200150</span>
                <div className="bg-white/20 p-2 rounded-full">
                  <Image
                    src={PhoneCall}
                    alt="PhoneCall"
                    width={22}
                    height={22}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between w-full px-5 mr-5">
                <span className="text-sm">
                  بلوار نلسون ماندلا، کوچه ناوک، پلاک ۶
                </span>
                <div className="bg-white/20 p-2 rounded-full">
                  <Image
                    src={MapPinLine}
                    alt="MapPinLine"
                    width={22}
                    height={22}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* فرم تماس */}
          <div className="bg-gray-200 p-5 rounded-3xl shadow-lg">
            <div className="text-center text-lg font-bold mb-4 text-gray-500">
              فرم تماس با ما
            </div>
            <input
              className="w-full py-3 px-3 mb-3 border border-gray-300 rounded-md shadow-sm text-sm rtl"
              placeholder="نام خانوادگی خود را وارد کنید"
              type="text"
            />
            <input
              className="w-full py-3 px-3 mb-3 border border-gray-300 rounded-md shadow-sm text-sm rtl"
              placeholder="ایمیل خود را وارد کنید"
              type="text"
            />
            <textarea
              className="w-full h-32 py-3 px-3 border border-gray-300 rounded-md shadow-sm resize-none text-sm rtl"
              placeholder="متن پیام خود را وارد کنید"
            ></textarea>
            <button className="w-full mt-4 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
              ثبت و ارسال
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormContactUs;
