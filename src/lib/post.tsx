import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';



const postDir = path.join(process.cwd(), 'src/posts');


export const getAllPosts = () => {
    const fileNames = fs.readdirSync(postDir);
    return fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/,'');
        const filePath = path.join(postDir,fileName);
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        const {content, data} = matter(fileContent);
      


        return {
            slug,
            content,
            ...data,

        }
    })
}
