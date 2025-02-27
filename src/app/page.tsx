"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomeBase from './HomeBase/page';
 
const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <HomeBase/>
      </main>
    </QueryClientProvider>
  );
}
