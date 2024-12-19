import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

interface Post {
    slug: string;
    content: string;
    title: string;
    date: string;
    [key: string]: any;  // Allow additional fields from the frontmatter
}

const postDir = path.join(process.cwd(), 'src/posts');

// Async function to get all posts
export const getAllPosts = async (): Promise<Post[]> => {
    try {
        const fileNames = await fs.readdir(postDir);  // Asynchronously read directory content
        const posts = await Promise.all(
            fileNames.map(async (fileName) => {
                // Check if the file is a markdown file
                if (!fileName.endsWith('.md')) return null;

                const slug = fileName.replace(/\.md$/, '');  // Remove the file extension
                const filePath = path.join(postDir, fileName);
                const fileContent = await fs.readFile(filePath, 'utf-8');  // Read file content asynchronously

                const { content, data } = matter(fileContent);  // Parse the frontmatter and content

                return {
                    slug,
                    content,
                    ...data,
                };
            })
        );

        return posts.filter(Boolean) as Post[];  // Filter out any null values, only return valid posts
    } catch (error) {
        console.error('Error reading posts:', error);
        return [];  // Return an empty array if an error occurs
    }
};
