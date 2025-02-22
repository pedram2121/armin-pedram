
"use client"
import React, { useEffect, useState } from 'react'
import { useResponsive } from './ResponsiveContext/ResponsiveContext';


function BaseTwo() {


const { isMobile } = useResponsive();

    return (
      <div className=" bg-white w-full">
        <div
          className="flex-row-reverse mt-28 flex
             h-screen items-center justify-between px-8 font-Vazirmatn1"
        >
          {!isMobile ? (
            <div
              className="container  flex-row-reverse top-0 mx-auto flex h-screen xl:max-w-[1350px]
                           items-center justify-between overflow-y-auto px-8 z-10"
            >
              {/* // متن کنار مربع ها   */}
              <div className="relative space-y-6 -top-32 ">
                {/* عنوان */}
                <div
                  className="text-2xl font-Vazirmatn1 md:text-[24px] lg:text-3xl xl:text-4xl
                             whitespace-nowrap text-gray-600 flex flex-row-reverse gap-3 text-right"
                >
                  چرا طلای خرداد؟
                </div>
                {/* توضیحات */}
                <div className="right-0 w-auto sm:w-[340px] md:w-[240px]  lg:w-[450px] text-right">
                  <span className="text-[10px] text-gray-500 font-Vazirmatn2 sm:text-[13px] md:text-[14px] lg:text-[16px] text-justify">
                    طلای خرداد سامانه‌ای ثبت‌شده و معتبر است که امکان معامله‌ی
                    طلا با کمترین کارمزد و بدون محدودیت در مبلغ و زمان را فراهم
                    آورده. طلای شما به صورت فیزیکی تامین شده و همراه با فاکتور
                    رسمی قابل تحویل است
                  </span>
                </div>

                {/* دکمه */}
                <div className="relative text-right">
                  <button
                    className=" mt-2 rounded-lg bg-blue-600
                         hover:bg-blue-900 text-[12px] sm:text-[13px]
                          md:text-[13px] lg:text-[15px] py-3 xl:py-4 px-6
                           text-white font-Vazirmatn2 sm:px-6 sm:py-4 md:px-7
                            lg:px-8 xl:px-18"
                  >
                    خـریـد طلای آب شده
                  </button>

                  <div
                    className="absolute justify-end 
                                    md:w-10 md:h-10  md:right-[145px] md:top-6 space-x-5"
                  >
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="vuesax/outline/arrow-left">
                        <g id="vuesax/outline/arrow-left_2">
                          <g id="arrow-left">
                            <path
                              id="Vector"
                              d="M16 12.75H10C9.59 12.75 9.25 12.41 9.25 12C9.25 11.59 9.59 11.25 10 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
                              fill="white"
                            />
                            <path
                              id="Vector_2"
                              d="M11.9999 15.7499C11.8099 15.7499 11.6199 15.6799 11.4699 15.5299L8.46994 12.5299C8.17994 12.2399 8.17994 11.7599 8.46994 11.4699L11.4699 8.46994C11.7599 8.17994 12.2399 8.17994 12.5299 8.46994C12.8199 8.75994 12.8199 9.23994 12.5299 9.52994L10.0599 11.9999L12.5299 14.4699C12.8199 14.7599 12.8199 15.2399 12.5299 15.5299C12.3799 15.6799 12.1899 15.7499 11.9999 15.7499Z"
                              fill="white"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* آیکون SVG */}
              </div>

              {/* ////////////// شروع مربع ها از این زیر است و این پدرشان است فلکس اسپیس 8 /////////////////// */}
              <div className="flex space-x-8 pr-72 w-full ">
                {/* مادر دو تای اولی */}
                <div className="flex-col relative space-y-5 -mt-64  ">
                  {/* __________________________________________________ 1 */}

                  <div className="hidden md:block h-60 w-60  bg-[#F0F4F9] rounded-lg shadow-md">
                    <div className="flex flex-col px-6 pt-6 space-y-3">
                      <div className="self-end">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="badge-check 1"
                            clip-path="url(#clip0_3494_188)"
                          >
                            <path
                              id="Vector"
                              d="M32 16C32 13.7387 30.8533 11.7453 29.1093 10.5693C29.5107 8.50532 28.912 6.28532 27.3133 4.68532C25.7147 3.08666 23.4947 2.48799 21.4293 2.88932C20.2533 1.14532 18.26 -0.00134277 15.9986 -0.00134277C13.7373 -0.00134277 11.744 1.14532 10.568 2.88932C8.50398 2.48799 6.28265 3.08666 4.68398 4.68532C3.08531 6.28399 2.48665 8.50399 2.88798 10.5693C1.14398 11.7453 -0.00268555 13.7387 -0.00268555 16C-0.00268555 18.2613 1.14398 20.2547 2.88798 21.4307C2.48665 23.4947 3.08531 25.716 4.68398 27.3147C6.28265 28.9133 8.50265 29.512 10.568 29.1107C11.744 30.8547 13.7373 32.0013 15.9986 32.0013C18.26 32.0013 20.2533 30.8547 21.4293 29.1107C23.4933 29.512 25.7147 28.9133 27.3133 27.3147C28.912 25.716 29.5107 23.496 29.1093 21.4307C30.8533 20.2547 32 18.2613 32 16ZM15.8786 20.5587C15.3626 21.0747 14.684 21.332 14.0026 21.332C13.3213 21.332 12.636 21.072 12.1146 20.552L8.40532 16.9573L10.2626 15.0413L13.9866 18.6507L21.732 11.0493L23.604 12.9493L15.8786 20.5587Z"
                              fill="#0B63E5"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3494_188">
                              <rect width="32" height="32" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="self-end text-[10px] md:text-[12px]
                              lg:text-[14px]"
                      >
                        دریافت فیزیکی طلای 18 عیار
                      </div>
                      <div
                        className="self-end text-[10px] md:text-[12px]
                              lg:text-[14px] text-right"
                      >
                        طلایی که از میلی می‌خرید، دارای کارمزدی شفاف و بدون
                        اجرت، مالیات و کمیسیون فروشنده است
                      </div>
                      <div className="flex space-x-2">
                        <button
                          className="text-[10px] md:text-[12px]
                              lg:text-[14px] mt-4 absolute right-7 text-blue-600"
                        >
                          خرید طلای آب شده 18 عیار
                        </button>

                        <div className="absolute top-[189px] hidden lg:block">
                          <svg
                            className="fill-current text-blue-700"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="vuesax/outline/arrow-left">
                              <g id="vuesax/outline/arrow-left_2">
                                <g id="arrow-left">
                                  <path
                                    id="Vector"
                                    d="M16 12.75H10C9.59 12.75 9.25 12.41 9.25 12C9.25 11.59 9.59 11.25 10 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
                                  />
                                  <path
                                    id="Vector_2"
                                    d="M11.9999 15.7499C11.8099 15.7499 11.6199 15.6799 11.4699 15.5299L8.46994 12.5299C8.17994 12.2399 8.17994 11.7599 8.46994 11.4699L11.4699 8.46994C11.7599 8.17994 12.2399 8.17994 12.5299 8.46994C12.8199 8.75994 12.8199 9.23994 12.5299 9.52994L10.0599 11.9999L12.5299 14.4699C12.8199 14.7599 12.8199 15.2399 12.5299 15.5299C12.3799 15.6799 12.1899 15.7499 11.9999 15.7499Z"
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* __________________________________________________ 1 */}

                  {/* __________________________________________________ 2 */}

                  <div className="hidden md:block h-60 w-60  bg-[#F0F4F9] rounded-lg shadow-md">
                    <div className="flex flex-col px-6 pt-6 space-y-3">
                      <div className="self-end">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="badge-check 1"
                            clip-path="url(#clip0_3494_188)"
                          >
                            <path
                              id="Vector"
                              d="M32 16C32 13.7387 30.8533 11.7453 29.1093 10.5693C29.5107 8.50532 28.912 6.28532 27.3133 4.68532C25.7147 3.08666 23.4947 2.48799 21.4293 2.88932C20.2533 1.14532 18.26 -0.00134277 15.9986 -0.00134277C13.7373 -0.00134277 11.744 1.14532 10.568 2.88932C8.50398 2.48799 6.28265 3.08666 4.68398 4.68532C3.08531 6.28399 2.48665 8.50399 2.88798 10.5693C1.14398 11.7453 -0.00268555 13.7387 -0.00268555 16C-0.00268555 18.2613 1.14398 20.2547 2.88798 21.4307C2.48665 23.4947 3.08531 25.716 4.68398 27.3147C6.28265 28.9133 8.50265 29.512 10.568 29.1107C11.744 30.8547 13.7373 32.0013 15.9986 32.0013C18.26 32.0013 20.2533 30.8547 21.4293 29.1107C23.4933 29.512 25.7147 28.9133 27.3133 27.3147C28.912 25.716 29.5107 23.496 29.1093 21.4307C30.8533 20.2547 32 18.2613 32 16ZM15.8786 20.5587C15.3626 21.0747 14.684 21.332 14.0026 21.332C13.3213 21.332 12.636 21.072 12.1146 20.552L8.40532 16.9573L10.2626 15.0413L13.9866 18.6507L21.732 11.0493L23.604 12.9493L15.8786 20.5587Z"
                              fill="#0B63E5"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3494_188">
                              <rect width="32" height="32" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="self-end text-[10px] md:text-[12px]
                              lg:text-[14px]"
                      >
                        دریافت فیزیکی طلای 18 عیار
                      </div>
                      <div
                        className="self-end text-[10px] md:text-[12px]
                              lg:text-[14px] text-right"
                      >
                        طلایی که از میلی می‌خرید، دارای کارمزدی شفاف و بدون
                        اجرت، مالیات و کمیسیون فروشنده است
                      </div>
                      <div className="flex space-x-2">
                        <button
                          className="text-[10px] md:text-[12px]
                              lg:text-[14px] mt-4 absolute right-7 text-blue-600"
                        >
                          خرید طلای آب شده 18 عیار
                        </button>

                        <div className="absolute top-[455px] hidden lg:block">
                          <svg
                            className="fill-current text-blue-700"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="vuesax/outline/arrow-left">
                              <g id="vuesax/outline/arrow-left_2">
                                <g id="arrow-left">
                                  <path
                                    id="Vector"
                                    d="M16 12.75H10C9.59 12.75 9.25 12.41 9.25 12C9.25 11.59 9.59 11.25 10 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
                                  />
                                  <path
                                    id="Vector_2"
                                    d="M11.9999 15.7499C11.8099 15.7499 11.6199 15.6799 11.4699 15.5299L8.46994 12.5299C8.17994 12.2399 8.17994 11.7599 8.46994 11.4699L11.4699 8.46994C11.7599 8.17994 12.2399 8.17994 12.5299 8.46994C12.8199 8.75994 12.8199 9.23994 12.5299 9.52994L10.0599 11.9999L12.5299 14.4699C12.8199 14.7599 12.8199 15.2399 12.5299 15.5299C12.3799 15.6799 12.1899 15.7499 11.9999 15.7499Z"
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* __________________________________________________ 2 */}

                {/* مادر دو تای دومی */}
                <div className="flex-col relative space-y-5 -mt-48">
                  {/* __________________________________________________ 3 */}
                  <div className="hidden md:block h-60 w-60  bg-[#F0F4F9] rounded-lg shadow-md">
                    <div className="flex flex-col px-6 pt-6 space-y-3">
                      <div className="self-end">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="badge-check 1"
                            clip-path="url(#clip0_3494_188)"
                          >
                            <path
                              id="Vector"
                              d="M32 16C32 13.7387 30.8533 11.7453 29.1093 10.5693C29.5107 8.50532 28.912 6.28532 27.3133 4.68532C25.7147 3.08666 23.4947 2.48799 21.4293 2.88932C20.2533 1.14532 18.26 -0.00134277 15.9986 -0.00134277C13.7373 -0.00134277 11.744 1.14532 10.568 2.88932C8.50398 2.48799 6.28265 3.08666 4.68398 4.68532C3.08531 6.28399 2.48665 8.50399 2.88798 10.5693C1.14398 11.7453 -0.00268555 13.7387 -0.00268555 16C-0.00268555 18.2613 1.14398 20.2547 2.88798 21.4307C2.48665 23.4947 3.08531 25.716 4.68398 27.3147C6.28265 28.9133 8.50265 29.512 10.568 29.1107C11.744 30.8547 13.7373 32.0013 15.9986 32.0013C18.26 32.0013 20.2533 30.8547 21.4293 29.1107C23.4933 29.512 25.7147 28.9133 27.3133 27.3147C28.912 25.716 29.5107 23.496 29.1093 21.4307C30.8533 20.2547 32 18.2613 32 16ZM15.8786 20.5587C15.3626 21.0747 14.684 21.332 14.0026 21.332C13.3213 21.332 12.636 21.072 12.1146 20.552L8.40532 16.9573L10.2626 15.0413L13.9866 18.6507L21.732 11.0493L23.604 12.9493L15.8786 20.5587Z"
                              fill="#0B63E5"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3494_188">
                              <rect width="32" height="32" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="self-end text-[10px] md:text-[12px]
                              lg:text-[14px]"
                      >
                        دریافت فیزیکی طلای 18 عیار
                      </div>
                      <div
                        className="self-end text-[10px] md:text-[12px]
                              lg:text-[14px] text-right"
                      >
                        طلایی که از میلی می‌خرید، دارای کارمزدی شفاف و بدون
                        اجرت، مالیات و کمیسیون فروشنده است
                      </div>
                      <div className="flex space-x-2">
                        <button
                          className="text-[10px] md:text-[12px]
                              lg:text-[14px] mt-4 absolute right-7 text-blue-600"
                        >
                          خرید طلای آب شده 18 عیار
                        </button>

                        <div className="absolute top-[189px] hidden lg:block">
                          <svg
                            className="fill-current text-blue-700"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="vuesax/outline/arrow-left">
                              <g id="vuesax/outline/arrow-left_2">
                                <g id="arrow-left">
                                  <path
                                    id="Vector"
                                    d="M16 12.75H10C9.59 12.75 9.25 12.41 9.25 12C9.25 11.59 9.59 11.25 10 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
                                  />
                                  <path
                                    id="Vector_2"
                                    d="M11.9999 15.7499C11.8099 15.7499 11.6199 15.6799 11.4699 15.5299L8.46994 12.5299C8.17994 12.2399 8.17994 11.7599 8.46994 11.4699L11.4699 8.46994C11.7599 8.17994 12.2399 8.17994 12.5299 8.46994C12.8199 8.75994 12.8199 9.23994 12.5299 9.52994L10.0599 11.9999L12.5299 14.4699C12.8199 14.7599 12.8199 15.2399 12.5299 15.5299C12.3799 15.6799 12.1899 15.7499 11.9999 15.7499Z"
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* __________________________________________________ 3 */}

                  {/* __________________________________________________ 4 */}
                  <div className="hidden md:block h-60 w-60  bg-[#F0F4F9] rounded-lg shadow-md">
                    <div className="flex flex-col px-6 pt-6 relative space-y-3">
                      <div className="self-end">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="badge-check 1"
                            clip-path="url(#clip0_3494_188)"
                          >
                            <path
                              id="Vector"
                              d="M32 16C32 13.7387 30.8533 11.7453 29.1093 10.5693C29.5107 8.50532 28.912 6.28532 27.3133 4.68532C25.7147 3.08666 23.4947 2.48799 21.4293 2.88932C20.2533 1.14532 18.26 -0.00134277 15.9986 -0.00134277C13.7373 -0.00134277 11.744 1.14532 10.568 2.88932C8.50398 2.48799 6.28265 3.08666 4.68398 4.68532C3.08531 6.28399 2.48665 8.50399 2.88798 10.5693C1.14398 11.7453 -0.00268555 13.7387 -0.00268555 16C-0.00268555 18.2613 1.14398 20.2547 2.88798 21.4307C2.48665 23.4947 3.08531 25.716 4.68398 27.3147C6.28265 28.9133 8.50265 29.512 10.568 29.1107C11.744 30.8547 13.7373 32.0013 15.9986 32.0013C18.26 32.0013 20.2533 30.8547 21.4293 29.1107C23.4933 29.512 25.7147 28.9133 27.3133 27.3147C28.912 25.716 29.5107 23.496 29.1093 21.4307C30.8533 20.2547 32 18.2613 32 16ZM15.8786 20.5587C15.3626 21.0747 14.684 21.332 14.0026 21.332C13.3213 21.332 12.636 21.072 12.1146 20.552L8.40532 16.9573L10.2626 15.0413L13.9866 18.6507L21.732 11.0493L23.604 12.9493L15.8786 20.5587Z"
                              fill="#0B63E5"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3494_188">
                              <rect width="32" height="32" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="self-end text-[10px] md:text-[12px]
                              lg:text-[14px]"
                      >
                        دریافت فیزیکی طلای 18 عیار
                      </div>
                      <div
                        className="self-end text-[10px] md:text-[12px]
                              lg:text-[14px] text-right"
                      >
                        طلایی که از میلی می‌خرید، دارای کارمزدی شفاف و بدون
                        اجرت، مالیات و کمیسیون فروشنده است
                      </div>
                      <div className="flex space-x-2">
                        <button
                          className="text-[10px] md:text-[12px]
                              lg:text-[14px] mt-4 absolute right-7 text-blue-600"
                        >
                          خرید طلای آب شده 18 عیار
                        </button>

                        <div className="absolute top-[189px] hidden lg:block">
                          <svg
                            className="fill-current text-blue-700"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="vuesax/outline/arrow-left">
                              <g id="vuesax/outline/arrow-left_2">
                                <g id="arrow-left">
                                  <path
                                    id="Vector"
                                    d="M16 12.75H10C9.59 12.75 9.25 12.41 9.25 12C9.25 11.59 9.59 11.25 10 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
                                  />
                                  <path
                                    id="Vector_2"
                                    d="M11.9999 15.7499C11.8099 15.7499 11.6199 15.6799 11.4699 15.5299L8.46994 12.5299C8.17994 12.2399 8.17994 11.7599 8.46994 11.4699L11.4699 8.46994C11.7599 8.17994 12.2399 8.17994 12.5299 8.46994C12.8199 8.75994 12.8199 9.23994 12.5299 9.52994L10.0599 11.9999L12.5299 14.4699C12.8199 14.7599 12.8199 15.2399 12.5299 15.5299C12.3799 15.6799 12.1899 15.7499 11.9999 15.7499Z"
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* __________________________________________________ 4 */}
                </div>
              </div>
            </div>
          ) : (
            <div
              className="flex flex-col items-center 
                        text-center min-h-screen overflow-y-auto overflow-x-hidden mb-20"
            >
              {/* مختص متن و دکمه فعلا */}
              <div className="  justify-center">
                <div className="text-center space-y-6">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-semibold font-Vazirmatn1 text-black text-center">
                    چرا طـــلـای خرداد؟
                  </div>
                  <div
                    className="text-[11px] text-gray-500
                                     font-Vazirmatn2 text-right"
                  >
                    طلای خرداد سامانه‌ای ثبت‌شده و معتبر است که امکان معامله‌ی
                    طلا با کمترین کارمزد و بدون محدودیت در مبلغ و زمان را فراهم
                    آورده طلای شما به صورت فیزیکی تامین شده و همراه با فاکتور
                    رسمی قابل تحویل است
                  </div>
                  <div className="text-center">
                    <button
                      className="mt-2 rounded-lg bg-blue-600 hover:bg-blue-900 text-[12px] 
                                             py-3 px-5 text-white font-Vazirmatn2"
                    >
                      خـریـد طلای آب شده
                    </button>
                  </div>
                </div>
              </div>

              {/* مربع ها */}
              <div className="flex mt-16 text-center space-x-4">
                <div className="flex flex-col relative space-y-5 ">
                  {/* ___________________________________________________________________________________________ 1 */}

                  <div className="md:block h-40 w-36  bg-[#F0F4F9] rounded-lg shadow-md">
                    <div className="flex flex-col px-6 pt-2 space-y-3">
                      <div className="self-end">
                        <svg
                          width="28"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="badge-check 1"
                            clip-path="url(#clip0_3494_188)"
                          >
                            <path
                              id="Vector"
                              d="M32 16C32 13.7387 30.8533 11.7453 29.1093 10.5693C29.5107 8.50532 28.912 6.28532 27.3133 4.68532C25.7147 3.08666 23.4947 2.48799 21.4293 2.88932C20.2533 1.14532 18.26 -0.00134277 15.9986 -0.00134277C13.7373 -0.00134277 11.744 1.14532 10.568 2.88932C8.50398 2.48799 6.28265 3.08666 4.68398 4.68532C3.08531 6.28399 2.48665 8.50399 2.88798 10.5693C1.14398 11.7453 -0.00268555 13.7387 -0.00268555 16C-0.00268555 18.2613 1.14398 20.2547 2.88798 21.4307C2.48665 23.4947 3.08531 25.716 4.68398 27.3147C6.28265 28.9133 8.50265 29.512 10.568 29.1107C11.744 30.8547 13.7373 32.0013 15.9986 32.0013C18.26 32.0013 20.2533 30.8547 21.4293 29.1107C23.4933 29.512 25.7147 28.9133 27.3133 27.3147C28.912 25.716 29.5107 23.496 29.1093 21.4307C30.8533 20.2547 32 18.2613 32 16ZM15.8786 20.5587C15.3626 21.0747 14.684 21.332 14.0026 21.332C13.3213 21.332 12.636 21.072 12.1146 20.552L8.40532 16.9573L10.2626 15.0413L13.9866 18.6507L21.732 11.0493L23.604 12.9493L15.8786 20.5587Z"
                              fill="#0B63E5"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3494_188">
                              <rect width="32" height="32" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="self-end text-[8px] md:text-[12px]">
                        دریافت فیزیکی طلای 18 عیار
                      </div>
                      <div className="self-end text-[8px] md:text-[12px] text-right">
                        طلایی که از میلی می‌خرید، دارای کارمزدی شفاف و بدون
                        اجرت، مالیات و کمیسیون فروشنده است
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-[8px] absolute left-8 text-blue-600">
                          خرید طلای آب شده 18 عیار
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* __________________________________________________ 1 */}

                  {/* __________________________________________________ 2 */}

                  <div className="md:block h-40 w-36  bg-[#F0F4F9] rounded-lg shadow-md">
                    <div className="flex flex-col px-6 pt-2 space-y-3">
                      <div className="self-end">
                        <svg
                          width="28"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="badge-check 1"
                            clip-path="url(#clip0_3494_188)"
                          >
                            <path
                              id="Vector"
                              d="M32 16C32 13.7387 30.8533 11.7453 29.1093 10.5693C29.5107 8.50532 28.912 6.28532 27.3133 4.68532C25.7147 3.08666 23.4947 2.48799 21.4293 2.88932C20.2533 1.14532 18.26 -0.00134277 15.9986 -0.00134277C13.7373 -0.00134277 11.744 1.14532 10.568 2.88932C8.50398 2.48799 6.28265 3.08666 4.68398 4.68532C3.08531 6.28399 2.48665 8.50399 2.88798 10.5693C1.14398 11.7453 -0.00268555 13.7387 -0.00268555 16C-0.00268555 18.2613 1.14398 20.2547 2.88798 21.4307C2.48665 23.4947 3.08531 25.716 4.68398 27.3147C6.28265 28.9133 8.50265 29.512 10.568 29.1107C11.744 30.8547 13.7373 32.0013 15.9986 32.0013C18.26 32.0013 20.2533 30.8547 21.4293 29.1107C23.4933 29.512 25.7147 28.9133 27.3133 27.3147C28.912 25.716 29.5107 23.496 29.1093 21.4307C30.8533 20.2547 32 18.2613 32 16ZM15.8786 20.5587C15.3626 21.0747 14.684 21.332 14.0026 21.332C13.3213 21.332 12.636 21.072 12.1146 20.552L8.40532 16.9573L10.2626 15.0413L13.9866 18.6507L21.732 11.0493L23.604 12.9493L15.8786 20.5587Z"
                              fill="#0B63E5"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3494_188">
                              <rect width="32" height="32" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="self-end text-[8px] md:text-[12px]">
                        دریافت فیزیکی طلای 18 عیار
                      </div>
                      <div className="self-end text-[8px] md:text-[12px] text-right">
                        طلایی که از میلی می‌خرید، دارای کارمزدی شفاف و بدون
                        اجرت، مالیات و کمیسیون فروشنده است
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-[8px] absolute left-8 text-blue-600">
                          خرید طلای آب شده 18 عیار
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col relative space-y-5">
                  {/* __________________________________________________ 1 */}

                  <div className="md:block h-40 w-36 mt-16 bg-[#F0F4F9] rounded-lg shadow-md">
                    <div className="flex flex-col px-6 pt-2 space-y-3">
                      <div className="self-end">
                        <svg
                          width="28"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="badge-check 1"
                            clip-path="url(#clip0_3494_188)"
                          >
                            <path
                              id="Vector"
                              d="M32 16C32 13.7387 30.8533 11.7453 29.1093 10.5693C29.5107 8.50532 28.912 6.28532 27.3133 4.68532C25.7147 3.08666 23.4947 2.48799 21.4293 2.88932C20.2533 1.14532 18.26 -0.00134277 15.9986 -0.00134277C13.7373 -0.00134277 11.744 1.14532 10.568 2.88932C8.50398 2.48799 6.28265 3.08666 4.68398 4.68532C3.08531 6.28399 2.48665 8.50399 2.88798 10.5693C1.14398 11.7453 -0.00268555 13.7387 -0.00268555 16C-0.00268555 18.2613 1.14398 20.2547 2.88798 21.4307C2.48665 23.4947 3.08531 25.716 4.68398 27.3147C6.28265 28.9133 8.50265 29.512 10.568 29.1107C11.744 30.8547 13.7373 32.0013 15.9986 32.0013C18.26 32.0013 20.2533 30.8547 21.4293 29.1107C23.4933 29.512 25.7147 28.9133 27.3133 27.3147C28.912 25.716 29.5107 23.496 29.1093 21.4307C30.8533 20.2547 32 18.2613 32 16ZM15.8786 20.5587C15.3626 21.0747 14.684 21.332 14.0026 21.332C13.3213 21.332 12.636 21.072 12.1146 20.552L8.40532 16.9573L10.2626 15.0413L13.9866 18.6507L21.732 11.0493L23.604 12.9493L15.8786 20.5587Z"
                              fill="#0B63E5"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3494_188">
                              <rect width="32" height="32" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="self-end text-[8px] md:text-[12px]">
                        دریافت فیزیکی طلای 18 عیار
                      </div>
                      <div className="self-end text-[8px] md:text-[12px] text-right">
                        طلایی که از میلی می‌خرید، دارای کارمزدی شفاف و بدون
                        اجرت، مالیات و کمیسیون فروشنده است
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-[8px] absolute left-8 text-blue-600">
                          خرید طلای آب شده 18 عیار
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* __________________________________________________ 1 */}

                  {/* __________________________________________________ 2 */}

                  <div className="md:block h-40 w-36  bg-[#F0F4F9] rounded-lg shadow-md">
                    <div className="flex flex-col px-6 pt-2 space-y-3">
                      <div className="self-end">
                        <svg
                          width="28"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="badge-check 1"
                            clip-path="url(#clip0_3494_188)"
                          >
                            <path
                              id="Vector"
                              d="M32 16C32 13.7387 30.8533 11.7453 29.1093 10.5693C29.5107 8.50532 28.912 6.28532 27.3133 4.68532C25.7147 3.08666 23.4947 2.48799 21.4293 2.88932C20.2533 1.14532 18.26 -0.00134277 15.9986 -0.00134277C13.7373 -0.00134277 11.744 1.14532 10.568 2.88932C8.50398 2.48799 6.28265 3.08666 4.68398 4.68532C3.08531 6.28399 2.48665 8.50399 2.88798 10.5693C1.14398 11.7453 -0.00268555 13.7387 -0.00268555 16C-0.00268555 18.2613 1.14398 20.2547 2.88798 21.4307C2.48665 23.4947 3.08531 25.716 4.68398 27.3147C6.28265 28.9133 8.50265 29.512 10.568 29.1107C11.744 30.8547 13.7373 32.0013 15.9986 32.0013C18.26 32.0013 20.2533 30.8547 21.4293 29.1107C23.4933 29.512 25.7147 28.9133 27.3133 27.3147C28.912 25.716 29.5107 23.496 29.1093 21.4307C30.8533 20.2547 32 18.2613 32 16ZM15.8786 20.5587C15.3626 21.0747 14.684 21.332 14.0026 21.332C13.3213 21.332 12.636 21.072 12.1146 20.552L8.40532 16.9573L10.2626 15.0413L13.9866 18.6507L21.732 11.0493L23.604 12.9493L15.8786 20.5587Z"
                              fill="#0B63E5"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3494_188">
                              <rect width="32" height="32" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="self-end text-[8px] md:text-[12px]">
                        دریافت فیزیکی طلای 18 عیار
                      </div>
                      <div className="self-end text-[8px] md:text-[12px] text-right">
                        طلایی که از میلی می‌خرید، دارای کارمزدی شفاف و بدون
                        اجرت، مالیات و کمیسیون فروشنده است
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-[8px] absolute left-8 text-blue-600">
                          خرید طلای آب شده 18 عیار
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}
export default BaseTwo