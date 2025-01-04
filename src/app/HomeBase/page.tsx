"use client";

import BaseTwo from '../../component-Home/BaseTwo';
import BaseHome from '../../component-Home/BaseHome';
import BaseThird from '../../component-Home/BaseThird';
import BaseFourth from '../../component-Home/BaseFourth';
import BaseFifth from '../../component-Home/BaseFifth';
import BaseSixth from '../../component-Home/BaseSixth';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function HomeBase() {
  const queryClient = new QueryClient(); // ایجاد یک نمونه از QueryClient

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <BaseHome />
        <BaseTwo />
        <BaseThird />
        <BaseFourth />
        <BaseFifth />
      </div>
    </QueryClientProvider>
  );
}

export default HomeBase;
