import React, { useEffect, useState } from 'react';
import { useAppStore } from '../store';
import { Loader2, BookOpen, Search, X, ArrowLeft, Filter } from 'lucide-react';
import MethodologyCard from '../components/MethodologyCard';
import BookCard from '../components/BookCard';
import { reclassifyBooks } from '../api';

const categories = ["全部", "理财", "自我成长", "心理学", "商业", "科技", "文学", "生活方式", "其他"];

const LibraryPage: React.FC = () => {
  const { books, isLoading, error, loadBooks } = useAppStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isReclassifying, setIsReclassifying] = useState(false);
  const itemsPerPage = 10; // 5 columns * 2 rows

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const handleReclassify = async () => {
    if (confirm('确认要让 AI 对存量书籍进行批量领域分类吗？这可能需要一点时间。')) {
      setIsReclassifying(true);
      try {
        await reclassifyBooks();
        await loadBooks();
      } catch (err) {
        console.error(err);
      } finally {
        setIsReclassifying(false);
      }
    }
  };

  const filteredBooks = books.filter(book => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = (
      book.title.toLowerCase().includes(q) ||
      (book.author && book.author.toLowerCase().includes(q)) ||
      book.methodologies?.some((m: any) => 
        m.name.toLowerCase().includes(q) || 
        m.tags?.some((t: any) => t.tag.name.toLowerCase().includes(q))
      )
    );
    
    const matchesCategory = selectedCategory === '全部' || (book.category === selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBooks = filteredBooks.slice(startIndex, startIndex + itemsPerPage);

  const uncategorizedCount = books.filter(b => !b.category).length;

  return (
    <div className="w-full animate-in fade-in duration-500 pb-20">
      {/* Header with Search and Stats */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 shrink-0 pt-4">
        <div className="flex items-start gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold text-[#1A1A1A] tracking-tight">我的方法库</h1>
            <p className="text-[#9A9A9A] mt-1.5 text-sm font-medium tracking-wide">
              共收录 {books.length} 本书籍
              {uncategorizedCount > 0 && (
                <span className="ml-2 text-[#D97757]/60">({uncategorizedCount} 本待分类)</span>
              )}
            </p>
          </div>
          {uncategorizedCount > 0 && (
            <button 
              onClick={handleReclassify}
              disabled={isReclassifying}
              className="mt-1 px-3 py-1 bg-[#F9F9F8] border border-[#E5E5E5] rounded-lg text-[10px] font-bold text-[#6B6B6B] hover:text-[#D97757] hover:border-[#D97757]/30 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {isReclassifying ? <Loader2 size={12} className="animate-spin" /> : <Filter size={12} />}
              AI 批量分类
            </button>
          )}
        </div>
        
        <div className="relative group w-full md:w-80">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#ADB5BD] group-focus-within:text-[#D97757] transition-colors">
            <Search size={18} />
          </div>
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索书名、作者或标签..." 
            className="w-full bg-[#F5F5F3] border border-transparent rounded-2xl py-3 pl-12 pr-4 text-sm outline-none focus:ring-4 focus:ring-[#D97757]/10 focus:bg-white focus:border-[#D97757]/20 transition-all placeholder:text-[#ADB5BD] text-[#2D2D2D]" 
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#ADB5BD] hover:text-[#D97757] transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#F0F0F0]/50 overflow-x-auto no-scrollbar">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-[12px] font-bold tracking-tight transition-all whitespace-nowrap ${
              selectedCategory === cat 
                ? 'bg-[#1A1A1A] text-white shadow-lg shadow-black/5 -translate-y-0.5' 
                : 'bg-white text-[#9A9A9A] border border-[#F0F0F0] hover:border-[#D97757]/30 hover:text-[#D97757]'
            }`}
          >
            {cat}
            {cat === '全部' ? '' : ` (${books.filter(b => b.category === cat).length})`}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-32">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
               <Loader2 className="w-10 h-10 text-[#D97757] animate-spin" />
               <div className="absolute inset-0 bg-[#D97757]/10 rounded-full blur-xl" />
            </div>
            <p className="text-xs text-[#9A9A9A] font-bold tracking-[0.2em] uppercase">同步中</p>
          </div>
        </div>
      ) : error ? (
        <div className="p-5 bg-red-50 text-red-600 rounded-2xl text-sm font-medium border border-red-100/50 shadow-sm animate-in slide-in-from-top-4">
          {error}
        </div>
      ) : (
        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-12">
            {paginatedBooks.map(book => (
              <div key={book.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both" style={{ animationDelay: `${Math.min(paginatedBooks.indexOf(book) * 50, 500)}ms` }}>
                <BookCard 
                  book={book} 
                  onClick={() => setSelectedBook(book)} 
                />
              </div>
            ))}
          </div>
          
          {filteredBooks.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 bg-[#F9F9F8] rounded-full flex items-center justify-center mb-4">
                <Filter size={24} className="text-[#CED4DA]" />
              </div>
              <p className="text-[#9A9A9A] text-sm font-medium">没发现匹配的数据，换个词试试？</p>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 py-6 border-t border-[#F0F0F0] mt-4">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                className="p-2 rounded-xl border border-[#E5E5E5] text-[#6B6B6B] disabled:opacity-30 hover:bg-[#F9F9F8] transition-all"
              >
                <ArrowLeft size={18} />
              </button>
              
              <div className="flex items-center gap-1 px-4">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`min-w-[36px] h-9 rounded-xl text-sm font-bold transition-all ${
                      currentPage === page 
                        ? 'bg-[#1A1A1A] text-white shadow-md' 
                        : 'text-[#9A9A9A] hover:bg-[#F9F9F8] hover:text-[#2D2D2D]'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                className="p-2 rounded-xl border border-[#E5E5E5] text-[#6B6B6B] disabled:opacity-30 hover:bg-[#F9F9F8] transition-all"
              >
                <ArrowLeft size={18} className="rotate-180" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Side Drawer Detail View */}
      {selectedBook && (
        <>
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-[60] transition-opacity animate-in fade-in duration-300" 
            onClick={() => setSelectedBook(null)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xl bg-white shadow-2xl z-[70] flex flex-col animate-in slide-in-from-right duration-500 ease-out">
            {/* Drawer Header */}
            <div className="p-4 border-b border-[#F0F0F0] flex items-center justify-between bg-white sticky top-0 z-10">
              <button 
                onClick={() => setSelectedBook(null)}
                className="p-2 hover:bg-[#F9F9F8] rounded-full text-[#6B6B6B] transition-colors"
                title="关闭"
              >
                <ArrowLeft size={20} />
              </button>
              <span className="text-sm font-bold text-[#1A1A1A]">书籍详情</span>
              <div className="w-10" /> {/* Spacer */}
            </div>

            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              <div className="flex gap-8 mb-12">
                <div className="w-36 h-48 bg-[#F9F9F8] rounded-2xl overflow-hidden border border-[#E5E5E5] shadow-xl shrink-0 translate-y-[-20px]">
                   {selectedBook.coverUrl ? (
                      <img src={selectedBook.coverUrl} alt={selectedBook.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        < BookOpen size={48} className="text-[#CED4DA]" />
                      </div>
                    )}
                </div>
                <div className="flex flex-col justify-end pb-4 min-w-0">
                  <h2 className="text-2xl font-serif font-bold text-[#1A1A1A] leading-tight mb-2 break-words">{selectedBook.title}</h2>
                  <p className="text-[#6B6B6B] font-medium truncate">{selectedBook.author || '未知作者'}</p>
                </div>
              </div>

              <div className="mb-12">
                <h4 className="text-[10px] font-bold text-[#ADB5BD] uppercase tracking-[0.2em] mb-4">内容简介</h4>
                <div className="relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#D97757] rounded-full opacity-30" />
                  <p className="text-[#495057] leading-relaxed text-sm italic font-medium">
                    {selectedBook.summary || '暂无详细简介...'}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-bold text-[#ADB5BD] uppercase tracking-[0.2em] mb-6 flex items-center justify-between">
                  <span>归纳的方法论 ({selectedBook.methodologies?.length || 0})</span>
                </h4>
                <div className="space-y-6">
                  {selectedBook.methodologies?.map((method: any) => (
                    <MethodologyCard key={method.id} methodology={{ ...method, book: undefined }} selectable={false} />
                  ))}
                  {(!selectedBook.methodologies || selectedBook.methodologies.length === 0) && (
                    <div className="text-center py-12 bg-[#F9F9F8] rounded-3xl border border-dashed border-[#E5E5E5]">
                      <p className="text-xs text-[#9A9A9A] font-medium">目前还没有归纳的方法论，快去添加吧</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LibraryPage;
