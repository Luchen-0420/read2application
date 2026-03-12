import { BookOpen, Check, Hash, Trash2 } from 'lucide-react';

interface MethodologyCardProps {
  methodology: any;
  selected?: boolean;
  onSelect?: () => void;
  onDelete?: (id: string) => void;
  selectable?: boolean;
}

const MethodologyCard: React.FC<MethodologyCardProps> = ({ 
  methodology, 
  selected = false, 
  onSelect,
  onDelete,
  selectable = true 
}) => {
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('确定要删除这条方法论吗？删除后相关的标签记录也将被移除。')) {
      onDelete?.(methodology.id);
    }
  };

  return (
    <div 
      onClick={selectable ? onSelect : undefined}
      className={`relative bg-white border rounded-xl p-6 transition-all group ${
        selectable ? 'cursor-pointer hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]' : ''
      } ${
        selected ? 'border-[#D97757] ring-1 ring-[#D97757]/20 bg-orange-50/10' : 'border-[#E5E5E5] hover:border-[#D97757]/50'
      }`}
    >
      {/* Select indicator */}
      {selectable && (
        <div className={`absolute top-6 right-6 w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
          selected ? 'bg-[#D97757] border-[#D97757]' : 'border-[#C2C2C2]'
        }`}>
          {selected && <Check size={12} className="text-white" />}
        </div>
      )}

      {/* Delete button (only if onDelete provided) */}
      {!selectable && onDelete && (
        <button 
          onClick={handleDelete}
          className="absolute top-6 right-6 p-2 text-[#CED4DA] hover:text-red-400 hover:bg-red-50 rounded-lg transition-all"
          title="删除方法论"
        >
          <Trash2 size={16} />
        </button>
      )}

      <div className="flex items-center gap-2 mb-3 pr-8">
        <h3 className="font-serif font-bold text-[#1A1A1A] text-lg">
          {methodology.name}
        </h3>
      </div>
      
      {methodology.book && (
        <div className="flex items-center gap-1.5 text-xs text-[#9A9A9A] mb-4">
          <BookOpen size={14} />
          <span>出自《{methodology.book.title}》</span>
        </div>
      )}

      <p className="text-[#6B6B6B] text-sm leading-relaxed mb-5">
        {methodology.description}
      </p>

      {/* Steps List */}
      <div className="space-y-3 mt-4 pt-4 border-t border-[#E5E5E5]/60">
        <h4 className="text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-2">核心步骤</h4>
        {methodology.steps?.map((step: any, idx: number) => (
          <div key={idx} className="flex gap-3 text-sm">
            <span className="shrink-0 w-5 h-5 rounded-full bg-gray-50 border border-[#E5E5E5] flex items-center justify-center text-xs text-[#6B6B6B] font-medium">
              {step.order || idx + 1}
            </span>
            <span className="text-[#2D2D2D] pt-0.5 leading-relaxed">{step.content}</span>
          </div>
        ))}
      </div>

      {methodology.tags && methodology.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6">
          {methodology.tags.map((t: any) => (
            <span key={t.tag.id} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-50 border border-[#E5E5E5] text-[11px] font-medium text-[#6B6B6B] rounded-md">
              <Hash size={10} className="text-[#9A9A9A]" /> {t.tag.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MethodologyCard;
