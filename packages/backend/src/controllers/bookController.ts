import { Request, Response } from 'express';
import { prisma } from '../index';

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await prisma.book.findMany({
      include: {
        methodologies: {
          include: {
            tags: {
              include: { tag: true }
            }
          }
        }
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book = await prisma.book.findUnique({
      where: { id: id as string },
      include: {
        methodologies: {
          include: {
            tags: {
              include: { tag: true }
            }
          }
        }
      }
    });
    
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch book' });
  }
};

import { classifyBook } from '../services/aiService';

export const createBook = async (req: Request, res: Response) => {
  try {
    const { title, author, coverUrl, summary, category: providedCategory } = req.body;
    
    // Auto-classify if category is not provided
    let category = providedCategory;
    if (!category) {
      category = await classifyBook(req, { title, author, summary });
    }

    const book = await prisma.book.create({
      data: {
        title,
        author,
        coverUrl,
        summary,
        category
      }
    });
    res.status(201).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create book' });
  }
};

export const reclassifyAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await prisma.book.findMany({
      where: { category: null }
    });

    const results = [];
    for (const book of books) {
      const category = await classifyBook(req, { 
        title: book.title, 
        author: book.author, 
        summary: book.summary || '' 
      });
      
      const updated = await prisma.book.update({
        where: { id: book.id },
        data: { category }
      });
      results.push(updated);
    }

    res.json({ message: `Successfully reclassified ${results.length} books`, count: results.length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to reclassify books' });
  }
};

export const deleteBooks = async (req: Request, res: Response) => {
  try {
    const { ids } = req.body;
    if (!ids || !Array.isArray(ids)) {
      return res.status(400).json({ error: 'IDs array is required' });
    }

    await prisma.book.deleteMany({
      where: {
        id: { in: ids }
      }
    });

    res.json({ message: `Successfully deleted ${ids.length} books` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete books' });
  }
};

import axios from 'axios';
import * as cheerio from 'cheerio';
import { getOpenAIClient } from '../services/aiService';

export const searchDouban = async (req: Request, res: Response) => {
  try {
    const q = req.query.q as string;
    if (!q) return res.status(400).json({ error: 'Missing search query' });

    const searchUrl = `https://search.douban.com/book/subject_search?search_text=${encodeURIComponent(q)}`;
    const { data } = await axios.get(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      timeout: 5000
    });

    const $ = cheerio.load(data);
    const scriptContent = $('script').filter((_, el) => $(el).text().includes('window.__DATA__')).text();
    
    let results: any[] = [];

    if (scriptContent) {
      const match = scriptContent.match(/window\.__DATA__ = (.*?);/);
      if (match && match[1]) {
        const parsed = JSON.parse(match[1]);
        if (parsed.items && Array.isArray(parsed.items)) {
          results = parsed.items
            .filter((item: any) => item.title && item.abstract)
            .map((item: any) => {
              // Extract author from abstract (usually "Author / Publisher / Date" or similar)
              const abstractParts = item.abstract.split('/').map((s: string) => s.trim());
              const author = abstractParts[0] || '';
              
              return {
                title: item.title,
                author: author,
                coverUrl: item.cover_url || '',
                summary: item.abstract || '',
                url: item.url || ''
              };
            });
        }
      }
    }

    res.json(results);
  } catch (error) {
    console.error('Douban search failed:', error);
    res.status(500).json({ error: 'Failed to search Douban book info' });
  }
};

export const getDoubanBookDetail = async (req: Request, res: Response) => {
  try {
    const url = req.query.url as string;
    const title = req.query.title as string;
    const author = req.query.author as string;

    if (!url) return res.status(400).json({ error: 'Missing book URL' });

    let summary = '';

    try {
      // 1. Try to scrape the detail page for the summary
      const { data } = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        },
        timeout: 5000
      });

      const $ = cheerio.load(data);
      // Douban book introduction is usually in #link-report .intro or .indent p
      summary = $('#link-report .intro p').first().text().trim() || 
                $('#link-report .indent p').first().text().trim() ||
                $('.indent #link-report .intro').text().trim();
      
      // Clean up common suffix
      summary = summary.replace(/\(展开全部\)$/g, '').trim();
    } catch (scrapeErr: any) {
      console.log("Douban detail scrape failed, will use AI fallback.", scrapeErr.message);
    }

    // 2. Fallback to AI if summary is empty or too short
    if (!summary || summary.length < 10) {
      try {
        const { openai, model } = getOpenAIClient(req);
        const prompt = `用户正在录入书籍《${title}》${author ? `，作者是 ${author}` : ''}。
由于无法直接获取详细简介，请根据你的知识库为这本书生成一段简明扼要的一句话简介（约 50 字以内）。
直接返回简介文字，不要包含其他内容。建议包含此书的核心价值或主要探讨的问题。`;
        
        const completion = await openai.chat.completions.create({
          model,
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7,
        });

        summary = completion.choices[0].message.content?.trim() || '';
      } catch (aiErr: any) {
        console.log("AI summary fallback failed.", aiErr.message);
      }
    }

    res.json({ summary });
  } catch (error) {
    console.error('Get Douban detail failed:', error);
    res.status(500).json({ error: 'Failed to get book summary' });
  }
};
