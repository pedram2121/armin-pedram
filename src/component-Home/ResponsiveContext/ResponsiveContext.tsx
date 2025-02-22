"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface Ichildren {
  children: React.ReactNode;
}

interface ICheckView {
  isMobile: boolean;
}

export const CheckView = createContext<ICheckView>({ isMobile: false });

export const useResponsive = () => {
  return useContext(CheckView);
};

function ResponsiveContext({ children }: Ichildren) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // Initialize with null

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile === null) return null; // Until the client-side logic is determined

  return (
    <CheckView.Provider value={{ isMobile }}>{children}</CheckView.Provider>
  );
}

export default ResponsiveContext;
