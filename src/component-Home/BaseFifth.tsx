"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useResponsive } from "./ResponsiveContext/ResponsiveContext";

function BaseFifth() {
  const { isMobile } = useResponsive();
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const questions = [
    { id: 1, text: "طلای خرداد چیست؟", answer: "یک سایت خرید و فروش طلا است" },
    {
      id: 2,
      text: "کارمزد خرید طلای آب‌شده در طلای خرداد چقدر است؟",
      answer: "کارمزد خرید طلا بسته به نوع معامله متفاوت است.",
    },
    {
      id: 3,
      text: "طلای خرداد چه خدماتی ارائه می‌دهد؟",
      answer: "خرید و فروش طلا، مشاوره، ارائه قیمت لحظه‌ای و...",
    },
    {
      id: 4,
      text: "قیمت طلا در طلای خرداد بر چه اساسی تعیین می‌شود؟",
      answer: "بر اساس قیمت جهانی طلا و نرخ ارز محاسبه می‌شود.",
    },
    {
      id: 5,
      text: "طلای ۱۸ عیار یعنی چه و چه تفاوتی با سایر عیارهای طلا دارد؟",
      answer: "طلای ۱۸ عیار حاوی ۷۵٪ طلا و ۲۵٪ فلزات دیگر است.",
    },
    {
      id: 6,
      text: "نحوه استفاده از طلای خرداد چگونه است؟",
      answer: "از طریق سایت و اپلیکیشن به خدمات دسترسی دارید.",
    },
  ];

  return (
    <div className="h-full w-full overflow-x-auto flex items-center justify-between overflow-hidden mx-auto">
      {!isMobile ? (
        <div className="container">
          {/* متن بالایی */}
          <div className="text-center font-Vazirmatn2 space-y-6">
            <div className="text-[26px]">سوالات متداول</div>
            <div className="text-[16px] text-gray-500">
              سوالات احتمالی شما در مورد خرید طلای آب شده
            </div>
          </div>

          {/* دیو های پیاپی */}
          <div className="flex flex-col text-center items-center justify-center mt-20 space-y-5">
            {questions.map((q) => (
              <div
                key={q.id}
                className="w-[440px] sm:w-[700px] md:w-[900px] lg:w-[1100px] border-2 relative rounded-md rtl font-Vazirmatn1"
              >
                <div
                  className="cursor-pointer p-4 flex items-center justify-between"
                  onClick={() =>
                    setOpenQuestion(openQuestion === q.id ? null : q.id)
                  }
                >
                  <h1 className="text-[13px] lg:text-[14px] rtl ">
                    {q.text}
                  </h1>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M11.0001 7.32739V14.6537"
                        stroke="#475569"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.6666 10.9904H7.33325"
                        stroke="#475569"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>
                {openQuestion === q.id && (
                  <div className="p-4 bg-gray-100 border-t rtl text-right text-[13px]">{q.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full p-4 bg-gray-50 rounded-lg shadow-md">
          {/* نسخه موبایل */}
          <div className="text-center font-Vazirmatn2 space-y-4">
            <div className="text-2xl font-semibold text-gray-800">
              سوالات متداول
            </div>
          </div>

          <div className="flex flex-col space-y-4 mt-6">
            {questions.map((q) => (
              <div
                key={q.id}
                className="border rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  className="w-full flex justify-between rtl font-Vazirmatn1 items-center p-3 bg-gray-400 text-white
                   rounded-lg transition duration-300"
                  onClick={() =>
                    setOpenQuestion(openQuestion === q.id ? null : q.id)
                  }
                >
                  <span className="text-[11px] rtl">{q.text}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transform ${
                      openQuestion === q.id ? "rotate-45" : ""
                    } transition-transform duration-300`}
                  >
                    <g>
                      <path
                        d="M11.0001 7.32739V14.6537"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.6666 10.9904H7.33325"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </button>
                {openQuestion === q.id && (
                  <div className="p-4 bg-gray-200 border-t border-gray-300 text-gray-700 rtl font-Vazirmatn1 text-[10px]">
                    {q.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BaseFifth;
