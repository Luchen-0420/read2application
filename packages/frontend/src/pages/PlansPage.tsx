import React, { useEffect, useState } from 'react';
import { getPlans, deletePlan } from '../api';
import { Loader2, Calendar, ChevronRight, Trash2, ArrowLeft } from 'lucide-react';

const PlansPage: React.FC = () => {
  const [plans, setPlans] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);

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
    return (
      <div className="max-w-2xl mx-auto space-y-8 animate-in slide-in-from-right duration-300 pb-20">
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={() => setSelectedPlan(null)}
            className="text-sm font-medium text-[#9A9A9A] hover:text-[#1A1A1A] flex items-center gap-1 transition-colors"
          >
             <ArrowLeft size={16} /> 返回列表
          </button>
          <button 
            onClick={(e) => handleDelete(e, selectedPlan.id)}
            className="text-sm font-medium text-red-400 hover:text-red-600 flex items-center gap-1 transition-colors"
          >
             <Trash2 size={16} /> 删除此计划
          </button>
        </div>
        
        <div className="text-center pb-6 border-b border-[#E5E5E5]">
          <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-4">{selectedPlan.title}</h2>
          <p className="text-[#6B6B6B] leading-relaxed">{selectedPlan.summary}</p>
          <p className="text-[12px] text-[#9A9A9A] mt-4">
            生成于：{new Date(selectedPlan.createdAt).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}
          </p>
        </div>

        <div className="space-y-8">
          {selectedPlan.content?.map((phase: any, idx: number) => (
            <div key={idx} className="relative pl-6 md:pl-8 border-l border-[#E5E5E5]">
              <div className="absolute w-3 h-3 bg-white border-2 border-[#D97757] rounded-full -left-[6.5px] top-1.5" />
              <h3 className="text-lg font-bold text-[#2D2D2D] mb-4">{phase.name}</h3>
              <ul className="space-y-3">
                {phase.actions?.map((action: string, jdx: number) => (
                  <li key={jdx} className="flex gap-3 text-[#6B6B6B] items-start bg-gray-50/50 p-3 rounded-lg border border-[#EAEAEC]">
                    <div className="mt-0.5 shrink-0"><CheckSquare /></div>
                    <span className="leading-relaxed">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto animate-in fade-in duration-500 pb-20">
      <div className="mb-10 flex items-center gap-3 border-b border-[#E5E5E5] pb-6">
        <div className="p-2 bg-gray-50 rounded-lg text-[#6B6B6B]">
          <Calendar size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-serif font-bold text-[#1A1A1A]">我的计划</h1>
          <p className="text-sm text-[#9A9A9A] mt-1">回顾那些为你量身定制的落地步骤，见证每一次成长。</p>
        </div>
      </div>

      <div className="space-y-4">
        {plans.map((plan) => (
          <button 
            key={plan.id}
            onClick={() => setSelectedPlan(plan)}
            className="w-full text-left bg-white border border-[#E5E5E5] p-5 rounded-xl hover:border-[#D97757]/30 hover:shadow-sm transition-all flex items-center justify-between group"
          >
            <div className="pr-4">
              <h3 className="font-bold text-lg text-[#1A1A1A] group-hover:text-[#D97757] transition-colors">{plan.title}</h3>
              <p className="text-sm text-[#6B6B6B] mt-1 line-clamp-2">{plan.summary}</p>
              <p className="text-xs text-[#9A9A9A] mt-3">{new Date(plan.createdAt).toLocaleDateString('zh-CN', { timeZone: 'Asia/Shanghai' })}</p>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={(e) => handleDelete(e, plan.id)}
                className="p-2 text-[#CED4DA] hover:text-red-400 hover:bg-red-50 rounded-lg transition-all"
                title="删除计划"
              >
                <Trash2 size={18} />
              </button>
              <div className="text-[#9A9A9A] group-hover:text-[#D97757] shrink-0">
                <ChevronRight size={20} />
              </div>
            </div>
          </button>
        ))}

        {plans.length === 0 && (
          <div className="text-center py-16 border border-dashed border-[#E5E5E5] rounded-xl text-[#9A9A9A]">
            你还没有生成过任何专属计划。去“匹配”试试吧！
          </div>
        )}
      </div>
    </div>
  );
};

const CheckSquare = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D97757]">
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default PlansPage;
