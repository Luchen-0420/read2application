import axios from 'axios';

// Users can define VITE_API_BASE_URL in their frontend .env, otherwise defaults to 3001
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
  timeout: 60000, // Increased to 60s for AI generation
});

api.interceptors.request.use((config) => {
  const aiKey = localStorage.getItem('read2app_ai_key');
  const aiBaseUrl = localStorage.getItem('read2app_ai_baseUrl');
  const aiModel = localStorage.getItem('read2app_ai_model');
  
  if (aiKey) config.headers['x-ai-api-key'] = aiKey;
  if (aiBaseUrl) config.headers['x-ai-base-url'] = aiBaseUrl;
  if (aiModel) config.headers['x-ai-model'] = aiModel;
  
  return config;
});

export const fetchBooks = async () => {
  const response = await api.get('/books');
  return response.data;
};

export const fetchBookById = async (id: string) => {
  const response = await api.get(`/books/${id}`);
  return response.data;
};

export const searchDouban = async (query: string) => {
  const response = await api.get('/books/douban', { params: { q: query } });
  return response.data;
};

export const getDoubanBookDetail = async (url: string, title: string, author: string) => {
  const response = await api.get('/books/douban/detail', { params: { url, title, author } });
  return response.data;
};

export const createBook = async (data: any) => {
  const response = await api.post('/books', data);
  return response.data;
};

export const reclassifyBooks = async () => {
  const response = await api.post('/books/reclassify');
  return response.data;
};

export const createMethodology = async (bookId: string, data: any) => {
  const response = await api.post(`/books/${bookId}/methodologies`, data);
  return response.data;
};

export const deleteMethodology = async (id: string) => {
  const response = await api.delete(`/methodology/${id}`);
  return response.data;
};

export const matchMethodologies = async (query: string) => {
  const response = await api.get('/match', { params: { query } });
  return response.data;
};

export const extractMethodology = async (text: string) => {
  const response = await api.post('/ai/extract', { text });
  return response.data;
};

export const generatePlanInquiry = async (methodologies: any[]) => {
  const response = await api.post('/plan/inquiry', { methodologies });
  return response.data;
};

export const generatePlan = async (methodologies: any[], userContext: string, previousPlan?: any) => {
  const response = await api.post('/plan/generate', { methodologies, userContext, previousPlan });
  return response.data;
};

export const getPlans = async () => {
  const response = await api.get('/plans');
  return response.data;
};

export const createPlan = async (title: string, summary: string, content: any) => {
  const response = await api.post('/plans', { title, summary, content });
  return response.data;
};

export const deletePlan = async (id: string) => {
  const response = await api.delete(`/plans/${id}`);
  return response.data;
};

export default api;
