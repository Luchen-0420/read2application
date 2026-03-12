import { create } from 'zustand';
import { fetchBooks } from '../api';

interface AppState {
  books: any[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  loadBooks: () => Promise<void>;
  setSearchQuery: (query: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  books: [],
  isLoading: false,
  error: null,
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  loadBooks: async () => {
    set({ isLoading: true, error: null });
    try {
      const books = await fetchBooks();
      set({ books, isLoading: false });
    } catch (err: any) {
      set({ error: err.message || 'Failed to fetch books', isLoading: false });
    }
  }
}));
