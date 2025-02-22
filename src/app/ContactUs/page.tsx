"use client"
import React from 'react'
import Envelope from '../../Image/Envelope.png'
import PhoneCall from '../../Image/PhoneCall.png'
import MapPinLine from '../../Image/MapPinLine.png'
import Vector from '../../Image/Vector.png'
import instagram from '../../Image/instagram.png'
import Linkdin from '../../Image/Line2.png'
import Line2 from '../../Image/Line2.png'
import Image from 'next/image'
import FornContactUs from '@/component-Home/FormContactUs'
import { useResponsive } from '@/component-Home/ResponsiveContext/ResponsiveContext'


function ContactUs() {

   const { isMobile } = useResponsive();

  return (
    <>
      <div className="h-full w-full overflow-x-auto flex items-center justify-between overflow-hidden mx-auto mb-64">
        {!isMobile ? (
          <div className="container font-Vazirmatn2 text-black mt-32">
            {/* //متن بالایی */}
            <div className="flex flex-col text-center items-center justify-center space-y-8">
              <div className="text-5xl">پاسخگوی شما هستیم</div>
              <div className="flex justify-center text-[16px] text-center max-w-[850px]">
                طلای خرداد در روزهای شنبه تا چهارشنبه از ساعت ۹ صبح تا
                ۱۸ پاسخگوی سوالات، نظرات، پیشنهادات و انتقادات کاربران است. شما
                می‌توانید سوالات مربوط به خرید، فروش، تبادل و دریافت طلا را از
                پشتیبانان طلای خرداد بپرسید. هم‌چنین می‌توانید، پاسخ سوالات رایج
                خود را در صفحه سوالات متداول مشاهده کنید. اگر پاسخ سوالتان را
                پیدا نکردید، از طریق تماس تلفنی یا ایمیل، با ما مطرح کنید
              </div>
            </div>
            {/* کادر پایین */}
            <FornContactUs />
          </div>
        ) : (

          <div className="flex flex-col items-center min-h-screen mt-16 -mb-5">

            <section className="text-center space-y-6 mt-16 md:mt-24">
              <div className="flex flex-col text-center items-center justify-center space-y-8">
                <div className="text-2xl md:text-4xl lg:text-5xl font-semibold font-Vazirmatn1 text-black">
                  پاسخگوی شما هستیم
                </div>
                <div className="flex justify-center font-Vazirmatn2 px-5 text-[11px] text-center max-w-[800px] rtl">
                  طلای خرداد در روزهای شنبه تا چهارشنبه از ساعت ۹ صبح تا ۱۸
                  پاسخگوی سوالات، نظرات، پیشنهادات و انتقادات کاربران است. شما
                  می‌توانید سوالات مربوط به خرید، فروش، تبادل و دریافت طلا را از
                  پشتیبانان طلای خرداد بپرسید. هم‌چنین می‌توانید، پاسخ سوالات
                  رایج خود را در صفحه سوالات متداول مشاهده کنید. اگر پاسخ
                  سوالتان را پیدا نکردید، از طریق تماس تلفنی یا ایمیل، با ما
                  مطرح کنید.
                </div>
              </div>
            </section>

            <section className="flex justify-center mt-10">
              <div className="bg-slate-50 w-full max-w-md p-6 rounded-xl shadow-md">
                <FornContactUs />
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
}

export default ContactUs
