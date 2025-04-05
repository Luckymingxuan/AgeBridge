'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export default function DemoPage() {
  const router = useRouter();
  const initialConversations = [
    { speaker: '老登', type: 'other', content: '你一天到晚低头玩手机，不觉得丢人吗？年轻人就是这么不务正业！' },
    { speaker: '我', type: 'self', content: '玩手机怎么了？我这是在开会！你根本不懂我们怎么工作的！' },
    { speaker: '老登', type: 'other', content: '工作？你躺在沙发上就叫工作？别找借口了，成天这样还能成什么事？' },
    { speaker: '我', type: 'self', content: '你根本不了解现在的工作方式！不是每个人都像你以前那样坐办公室搬砖！' },
    { speaker: '我', type: 'self', content: '我叫了外卖，不想做饭。' },
    { speaker: '老登', type: 'other', content: '啥？你连饭都不愿意做？难怪你们这一代人身子骨这么差！' },
    { speaker: '我', type: 'self', content: '做饭就代表努力了？现在生活节奏不一样，点外卖是常态！' },
    { speaker: '老登', type: 'other', content: '常态？懒人文化才是真相！我年轻的时候，从不靠别人伺候！' },
    { speaker: '我', type: 'self', content: '外卖是服务不是伺候，你这观念太老了！' },
    { speaker: '我', type: 'self', content: '今天在群里说错话，直接社死了…' },
    { speaker: '老登', type: 'other', content: '社死？你是不是得了什么心理病？要不要看医生？' },
    { speaker: '我', type: 'self', content: '我是尴尬而已！你能不能别听风就是雨！' },
    { speaker: '老登', type: 'other', content: '你态度别这么差，我是关心你！' },
    { speaker: '我', type: 'self', content: '你所谓的关心就是天天误解我，根本没搞清楚在说什么！' },
  ];

  const [conversations, setConversations] = useState(initialConversations);
  const [inputText, setInputText] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setConversations(prev => [...prev, {
        speaker: '老登',
        type: 'other',
        content: '哎呀呀，不说了不说了'
      }]);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (!inputText.trim()) return;
    
    setIsButtonActive(true);
    setConversations(prev => [...prev, {
      speaker: '我',
      type: 'self',
      content: inputText
    }]);
    
    setInputText('');
    setTimeout(() => setIsButtonActive(false), 200);
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
        <h1 className="text-xl font-semibold">代际沟通演示</h1>
      </div>

      {/* 对话内容区域 */}
      <div className="flex-1 p-4 pb-20 overflow-y-auto flex flex-col-reverse">
        <div className="max-w-2xl mx-auto w-full">
          {conversations.map((msg, index) => (
            <div 
              key={index} 
              className={`flex ${msg.type === 'self' ? 'justify-end' : 'justify-start'} mb-4`}
            >
              {msg.type !== 'self' && (
                <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 mr-2" />
              )}
              <div 
                className={`max-w-[70%] rounded-lg p-3 ${
                  msg.type === 'self' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white dark:bg-gray-800'
                }`}
              >
                {msg.type !== 'self' && (
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {msg.speaker}
                  </div>
                )}
                <div className={msg.type === 'self' ? 'text-white' : 'text-gray-700 dark:text-gray-300'}>
                  {msg.content}
                </div>
              </div>
              {msg.type === 'self' && (
                <div className="w-8 h-8 rounded-full bg-blue-300 flex-shrink-0 ml-2" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 底部发送消息栏 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t p-4">
        <div className="max-w-2xl mx-auto flex gap-2 items-center">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="输入消息..."
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
          />
          <button 
            onClick={handleSend}
            className={`px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 flex-shrink-0 h-10 flex items-center justify-center transition-colors ${
              isButtonActive 
                ? 'bg-blue-600 text-white' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            发送
          </button>
        </div>
      </div>
    </div>
  );
}