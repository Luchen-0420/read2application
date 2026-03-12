import React from 'react';
import { Book as BookIcon } from 'lucide-react';

interface BookCardProps {
  book: any;
  onClick?: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-white border border-[#F0F0F0] rounded-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col hover:shadow-[0_15px_35px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1 active:scale-[0.98] outline-none"
      style={{ aspectRatio: '1 / 1.4' }}
    >
      {/* Cover Section - Takes up fixed portion of the 1:1.4 card */}
      <div className="relative flex-1 bg-[#F8F8F7] overflow-hidden">
        {book.coverUrl ? (
          <img 
            src={book.coverUrl} 
            alt={book.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <BookIcon className="w-10 h-10 text-[#EBEBEB] group-hover:text-[#D97757] transition-colors" />
          </div>
        )}
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.01] transition-colors pointer-events-none" />
        
        {/* Simple Badge */}
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded text-[8px] font-bold text-[#9A9A9A] opacity-0 group-hover:opacity-100 transition-opacity">
          {book.methodologies?.length || 0}
        </div>
      </div>
      
      {/* Small Text Section at bottom */}
      <div className="px-3 py-2.5 bg-white border-t border-[#F5F5F3] shrink-0">
        <h3 className="font-bold text-[#333] group-hover:text-[#D97757] transition-colors line-clamp-1 text-[11px] mb-0.5 leading-tight">
          {book.title}
        </h3>
        <p className="text-[9px] text-[#A0A0A0] truncate font-medium">{book.author || '未知作者'}</p>
      </div>
    </div>
  );
};

export default BookCard;
