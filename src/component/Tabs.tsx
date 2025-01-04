"use client";

import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import classNames from "classnames";
import './Tabs.css';


const apiUrl = "https://demo.meetwork.ir/api/v1/public/rates";

// تابع برای دریافت داده‌ها از API
const fetchRates = async () => {
    const response = await axios.get(apiUrl);
    return response.data.data;
};

function Tabs() {
    const tabsData = ["فـروش", "خـریـد"];

    const [buyAmount, setBuyAmount] = useState("");
    const [sellAmount, setSellAmount] = useState("");
    const [equivalentAmount, setEquivalentAmount] = useState("");
    const [sellEquivalentAmount, setSellEquivalentAmount] = useState("");

    const { data: rates, isLoading, isError, error } = useQuery({
        queryKey: ["rates"],
        queryFn: fetchRates,
    });

    if (isLoading) {
        return <div>در حال بارگذاری داده‌ها...</div>;
    }

    if (isError) {
        return <div>خطا در بارگذاری داده‌ها: {error.message}</div>;
    }

    // تابع محاسبه معادل تومان برای خرید
    const handleBuyAmountChange = (e) => {
        const weightInGrams = parseFloat(e.target.value);
        if (!isNaN(weightInGrams) && weightInGrams > 0) {
            setBuyAmount(e.target.value);
            const priceBuy = rates[0]?.price_buy;
            if (priceBuy) {
                const weightInMithqals = weightInGrams / 4.3318;
                const equivalent = weightInMithqals * priceBuy;
                const equivalentInThousand = equivalent / 1000;
                setEquivalentAmount(equivalentInThousand.toLocaleString());
            }
        } else {
            setBuyAmount("");
            setEquivalentAmount("");
        }
    };

    // تابع محاسبه معادل تومان برای فروش
    const handleSellAmountChange = (e) => {
        const weightInGrams = parseFloat(e.target.value);
        if (!isNaN(weightInGrams) && weightInGrams > 0) {
            setSellAmount(e.target.value);
            const priceSale = rates[0]?.price_sale;
            if (priceSale) {
                const weightInMithqals = weightInGrams / 4.3318;
                const equivalent = weightInMithqals * priceSale;
                const equivalentInThousand = equivalent / 1000;
                setSellEquivalentAmount(equivalentInThousand.toLocaleString());
            }
        } else {
            setSellAmount("");
            setSellEquivalentAmount("");
        }
    };

    return (
        <Tab.Group>
            <Tab.List className="flex justify-center -space-x-2 mt-8">
                {tabsData.map((text, index) => (
                    <Tab
                        key={index}
                        className={({ selected }) =>
                            classNames(
                                "px-[70px] py-3 text-[16px] font-medium border-b-2 rounded-t-lg transition duration-300 font-Vazirmatn2 text-blue-700 ",
                                selected
                                    ? "border-blue-700  bg-slate-100 shadow-xl"
                                    : "border-transparent text-gray-800 bg-slate-200 hover:bg-gray-300 hover:border-gray-300 hover:text-gray-700"
                            )
                        }
                    >
                        {text}
                    </Tab>
                ))}
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel>
                    {/* محتوای تب فروش */}
                    <div className="p-6 space-y-8">
                        {/* عنوان بخش */}
                        <h2 className="text-lg font-Vazirmatn2 text-center">فـروش طـلا</h2>

                        {/* ورودی مقدار فروش (گرم) */}
                        <div>
                            <label className="block text-right font-Vazirmatn2 mt-5 lg:mb-6 lg:px-6">:مقدار فروش (گرم)</label>
                            <div className="flex flex-row-reverse items-center space-x-reverse lg:px-6">
                                <input
                                    type="number"
                                    className="border-2 p-2 rounded-e-lg w-60"
                                    value={sellAmount}
                                    onChange={handleSellAmountChange}
                                    placeholder="مثال: 10"
                                />
                                <div
                                    className="bg-slate-200 w-fit h-[44px] flex items-center justify-center px-4 rounded-s-lg font-Vazirmatn2 text-sm whitespace-nowrap">
                                    گرم طـلا
                                </div>
                            </div>
                        </div>

                        {/* نمایش معادل تومان */}
                        <div>
                            <label className="block lg:mb-4 text-right font-Vazirmatn2 mt-5 mb-2 lg:px-6">معادل</label>
                            <div className="flex flex-row-reverse items-center space-x-reverse lg:px-6">
                                <input
                                    type="text"
                                    className="border-2 p-2 rounded-e-lg w-60"
                                    value={sellEquivalentAmount}
                                    readOnly
                                    placeholder="معادل"
                                />
                                <div
                                    className="bg-slate-200 w-fit h-[44px] flex items-center justify-center px-4 rounded-s-lg font-Vazirmatn2 text-sm">
                                    تومـــان
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button
                                className="mt-2 rounded-lg bg-red-500 hover:bg-red-700 text-[12px]
                                 lg:text-[14px] py-2 xl:py-4 px-16 text-white font-Vazirmatn2
                                 sm:px-3 md:px-5 lg:px-7 xl:px-24" >
                                فـــروش
                            </button>
                        </div>
                    </div>
                </Tab.Panel>

                <Tab.Panel>
                    {/* محتوای تب خرید */}
                    <div className="p-6 space-y-8">
                        {/* عنوان بخش */}
                        <h2 className="text-lg font-Vazirmatn2 text-center">خـریـد طـلا</h2>

                        {/* ورودی مقدار فروش (گرم) */}
                        <div>
                            <label className="block text-right font-Vazirmatn2 mt-5 lg:mb-6 lg:px-6">:مقدار خـریـد (گرم)</label>
                            <div className="flex flex-row-reverse items-center space-x-reverse lg:px-6">
                                <input
                                    type="number"
                                    className="border-2 p-2 rounded-e-lg w-60"
                                    value={buyAmount}
                                    onChange={handleBuyAmountChange}
                                    placeholder="مثال: 10"
                                />
                                <div
                                    className="bg-slate-200 w-fit h-[44px]
                                     flex items-center justify-center px-4
                                      rounded-s-lg font-Vazirmatn2 text-sm whitespace-nowrap">
                                    گرم طـلا
                                </div>
                            </div>
                        </div>

                        {/* نمایش معادل تومان */}
                        <div>
                            <label className="block lg:mb-4 text-right font-Vazirmatn2 mt-5 mb-2 lg:px-6">معادل</label>
                            <div className="flex flex-row-reverse items-center space-x-reverse lg:px-6">
                                <input
                                    type="text"
                                    className="border-2 p-2 rounded-e-lg w-60"
                                    value={equivalentAmount}
                                    readOnly
                                    placeholder="معادل"
                                />
                                <div
                                    className="bg-slate-200 w-fit h-[44px] flex items-center justify-center px-4 rounded-s-lg font-Vazirmatn2 text-sm">
                                    تومـــان
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button
                                className="mt-2 rounded-lg bg-blue-600 hover:bg-blue-900 text-[12px]
                                 lg:text-[14px] py-2 xl:py-4 px-16 text-white font-Vazirmatn2
                                 sm:px-3 md:px-5 lg:px-7 xl:px-24" >
                                خـریـد
                            </button>
                        </div>


                    </div>
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    );
}

export default Tabs;
