import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookPlus, Plus, X, Loader2, Search, Sparkles, ChevronDown } from 'lucide-react';
import { createBook, createMethodology, searchDouban, extractMethodology, getDoubanBookDetail } from '../api';
import { useAppStore } from '../store';

const categories = ["理财", "自我成长", "心理学", "商业", "科技", "文学", "生活方式", "其他"];

const AddPage: React.FC = () => {
  const navigate = useNavigate();
  const loadBooks = useAppStore(state => state.loadBooks);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Book Form State
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookSummary, setBookSummary] = useState('');
  const [bookCategory, setBookCategory] = useState('');
  const [bookCoverUrl, setBookCoverUrl] = useState('');
  const [isFetchingDouban, setIsFetchingDouban] = useState(false);
  const [isFetchingDetail, setIsFetchingDetail] = useState(false);
  const [doubanResults, setDoubanResults] = useState<any[]>([]);
  const [showDoubanResults, setShowDoubanResults] = useState(false);

  // Methodology Form State
  const [activeTab, setActiveTab] = useState<'manual' | 'ai'>('manual');
  const [methodName, setMethodName] = useState('');
  const [methodDesc, setMethodDesc] = useState('');
  const [methodScenarios, setMethodScenarios] = useState('');
  const [steps, setSteps] = useState([{ content: '' }]);
  const [tags, setTags] = useState('');
  
  // AI Extract
  const [aiExtractText, setAiExtractText] = useState('');
  const [isExtracting, setIsExtracting] = useState(false);

  const handleAddStep = () => setSteps([...steps, { content: '' }]);
  const handleRemoveStep = (index: number) => {
    if (steps.length > 1) {
      setSteps(steps.filter((_, i) => i !== index));
    }
  };
  const handleStepChange = (index: number, value: string) => {
    const newSteps = [...steps];
    newSteps[index].content = value;
    setSteps(newSteps);
  };

  const handleDoubanFetch = async () => {
    if (!bookTitle) return alert("请先输入书名");
    setIsFetchingDouban(true);
    setDoubanResults([]);
    setShowDoubanResults(false);
    try {
      const data = await searchDouban(bookTitle);
      if (data && data.length > 0) {
        setDoubanResults(data);
        setShowDoubanResults(true);
      } else {
        alert("未找到相关书籍信息");
      }
    } catch (e) {
      alert("获取失败或无匹配结果");
    } finally {
      setIsFetchingDouban(false);
    }
  };

  const handleSelectDoubanBook = async (book: any) => {
    setBookTitle(book.title);
    setBookAuthor(book.author);
    // Preliminary summary from abstract
    setBookSummary(book.summary);
    setBookCoverUrl(book.coverUrl);
    setShowDoubanResults(false);

    // Fetch real summary
    setIsFetchingDetail(true);
    try {
      const detail = await getDoubanBookDetail(book.url, book.title, book.author);
      if (detail && detail.summary) {
        setBookSummary(detail.summary);
      }
    } catch (e) {
      console.error("Failed to fetch book detail", e);
    } finally {
      setIsFetchingDetail(false);
    }
  };

  const handleAiExtract = async () => {
    if (!aiExtractText) return alert("请先粘贴文本");
    setIsExtracting(true);
    try {
      const data = await extractMethodology(aiExtractText);
      if (data.name) setMethodName(data.name);
      if (data.description) setMethodDesc(data.description);
      if (data.applicableScenarios) setMethodScenarios(data.applicableScenarios);
      if (data.tags) setTags(data.tags.join(', '));
      if (data.steps && data.steps.length > 0) {
        setSteps(data.steps.map((s: any) => ({ content: s.content })));
      }
      // Switch back to manual tab for review
      setActiveTab('manual');
    } catch (e) {
      alert("提炼失败，请检查 AI 设置页配置");
    } finally {
      setIsExtracting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookTitle || !methodName || !steps[0].content) return;

    setIsSubmitting(true);
    try {
      const book = await createBook({
        title: bookTitle,
        author: bookAuthor,
        summary: bookSummary,
        category: bookCategory || null, // Let AI handle if empty
        coverUrl: bookCoverUrl
      });

      const tagArray = tags.split(/[,，]/).map(t => t.trim()).filter(Boolean);
      const formattedSteps = steps
        .filter(s => s.content.trim() !== '')
        .map((s, idx) => ({ order: idx + 1, content: s.content }));

      await createMethodology(book.id, {
        name: methodName,
        description: methodDesc,
        applicableScenarios: methodScenarios,
        steps: formattedSteps,
        tags: tagArray
      });

      await loadBooks();
      navigate('/library');
      
    } catch (error) {
      console.error('Failed to create', error);
      alert('保存失败，请检查网络或控制台');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-in fade-in duration-500 pb-20">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-50 text-[#D97757] mb-4">
          <BookPlus size={24} />
        </div>
        <h1 className="text-3xl font-serif font-bold text-[#1A1A1A]">录入方法论</h1>
        <p className="text-[#6B6B6B] mt-3">将你从书中读到的有效框架，结构化地沉淀下来。</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">
        {/* Section 1: Book Info */}
        <section className="space-y-6">
          <h2 className="text-lg font-bold text-[#2D2D2D] border-b border-[#E5E5E5] pb-2 flex items-center justify-between">
            <span>1. 书籍信息</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#6B6B6B] flex justify-between items-center">
                <span>书名 *</span>
              </label>
              <div className="flex gap-2 relative">
                <input required value={bookTitle} onChange={e => setBookTitle(e.target.value)} type="text" className="flex-1 w-full bg-white border border-[#E5E5E5] rounded-lg px-4 py-2.5 focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757] outline-none transition-all placeholder:text-[#C2C2C2] text-[#2D2D2D]" placeholder="例如：小狗钱钱" />
                <button 
                  type="button" 
                  onClick={handleDoubanFetch}
                  disabled={isFetchingDouban}
                  className="shrink-0 px-4 flex items-center gap-1 bg-[#F9F9F8] border border-[#E5E5E5] rounded-lg text-[#6B6B6B] hover:text-[#2D2D2D] hover:bg-gray-100 transition-colors text-sm font-medium disabled:opacity-50"
                >
                  {isFetchingDouban ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />}
                  从豆瓣获取
                </button>

                {showDoubanResults && doubanResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#E5E5E5] rounded-xl shadow-xl z-50 max-h-[400px] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-2 border-b border-[#F5F5F5] flex justify-between items-center sticky top-0 bg-white">
                      <span className="text-xs font-bold text-[#9A9A9A] px-2">匹配到 {doubanResults.length} 个结果</span>
                      <button type="button" onClick={() => setShowDoubanResults(false)} className="p-1 hover:bg-gray-100 rounded-md text-[#9A9A9A]">
                        <X size={14} />
                      </button>
                    </div>
                    <div className="p-1">
                      {doubanResults.map((book, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSelectDoubanBook(book)}
                          className="w-full text-left p-3 hover:bg-[#F9F9F8] rounded-lg flex gap-4 transition-colors group"
                        >
                          {book.coverUrl && (
                            <img src={book.coverUrl} alt={book.title} className="w-12 h-16 object-cover rounded shadow-sm flex-shrink-0" />
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-[#2D2D2D] truncate group-hover:text-[#D97757] transition-colors">{book.title}</div>
                            <div className="text-xs text-[#6B6B6B] mt-1 truncate">{book.author}</div>
                            <div className="text-xs text-[#9A9A9A] mt-1 line-clamp-2 leading-relaxed">{book.summary}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#6B6B6B]">作者</label>
              <input value={bookAuthor} onChange={e => setBookAuthor(e.target.value)} type="text" className="w-full bg-white border border-[#E5E5E5] rounded-lg px-4 py-2.5 focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757] outline-none transition-all placeholder:text-[#C2C2C2] text-[#2D2D2D]" placeholder="由豆瓣补充或手动填" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 relative">
              <label className="text-sm font-medium text-[#6B6B6B] flex items-center gap-2">
                <span>领域分类</span>
                <span className="text-[10px] text-[#9A9A9A] font-normal leading-none">(选填，留空则由 AI 自动识别)</span>
              </label>
              <div className="relative">
                <select 
                  value={bookCategory} 
                  onChange={e => setBookCategory(e.target.value)}
                  className="w-full appearance-none bg-white border border-[#E5E5E5] rounded-lg px-4 py-2.5 focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757] outline-none transition-all text-[#2D2D2D] text-sm"
                >
                  <option value="">AI 自动分类</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[#ADB5BD]">
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#6B6B6B]">封面图片 URL（可选）</label>
              <input value={bookCoverUrl} onChange={e => setBookCoverUrl(e.target.value)} type="text" className="w-full bg-white border border-[#E5E5E5] rounded-lg px-4 py-2.5 focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757] outline-none transition-all placeholder:text-[#C2C2C2] text-[#2D2D2D]" placeholder="https://..." />
            </div>
          </div>

          <div className="space-y-2 relative">
            <label className="text-sm font-medium text-[#6B6B6B] flex items-center gap-2">
              <span>一句话简介</span>
              {isFetchingDetail && <Loader2 size={12} className="animate-spin text-[#D97757]" />}
            </label>
            <textarea value={bookSummary} onChange={e => setBookSummary(e.target.value)} className="w-full bg-white border border-[#E5E5E5] rounded-lg px-4 py-3 h-20 resize-none focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757] outline-none transition-all placeholder:text-[#C2C2C2] text-[#2D2D2D] text-sm" placeholder="这本书主要讲了什么..." />
          </div>
        </section>

        {/* Section 2: Methodology Info */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
            <h2 className="text-lg font-bold text-[#2D2D2D]">2. 提炼方法论</h2>
          </div>

          {/* Tabs */}
          <div className="flex p-1 bg-[#F5F5F3] rounded-xl w-fit">
            <button
              type="button"
              onClick={() => setActiveTab('manual')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'manual' 
                  ? 'bg-white text-[#D97757] shadow-sm' 
                  : 'text-[#9A9A9A] hover:text-[#6B6B6B]'
              }`}
            >
              手动录入
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('ai')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                activeTab === 'ai' 
                  ? 'bg-white text-[#D97757] shadow-sm' 
                  : 'text-[#9A9A9A] hover:text-[#6B6B6B]'
              }`}
            >
              <Sparkles size={14} />
              AI 智能识别
            </button>
          </div>

          {activeTab === 'ai' ? (
            <div className="bg-[#FDFDFD] border border-[#EAEAEC] rounded-2xl p-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#2D2D2D]">AI 智能提炼</h3>
                <p className="text-sm text-[#9A9A9A]">粘贴大段的读书笔记或文章原句，AI 将为您自动提取结构化的方法、步骤和场景。</p>
              </div>
              <textarea 
                value={aiExtractText} 
                onChange={e => setAiExtractText(e.target.value)} 
                className="w-full bg-white border border-[#E5E5E5] rounded-xl px-4 py-4 h-48 resize-none focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757] outline-none transition-all placeholder:text-[#C2C2C2] text-[#2D2D2D] text-sm leading-relaxed" 
                placeholder="在此粘贴原句，例如：
‘为了让自己更有自信，我每天都要写成功日记。步骤如下：首先，准备一个精美的笔记本；其次，每天晚上写下 5 件让你感到成功的小事...’" 
              />
              <div className="flex justify-end pt-2">
                <button 
                  type="button" 
                  onClick={handleAiExtract}
                  disabled={isExtracting}
                  className="px-6 py-3 bg-[#D97757] hover:bg-[#C26245] text-white rounded-xl text-sm font-bold transition-all flex items-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isExtracting ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
                  开始智能提炼
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#6B6B6B]">方法论名称 *</label>
                <input required value={methodName} onChange={e => setMethodName(e.target.value)} type="text" className="w-full bg-white border border-[#E5E5E5] rounded-lg px-4 py-2.5 focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757] outline-none transition-all placeholder:text-[#C2C2C2] text-[#2D2D2D]" placeholder="例如：写成功日记" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#6B6B6B]">核心作用 / 原理简述 *</label>
                <textarea required value={methodDesc} onChange={e => setMethodDesc(e.target.value)} className="w-full bg-white border border-[#E5E5E5] rounded-lg px-4 py-3 h-24 resize-none focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757] outline-none transition-all placeholder:text-[#C2C2C2] text-[#2D2D2D]" placeholder="为什么要用这个方法？它能解决什么问题？" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#6B6B6B]">适用场景（用户匹配触发词） *</label>
                <input required value={methodScenarios} onChange={e => setMethodScenarios(e.target.value)} type="text" className="w-full bg-white border border-[#E5E5E5] rounded-lg px-4 py-2.5 focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757] outline-none transition-all placeholder:text-[#C2C2C2] text-[#2D2D2D]" placeholder="例如：想存钱但缺乏动力，总是受挫时" />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-[#6B6B6B]">具体执行步骤 *</label>
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-2 items-start">
                    <div className="shrink-0 w-8 h-10 flex items-center justify-center text-[#9A9A9A] font-medium text-sm">
                      {index + 1}.
                    </div>
                    <input 
                      required
                      value={step.content}
                      onChange={(e) => handleStepChange(index, e.target.value)}
                      type="text" 
                      className="w-full bg-white border border-[#E5E5E5] rounded-lg px-4 py-2 focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757] outline-none transition-all text-[#2D2D2D]" 
                      placeholder={`步骤 ${index + 1}`} 
                    />
                    {steps.length > 1 && (
                      <button type="button" onClick={() => handleRemoveStep(index)} className="shrink-0 p-2.5 text-[#9A9A9A] hover:text-red-500 transition-colors">
                        <X size={18} />
                      </button>
                    )}
                  </div>
                ))}
                <button type="button" onClick={handleAddStep} className="mt-2 ml-10 flex items-center gap-1 text-sm text-[#D97757] font-medium hover:text-[#C26245] transition-colors">
                  <Plus size={16} /> 添加步骤
                </button>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-sm font-medium text-[#6B6B6B]">标签 (Tag) — 逗号分隔</label>
                <input value={tags} onChange={e => setTags(e.target.value)} type="text" className="w-full bg-white border border-[#E5E5E5] rounded-lg px-4 py-2.5 focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757] outline-none transition-all placeholder:text-[#C2C2C2] text-[#2D2D2D]" placeholder="理财, 自信建立, 习惯养成" />
              </div>
            </div>
          )}
        </section>

        <div className="pt-8 border-t border-[#E5E5E5] flex justify-end">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="flex items-center gap-2 px-8 py-3 bg-[#1A1A1A] hover:bg-[#2D2D2D] text-white rounded-xl font-medium transition-all shadow-sm disabled:opacity-70"
          >
            {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <BookPlus size={18} />}
            保存并收录
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPage;
