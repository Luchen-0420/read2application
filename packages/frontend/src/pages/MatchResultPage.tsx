import React, { useEffect, useState, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, Loader2, Sparkles, Send, Settings, RefreshCcw, Search, Download } from 'lucide-react';
import { toPng } from 'html-to-image';
import { matchMethodologies, generatePlanInquiry, generatePlan, createPlan } from '../api';
import MethodologyCard from '../components/MethodologyCard';

const MatchResultPage: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') || '';

  // Data states
  const [results, setResults] = useState<any[]>([]);
  const [loadingResults, setLoadingResults] = useState(false);
  
  // Selection
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  
  // AI Flow states
  const [flowState, setFlowState] = useState<'MATCHING' | 'INQUIRY_LOADING' | 'INQUIRY' | 'PLAN_LOADING' | 'PLAN'>('MATCHING');
  const [inquiryData, setInquiryData] = useState<{message: string; questions: string[]}>({ message: '', questions: [] });
  const [userAnswer, setUserAnswer] = useState('');
  const [refineAnswer, setRefineAnswer] = useState('');
  const [planData, setPlanData] = useState<any>(null);
  const [saveStatus, setSaveStatus] = useState<'IDLE' | 'SAVING' | 'SAVED'>('IDLE');
  const planRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    if (query && flowState === 'MATCHING') {
      const fetchResults = async () => {
        setLoadingResults(true);
        try {
          const data = await matchMethodologies(query);
          setResults(data);
        } catch (error) {
          console.error('Failed to match', error);
        } finally {
          setLoadingResults(false);
        }
      };
      fetchResults();
    }
  }, [query]);

  const handleSelect = (id: string) => {
    const newSelect = new Set(selectedIds);
    if (newSelect.has(id)) newSelect.delete(id);
    else newSelect.add(id);
    setSelectedIds(newSelect);
  };

  const selectedMethodologies = results.filter(r => selectedIds.has(r.id));

  const startInquiry = async () => {
    setFlowState('INQUIRY_LOADING');
    try {
      const data = await generatePlanInquiry(selectedMethodologies);
      setInquiryData(data);
      setFlowState('INQUIRY');
    } catch (e) {
      console.error(e);
      setFlowState('MATCHING');
    }
  };

  const submitContext = async () => {
    if (!userAnswer.trim()) return;
    setFlowState('PLAN_LOADING');
    try {
      const data = await generatePlan(selectedMethodologies, userAnswer);
      setPlanData(data);
      setFlowState('PLAN');
    } catch (e) {
      console.error(e);
      setFlowState('INQUIRY');
    }
  };

  const handleRefine = async () => {
    if (!refineAnswer.trim()) return;
    setFlowState('PLAN_LOADING');
    try {
      const data = await generatePlan(selectedMethodologies, refineAnswer, planData);
      setPlanData(data);
      setRefineAnswer('');
      setFlowState('PLAN');
    } catch (e) {
      console.error('Refine failed:', e);
      setFlowState('PLAN');
    }
  };

  const handleConfirmSave = async () => {
    if (!planData) return;
    setSaveStatus('SAVING');
    try {
      await createPlan(planData.title || '定制化实施方案', planData.summary || '', planData.phases);
      setSaveStatus('SAVED');
      setTimeout(() => setSaveStatus('IDLE'), 3000);
    } catch (saveError) {
      console.error("Failed to save plan:", saveError);
      setSaveStatus('IDLE');
    }
  };

  const handleExportImage = async () => {
    if (!planRef.current) return;
    setExporting(true);
    try {
      const dataUrl = await toPng(planRef.current, { 
        backgroundColor: '#fff',
        width: 720,
        style: {
          padding: '40px 40px 60px 40px',
          borderRadius: '0',
          width: '720px',
          maxWidth: 'none',
          opacity: '1',
          transform: 'none',
          animation: 'none'
        }
      });
      const link = document.createElement('a');
      link.download = `${planData?.title || '计划'}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Export failed', err);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="w-full animate-in fade-in duration-500 pb-20">
      
      {/* Header and Back navigation */}
      <div className="mb-8 flex items-center gap-3">
        <Link to="/" className="p-2 -ml-2 text-[#9A9A9A] hover:text-[#1A1A1A] transition-colors rounded-full hover:bg-gray-50">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-xl font-medium text-[#1A1A1A] flex items-center gap-2">
          {flowState === 'MATCHING' && <span>关于 <span className="text-[#D97757]">"{query}"</span> 的匹配结果</span>}
          {flowState === 'INQUIRY' && <span>制定定制计划</span>}
          {flowState === 'PLAN' && <span>专属行动指南</span>}
        </h1>
      </div>

      {/* PHASE 1: MATCHING */}
      {flowState === 'MATCHING' && (
        <div className="space-y-6">
          {loadingResults ? (
            <div className="flex justify-center items-center h-40">
              <Loader2 className="w-6 h-6 text-[#D97757] animate-spin" />
            </div>
          ) : results.length > 0 ? (
            <>
              <p className="text-[#6B6B6B] mb-2">在这 {results.length} 个方法论中，勾选你最想尝试的几个：</p>
              <div className="grid gap-4">
                {results.map((item) => (
                  <MethodologyCard 
                    key={item.id} 
                    methodology={item} 
                    selected={selectedIds.has(item.id)}
                    onSelect={() => handleSelect(item.id)}
                  />
                ))}
              </div>

              {/* Sticky bottom bar for generation */}
              {selectedIds.size > 0 && (
                <div className="fixed bottom-0 left-0 right-0 p-4 border-t border-[#E5E5E5] bg-white/90 backdrop-blur flex justify-between items-center z-50 animate-in slide-in-from-bottom-5">
                  <div className="max-w-3xl mx-auto w-full flex justify-between items-center px-2">
                    <span className="text-[#2D2D2D] font-medium">已选择 {selectedIds.size} 个方法论</span>
                    <button 
                      onClick={startInquiry}
                      className="flex items-center gap-2 px-6 py-2.5 bg-[#D97757] hover:bg-[#C26245] text-white rounded-lg font-medium transition-colors shadow-sm"
                    >
                      <Sparkles size={16} /> 下一步：制定计划
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 px-6 border border-dashed border-[#E5E5E5] rounded-3xl bg-[#FDFDFD] animate-in fade-in zoom-in-95 duration-500">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={24} className="text-[#CED4DA]" />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">未发现直接匹配的方法论</h3>
              <p className="text-[#9A9A9A] text-sm max-w-sm mx-auto mb-8 leading-relaxed">
                当前仅进行了关键词检索。您可以尝试换个词，或者开启 **AI 语义匹配** 来深度理解您的需求。
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link 
                  to="/settings"
                  className="flex items-center gap-2 px-6 py-2.5 bg-[#1A1A1A] hover:bg-[#2D2D2D] text-white rounded-xl text-sm font-bold transition-all shadow-md"
                >
                  <Settings size={16} />
                  配置 AI 密钥
                </Link>
                <Link 
                   to="/"
                   className="flex items-center gap-2 px-6 py-2.5 border border-[#E5E5E5] text-[#6B6B6B] hover:text-[#1A1A1A] hover:bg-white rounded-xl text-sm font-bold transition-all"
                >
                  <RefreshCcw size={16} />
                  换个词搜搜
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-[#F5F5F5] inline-block">
                <p className="text-[11px] text-[#D97757] font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                  <Sparkles size={12} />
                  提示：配置 API 后即可解锁“场景化语义匹配”
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* PHASE 2: INQUIRY LOADING */}
      {flowState === 'INQUIRY_LOADING' && (
        <div className="flex flex-col items-center justify-center py-20 text-[#6B6B6B] animate-pulse">
          <Sparkles className="w-8 h-8 text-[#D97757] mb-4 animate-spin-slow" />
          <p>AI 正在分析所选方法论并生成追问...</p>
        </div>
      )}

      {/* PHASE 3: INQUIRY */}
      {flowState === 'INQUIRY' && (
        <div className="max-w-2xl mx-auto">
          {/* AI Message Bubble */}
          <div className="flex gap-4 mb-8">
            <div className="w-8 h-8 rounded-full bg-orange-50 text-[#D97757] flex items-center justify-center shrink-0 border border-orange-100">
              <Sparkles size={14} />
            </div>
            <div className="bg-white border border-[#E5E5E5] p-5 rounded-2xl rounded-tl-sm shadow-sm text-[#2D2D2D] text-sm md:text-base leading-relaxed whitespace-pre-wrap">
              {inquiryData.message}
            </div>
          </div>

          <p className="text-xs text-[#9A9A9A] font-medium uppercase tracking-widest pl-1 mb-3 mt-12">
            你的回答
          </p>
          <div className="relative">
            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={flowState as string === 'PLAN_LOADING'}
              placeholder={`请尽量详细描述你的情况... (例如关于：${inquiryData.questions?.join('、') || ''})`}
              className="w-full bg-white border border-[#E5E5E5] p-5 rounded-xl h-40 focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757] outline-none resize-none transition-all placeholder:text-[#C2C2C2] text-[#2D2D2D] disabled:opacity-60"
            />
            <button 
              onClick={submitContext}
              disabled={!userAnswer.trim() || flowState as string === 'PLAN_LOADING'}
              className="absolute bottom-4 right-4 p-2 bg-[#D97757] text-white rounded-lg hover:bg-[#C26245] transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {flowState as string === 'PLAN_LOADING' ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            </button>
          </div>
        </div>
      )}

      {/* PHASE 4: PLAN LOADING */}
      {flowState === 'PLAN_LOADING' && (
        <div className="flex flex-col items-center justify-center py-20 text-[#6B6B6B] animate-pulse">
          <Sparkles className="w-8 h-8 text-[#D97757] mb-4 animate-spin-slow" />
          <p>正在根据你的情况融合方法论，生成行动大纲...</p>
        </div>
      )}

      {/* PHASE 5: PLAN GENERATED */}
      {flowState === 'PLAN' && planData && (
        <div className="max-w-2xl mx-auto space-y-8 animate-in slide-in-from-bottom-8 duration-700">
          
          <div ref={planRef} className="bg-white p-2 rounded-2xl overflow-hidden">
            <div className="text-center pb-6 border-b border-[#E5E5E5] mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1A1A] mb-4 break-words leading-tight">{planData.title || '定制化实施方案'}</h2>
              <p className="text-[#6B6B6B] leading-relaxed break-words">{planData.summary}</p>
            </div>

            <div className="space-y-8">
              {planData.phases?.map((phase: any, idx: number) => (
                <div key={idx} className="relative pl-6 md:pl-8 border-l border-[#E5E5E5]">
                  <div className="absolute w-3 h-3 bg-white border-2 border-[#D97757] rounded-full -left-[6.5px] top-1.5" />
                  <h3 className="text-lg font-bold text-[#2D2D2D] mb-4">{phase.name}</h3>
                  <ul className="space-y-3">
                    {phase.actions?.map((action: string, jdx: number) => (
                      <li key={jdx} className="flex gap-3 text-[#6B6B6B] items-start bg-gray-50/50 p-3 rounded-lg border border-[#EAEAEC]">
                        <span className="leading-relaxed break-words flex-1">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* Bottom Spacer for export */}
            <div className="h-8" />
          </div>

          {/* Refinement Chat */}
          <div className="bg-[#FAF9F6] border border-[#E5E5E5] p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 text-[#1A1A1A] font-bold">
              <Sparkles size={18} className="text-[#D97757]" />
              如果不满意，继续告诉 AI 您想调整的地方：
            </div>
            <div className="relative">
              <textarea
                value={refineAnswer}
                onChange={(e) => setRefineAnswer(e.target.value)}
                placeholder="例如：稍微简单一点，或者增加更多理财相关的细节..."
                className="w-full bg-white border border-[#E5E5E5] p-4 rounded-xl h-24 focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757] outline-none resize-none transition-all text-sm"
              />
              <button 
                onClick={handleRefine}
                disabled={!refineAnswer.trim() || flowState as string === 'PLAN_LOADING'}
                className="absolute bottom-3 right-3 p-2 bg-[#1A1A1A] text-white rounded-lg hover:bg-[#2D2D2D] transition-colors disabled:opacity-50"
              >
                <Send size={14} />
              </button>
            </div>
          </div>

          <div className="pt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleConfirmSave}
              disabled={saveStatus !== 'IDLE'}
              className={`px-8 py-2.5 rounded-lg transition-all shadow-sm font-bold flex items-center gap-2 ${
                saveStatus === 'SAVED' ? 'bg-green-600 text-white' : 'bg-[#D97757] hover:bg-[#C26245] text-white'
              }`}
            >
              {saveStatus === 'SAVING' && <Loader2 size={16} className="animate-spin" />}
              {saveStatus === 'SAVED' ? '已收录到我的计划' : '满意，确认收录计划'}
            </button>
            
            <button 
              onClick={handleExportImage}
              disabled={exporting}
              className="px-6 py-2.5 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-gray-50 rounded-lg transition-all font-medium flex items-center gap-2"
            >
              {exporting ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
              导出图片打印
            </button>
            
            <Link to="/" className="text-[#9A9A9A] hover:text-[#1A1A1A] text-sm transition-colors">
              返回首页
            </Link>
          </div>

        </div>
      )}

    </div>
  );
};

export default MatchResultPage;
