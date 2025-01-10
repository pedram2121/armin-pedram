
import Image from 'next/image'
import React from 'react'
import P91 from '../../Image/image 91.png'
import P92 from '../../Image/image 92.png'
import P93 from '../../Image/Rectangle 19.png'

function TermsandConditions() {
  return (
    <div className='h-full w-full bg-[#F5F6F7] -mt-[125px] overflow-x-auto flex flex-col items-center justify-between overflow-hidden mx-auto'>
      <div className='container font-Vazirmatn2 text-black mt-96 mb-16 '>


        {/* //متن بالایی */}
        <div className='flex flex-col text-center items-center justify-center space-y-8'>
          <div className='text-4xl md:text-4xl lg:text-5xl font-semibold font-Vazirmatn1 text-black'>
            مجوز های طلای خرداد
          </div>
          <div className='flex justify-center font-Vazirmatn2 px-5 text-[16px] text-center max-w-[850px]'>
            میلی، به عنوان بستر امن و معتبر خرید و فروش آنلاین طلای آب شده، دارای مجوزهای لازم خرید و فروش طلا به صورت آنلاین است. طلایی که در میلی معامله می‌شود، توسط میلی و تمامی سازمان ها و اتحادیه های مربوط به خرید و فروش آنلاین طلای آب شده تایید می شود. در بستر امن میلی، طلای ۱۸ عیار با خلوص ۷۵۰ معامله می شود و با فاکتور تضمینی و قانونی به دریافت کنندگان طلا در قالب شمش های پک شدۀ گرمی طلا تحویل داده می شود.  تمامی شمش های طلای میلی در برترین و معتبرترین آزمایشگاه خلوص طلا، ذوب و آماده‌سازی و بسته‌بندی می‌شود. میلی، متعهد می‌شود بستری
            امن و قابل اعتماد برای افرادی که به دنبال خرید امن طلای آب‌شده به صورت آنلاین هستند، فراهم کند
          </div>
        </div>

        <div className='flex mx-auto items-center justify-center mt-14'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
              <path id="Vector" d="M19.5 13.5L12 21M12 21L4.5 13.5M12 21V3" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          </svg>
        </div>





      </div>


      <div className='bg-white h-auto w-full overflow-x-auto flex flex-col items-center justify-between overflow-hidden mx-auto py-20 font-Vazirmatn2 '>
        <div className='container'>

          <div className="w-full h-[500px] bg-[#F5F6F7] border-t-8 border-t-blue-600 rounded-b-xl">
            <div className="flex w-auto justify-end items-center p-10 text-right text-[30px] text-black space-x-2 rtl:space-x-reverse relative">
              <div className='absolute right-16 top-10'>مجوز اینماد و شامد طلای خرداد</div>
              <div className='absolute right-10 top-11'>•</div>
            </div>
            <div className='flex justify-around items-center text-center w-full mt-16'>
              <div>
                <Image className='w-52 h-52' src={P91} alt='p91'/>
              </div>
              <div>
                <Image className='w-52 h-52' src={P92} alt='p92' />
              </div>
            </div>


          </div>


          <div className="w-full h-[500px] bg-[#F5F6F7] border-t-8 border-t-blue-600 rounded-b-xl mt-32 rtl">
            <div className="flex w-auto justify-end items-center p-10 text-right text-[30px] text-black space-x-2 rtl:space-x-reverse relative">
              <div className='absolute right-16 top-10'>   پروانه کسب خرده‌فروشی طلای آب‌شده شرکت سرمایه زرین ماندگار (میلی)  </div>
              <div className='absolute right-10 top-11'>•</div>
            </div>
            <div className='flex justify-center items-center text-center w-full mt-16'>
              <div>
                <Image className='w-96 h-80' src={P93} alt='p91' />
              </div>
            </div>
          </div>



        </div>
      </div>


    </div>
  )
}

export default TermsandConditions
