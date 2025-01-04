"use client"
import BaseTwo from '@/component/BaseTwo';
import BaseHome from '../component/BaseHome';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BaseThird from '@/component/BaseThird';
import BaseFourth from '@/component/BaseFourth';
import BaseFifth from '@/component/BaseFifth';
import BaseSixth from '@/component/BaseSixth';

// ایجاد یک نمونه از QueryClient
const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <BaseHome />
        <BaseTwo/>
        <BaseThird/>
        <BaseFourth/>
        <BaseFifth/>
        <BaseSixth/>
      </main>
    </QueryClientProvider>
  );
}
