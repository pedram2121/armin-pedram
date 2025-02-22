"use client"
import React, { createContext, useContext, useEffect, useState } from "react";

interface Ichildren  {
    children: React.ReactNode;
}

interface ICheckView {
    isMobile: boolean;
}

export const CheckView = createContext<ICheckView>({ isMobile:false });

export const useResponsive =()=>{
     return useContext(CheckView);   
}

function ResponsiveContext({ children }: Ichildren) {
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handelRrsize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handelRrsize();
    window.addEventListener("resize", handelRrsize);
    return () => {
      window.removeEventListener("resize", handelRrsize);
    };
  }, []);

  return (
    <>
      <CheckView.Provider value={{ isMobile }}>{children}</CheckView.Provider>
    </>
  );
}

export default ResponsiveContext;
