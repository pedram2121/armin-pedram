"use client"
import Image from "next/image";
import G from "../../Image/Rectangle 10.png";
import React from "react";
import { useResponsive } from "@/component-Home/ResponsiveContext/ResponsiveContext"; // اضافه کردن import برای useResponsive

function Privacy() {
  const { isMobile } = useResponsive(); // دریافت وضعیت موبایل یا دسکتاپ

  return (
    <div className="h-auto w-full flex items-center justify-between relative overflow-hidden mt-28 px-4 md:px-0">
      <div className="container">
        <div className="flex flex-col text-center items-center justify-center space-y-6">
          <div className="text-4xl md:text-4xl lg:text-5xl font-semibold font-Vazirmatn1 text-black py-10">
            امنیت، شفافیت و حریم خصوصی در طلای خرداد
          </div>

          {/* نمایش محتوای مختلف بر اساس اندازه صفحه */}
          {!isMobile ? (
            <div className="flex justify-center font-Vazirmatn2 text-[16px] md:text-[18px] text-center max-w-[850px] overflow-auto px-14">
              خرید و فروش طلای آب‌شده به عنوان یکی از متداول‌ترین و موثرترین
              روش‌های حفظ ارزش سرمایه و افزایش قدرت خرید است. طلا به دلیل دو
              ویژگی ارزش ذاتی و قابلیت نقدشوندگی بالا، همواره در سبد سرمایه
              گذاری قرار دارد. با طلا میتوان در مقابل نوسانات بازار قدرتمند شد.
              در میلی می‌توان به هر میزان طلای آب شده خرید و یا طلای خریداری شده
              را به میلی فروخت. هم‌چنین امکان انتقال و هدیۀ طلا در میلی به راحتی
              و آنی وجود دارد.
            </div>
          ) : (
            <div className="flex justify-center font-Vazirmatn2 text-[14px] text-center max-w-[850px] overflow-auto px-6">
              خرید و فروش طلای آب‌شده به عنوان یکی از روش‌های حفظ ارزش سرمایه
              است.
            </div>
          )}
        </div>

        <div className="w-full h-auto flex justify-center items-center relative mt-28">
          <div className="absolute left-0 -top-10 hidden md:block"></div>
          <div>
            <Image src={G} alt="G" />
          </div>
          <div className="absolute">
            <svg
              width="98"
              height="98"
              viewBox="0 0 98 98"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle id="Ellipse 1" cx="49" cy="49" r="49" fill="#387CFF" />
            </svg>
          </div>
          <div className="absolute">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Caret / 24 / Outline">
                <path
                  id="Vector"
                  d="M40.6247 23.1875L11.458 6.35419C11.1413 6.17134 10.7821 6.07507 10.4164 6.07507C10.0507 6.07507 9.6914 6.17134 9.37469 6.35419C9.05677 6.53774 8.79299 6.80204 8.61006 7.12032C8.42714 7.43861 8.33157 7.79958 8.33302 8.16669V41.8334C8.33157 42.2005 8.42714 42.5614 8.61006 42.8797C8.79299 43.198 9.05677 43.4623 9.37469 43.6459C9.6914 43.8287 10.0507 43.925 10.4164 43.925C10.7821 43.925 11.1413 43.8287 11.458 43.6459L40.6247 26.8125C40.9453 26.6308 41.212 26.3673 41.3975 26.0489C41.5831 25.7305 41.6808 25.3685 41.6808 25C41.6808 24.6315 41.5831 24.2696 41.3975 23.9511C41.212 23.6327 40.9453 23.3692 40.6247 23.1875ZM12.4997 38.2292V11.7709L35.4164 25L12.4997 38.2292Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
        </div>

        <div className="text-blue-600 text-right text-[17px] font-YekanBakh2 space-y-7 px-3 mt-16">
          <div>اطلاعات مورد نیاز</div>
          <div>اطلاعاتی که ما از شما جمع آوری میکنیم</div>
        </div>

        <div className="flex flex-row-reverse text-gray-600 font-YekanBakh2 text-right mt-2">
          <div className="text-gray-600 font-YekanBakh2 text-right">.1</div>
          <div className="text-gray-600 font-YekanBakh2">
            سامانه میلی: بستر نرم افزاری خرید و فروش و تبادل میلی بر اساس شرایط
            و ضوابط مندرج در این موافقت نامه است.
          </div>
        </div>

        <div className="flex flex-row-reverse text-gray-600 font-YekanBakh2 text-right mt-4">
          <div className="text-gray-600 font-YekanBakh2 text-right">.2</div>
          <div className="text-gray-600 font-YekanBakh2">
            اطلاعات شخصی: ما اطلاعاتی نظیر نام، شماره تماس و اطلاعات خرید شما را
            جمع‌آوری خواهیم کرد.
          </div>
        </div>

        <div className="flex flex-row-reverse text-gray-600 font-YekanBakh2 text-right mt-4">
          <div className="text-gray-600 font-YekanBakh2 text-right">.3</div>
          <div className="text-gray-600 font-YekanBakh2">
            سیاست حفظ حریم خصوصی: اطلاعات شما تنها برای اهداف مشخص استفاده
            می‌شود و به هیچ‌وجه با دیگران به اشتراک گذاشته نخواهد شد.
          </div>
        </div>

        <div className="text-right font-YekanBakh2 mt-6 text-[16px] text-gray-700">
          برای کسب اطلاعات بیشتر در مورد نحوه جمع‌آوری و استفاده از اطلاعات شما،
          لطفاً سیاست حفظ حریم خصوصی ما را مطالعه کنید.
        </div>

        <div className="text-right font-YekanBakh2 mt-6 text-[16px] text-gray-700">
          شما با استفاده از سامانه میلی، موافقت خود را با شرایط و ضوابط ذکر شده
          در این صفحه اعلام می‌کنید.
        </div>
      </div>
    </div>
  );
}

export default Privacy;
