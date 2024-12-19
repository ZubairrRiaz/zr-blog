import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

interface Post {
  slug: string;
  content: string;
  [key: string]: any; // Allow additional fields from the frontmatter
}

const postDir = path.join(process.cwd(), 'src/posts');

export const getAllPosts = (): Post[] => {
    const fileNames = fs.readdirSync(postDir);
    return fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, ''); // Remove the `.md` extension to get the slug
        const filePath = path.join(postDir, fileName);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        
        const { content, data } = matter(fileContent); // `data` is the frontmatter
        
        return {
            slug,
            content,
            ...data,
        };
    });
};
