"use client";

import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import classNames from "classnames";
import "./Tabs.css";

const apiUrl = "https://demo.meetwork.ir/api/v1/public/rates";

const fetchRates = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data?.data || [];
  } catch (error) {
    console.error("Error fetching rates:", error);
    throw new Error("خطا در دریافت داده‌ها");
  }
};

function Tabs() {
  const tabsData = ["فـروش", "خـریـد"];
  const [buyAmount, setBuyAmount] = useState("");
  const [sellAmount, setSellAmount] = useState("");
  const [equivalentAmount, setEquivalentAmount] = useState("");
  const [sellEquivalentAmount, setSellEquivalentAmount] = useState("");

  const {
    data: rates = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["rates"],
    queryFn: fetchRates,
  });

  if (isLoading) return <div>در حال بارگذاری داده‌ها...</div>;
  if (isError) return <div>خطا در بارگذاری داده‌ها: {error.message}</div>;

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>,type: string) => {
    const weightInGrams = parseFloat(e.target.value);
    if (!isNaN(weightInGrams) && weightInGrams > 0) {
      const price = type === "buy" ? rates[0]?.price_buy : rates[0]?.price_sale;
      if (price) {
        const weightInMithqals = weightInGrams / 4.3318;
        const equivalent = (weightInMithqals * price) / 1000;
        type === "buy"
          ? (setBuyAmount(e.target.value),
            setEquivalentAmount(equivalent.toLocaleString()))
          : (setSellAmount(e.target.value),
            setSellEquivalentAmount(equivalent.toLocaleString()));
      }
    } else {
      type === "buy"
        ? (setBuyAmount(""), setEquivalentAmount(""))
        : (setSellAmount(""), setSellEquivalentAmount(""));
    }
  };

  return (
    <TabGroup className="outline-none border-none shadow-none">
      <TabList className="flex justify-center space-x-1 mt-8">
        {tabsData.map((text, index) => (
          <Tab
            key={index}
            className={({ selected }) =>
              classNames(
                "px-[60px] py-3 text-[16px] font-medium rounded-t-lg transition duration-300 font-Vazirmatn2 text-blue-700",
                selected
                  ? "bg-slate-50 shadow-2xl border-2"
                  : "border-transparent text-gray-800 bg-slate-200 hover:bg-gray-400 hover:border-gray-300 hover:text-gray-700"
              )
            }
          >
            {text}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {["sell", "buy"].map((type, idx) => (
          <TabPanel key={idx}>
            <div className="p-6 space-y-8">
              <h2 className="text-lg font-Vazirmatn2 text-center">
                {type === "buy" ? "خـریـد طـلا" : "فـروش طـلا"}
              </h2>
              <div>
                <label className="block text-right font-Vazirmatn2 mt-5 lg:mb-6 lg:px-6">
                  {type === "buy" ? "مقدار خـریـد (گرم)" : "مقدار فروش (گرم)"}
                </label>
                <div className="flex flex-row-reverse items-center space-x-reverse lg:px-6">
                  <input
                    type="number"
                    className="border-2 p-2 rounded-e-lg w-60"
                    value={type === "buy" ? buyAmount : sellAmount}
                    onChange={(e) => handleAmountChange(e, type)}
                    placeholder="مثال: 10"
                  />
                  <div className="bg-slate-200 w-fit h-[44px] flex items-center justify-center px-4 rounded-s-lg font-Vazirmatn2 text-sm whitespace-nowrap">
                    گرم طـلا
                  </div>
                </div>
              </div>
              <div>
                <label className="block lg:mb-4 text-right font-Vazirmatn2 mt-5 mb-2 lg:px-6">
                  معادل
                </label>
                <div className="flex flex-row-reverse items-center space-x-reverse lg:px-6">
                  <input
                    type="text"
                    className="border-2 p-2 rounded-e-lg w-60"
                    value={
                      type === "buy" ? equivalentAmount : sellEquivalentAmount
                    }
                    readOnly
                    placeholder="معادل"
                  />
                  <div className="bg-slate-200 w-fit h-[44px] flex items-center justify-center px-4 rounded-s-lg font-Vazirmatn2 text-sm">
                    تومـــان
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button
                  className={classNames(
                    "mt-2 rounded-lg text-[12px] lg:text-[14px] py-2 xl:py-4 px-16 text-white font-Vazirmatn2 sm:px-3 md:px-5 lg:px-7 xl:px-24",
                    type === "buy"
                      ? "bg-blue-600 hover:bg-blue-900"
                      : "bg-red-500 hover:bg-red-700"
                  )}
                >
                  {type === "buy" ? "خـریـد" : "فـــروش"}
                </button>
              </div>
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}

export default Tabs;
