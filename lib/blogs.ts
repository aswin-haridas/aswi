import { readFile } from 'fs/promises';
import { join } from 'path';

export interface ContentBlock {
  component: 'heading1' | 'heading2' | 'heading3' | 'paragraph' | 'quote' | 'list' | 'image';
  content: string;
  props?: {
    alt?: string;
    caption?: string;
  };
}

export interface BlogPost {
  title: string;
  slug: string;
  publishedAt: string;
  summary: string;
  content: ContentBlock[];
  author: {
    name: string;
  };
  readingTimeMinutes: number;
  tags: string[];
  excerpt: string;
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const contentPath = join(process.cwd(), 'content', `${slug}.json`);
    const fileContent = await readFile(contentPath, 'utf-8');
    const blogData = JSON.parse(fileContent);
    
    // Calculate reading time (roughly 200 words per minute)
    const wordCount = blogData.content
      .filter((block: ContentBlock) => block.component === 'paragraph')
      .reduce((count: number, block: ContentBlock) => count + block.content.split(' ').length, 0);
    
    const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));
    
    return {
      ...blogData,
      author: { name: 'Aswin Haridas' },
      readingTimeMinutes,
      tags: ['philosophy', 'purpose', 'life'],
      excerpt: blogData.summary,
    };
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return null;
  }
}

export async function getBlogs(): Promise<BlogPost[]> {
  // For now, return just the one blog we have
  const lifeIsPurpose = await getBlogBySlug('life-is-purpose');
  return lifeIsPurpose ? [lifeIsPurpose] : [];
}