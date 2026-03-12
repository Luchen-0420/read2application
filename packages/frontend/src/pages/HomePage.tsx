import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, Sparkles, Settings } from 'lucide-react';
import { useAppStore } from '../store';

const HomePage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const setSearchQuery = useAppStore(state => state.setSearchQuery);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setSearchQuery(inputValue);
    navigate(`/match?query=${encodeURIComponent(inputValue)}`);
  };

  const handleTagClick = (tag: string) => {
    setInputValue(tag);
    setSearchQuery(tag);
    navigate(`/match?query=${encodeURIComponent(tag)}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full">
      <div className="w-full max-w-2xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            从阅读到<span className="text-[#D97757]">改变</span>。
          </h1>
          <p className="text-[#6B6B6B] text-lg font-medium">
            把你读过的所有的好书，变成当下能用的武器。
          </p>
        </div>

        <form onSubmit={handleSearch} className="relative w-full group mt-12">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[#9A9A9A] group-focus-within:text-[#D97757] transition-colors" />
          </div>
          <input
            type="text"
            className="w-full text-lg py-4 pl-12 pr-12 bg-white border border-[#EAEAEC] focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757] text-[#2D2D2D] rounded-xl outline-none shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all placeholder:text-[#9A9A9A]"
            placeholder="描述你当前的瓶颈：比如「想存钱却总是月光」或「严重拖延症」..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="absolute inset-y-0 right-2 flex items-center">
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 text-[#9A9A9A] hover:text-[#D97757] hover:bg-orange-50 rounded-lg transition-colors disabled:opacity-50 disabled:hover:bg-transparent"
            >
              <Sparkles className="h-5 w-5" />
            </button>
          </div>
        </form>

        <div className="flex flex-col items-center gap-6 pt-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-[#9A9A9A] mr-2">试试搜索：</span>
            {['开源节流', '克服拖延', '习惯养成', '走出迷茫', '自我管理'].map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className="px-3 py-1.5 text-sm font-medium text-[#6B6B6B] bg-white border border-[#E5E5E5] rounded-full hover:border-[#D97757] hover:text-[#D97757] transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>

          <Link
            to="/settings"
            className="group flex items-center gap-2 px-4 py-2 bg-orange-50/50 rounded-full border border-orange-100/50 text-[11px] font-bold text-[#D97757] hover:bg-orange-100 transition-all animate-in fade-in slide-in-from-top-4 duration-1000 delay-500"
          >
            <Settings size={12} className="group-hover:rotate-90 transition-transform duration-500" />
            <span>配置 API KEY 以开启“语义匹配”功能</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
