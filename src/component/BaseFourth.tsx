"use client"
import React, { useEffect, useState } from 'react'
import image1 from '../../src/Image/image 1.png'
import image2 from '../../src/Image/image 2.png'
import image3 from '../../src/Image/image 3.png'
import image4 from '../../src/Image/image 4.png'
import image5 from '../../src/Image/image 5.png'
import Image from 'next/image'


function BaseFourth() {

    const [isSmallScreen3, setIsSmallScreen3] = useState(false);

    useEffect(() => {
        const handleResize3 = () => {
            setIsSmallScreen3(window.innerWidth <= 768)
        };
        handleResize3();
        window.addEventListener("resize", handleResize3)
        return () => {
            window.removeEventListener("resize", handleResize3)
        }
    }, [])


    return (
        <div className='h-screen w-[100%] flex items-center justify-between
         overflow-hidden '>

            {
                !isSmallScreen3 ? (

                    <div className='container'>

                        {/* // متن ابتدایی */}
                        <div className='text-center font-Vazirmatn2 space-y-20 -mt-44'>
                            <div className="text-2xl md:text-3xl lg:text-4xl sm:text-2xl">
                                مـجـوز هـا
                            </div>
                            <div className="text-[13px] md:text-[18px] lg:text-[19px] sm:text-[16px] text-gray-600">
                                بستر امن طلای خرداد، تمامی مجوزهای خرید و فروش طلا آب شده رو داره؛ با خیال راحت سرمایه‌گذاری کن
                            </div>
                        </div>

                        {/* ردیف عکس ها */}

                        <div className='items-center text-center mt-32'>
                            <div className="flex gap-40 p-2 items-center text-center
                             justify-center overflow-x-auto ">
                                <Image src={image1} className='w-32 h-32  snap-center' />
                                <Image src={image2} className='w-32 h-32  snap-center' />
                                <Image src={image3} className='w-32 h-32  snap-center' />
                                <Image src={image4} className='w-32 h-32  snap-center' />
                                <Image src={image5} className='w-32 h-32  snap-center' />
                            </div>
                        </div>
                    </div>




                ) : (

                        <div className='flex-col   text-center justify-center items-center font-Vazirmatn2 overflow-y-auto overflow-x-hidden'>
                                      
                            <div className='text-center space-y-5 px-12 justify-center'>
                                <div className="text-2xl">
                                    مـجـوز هـا
                                </div>
                                <div className="text-[11px]">
                                    بستر امن طلای خرداد، تمامی مجوزهای خرید و فروش طلا آب شده رو داره؛ با خیال راحت سرمایه‌گذاری کن
                                </div>
                            </div>
                            <div className='items-center text-center overflow-x-auto snap-x snap-mandatory mt-10'>
                                <div className="flex flex-col gap-8 p-2 items-center text-center justify-start px-4">
                                    <Image src={image1} className='w-24 h-24 object-cover rounded-lg snap-center' />
                                    <Image src={image2} className='w-24 h-24 object-cover rounded-lg snap-center' />
                                    <Image src={image3} className='w-24 h-24 object-cover rounded-lg snap-center' />
                                    <Image src={image4} className='w-24 h-24 object-cover rounded-lg snap-center' />
                                    <Image src={image5} className='w-24 h-24 object-cover rounded-lg snap-center' />
                                </div>
                            </div>






                    </div>



                )
            }





        </div>
    )
}

export default BaseFourth
