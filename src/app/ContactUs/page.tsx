
import React from 'react'
import Envelope from '../../Image/Envelope.png'
import PhoneCall from '../../Image/PhoneCall.png'
import MapPinLine from '../../Image/MapPinLine.png'
import Vector from '../../Image/Vector.png'
import instagram from '../../Image/instagram.png'
import Linkdin from '../../Image/Line2.png'
import Line2 from '../../Image/Line2.png'
import Image from 'next/image'


function ContactUs() {
  return (
    <>

      <div className='h-full w-full overflow-x-auto flex items-center justify-between overflow-hidden mx-auto mb-64'>
        <div className='container font-Vazirmatn2 text-black mt-32'>


          {/* //متن بالایی */}
          <div className='flex flex-col text-center items-center justify-center space-y-8'>
            <div className='text-5xl'>
              پاسخگوی شما هستیم
            </div>
            <div className='flex justify-center text-[16px] text-center max-w-[850px]'>
              طلای خرداد در روزهای شنبه تا چهارشنبه از ساعت ۹ صبح تا ۱۸ پاسخگوی سوالات، نظرات، پیشنهادات و انتقادات کاربران است. شما می‌توانید سوالات مربوط به خرید، فروش، تبادل و دریافت طلا را از پشتیبانان طلای خرداد بپرسید. هم‌چنین می‌توانید، پاسخ سوالات رایج خود را در صفحه سوالات متداول مشاهده کنید. اگر پاسخ سوالتان را پیدا نکردید، از طریق تماس تلفنی یا ایمیل، با ما مطرح کنید
            </div>
          </div>


          {/* کادر پایین */}
          <div className='flex items-center text-center mx-auto justify-center mt-20 font-Vazirmatn2 text-white'>



            <div className="bg-gray-200  h-[800px] w-full lg:w-[820px] p-4 rounded-2xl rounded-tr-none rounded-br-none overflow-auto">
              <div className="flex flex-wrap justify-between py-10 gap-6 text-black">
                {/* ستون اول */}
                <div className="flex flex-col space-y-5 w-full md:w-[48%]">
                  <div className="text-right px-2">نام خانوادگی</div>
                  <input
                    className="w-full py-3 px-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition duration-200 placeholder:text-[12px] placeholder:text-right"
                    placeholder="نام خانوادگی خود را وارد کنید"
                    type="text"
                  />
                  <div className="text-right px-2">ایمیل</div>
                  <input
                    className="w-full py-3 px-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition duration-200 placeholder:text-[12px] placeholder:text-right"
                    placeholder="ایمیل خود را وارد کنید"
                    type="text"
                  />
                </div>

                {/* ستون دوم */}
                <div className="flex flex-col space-y-5 w-full md:w-[45%]">
                  <div className="text-right px-2">نام خانوادگی</div>
                  <input
                    className="w-full py-3 px-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition duration-200 placeholder:text-[12px] placeholder:text-right"
                    placeholder="نام خانوادگی خود را وارد کنید"
                    type="text"
                  />
                  <div className="text-right px-2">ایمیل</div>
                  <input
                    className="w-full py-3 px-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition duration-200 placeholder:text-[12px] placeholder:text-right"
                    placeholder="ایمیل خود را وارد کنید"
                    type="text"
                  />
                </div>
              </div>

              {/* بخش موضوع */}
              <div className="flex flex-col space-y-5 mt-8 text-black">
                <div className="text-right px-2">موضوع</div>
                <input
                  className="w-full py-3 px-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500
                   focus:border-blue-500 transition duration-200 placeholder:text-[12px] placeholder:text-right"
                  placeholder="موضوع خود را وارد کنید"
                  type="text"
                />
              </div>

              {/* بخش پیام */}
              <div className="flex flex-col space-y-5 mt-8 text-black">
                <div className="text-right px-2">متن پیام</div>
                <textarea
                  className="w-full h-40 py-3 px-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition duration-200 placeholder:text-[12px] placeholder:text-right resize-none"
                  placeholder="متن پیام خود را وارد کنید"
                ></textarea>
                <div className="text-right">
                  <button className="bg-blue-600 rounded-lg text-white w-44 h-12">
                    ثبت و ارسال
                  </button>
                </div>
              </div>
            </div>







            <div className='bg-blue-500 flex-col  text-2xl h-[800px] w-[620px] p-4 rounded-2xl rounded-l-none relative'>

              {/* مربع های کمرنگ در گوشه ی بالا */}
              <div>
                <div>
                  <div className='bg-white absolute h-24 w-24 right-24 -top-1' style={{ transform: 'rotate(45deg)', transformOrigin: '0 0', opacity: 0.05, borderRadius: 10.73 }} />
                </div>
                <div>
                  <div className='bg-white absolute h-24 w-24 right-4 -top-20' style={{ transform: 'rotate(45deg)', transformOrigin: '0 0', opacity: 0.05, borderRadius: 10.73 }} />
                </div>
                <div>
                  <div className='bg-white absolute h-24 w-24 right-4 top-[75px]' style={{ transform: 'rotate(45deg)', transformOrigin: '0 0', opacity: 0.05, borderRadius: 10.73 }} />
                </div>
                <div>
                  <div className='bg-white absolute h-24 w-24 -right-16 top-[-1px]' style={{ transform: 'rotate(45deg)', transformOrigin: '0 0', opacity: 0.05, borderRadius: 10.73 }} />
                </div>
              </div>
              {/* نوشته ی متن تماس با ما */}
              <div className='absolute hidden sm:block sm:text-[25px] md:text-[30px] lg:text-[35px] right-32 top-28 text-5xl'>
                تماس با ما
              </div>

              {/* دایره های زیر هم و عکس های داخل شان */}
              <div className='flex-col hidden xl:block xl:text-[17px] '>

                <div>
                  <div className='bg-gray-300 flex items-center justify-center text-center 
                  rounded-full w-20 h-20 absolute right-32 top-48 opacity-20' >
                  </div>
                  <Image className='absolute right-[152px] top-[215px]' src={Envelope} alt='Envelope' />
                  <div className='absolute hidden xl:block xl:text-[17px] right-[235px] top-[200px] text-gray-200'>
                    ایمیل
                  </div>
                  <div className='absolute hidden xl:block xl:text-[17px] right-[230px] top-[240px] text-[16px]'>
                    info@TJMKK.com
                  </div>
                </div>

                <div>
                  <div className='bg-gray-300 flex items-center justify-center text-center 
                rounded-full w-20 h-20 absolute right-32 top-80 opacity-20' >
                  </div>
                  <Image className='absolute right-[152px] top-[345px]' src={PhoneCall} alt='Envelope' />
                  <div className='absolute  hidden xl:block xl:text-[17px] right-[235px] top-[330px]  text-gray-200'>
                    شماره تماس پشتیبانی
                  </div>
                  <div className='absolute hidden xl:block xl:text-[17px] right-[230px] top-[370px]'>
                    021-91200150
                  </div>
                </div>

                <div>
                  <div className='bg-gray-300 flex items-center justify-center text-center 
                rounded-full w-20 h-20 absolute right-32 top-[450px] opacity-20' >
                  </div>
                  <Image className='absolute right-[152px] top-[475px]' src={MapPinLine} alt='Envelope' />
                  <div className='absolute hidden xl:block xl:text-[15px] right-[235px] w-96 top-[457px] text-right text-gray-100'>
                    بلوار نلسون ماندلا، نرسیده به چهارراه جهان کودک
                  </div>
                  <div className='absolute hidden xl:block xl:text-[15px] right-[235px] w-96 top-[495px] text-right text-gray-100'>
                    کوچه ناوک، پلاک ۶، طبقه 3
                  </div>
                </div>

              </div>

              {/* ما در شبکه های اجتماعی دنبال کنید */}
              <div className='flex'>
                <div className='absolute hidden xl:block right-[150px] top-[650px]'>
                  <svg width="34" height="2" viewBox="0 0 34 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Line 2" d="M1 1H33" stroke="white" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </div>
                <div className='absolute hidden xl:block xl:text-[17px] right-[199px] top-[635px] text-[18px]'>
                  ما را در شبکه های اجتماعی دنبال کنید
                </div>
              </div>

              <div className='flex space-x-5 absolute top-[705px] right-40 xl:block hidden xl:flex xl:text-[17px]'>


                <div className='bg-slate-400 w-9 h-9 flex items-center justify-center rounded-md '>
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Social" clip-path="url(#clip0_3600_617)">
                      <path id="Vector" d="M20.0581 20.0001V19.9993H20.0631V12.6643C20.0631 9.07593 19.2906 6.31177 15.0956 6.31177C13.0789 6.31177 11.7256 7.41843 11.173 8.4676H11.1147V6.64677H7.13721V19.9993H11.2789V13.3876C11.2789 11.6468 11.6089 9.96343 13.7647 9.96343C15.8889 9.96343 15.9206 11.9501 15.9206 13.4993V20.0001H20.0581Z" fill="white" />
                      <path id="Vector_2" d="M0.393066 6.64746H4.53973V20H0.393066V6.64746Z" fill="white" />
                      <path id="Vector_3" d="M2.46465 0C1.13882 0 0.0629883 1.07583 0.0629883 2.40167C0.0629883 3.7275 1.13882 4.82583 2.46465 4.82583C3.79049 4.82583 4.86632 3.7275 4.86632 2.40167C4.86549 1.07583 3.78965 0 2.46465 0V0Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_3600_617">
                        <rect width="20" height="20" fill="white" transform="translate(0.0629883)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className='bg-slate-400 w-9 h-9 flex items-center justify-center rounded-md'>
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 3">
                      <path id="Vector" d="M20.0434 5.88005C19.9966 4.81738 19.8247 4.0868 19.5785 3.45374C19.3246 2.78176 18.9339 2.18014 18.422 1.68002C17.9219 1.1721 17.3163 0.777435 16.6521 0.527447C16.0154 0.281274 15.2886 0.109427 14.2259 0.0625732C13.1553 0.0117516 12.8155 0 10.1001 0C7.38471 0 7.04483 0.0117516 5.97819 0.0586052C4.91551 0.105459 4.18494 0.277459 3.55203 0.523479C2.8799 0.777435 2.27829 1.16814 1.77816 1.68002C1.27025 2.18014 0.875731 2.78573 0.625591 3.44992C0.379419 4.0868 0.207571 4.81341 0.160718 5.87609C0.109896 6.9467 0.0981445 7.28658 0.0981445 10.002C0.0981445 12.7173 0.109896 13.0572 0.15675 14.1239C0.203603 15.1865 0.375603 15.9171 0.621775 16.5502C0.875731 17.2221 1.27025 17.8238 1.77816 18.3239C2.27829 18.8318 2.88387 19.2265 3.54806 19.4765C4.18494 19.7226 4.91155 19.8945 5.97438 19.9413C7.04087 19.9883 7.3809 19.9999 10.0963 19.9999C12.8116 19.9999 13.1515 19.9883 14.2182 19.9413C15.2808 19.8945 16.0114 19.7226 16.6443 19.4765C17.9884 18.9568 19.0511 17.8941 19.5708 16.5502C19.8168 15.9133 19.9888 15.1865 20.0356 14.1239C20.0825 13.0572 20.0942 12.7173 20.0942 10.002C20.0942 7.28658 20.0903 6.9467 20.0434 5.88005ZM18.2424 14.0457C18.1993 15.0225 18.0353 15.5499 17.8985 15.9015C17.5625 16.7728 16.871 17.4643 15.9997 17.8004C15.648 17.9372 15.1168 18.1012 14.1438 18.1441C13.0889 18.1911 12.7726 18.2027 10.1041 18.2027C7.43553 18.2027 7.11519 18.1911 6.06411 18.1441C5.08736 18.1012 4.55992 17.9372 4.20829 17.8004C3.7747 17.6402 3.38003 17.3862 3.05969 17.0541C2.72759 16.7298 2.47364 16.3391 2.31339 15.9055C2.17664 15.5539 2.01258 15.0225 1.96969 14.0497C1.92269 12.9948 1.91109 12.6783 1.91109 10.0097C1.91109 7.34122 1.92269 7.02087 1.96969 5.96995C2.01258 4.99319 2.17664 4.46575 2.31339 4.11412C2.47364 3.68038 2.72759 3.28586 3.06365 2.96536C3.38781 2.63327 3.77851 2.37931 4.21225 2.21921C4.56388 2.08247 5.0953 1.9184 6.06808 1.87537C7.12297 1.82851 7.4395 1.81676 10.1079 1.81676C12.7804 1.81676 13.0967 1.82851 14.1478 1.87537C15.1246 1.9184 15.652 2.08247 16.0036 2.21921C16.4372 2.37931 16.8319 2.63327 17.1522 2.96536C17.4843 3.28967 17.7383 3.68038 17.8985 4.11412C18.0353 4.46575 18.1993 4.99701 18.2424 5.96995C18.2892 7.02484 18.301 7.34122 18.301 10.0097C18.301 12.6783 18.2892 12.9908 18.2424 14.0457Z" fill="white" />
                      <path id="Vector_2" d="M10.1001 4.86426C7.26372 4.86426 4.9624 7.16543 4.9624 10.002C4.9624 12.8385 7.26372 15.1397 10.1001 15.1397C12.9367 15.1397 15.2378 12.8385 15.2378 10.002C15.2378 7.16543 12.9367 4.86426 10.1001 4.86426ZM10.1001 13.3347C8.26001 13.3347 6.76741 11.8422 6.76741 10.002C6.76741 8.16172 8.26001 6.66927 10.1001 6.66927C11.9404 6.66927 13.4328 8.16172 13.4328 10.002C13.4328 11.8422 11.9404 13.3347 10.1001 13.3347Z" fill="white" />
                      <path id="Vector_3" d="M16.6407 4.6611C16.6407 5.32346 16.1036 5.86052 15.4411 5.86052C14.7788 5.86052 14.2417 5.32346 14.2417 4.6611C14.2417 3.99858 14.7788 3.46167 15.4411 3.46167C16.1036 3.46167 16.6407 3.99858 16.6407 4.6611Z" fill="white" />
                    </g>
                  </svg>
                </div>

                <div className='bg-slate-400 w-9 h-9 flex items-center justify-center rounded-md'>
                  <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M1.46921 8.27456L15.1321 2.63503C16.4808 2.04758 21.0547 0.167738 21.0547 0.167738C21.0547 0.167738 23.1657 -0.654693 22.9898 1.34264C22.9312 2.16507 22.462 5.04358 21.9929 8.15707L20.527 17.38C20.527 17.38 20.4097 18.7312 19.4128 18.9662C18.4159 19.2011 16.774 18.1437 16.4808 17.9087C16.2463 17.7325 12.0829 15.089 10.5583 13.7966C10.1478 13.4441 9.6787 12.7392 10.6169 11.9168C12.7279 9.97816 15.2494 7.56962 16.774 6.04224C17.4777 5.3373 18.1814 3.69244 15.2494 5.68977L6.9813 11.2706C6.9813 11.2706 6.04307 11.858 4.28389 11.3293C2.52472 10.8006 0.472345 10.0957 0.472345 10.0957C0.472345 10.0957 -0.934996 9.21448 1.46921 8.27456Z" fill="white" />
                  </svg>

                </div>


              </div>
            </div>



          </div>






        </div>
      </div>

    </>
  )
}

export default ContactUs
