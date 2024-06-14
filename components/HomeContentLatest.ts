import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostMetadata } from '@/components/PostMetadata';

export const getLatestPostContent = (): PostMetadata => {
  const folder = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter(file => file.endsWith('.md'));

  // Sort files by modification time, latest first
  const sortedPosts = markdownPosts.sort((a, b) => {
    const aStat = fs.statSync(path.join(folder, a));
    const bStat = fs.statSync(path.join(folder, b));
    return bStat.mtime.getTime() - aStat.mtime.getTime();
  });

  // Get the latest post
  const latestFile = sortedPosts[0];
  const fileContents = fs.readFileSync(path.join(folder, latestFile), 'utf-8');
  const { data, content } = matter(fileContents);

  return {
    title: data.title,
    date: data.date,
    subtitle: data.subtitle,
    slug: latestFile.replace('.md', ''),
    content,
  };
};
