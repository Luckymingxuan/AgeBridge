'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineArrowLeft, AiOutlineSearch, AiOutlineUserAdd } from 'react-icons/ai';

interface User {
  id: string;
  username: string;
  phone: string;
  userType: 'YOUNG' | 'ELDER';
}

export default function AddFriendPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // 添加防抖搜索函数
  useEffect(() => {
    const searchUser = async () => {
      if (!searchQuery.trim()) {
        setSearchResult(null);
        return;
      }

      setIsLoading(true);
      try {
        // 从 localStorage 获取当前用户ID
        const currentUserId = localStorage.getItem('userId');
        const response = await fetch(`/api/users/search?phone=${searchQuery}&currentUserId=${currentUserId}`);
        const data = await response.json();
        
        if (response.ok) {
          setSearchResult(data.user);
        } else {
          console.error('搜索失败:', data.error);
          setSearchResult(null);
        }
      } catch (error) {
        console.error('搜索失败:', error);
        setSearchResult(null);
      } finally {
        setIsLoading(false);
      }
    };

    // 设置 300ms 的防抖延迟
    const timeoutId = setTimeout(searchUser, 300);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  // 删除原来的 handleSearch 函数，因为我们现在用 useEffect 来处理搜索

  const handleSendInvite = async (friendId: string) => {
    try {
      const response = await fetch('/api/friends/invite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: '1',  // 临时使用固定ID进行测试
          friendId: friendId
        })
      });
  
      const data = await response.json();
      if (response.ok) {
        alert('好友邀请已发送');
        router.push('/dashboard/home');
      } else {
        alert(data.error || '发送邀请失败');
      }
    } catch (error) {
      console.error('发送邀请失败:', error);
      alert('发送邀请失败，请稍后重试');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      {/* 顶部导航栏 */}
      <div className="bg-white dark:bg-gray-800 border-b p-4 flex items-center gap-4">
        <button 
          onClick={() => router.back()}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
        >
          <AiOutlineArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-semibold">添加好友</h1>
      </div>

      {/* 搜索框 - 移除 form 标签因为我们不再需要提交表单 */}
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="输入手机号搜索"
            className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <AiOutlineSearch 
            size={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      {/* 搜索结果 */}
      <div className="flex-1 p-4">
        {isLoading && (
          <div className="text-center text-gray-500">搜索中...</div>
        )}
        
        {searchResult && (
          <div className="border rounded-lg p-4 flex items-center justify-between bg-white dark:bg-gray-800">
            <div>
              <h3 className="font-medium">{searchResult.username}</h3>
              <p className="text-sm text-gray-500">{searchResult.phone}</p>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                {searchResult.userType === 'ELDER' ? '老年人' : '年轻人'}
              </span>
            </div>
            <button
              onClick={() => handleSendInvite(searchResult.id)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <AiOutlineUserAdd size={20} />
              <span>发送邀请</span>
            </button>
          </div>
        )}

        {searchQuery && !searchResult && !isLoading && (
          <div className="text-center text-gray-500">未找到该用户</div>
        )}
      </div>
    </div>
  );
}