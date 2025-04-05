'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div 
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative"
    >
      <Image
        src="/image/first-page/background-image.png"
        alt="背景图片"
        fill
        className="object-cover -z-10"
        priority
        style={{ marginTop: '20px' }}
      />
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="text-center" style={{ position: 'absolute', left: '0', top: '0' }}>
          <h1 
            style={{
              position: 'absolute',
              left: '36px',
              top: '49px',
              width: '247px',
              height: '290px',
              opacity: 1,
              fontFamily: 'Alibaba PuHuiTi 3.0',
              fontSize: '115px',
              fontWeight: 900,
              lineHeight: '126%',
              letterSpacing: '-0.04em',
              fontVariationSettings: '"opsz" auto',
              fontFeatureSettings: '"kern" on',
              color: '#3D3D3D'
            }}
          >
            跨代 沟通
          </h1>
          <h2 
            style={{
              position: 'absolute',
              left: '270px',
              top: '128px',
              width: '128px',
              height: '93px',
              opacity: 0.4,
              fontFamily: 'Alibaba PuHuiTi 3.0',
              fontSize: '50px',
              fontWeight: 800,
              lineHeight: 'normal',
              letterSpacing: '0em',
              fontVariationSettings: '"opsz" auto',
              fontFeatureSettings: '"kern" on',
              color: '#322A1D'
            }}
          >
            沟通桥梁
          </h2>
          <h2 
            style={{
              position: 'absolute',
              left: '14px',
              top: '89px',
              width: '17px',
              height: '184px',
              opacity: 0.6,
              fontFamily: 'Alibaba PuHuiTi 3.0',
              fontSize: '18px',
              fontWeight: 'bold',
              lineHeight: 'normal',
              letterSpacing: '0em',
              fontVariationSettings: '"opsz" auto',
              fontFeatureSettings: '"kern" on',
              color: '#3D3D3D'
            }}
          >
            链接老年人和年轻人的
          </h2>
        </div>

        <div className="flex gap-4 items-center">
          <button 
            onClick={() => router.push('/signup')}
            style={{
              position: 'absolute',
              left: '200px',  // 调整 left 属性以靠近登录按钮
              top: '638px',
              width: '128px',
              height: '53px',
              borderRadius: '25px 6px 31px 12px',
              opacity: 1,
              display: 'flex',
              background: '#725C4B',
              color: '#FFFFFF',
              fontFamily: 'Alibaba PuHuiTi 3.0',
              fontSize: '16px',
              fontWeight: 'bold',
              justifyContent: 'center',
              alignItems: 'center',
              transform: 'scaleX(-1)',  // 水平翻转按钮
            }}
          >
            <span style={{ transform: 'scaleX(-1)' }}>注册</span>
          </button>
          <button 
            onClick={() => router.push('/login')}
            style={{
              position: 'absolute',
              left: '50px',  // 调整 left 属性以靠近注册按钮
              top: '638px',
              width: '128px',
              height: '53px',
              borderRadius: '25px 6px 31px 12px',
              opacity: 1,
              display: 'flex',
              background: '#5A5449',
              color: '#FFFFFF',
              fontFamily: 'Alibaba PuHuiTi 3.0',
              fontSize: '16px',
              fontWeight: 'bold',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            登录
          </button>
        </div>
      </main>
    </div>
  );
}
