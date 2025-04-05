'use client';
import { useState } from 'react';
import { AiOutlineHome, AiOutlineStar, AiOutlineUser, AiOutlinePlus } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

export default function DashboardHomePage() {
  const router = useRouter();
  const [contacts] = useState([
    { id: '1', name: '老登-活跃用户', lastMessage: '我：你所谓的关心就是天天误解我，根本...', time: '14:30' },
    { id: '2', name: '王叔叔', lastMessage: '小伙子，有空来家里吃饭', time: '12:00' },
    { id: '3', name: '李奶奶', lastMessage: '谢谢你教我用手机', time: '昨天' },
    // ... 可以添加更多联系人
  ]);

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      {/* 顶部导航栏 */}
      <div className="bg-white dark:bg-gray-800 border-b p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">消息</h1>
        <button 
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          onClick={() => router.push('/dashboard/friends/add')}
        >
          <AiOutlinePlus size={24} className="text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* 联系人列表 */}
      <div className="flex-1 overflow-y-auto">
        {contacts.map(contact => (
          <div
            key={contact.id}
            className="flex items-center p-4 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => {
              if (contact.id === '1') {
                router.push('/dashboard/demo');  // 对于ID为1的联系人，跳转到演示页面
              } else {
                router.push(`/dashboard/chat/${contact.id}`);  // 其他联系人保持原有跳转
              }
            }}
          >
            <div className="h-12 w-12 rounded-full bg-gray-300 dark:bg-gray-600 flex-shrink-0" />
            <div className="ml-4 flex-1">
              <div className="flex justify-between">
                <span className="font-medium">{contact.name}</span>
                <span className="text-sm text-gray-500">{contact.time}</span>
              </div>
              <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 底部导航栏 */}
      <div className="bg-white dark:bg-gray-800 border-t py-2">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center p-2 text-blue-500">
            <AiOutlineHome size={24} />
            <span className="text-xs mt-1">首页</span>
          </button>
          <button 
            className="flex flex-col items-center p-2 text-gray-500 hover:text-blue-500"
            onClick={() => router.push('/dashboard/summary')}
          >
            <AiOutlineStar size={24} />
            <span className="text-xs mt-1">需求总结</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-500">
            <AiOutlineUser size={24} />
            <span className="text-xs mt-1">我的</span>
          </button>
        </div>
      </div>
    </div>
  );
}