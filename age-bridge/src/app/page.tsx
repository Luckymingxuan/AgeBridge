import Image from "next/image";
'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">跨代沟通</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            连接老年人和年轻人的沟通桥梁
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <button 
            onClick={() => router.push('/signup')}
            className="px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800 transition-colors"
          >
            注册
          </button>
          <button 
            onClick={() => router.push('/login')}
            className="px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors font-medium"
          >
            登录
          </button>
        </div>
      </main>
    </div>
  );
}
