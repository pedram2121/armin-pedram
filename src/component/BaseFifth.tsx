import Image from 'next/image'
import React, { useEffect, useState } from 'react'


function BaseFifth() {


    const [isSmallScreen4, setIsSmallScreen4] = useState(false)

    useEffect(() => {
        const handleResize4 = () => {

            setIsSmallScreen4(window.innerWidth <= 768)
        };

        handleResize4();
        window.addEventListener("resize", handleResize4)

        return () => {
            window.removeEventListener("resize", handleResize4)
        }
    }, [])




    return (
        <div className='h-full w-full overflow-x-auto  flex items-center
         justify-between overflow-hidden mx-auto  '>


            {
                !isSmallScreen4 ? (


                    <div className='container'>
                        {/* // متن بالایی */}
                        <div className='text-center font-Vazirmatn2 space-y-6'>
                            <div className='text-[26px]'>
                                سوالات متداول
                            </div>
                            <div className='text-[16px] text-gray-500'>
                                سوالات احتمالی شما در مورد خرید طلای آب شده
                            </div>
                        </div>

                        {/* // دیو های پیاپی */}

                        <div className='flex flex-col text-center items-center justify-center mt-20 space-y-5  '>


                            <div className='w-[440px] sm:w-[700px] md:w-[900px] lg:w-[1100px]  h-20 border-2 relative rounded-md '>
                                <div className='absolute right-0 translate-y-7 px-5 flex flex-row-reverse font-Vazirmatn2'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Plus">
                                            <path id="Line_185" d="M11.0001 7.32739V14.6537" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Line_186" d="M14.6666 10.9904H7.33325" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                    <div className='px-6'>
                                        <h1 className='text-[15px] sm:[14px] md:[15px] lg:[16px]'> طلای خرداد چیست؟ </h1>
                                    </div>
                                </div>
                            </div>


                            <div className='w-[440px] sm:w-[700px] md:w-[900px] lg:w-[1100px]  h-20 border-2 relative rounded-md '>
                                <div className='absolute right-0 translate-y-7 px-5 flex flex-row-reverse font-Vazirmatn2'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Plus">
                                            <path id="Line_185" d="M11.0001 7.32739V14.6537" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Line_186" d="M14.6666 10.9904H7.33325" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                    <div className='px-6'>
                                        <h1 className='text-[15px] sm:[14px] md:[15px] lg:[16px]'> کارمزد خرید طلای آب‌شده در طلای خرداد چقدر است ؟ </h1>
                                    </div>
                                </div>
                            </div>


                            <div className='w-[440px] sm:w-[700px] md:w-[900px] lg:w-[1100px]  h-20 border-2 relative rounded-md '>
                                <div className='absolute right-0 translate-y-7 px-5 flex flex-row-reverse font-Vazirmatn2'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Plus">
                                            <path id="Line_185" d="M11.0001 7.32739V14.6537" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Line_186" d="M14.6666 10.9904H7.33325" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                    <div className='px-6'>
                                        <h1 className='text-[15px] sm:[14px] md:[15px] lg:[16px]'> طلای خرداد چه خدماتی ارائه می‌دهد؟ </h1>
                                    </div>
                                </div>
                            </div>


                            <div className='w-[440px] sm:w-[700px] md:w-[900px] lg:w-[1100px]  h-20 border-2 relative rounded-md '>
                                <div className='absolute right-0 translate-y-7 px-5 flex flex-row-reverse font-Vazirmatn2'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Plus">
                                            <path id="Line_185" d="M11.0001 7.32739V14.6537" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Line_186" d="M14.6666 10.9904H7.33325" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                    <div className='px-6'>
                                        <h1 className='text-[15px] sm:[14px] md:[15px] lg:[16px]'> قیمت طلا در طلای خرداد بر چه اساسی تعیین می‌شود؟ </h1>
                                    </div>
                                </div>
                            </div>


                            <div className='w-[440px] sm:w-[700px] md:w-[900px] lg:w-[1100px]  h-20 border-2 relative rounded-md '>
                                <div className='absolute right-0 translate-y-7 px-5 flex flex-row-reverse font-Vazirmatn2'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Plus">
                                            <path id="Line_185" d="M11.0001 7.32739V14.6537" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Line_186" d="M14.6666 10.9904H7.33325" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                    <div className='px-6'>
                                        <h1 className='text-right text-[15px] sm:[14px] md:[15px] lg:[16px]'> طلای ۱۸ عیار یعنی چه و چه تفاوتی با سایر عیارهای طلا دارد؟ </h1>
                                    </div>
                                </div>
                            </div>


                            <div className='w-[440px] sm:w-[700px] md:w-[900px] lg:w-[1100px]  h-20 border-2 relative rounded-md '>
                                <div className='absolute right-0 translate-y-7 px-5 flex flex-row-reverse font-Vazirmatn2'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Plus">
                                            <path id="Line_185" d="M11.0001 7.32739V14.6537" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Line_186" d="M14.6666 10.9904H7.33325" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                    <div className='px-6'>
                                        <h1 className='text-[15px] sm:[14px] md:[15px] lg:[16px]'> نحوه استفاده از طلای خرداد چگونه است؟ </h1>
                                    </div>
                                </div>
                            </div>


                            <div className='w-[440px] sm:w-[700px] md:w-[900px] lg:w-[1100px]  h-20 border-2 relative rounded-md '>
                                <div className='absolute right-0 translate-y-7 px-5 flex flex-row-reverse font-Vazirmatn2'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Plus">
                                            <path id="Line_185" d="M11.0001 7.32739V14.6537" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Line_186" d="M14.6666 10.9904H7.33325" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                    <div className='px-6'>
                                        <h1 className='text-right text-[15px] sm:[14px] md:[15px] lg:[16px]'> آیا به‌ازای طلای آب شده که در طلای خرداد می‌فروشید طلای واقعی وجود دارد؟ </h1>
                                    </div>
                                </div>
                            </div>


                            <div className='w-[440px] sm:w-[700px] md:w-[900px] lg:w-[1100px]  h-20 border-2 relative rounded-md '>
                                <div className='absolute right-0 translate-y-7 px-5 flex flex-row-reverse font-Vazirmatn2'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Plus">
                                            <path id="Line_185" d="M11.0001 7.32739V14.6537" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Line_186" d="M14.6666 10.9904H7.33325" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                    <div className='px-6'>
                                        <h1 className='text-right text-[15px] sm:[14px] md:[15px] lg:[16px]'> آیا به صورت سازمانی هم امکان خرید و فروش طلای آب شده در طلای خرداد وجود دارد؟ </h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                ) : (




                        <div className="items-center text-center h-screen inset-6 overflow-y-auto ">
                            <div className=" flex flex-col justify-center text-center items-center px-8 space-y-6 mt-20">
                            
                            <div className='w-[350px]  h-20 border-2 relative rounded-md '>
                                <div className='absolute right-0 translate-y-7 px-5 flex flex-row-reverse font-Vazirmatn2'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Plus">
                                            <path id="Line_185" d="M11.0001 7.32739V14.6537" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Line_186" d="M14.6666 10.9904H7.33325" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                    <div className='px-6'>
                                        <h1 className='text-[14px]'> طلای خرداد چیست؟ </h1>
                                    </div>
                                </div>
                            </div>


                            <div className='w-[350px] h-20 border-2 relative rounded-md '>
                                <div className='absolute right-0 translate-y-7 px-5 flex flex-row-reverse font-Vazirmatn2'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Plus">
                                            <path id="Line_185" d="M11.0001 7.32739V14.6537" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Line_186" d="M14.6666 10.9904H7.33325" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                    <div className='px-6'>
                                        <h1 className='text-[13px] text-right'> کارمزد خرید طلای آب‌شده در طلای خرداد چقدر است ؟ </h1>
                                    </div>
                                </div>
                            </div>


                                <div className='w-[350px] h-20 border-2 relative rounded-md'>
                                <div className='absolute right-0 translate-y-7 px-5 flex flex-row-reverse font-Vazirmatn2'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Plus">
                                            <path id="Line_185" d="M11.0001 7.32739V14.6537" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Line_186" d="M14.6666 10.9904H7.33325" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                    <div className='px-6'>
                                        <h1 className='text-[13px]'> طلای خرداد چه خدماتی ارائه می‌دهد؟ </h1>
                                    </div>
                                </div>
                            </div>


                                <div className='w-[350px] h-20 border-2 relative rounded-md'>
                                <div className='absolute right-0 translate-y-7 px-5 flex flex-row-reverse font-Vazirmatn2'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Plus">
                                            <path id="Line_185" d="M11.0001 7.32739V14.6537" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Line_186" d="M14.6666 10.9904H7.33325" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                    <div className='px-6'>
                                        <h1 className='text-[13px] text-right'> قیمت طلا در طلای خرداد بر چه اساسی تعیین می‌شود؟ </h1>
                                    </div>
                                </div>
                            </div>


                                <div className='w-[350px] h-20 border-2 relative rounded-md'>
                                <div className='absolute right-0 translate-y-7 px-5 flex flex-row-reverse font-Vazirmatn2'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Plus">
                                            <path id="Line_185" d="M11.0001 7.32739V14.6537" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Line_186" d="M14.6666 10.9904H7.33325" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                    <div className='px-6'>
                                        <h1 className='text-right text-[13px]'> طلای ۱۸ عیار یعنی چه و چه تفاوتی با سایر عیارهای طلا دارد؟ </h1>
                                    </div>
                                </div>
                            </div>


                                <div className='w-[350px] h-20 border-2 relative rounded-md'>
                                <div className='absolute right-0 translate-y-7 px-5 flex flex-row-reverse font-Vazirmatn2'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Plus">
                                            <path id="Line_185" d="M11.0001 7.32739V14.6537" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Line_186" d="M14.6666 10.9904H7.33325" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                    <div className='px-6'>
                                        <h1 className='text-[13px] text-right'> نحوه استفاده از طلای خرداد چگونه است؟ </h1>
                                    </div>
                                </div>
                            </div>


                                <div className='w-[350px] h-20 border-2 relative rounded-md'>
                                <div className='absolute right-0 translate-y-7 px-5 flex flex-row-reverse font-Vazirmatn2'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Plus">
                                            <path id="Line_185" d="M11.0001 7.32739V14.6537" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Line_186" d="M14.6666 10.9904H7.33325" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                    <div className='px-6'>
                                        <h1 className='text-right text-[13px]'> آیا به‌ازای طلای آب شده که در طلای خرداد می‌فروشید طلای واقعی وجود دارد؟ </h1>
                                    </div>
                                </div>
                            </div>


                                <div className='w-[350px] h-20 border-2 relative rounded-md'>
                                <div className='absolute right-0 translate-y-7 px-5 flex flex-row-reverse font-Vazirmatn2'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Plus">
                                            <path id="Line_185" d="M11.0001 7.32739V14.6537" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Line_186" d="M14.6666 10.9904H7.33325" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                    <div className='px-6'>
                                        <h1 className='text-right text-[13px]'> آیا به صورت سازمانی هم امکان خرید و فروش طلای آب شده در طلای خرداد وجود دارد؟ </h1>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>


                )
            }















        </div>
    )
}

export default BaseFifth
