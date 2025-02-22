"use client"
import Group3 from '../../src/Image/arrow-left.png'
import Image from 'next/image';
import { useResponsive } from './ResponsiveContext/ResponsiveContext';

function BaseThird() {

    const { isMobile } = useResponsive();

    return (
      <div
        className="h-screen w-[100%] flex items-center justify-between relative overflow-hidden"
        style={{ background: "#387CFF" }}
      >
        {!isMobile ? (
          <div className="container">
            <div className="font-Vazirmatn2">
              <div>
                <div className="absolute top-0 left-0 overflow-hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="736"
                    height="495"
                    viewBox="0 0 736 495"
                    fill="none"
                  >
                    <path
                      d="M-86 493.238C-9.66666 492.238 154.9 428.738 202.5 182.738C250.1 -63.262 577.667 -53.762 735.5 -18.262"
                      stroke="#5E8BE3"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="absolute top-0 left-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="720"
                    height="513"
                    viewBox="0 0 720 513"
                    fill="none"
                  >
                    <path
                      d="M-33.306 511.471C42.3365 501.175 197.938 418.093 215.203 168.126C232.468 -81.8417 558.751 -112.333 719.734 -96.3325"
                      stroke="#5E8BE3"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="absolute top-0 left-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="777"
                    height="459"
                    viewBox="0 0 777 459"
                    fill="none"
                  >
                    <path
                      d="M-45.5 458C30.8333 457 195.4 393.5 243 147.5C290.6 -98.5 618.167 -89 776 -53.5"
                      stroke="#5E8BE3"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex justify-between">
                {/* //// مستطیل ها 4 تا */}
                <div className="space-y-6">
                  <div className="flex-col justify-center items-center">
                    <div
                      className="bg-slate-200 rounded-xl lg:w-[480px] md:w-[400px]
                     sm:w-[380px] h-40 box-border relative"
                    >
                      <div className="text-center">
                        <div className="pt-4">ثـبـت نـام و احـراز هویـت</div>
                        <div className="pt-8">
                          در کمتر از ۲ دقیقه تو میلی ثبت‌نام کن و احراز هویتت رو
                          انجام بده
                        </div>
                        <div
                          className="bg-[#387CFF] absolute
                             h-8 w-16 rounded-t-lg -bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        ></div>
                        <Image
                          className="bg-[#387CFF] absolute -bottom-3 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          src={Group3}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex-col justify-center items-center">
                    <div
                      className="bg-slate-200 rounded-xl lg:w-[480px] md:w-[400px]
                     sm:w-[380px] h-40 box-border relative"
                    >
                      <div className="text-center">
                        <div className="pt-4">ثـبـت نـام و احـراز هویـت</div>
                        <div className="pt-8">
                          در کمتر از ۲ دقیقه تو میلی ثبت‌نام کن و احراز هویتت رو
                          انجام بده
                        </div>
                        <div
                          className="bg-[#387CFF] absolute
                             h-8 w-16 rounded-t-lg -bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        ></div>
                        <Image
                          className="bg-[#387CFF] absolute -bottom-3 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          src={Group3}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex-col justify-center items-center">
                    <div
                      className="bg-slate-200 rounded-xl lg:w-[480px] md:w-[400px]
                     sm:w-[380px] h-40 box-border relative"
                    >
                      <div className="text-center">
                        <div className="pt-4">ثـبـت نـام و احـراز هویـت</div>
                        <div className="pt-8">
                          در کمتر از ۲ دقیقه تو میلی ثبت‌نام کن و احراز هویتت رو
                          انجام بده
                        </div>
                        <div
                          className="bg-[#387CFF] absolute
                             h-8 w-16 rounded-t-lg -bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        ></div>
                        <Image
                          className="bg-[#387CFF] absolute -bottom-3 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          src={Group3}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex-col justify-center items-center">
                    <div
                      className="bg-slate-200 rounded-xl lg:w-[480px] md:w-[400px]
                     sm:w-[380px] h-40 box-border relative"
                    >
                      <div className="text-center">
                        <div className="pt-4">ثـبـت نـام و احـراز هویـت</div>
                        <div className="pt-8">
                          در کمتر از ۲ دقیقه تو میلی ثبت‌نام کن و احراز هویتت رو
                          انجام بده
                        </div>
                        <div
                          className="bg-[#387CFF] absolute
                             h-8 w-16 rounded-t-lg -bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        ></div>
                        <Image
                          className="bg-[#387CFF] absolute -bottom-3 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          src={Group3}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* /// متن کنار مستطیل */}

                <div className="flex-col text-right w-2/6 space-y-6 mt-64 text-white">
                  <div className="text-2xl font-semibold font-Vazirmatn1 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl whitespace-nowrap">
                    ... به راحتی چند کلیک
                  </div>
                  <div className="text-[16px] sm:text-[12px] md:text-[13px] lg:text-[16px] font-Vazirmatn2">
                    خرید و فروش طلای آب شده یکی از انواع محبوب سرمایه‌گذاری در
                    ایران است که باعث می‌شود از سرمایه خود در برابر تورم محافطت
                    کنید و سود ببرید. برای خرید طلا ابشده می‌توانید به صورت
                    حضوری به طلافروشی‌ها مراجعه کنید؛ اما روش خرید طلای آب شده
                    آنلاین بسیار سریع‌تر، راحت‌تر و امن‌تر است
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="mt-20  text-white flex flex-col items-center 
                        text-center min-h-screen overflow-y-auto overflow-x-hidden"
          >
            {/* مختص متن و دکمه فعلا */}
            <div className="  justify-center">
              <div className="text-center space-y-6 px-4">
                <div className=" text-white text-2xl md:text-3xl font-semibold font-Vazirmatn1 text-center">
                  ... به راحتی چند کلیک
                </div>
                <div
                  className="text-[11px] text-white
                                     font-Vazirmatn2 text-center"
                >
                  خرید و فروش طلای آب شده یکی از انواع محبوب سرمایه‌گذاری در
                  ایران است که باعث می‌شود از سرمایه خود در برابر تورم محافطت
                  کنید و سود ببرید. برای خرید طلا ابشده می‌توانید به صورت حضوری
                  به طلافروشی‌ها مراجعه کنید؛ اما روش خرید طلای آب شده آنلاین
                  بسیار سریع‌تر، راحت‌تر و امن‌تر است
                </div>
                <div className="text-center">
                  <button
                    className="mt-2 rounded-lg bg-[#ECA700] text-[12px] 
                                             py-3 px-5 text-white font-Vazirmatn2"
                  >
                    خـریـد طلای آب شده
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-7 text-center">
              <div className="flex-col relative space-y-3">
                <div className="bg-slate-200 h-24 w-72 rounded-lg">
                  <div className="text-center">
                    <div className="pt-2 font-Vazirmatn2 text-black text-[14px]">
                      ثـبـت نـام و احـراز هویـت
                    </div>
                    <div className="pt-3 font-Vazirmatn2 text-black text-[10px]">
                      در کمتر از ۲ دقیقه تو میلی ثبت‌نام کن و احراز هویتت رو
                      انجام بده
                    </div>
                    <div
                      className="bg-[#387CFF] 
                                            h-8 w-16 rounded-t-lg -bottom-5 ml-28  translate-y-1/2"
                    ></div>
                    <Image
                      className="bg-[#387CFF] -bottom-3 ml-[120px] translate-x-1/2 -translate-y-1/2"
                      src={Group3}
                      alt=""
                    />
                  </div>
                </div>

                <div className="bg-slate-200 h-24 w-72 rounded-lg">
                  <div className="text-center">
                    <div className="pt-2 font-Vazirmatn2 text-black text-[14px]">
                      ثـبـت نـام و احـراز هویـت
                    </div>
                    <div className="pt-3 font-Vazirmatn2 text-black text-[10px]">
                      در کمتر از ۲ دقیقه تو میلی ثبت‌نام کن و احراز هویتت رو
                      انجام بده
                    </div>
                    <div
                      className="bg-[#387CFF] 
                                            h-8 w-16 rounded-t-lg -bottom-5 ml-28  translate-y-1/2"
                    ></div>
                    <Image
                      className="bg-[#387CFF] -bottom-3 ml-[120px] translate-x-1/2 -translate-y-1/2"
                      src={Group3}
                      alt=""
                    />
                  </div>
                </div>

                <div className="bg-slate-200 h-24 w-72 rounded-lg">
                  <div className="text-center">
                    <div className="pt-2 font-Vazirmatn2 text-black text-[14px]">
                      ثـبـت نـام و احـراز هویـت
                    </div>
                    <div className="pt-3 font-Vazirmatn2 text-black text-[10px]">
                      در کمتر از ۲ دقیقه تو میلی ثبت‌نام کن و احراز هویتت رو
                      انجام بده
                    </div>
                    <div
                      className="bg-[#387CFF] 
                                            h-8 w-16 rounded-t-lg -bottom-5 ml-28  translate-y-1/2"
                    ></div>
                    <Image
                      className="bg-[#387CFF] -bottom-3 ml-[120px] translate-x-1/2 -translate-y-1/2"
                      src={Group3}
                      alt=""
                    />
                  </div>
                </div>

                <div className="bg-slate-200 h-24 w-72 rounded-lg">
                  <div className="text-center">
                    <div className="pt-2 font-Vazirmatn2 text-black text-[14px]">
                      ثـبـت نـام و احـراز هویـت
                    </div>
                    <div className="pt-3 font-Vazirmatn2 text-black text-[10px]">
                      در کمتر از ۲ دقیقه تو میلی ثبت‌نام کن و احراز هویتت رو
                      انجام بده
                    </div>
                    <div
                      className="bg-[#387CFF] absolute
                                            h-8 w-16 rounded-t-lg -bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    ></div>
                    <Image
                      className="bg-[#387CFF] absolute -bottom-3 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      src={Group3}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}

export default BaseThird;
