'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('登录成功！');
        // 根据用户类型跳转到不同页面
        if (data.userType === 'ELDER') {
          router.push('/dashboard/home');
        } else {
          router.push('/dashboard/home');
        }
      } else {
        alert(data.error || '登录失败');
      }
    } catch (error) {
      alert('登录失败，请稍后重试');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <svg
        style={{
          position: 'absolute',
          left: '-56px',
          top: '-92.5px',
          width: '545px',
          height: '288.5px',
          zIndex: -1,
        }}
        viewBox="0 0 545 288.5"
      >
        <path
          d="M40,220 
           C90,235 120,242 150,245
           S220,250 260,220
           S350,190 450,245
           S500,250 505,245
           C525,242 545,235 545,215
           C545,160 545,120 545,80
           C545,55 525,45 505,42
           C450,35 350,32 272,35
           S120,40 40,44
           C20,46 0,58 0,80
           C0,140 0,180 0,200
           C0,212 20,218 40,220 Z"
          fill="#E5CEA0"
          stroke="#BBA677"
          strokeWidth="17"
        />
      </svg>

      <div className="w-full max-w-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ marginTop: '-20px' }}>登录账号</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">手机号码</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="请输入手机号码"
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
            style={{
              position: 'absolute',
              left: '59px',
              top: '664px',
              width: '276px',
              height: '69px',
              borderRadius: '31px',
              opacity: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#BB6E2F',
              borderWidth: '0 0 13px 0',
              borderStyle: 'solid',
              borderColor: '#92511C',
              color: '#FFFFFF',
              fontSize: '25px',
              fontWeight: 'bold',
              fontFamily: 'Alibaba PuHuiTi 3.0',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(187, 110, 47, 0.3)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <span style={{ lineHeight: '1', letterSpacing: '0.2em' }}>登录</span>
              <span style={{ fontSize: '12px', lineHeight: '1', marginTop: '-2px', letterSpacing: '0.1em' }}>Login</span>
            </div>
          </button>
        </form>
      </div>

      <svg
        style={{
          position: 'absolute',
          left: '-103px',
          bottom: '-92px',
          width: '588px',
          height: '264px',
          zIndex: -1,
        }}
        viewBox="0 0 608 264"
      >
        <path
          d="M40,80 
           C90,75 120,50 150,45
           S200,40 240,55
           S350,20 450,10
           S520,8 550,12
           C575,15 588,35 588,65
           C588,140 588,180 588,220
           C588,245 575,255 550,258
           C450,265 350,268 294,265
           S120,260 40,256
           C20,254 0,242 0,220
           C0,160 0,120 0,100
           C0,88 20,82 40,80 Z"
          fill="#907C4D"
          stroke="#D3C4A2"
          strokeWidth="28"
        />
      </svg>
    </div>
  );
}