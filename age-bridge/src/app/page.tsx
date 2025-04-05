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
              color: '#3D3D3D',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'  // 添加阴影效果
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
              left: '200px',
              top: '658px',  // 从 638px 调整到 658px
              width: '128px',
              height: '53px',
              borderRadius: '25px 6px 31px 12px',
              opacity: 1,
              display: 'flex',
              background: '#725C4B',
              color: '#FFFFFF',
              fontFamily: 'Alibaba PuHuiTi 3.0',
              fontSize: '25px',
              fontWeight: 'bold',
              justifyContent: 'center',
              alignItems: 'center',
              transform: 'scaleX(-1)',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'scaleX(-1)', gap: '4px' }}>
              <span style={{ lineHeight: '1' }}>注册</span>
              <span style={{ fontSize: '12px', lineHeight: '1', marginTop: '-2px' }}>Sign up</span>
            </div>
          </button>
          <button 
            onClick={() => router.push('/login')}
            style={{
              position: 'absolute',
              left: '50px',
              top: '658px',  // 从 638px 调整到 658px
              width: '128px',
              height: '53px',
              borderRadius: '25px 6px 31px 12px',
              opacity: 1,
              display: 'flex',
              background: '#5A5449',
              color: '#FFFFFF',
              fontFamily: 'Alibaba PuHuiTi 3.0',
              fontSize: '25px',
              fontWeight: 'bold',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <span style={{ lineHeight: '1' }}>登录</span>
              <span style={{ fontSize: '12px', lineHeight: '1', marginTop: '-2px' }}>Log in</span>
            </div>
          </button>
        </div>
      </main>
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
      <svg
        style={{
          position: 'absolute',
          left: '-103px',
          top: '681px',
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
