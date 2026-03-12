import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Book, PlusCircle, Search, Settings, Calendar } from 'lucide-react';

// Pages
import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
import AddPage from './pages/AddPage';
import MatchResultPage from './pages/MatchResultPage';
import SettingsPage from './pages/SettingsPage';
import PlansPage from './pages/PlansPage';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="w-full border-b border-[#E5E5E5] bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[960px] mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="font-serif font-bold text-xl tracking-tight text-[#2D2D2D]">
            Read2Application
          </Link>
          <nav className="flex gap-4 md:gap-6 text-sm font-medium text-[#6B6B6B]">
            <Link to="/" className="hover:text-[#2D2D2D] flex items-center gap-1 transition-colors">
              <Search size={16} /> 匹配
            </Link>
            <Link to="/library" className="hover:text-[#2D2D2D] flex items-center gap-1 transition-colors">
              <Book size={16} /> 库
            </Link>
            <Link to="/add" className="hover:text-[#2D2D2D] flex items-center gap-1 transition-colors">
              <PlusCircle size={16} /> 录入
            </Link>
            <Link to="/plans" className="hover:text-[#2D2D2D] flex items-center gap-1 transition-colors">
              <Calendar size={16} /> 计划
            </Link>
            <Link to="/settings" className="hover:text-[#2D2D2D] flex items-center gap-1 transition-colors">
              <Settings size={16} /> 设置
            </Link>
          </nav>
        </div>
      </header>
      
      <main className="w-full max-w-[960px] mx-auto px-6 py-10 flex-1">
        {children}
      </main>
      
      <footer className="w-full max-w-[960px] mx-auto px-6 py-8 text-center text-xs text-[#9A9A9A] border-t border-[#E5E5E5] mt-12">
        A minimalist tool to turn reading into practice.
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/match" element={<MatchResultPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/plans" element={<PlansPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
