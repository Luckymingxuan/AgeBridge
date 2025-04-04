'use client';
import { useRouter } from 'next/navigation';

export default function ElderPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">欢迎来到长者版</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">发起对话</h2>
            <p className="text-gray-600 mb-4">与年轻人进行沟通交流</p>
            <button 
              onClick={() => router.push('/elder/chat')}
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              开始聊天
            </button>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">我的消息</h2>
            <p className="text-gray-600 mb-4">查看历史对话记录</p>
            <button 
              onClick={() => router.push('/elder/messages')}
              className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              查看消息
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}