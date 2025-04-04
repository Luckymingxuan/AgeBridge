'use client';
import { useRouter } from 'next/navigation';

export default function YoungPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">年轻人空间</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">寻找对话</h2>
            <p className="text-gray-600 mb-4">找到需要帮助的长者进行沟通</p>
            <button 
              onClick={() => router.push('/young/chat')}
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              开始聊天
            </button>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">我的消息</h2>
            <p className="text-gray-600 mb-4">查看历史对话记录</p>
            <button 
              onClick={() => router.push('/young/messages')}
              className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              查看消息
            </button>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">帮助记录</h2>
            <p className="text-gray-600 mb-4">查看已帮助过的长者</p>
            <button 
              onClick={() => router.push('/young/history')}
              className="w-full py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
            >
              查看记录
            </button>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">志愿时长</h2>
            <p className="text-gray-600 mb-4">查看累计志愿服务时间</p>
            <button 
              onClick={() => router.push('/young/volunteer')}
              className="w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              查看时长
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}