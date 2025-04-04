'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const router = useRouter();
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    password: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!userType) {
      alert('请选择用户类型');
      return;
    }

    try {
      const response = await fetch('/api/signup', {  // 更新这里的路径
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          userType
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('注册成功！');
        if (userType === 'elder') {
          router.push('/dashboard/elder');
        } else {
          router.push('/dashboard/young');
        }
      } else {
        alert(data.error || '注册失败');
      }
    } catch (error) {
      alert('注册失败，请稍后重试');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">注册账号</h2>
        
        <div className="flex gap-12 mb-8 justify-center">
          <button 
            onClick={() => setUserType('young')}
            className={`px-8 py-3 text-lg rounded-full transition-all ${
              userType === 'young' 
                ? 'bg-blue-500 text-white' 
                : 'border hover:border-blue-500'
            }`}
          >
            年轻人
          </button>
          <button 
            onClick={() => setUserType('elder')}
            className={`px-8 py-3 text-lg rounded-full transition-all ${
              userType === 'elder' 
                ? 'bg-blue-500 text-white' 
                : 'border hover:border-blue-500'
            }`}
          >
            老年人
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">用户名</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="请输入用户名"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">电话号码</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="请输入电话号码"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">密码</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="请输入密码"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            注册
          </button>
        </form>
      </div>
    </div>
  );
}