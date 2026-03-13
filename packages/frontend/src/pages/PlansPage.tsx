import React, { useEffect, useState } from 'react';
import { getPlans, deletePlan, addPlanLog, completePlan, generatePlanReflection } from '../api';
import { Loader2, Calendar, ChevronRight, Trash2, ArrowLeft, MessageSquarePlus, Smile, Send, Sparkles, BookCheck, History, X } from 'lucide-react';

const PlansPage: React.FC = () => {
  const [plans, setPlans] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);
  const [viewTab, setViewTab] = useState<'active' | 'archived'>('active');
  
  // Tracking states
  const [isLogging, setIsLogging] = useState(false);
  const [logText, setLogText] = useState('');
  const [mood, setMood] = useState('平稳');
  const [isReflecting, setIsReflecting] = useState(false);

  const fetchPlans = async () => {
    setIsLoading(true);
    try {
      const data = await getPlans();
      setPlans(data);
    } catch (e) {
      setError('无法加载计划列表，请稍后重试');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handleAddLog = async () => {
    if (!logText.trim() || !selectedPlan) return;
    try {
      const updated = await addPlanLog(selectedPlan.id, logText, mood);
      setSelectedPlan(updated);
      setPlans(plans.map(p => p.id === updated.id ? updated : p));
      setLogText('');
      setIsLogging(false);
    } catch (err) {
      alert('日志记录失败');
    }
  };

  const handleArchive = async () => {
    if (!selectedPlan) return;
    if (!window.confirm('确定要标记为完成并生成复盘总结吗？这将根据您的日志生成深度分析。')) return;

    setIsReflecting(true);
    try {
      // 1. Generate reflection via AI
      const { reflection } = await generatePlanReflection(selectedPlan, selectedPlan.logs || []);
      // 2. Save completion to DB
      const updated = await completePlan(selectedPlan.id, reflection);
      setSelectedPlan(updated);
      setPlans(plans.map(p => p.id === updated.id ? updated : p));
    } catch (err) {
      alert('生成复盘失败，请重试');
    } finally {
      setIsReflecting(false);
    }
  };

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!window.confirm('确定要删除这份计划吗？此操作不可撤销。')) return;
    
    try {
      await deletePlan(id);
      if (selectedPlan?.id === id) {
        setSelectedPlan(null);
      }
      fetchPlans();
    } catch (err) {
      alert('删除失败，请检查网络连接');
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Loader2 className="w-6 h-6 text-[#D97757] animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm text-center">
        {error}
      </div>
    );
  }

  if (selectedPlan) {
    const isActive = selectedPlan.status !== 'completed';
    return (
      <div className="max-w-2xl mx-auto space-y-8 animate-in slide-in-from-right duration-500 pb-24">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => setSelectedPlan(null)}
            className="text-sm font-medium text-[#9A9A9A] hover:text-[#1A1A1A] flex items-center gap-1 transition-colors group"
          >
             <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 返回列表
          </button>
          <div className="flex items-center gap-3">
             {isActive && (
               <button 
                onClick={handleArchive}
                disabled={isReflecting}
                className="text-sm font-bold text-[#D97757] hover:text-[#C26245] flex items-center gap-1 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100 transition-all disabled:opacity-50"
              >
                {isReflecting ? <Loader2 size={14} className="animate-spin" /> : <BookCheck size={16} />} 
                归档并复盘
              </button>
             )}
             <button 
              onClick={(e) => handleDelete(e, selectedPlan.id)}
              className="p-2 text-red-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              title="删除计划"
            >
               <Trash2 size={18} />
            </button>
          </div>
        </div>
        
        <div className="pb-8 border-b border-[#F0F0F0]">
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${isActive ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-gray-50 text-gray-500 border border-gray-100'}`}>
              {isActive ? '正在执行中' : '已结项归档'}
            </span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-4 leading-tight">{selectedPlan.title}</h2>
          <p className="text-[#6B6B6B] leading-relaxed text-sm md:text-base">这份计划是为您量身定制的转化路径。</p>
        </div>

        {/* AI Reflection Section (Only for archived) */}
        {!isActive && selectedPlan.reflection && (
          <div className="p-6 bg-amber-50/40 border border-amber-100 rounded-2xl space-y-4 animate-in fade-in duration-700">
            <div className="flex items-center gap-2 text-amber-800 font-bold">
              <Sparkles size={20} className="text-amber-600" />
              AI 闭环复盘总结
            </div>
            <div className="prose prose-sm prose-amber max-w-none text-amber-900 leading-relaxed whitespace-pre-wrap">
              {selectedPlan.reflection}
            </div>
          </div>
        )}

        {/* Main Content (Tabs equivalent) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-12 space-y-10">
            <section>
              <h3 className="text-sm font-bold text-[#9A9A9A] uppercase tracking-widest mb-6 flex items-center gap-2">
                <Send size={14} /> 行动纲要
              </h3>
              <div className="space-y-8">
                {selectedPlan.content?.map((phase: any, idx: number) => (
                  <div key={idx} className="relative pl-6 md:pl-8 border-l border-[#E5E5E5]">
                    <div className="absolute w-3 h-3 bg-white border-2 border-[#D97757] rounded-full -left-[6.5px] top-1.5" />
                    <h4 className="text-base font-bold text-[#2D2D2D] mb-4">{phase.name}</h4>
                    <ul className="space-y-3">
                      {phase.actions?.map((action: string, jdx: number) => (
                        <li key={jdx} className="flex gap-3 text-[#6B6B6B] text-sm items-start bg-gray-50/50 p-3 rounded-xl border border-[#EAEAEC]">
                          <CheckSquare />
                          <span className="leading-relaxed">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Execution Logs Section */}
            <section className="pt-10 border-t border-[#F0F0F0]">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="text-sm font-bold text-[#9A9A9A] uppercase tracking-widest flex items-center gap-2">
                  <History size={14} /> 实施日志
                </h3>
                {isActive && !isLogging && (
                  <button 
                    onClick={() => setIsLogging(true)}
                    className="text-xs font-bold text-[#D97757] hover:underline flex items-center gap-1"
                  >
                    <MessageSquarePlus size={14} /> 记录今日进展
                  </button>
                )}
              </div>

              {isActive && isLogging && (
                <div className="mb-8 p-5 bg-white border border-[#D97757]/30 rounded-2xl shadow-sm animate-in zoom-in-95 duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <button onClick={() => setIsLogging(false)} className="text-[#9A9A9A] hover:text-[#1A1A1A]"><X size={18} /></button>
                    <span className="text-sm font-bold text-[#2D2D2D]">记录此刻感受</span>
                  </div>
                  <textarea 
                    value={logText}
                    onChange={(e) => setLogText(e.target.value)}
                    placeholder="今天执行得如何？遇到了什么挑战？或者有什么感悟？"
                    className="w-full h-24 bg-gray-50 border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-[#D97757] outline-none transition-all resize-none"
                  />
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-2">
                       <Smile size={14} className="text-[#D97757]" />
                       <select 
                        value={mood} 
                        onChange={(e) => setMood(e.target.value)}
                        className="bg-transparent text-xs font-medium text-[#6B6B6B] outline-none border-none py-1"
                       >
                         <option>平稳</option>
                         <option>充满动力</option>
                         <option>有些疲惫</option>
                         <option>略感挫败</option>
                         <option>豁然开朗</option>
                       </select>
                    </div>
                    <button 
                      onClick={handleAddLog}
                      disabled={!logText.trim()}
                      className="px-5 py-1.5 bg-[#D97757] text-white rounded-lg text-xs font-bold hover:bg-[#C26245] transition-colors disabled:opacity-50 flex items-center gap-2"
                    >
                      保存记录 <Send size={12} />
                    </button>
                  </div>
                </div>
              )}

              <div className="space-y-5">
                {selectedPlan.logs && selectedPlan.logs.length > 0 ? (
                  [...selectedPlan.logs].reverse().map((log: any, idx: number) => (
                    <div key={idx} className="p-4 bg-gray-50/30 rounded-xl border border-[#F0F0F0]">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-bold text-[#9A9A9A] uppercase">{new Date(log.timestamp).toLocaleDateString()}</span>
                        <span className="text-xs font-medium text-[#D97757]">{log.mood}</span>
                      </div>
                      <p className="text-sm text-[#2D2D2D] leading-relaxed">{log.content}</p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10 bg-gray-50/50 border border-dashed border-[#E5E5E5] rounded-xl">
                    <p className="text-xs text-[#9A9A9A]">暂无实施记录，迈出第一步并记录下来吧。</p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  const filteredPlans = plans.filter(p => viewTab === 'active' ? p.status !== 'completed' : p.status === 'completed');

  return (
    <div className="w-full max-w-2xl mx-auto animate-in fade-in duration-500 pb-20">
      <div className="mb-8 flex items-center justify-between border-b border-[#E5E5E5] pb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-100 rounded-lg text-[#6B6B6B]">
            <Calendar size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-serif font-bold text-[#1A1A1A]">我的计划</h1>
            <p className="text-sm text-[#9A9A9A] mt-1">见证每一次从方法论到实践的蜕变。</p>
          </div>
        </div>
      </div>

      <div className="flex gap-6 mb-8 border-b border-[#F5F5F5]">
        <button 
          onClick={() => setViewTab('active')}
          className={`pb-3 text-sm font-bold transition-all relative ${viewTab === 'active' ? 'text-[#D97757]' : 'text-[#9A9A9A] hover:text-[#1A1A1A]'}`}
        >
          进行中 ({plans.filter(p => p.status !== 'completed').length})
          {viewTab === 'active' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D97757] rounded-full" />}
        </button>
        <button 
          onClick={() => setViewTab('archived')}
          className={`pb-3 text-sm font-bold transition-all relative ${viewTab === 'archived' ? 'text-gray-600' : 'text-[#9A9A9A] hover:text-[#1A1A1A]'}`}
        >
          已完成 ({plans.filter(p => p.status === 'completed').length})
          {viewTab === 'archived' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-400 rounded-full" />}
        </button>
      </div>

      <div className="grid gap-4">
        {filteredPlans.map((plan) => (
          <button 
            key={plan.id}
            onClick={() => setSelectedPlan(plan)}
            className="w-full text-left bg-white border border-[#E5E5E5] p-5 rounded-2xl hover:border-[#D97757]/30 hover:shadow-md transition-all flex items-center justify-between group"
          >
            <div className="pr-4">
              <h3 className="font-bold text-lg text-[#1A1A1A] group-hover:text-[#D97757] transition-colors">{plan.title}</h3>
              <p className="text-xs text-[#9A9A9A] mt-2 flex items-center gap-3">
                <span>创建于 {new Date(plan.createdAt).toLocaleDateString()}</span>
                {plan.logs && plan.logs.length > 0 && (
                  <span className="text-[#D97757]">● {plan.logs.length} 条记录</span>
                )}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-[#9A9A9A] group-hover:text-[#D97757] shrink-0">
                <ChevronRight size={20} />
              </div>
            </div>
          </button>
        ))}

        {filteredPlans.length === 0 && (
          <div className="text-center py-20 bg-gray-50/30 border border-dashed border-[#E5E5E5] rounded-3xl text-[#9A9A9A]">
            <p className="text-sm">
              {viewTab === 'active' ? '暂无进行中的计划。去“匹配”一个吧！' : '暂无已结项目。脚踏实地，完成一个试试吧。'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const CheckSquare = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#D97757] mt-0.5 shrink-0">
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default PlansPage;
