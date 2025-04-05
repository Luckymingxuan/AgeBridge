'use client';
import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineHome, AiOutlineStar, AiOutlineUser, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

export default function SummaryPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);  // 添加 loading 状态
  const [summaries] = useState([
    {
      id: '1',
      date: '2024-01-20',
      title: '与老登的对话总结',
      content: '今天的对话主要围绕以下几个方面：\n1. 沟通理解方面的问题\n2. 对彼此关心的表达方式\n3. 建议改进的地方',
      tags: ['沟通', '理解', '家庭关系']
    },
    {
      id: '2',
      date: '2024-01-19',
      title: '与张阿姨的对话记录',
      content: '主要讨论了：\n1. 日常生活起居\n2. 健康状况\n3. 未来计划安排',
      tags: ['日常交流', '健康', '生活']
    }
  ]);

  const handleLoadClick = async () => {
    const msgseand = 
    "老登：你一天到晚低头玩手机，不觉得丢人吗？年轻人就是这么不务正业！\n" +
    "我：玩手机怎么了？我这是在开会！你根本不懂我们怎么工作的！\n" +
    "老登：工作？你躺在沙发上就叫工作？别找借口了，成天这样还能成什么事？\n" +
    "我：你根本不了解现在的工作方式！不是每个人都像你以前那样坐办公室搬砖！\n" +
    "我：我叫了外卖，不想做饭。\n" +
    "老登：啥？你连饭都不愿意做？难怪你们这一代人身子骨这么差！\n" +
    "我：做饭就代表努力了？现在生活节奏不一样，点外卖是常态！\n" +
    "老登：常态？懒人文化才是真相！我年轻的时候，从不靠别人伺候！\n" +
    "我：外卖是服务不是伺候，你这观念太老了！\n" +
    "我：今天在群里说错话，直接社死了…\n" +
    "老登：社死？你是不是得了什么心理病？要不要看医生？\n" +
    "我：我是尴尬而已！你能不能别听风就是雨！\n" +
    "老登：你态度别这么差，我是关心你！\n" +
    "我：你所谓的关心就是天天误解我，根本没搞清楚在说什么！\n" +
    "老登：哎呀呀，不说了不说了";

    setLoading(true);
    try {
      const res = await fetch('https://api.coze.cn/open_api/v2/chat', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer pat_OFLrl9lZhbgO4GEms8L8FuRE9bVGReTkEHEQCCFn3Uf7POVSfTpqcMkwmmV2Dv1j',
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'Connection': 'keep-alive'
        },
        body: JSON.stringify({
          conversation_id: "123",
          bot_id: "7489484247120969779",
          user: "29032201862555",
          query: msgseand,
          stream: false
        })
      });

      const data = await res.json();
      console.log('Response from Coze:', data);
      
      // 提取第一条消息的content
      if (data.messages && data.messages.length > 0) {
        const firstMessageContent = data.messages[0].content;
        console.log('First message content:', firstMessageContent);
        // 这里你可以进一步处理 firstMessageContent
      }
    } catch (error) {
      console.error('Error calling Coze API:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      {/* 顶部导航栏保持不变 */}
      <div className="bg-white dark:bg-gray-800 border-b p-4 flex items-center justify-between">
        <div className="flex items-center">
          <button 
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full mr-2"
            onClick={() => router.back()}
          >
            <AiOutlineArrowLeft size={24} className="text-gray-600 dark:text-gray-300" />
          </button>
          <h1 className="text-xl font-semibold">需求总结</h1>
        </div>

        {/* 右上角按钮 */}
        <button 
          onClick={handleLoadClick}
          className="flex items-center gap-2 text-blue-500 hover:text-blue-700"
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="animate-spin" size={20} />
          ) : (
            <span>加载</span>
          )}
        </button>
      </div>

      {/* 总结列表保持不变 */}
      <div className="flex-1 overflow-y-auto p-4">
        {summaries.map(summary => (
          <div key={summary.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 shadow">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">{summary.title}</h2>
              <span className="text-sm text-gray-500">{summary.date}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line mb-3">
              {summary.content}
            </p>
            <div className="flex flex-wrap gap-2">
              {summary.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 添加底部导航栏 */}
      <div className="bg-white dark:bg-gray-800 border-t py-2">
        <div className="flex justify-around items-center">
          <button 
            className="flex flex-col items-center p-2 text-gray-500"
            onClick={() => router.push('/dashboard/home')}
          >
            <AiOutlineHome size={24} />
            <span className="text-xs mt-1">首页</span>
          </button>
          <button className="flex flex-col items-center p-2 text-blue-500">
            <AiOutlineStar size={24} />
            <span className="text-xs mt-1">需求总结</span>
          </button>
          <button 
            className="flex flex-col items-center p-2 text-gray-500"
            onClick={() => router.push('/dashboard/profile')}
          >
            <AiOutlineUser size={24} />
            <span className="text-xs mt-1">我的</span>
          </button>
        </div>
      </div>
    </div>
  );
}
