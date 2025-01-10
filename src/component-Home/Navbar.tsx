"use client"
import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import Icon from '../Image/Icon.png';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ShowOff = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container relative">
      <div className="bg-white rounded-xl sticky top-0 z-20 py-5 mt-7 shadow-md">
        <div className="container flex justify-between items-center px-10">
          {/* همبرگر منو */}
          <RxHamburgerMenu
            onClick={ShowOff}
            className="sm:hidden text-[23px] font-bold text-black cursor-pointer" />
          {/* دکمه ورود */}
          <button
            className="rounded-lg bg-blue-600 hover:bg-blue-900 text-[12px]
            lg:text-[14px] py-2 xl:py-4 px-8 text-white font-Vazirmatn2
            sm:px-3 md:px-5 lg:px-7 xl:px-9" >
            ورود/ ثبت نام
          </button>

          {/* منو اصلی */}
          <ul
            className={`gap-6 hidden sm:flex flex-row-reverse font-Vazirmatn2 sm:text-[10px] 
             sm:gap-3 md:text-[14px] md:gap-2 lg:text-[16px] lg:gap-5 xl:text-[18px] xl:gap-8`}
          >
            <li className="hover:text-black cursor-pointer text-gray-500">
              <Link href="/AboutUS">چرا طلای خرداد</Link>
            </li>
            <li className="hover:text-black cursor-pointer text-gray-500">
              <Link href="/Privacy"> امنیت و شفافیت </Link>
            </li>
            <li className="hover:text-black cursor-pointer text-gray-500">
              <Link href="/TermsandConditions">مجوزها</Link>
            </li>
            <li className="hover:text-black cursor-pointer text-gray-500">
              <Link href="/RulesAndRegulations"> قوانین و مقررات </Link>
            </li>
            <li className="hover:text-black cursor-pointer text-gray-500">
              <Link href="/ContactUs">تماس با ما</Link>
            </li>
          </ul>

          <Link href="/" >

            <div className="flex gap-3 items-center text-center">
              <h1
                className="font-medium font-Vazirmatn2 hover:text-gray-600 
              sm:text-[10px] md:text-[13px] lg:text-[17px] xl:text-[26px]" >
                طلای خرداد
              </h1>
              <Image src={Icon} alt="Logo" />
            </div>

          </Link>



        </div>

        {/* زیرمنوی همبرگر */}
        {isMenuOpen && (
          <div className="sm:hidden bg-gray-100 rounded-lg mt-2 p-4 px-6 absolute text-center
          font-Vazirmatn3">
            <ul className="flex flex-col gap-4 text-gray-600">
              <li className="hover:text-black cursor-pointer">   <Link href="/AboutUS">چرا طلای خرداد</Link> </li>
              <li className="hover:text-black cursor-pointer">مراحل خرید</li>
              <li className="hover:text-black cursor-pointer">  <Link href="/TermsandConditions"> مجوزها </Link>  </li>
              <li className="hover:text-black cursor-pointer">  <Link href="/RulesAndRegulations"> قوانین و مقررات </Link> </li>
              <li className="hover:text-black cursor-pointer">  <Link href="/ContactUs">تماس با ما</Link> </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
