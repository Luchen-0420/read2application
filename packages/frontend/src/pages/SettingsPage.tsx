import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Settings as SettingsIcon, Save, KeyRound, MonitorSmartphone, Link as LinkIcon, CheckCircle2, ArrowLeft } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [baseUrl, setBaseUrl] = useState('');
  const [model, setModel] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setApiKey(localStorage.getItem('read2app_ai_key') || '');
    setBaseUrl(localStorage.getItem('read2app_ai_baseUrl') || '');
    setModel(localStorage.getItem('read2app_ai_model') || '');
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('read2app_ai_key', apiKey);
    localStorage.setItem('read2app_ai_baseUrl', baseUrl);
    localStorage.setItem('read2app_ai_model', model);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-in fade-in duration-500 pb-20">
      <div className="mb-6">
        <Link to={-1 as any} className="flex items-center gap-2 text-sm text-[#9A9A9A] hover:text-[#1A1A1A] transition-colors group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          返回
        </Link>
      </div>
      <div className="mb-10 flex items-center gap-3 border-b border-[#E5E5E5] pb-6">
        <div className="p-2 bg-gray-50 rounded-lg text-[#6B6B6B]">
          <SettingsIcon size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-serif font-bold text-[#1A1A1A]">偏好设置</h1>
          <p className="text-sm text-[#9A9A9A] mt-1">配置您专属的 AI 代理，确保您的数据与请求隐私。</p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-8 bg-white border border-[#E5E5E5] p-6 sm:p-8 rounded-2xl shadow-sm">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-[#2D2D2D]">
              <KeyRound size={16} className="text-[#9A9A9A]" /> API Key
            </label>
            <input 
              type="password" 
              value={apiKey} 
              onChange={e => setApiKey(e.target.value)} 
              placeholder="sk-..." 
              className="w-full bg-gray-50/50 border border-[#E5E5E5] rounded-lg px-4 py-2.5 focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757] outline-none transition-all placeholder:text-[#C2C2C2] text-[#2D2D2D]" 
            />
            <p className="text-[13px] text-[#9A9A9A]">您的 API Key 仅保存在本地浏览器缓存中，不会经过我们的服务器中转存储。</p>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-[#2D2D2D]">
              <LinkIcon size={16} className="text-[#9A9A9A]" /> Base URL
            </label>
            <input 
              type="text" 
              value={baseUrl} 
              onChange={e => setBaseUrl(e.target.value)} 
              placeholder="例如：https://api.deepseek.com/v1" 
              className="w-full bg-gray-50/50 border border-[#E5E5E5] rounded-lg px-4 py-2.5 focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757] outline-none transition-all placeholder:text-[#C2C2C2] text-[#2D2D2D]" 
            />
            <p className="text-[13px] text-[#9A9A9A]">若是官方服务，请填写官方中转地址；若是自托管，请填写 Localhost URL。</p>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-[#2D2D2D]">
              <MonitorSmartphone size={16} className="text-[#9A9A9A]" /> 模型名称 (Model)
            </label>
            <input 
              type="text" 
              value={model} 
              onChange={e => setModel(e.target.value)} 
              placeholder="例如：deepseek-chat 或 gpt-4o" 
              className="w-full bg-gray-50/50 border border-[#E5E5E5] rounded-lg px-4 py-2.5 focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757] outline-none transition-all placeholder:text-[#C2C2C2] text-[#2D2D2D]" 
            />
          </div>
        </div>

        <div className="pt-6 border-t border-[#E5E5E5] flex justify-end">
          <button 
            type="submit" 
            className="flex items-center gap-2 px-6 py-2.5 bg-[#1A1A1A] hover:bg-[#2D2D2D] text-white rounded-lg font-medium transition-all shadow-sm"
          >
            {saved ? <CheckCircle2 size={18} className="text-green-400" /> : <Save size={18} />}
            {saved ? '已保存' : '保存设置'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;
